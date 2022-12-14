import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';
import axios from 'axios';
import Images from '../components/images/Images';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const PostForm = () => {
  // Unsplash image API
  const [images, setImages] = useState([]);
  const fetchAPI = async () => {
    const response = await axios.get(
      'https://api.unsplash.com/search/photos?query=travel&client_id=Ow4cBXa2ga24IZ6IaLXjoz7xTG35jsPyRhxzkl8xJ7E'
    );

    const data = await response.data;
    setImages(data);
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  console.log(images);

  // textinput  state  variables

  const [title, setTitle] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [body, setBody] = useState('');

  // this is breaking
  // const [addPost, { error }] = useMutation(ADD_POST);

  // form submit function
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addPost({
        variables: { title, country, city, body },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
    alert('Your post has been submitted');
    setTitle('');
    setCountry('');
    setCity('');
    setBody('');
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <ImageList
          sx={{
            width: 500,
            height: 500,
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2,
          }}
        >
          <ImageListItem>
            <Button
              className="clickBtn"
              onClick={fetchAPI}
              variant="contained"
              size="small"
            >
              Click
            </Button>
            <div className="photos">
              {images.length > 0 && <Images images={images} />}
            </div>
          </ImageListItem>
        </ImageList>

        {/* Input Form */}
        <FormControl
          sx={{
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextField
            input={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter A Title..."
            id="standard-basic"
            variant="standard"
          />
          <TextField
            input={country}
            name="country"
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            placeholder="Provide A Country"
            id="standard-basic"
            variant="standard"
          />
          <TextField
            input={city}
            name="city"
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Provide A City"
            id="standard-basic"
            variant="standard"
          />
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': {
                m: 1,
                width: '30ch',
              },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              input={body}
              name="body"
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Enter a post"
              sx={{ p: 0.5 }}
              id="outlined-multiline-static"
              multiline
              rows={4}
            />
          </Box>
        </FormControl>
        <Button
          className="submitBtn"
          variant="contained"
          size="small"
          onClick={handleFormSubmit}
        >
          Submit
        </Button>
      </Container>
    </>
  );
};

export default PostForm;
