import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Images from '../components/images/Images';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

// Upload photo
// add description
// add location - country city
// upload image
// date
// comments
// reactions

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

  // const [data, setData] = useState();
  // const [print, setPrint] = useState(false);
  // const getData = (e) => {
  //   setData(e.target.value);
  //   console.log(e.target.value);
  // };
  return (
    <>
      <CssBaseline />
      <Grid container>
        {/* Image list  */}
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
            <button className="btn btn-primary btn-sm" onClick={fetchAPI}>
              Click
            </button>
            <div className="photos">
              {images.length > 0 && <Images images={images} />}
            </div>
          </ImageListItem>
        </ImageList>
      </Grid>

      {/* Input Form */}
      <FormControl sx={{ width: '25ch' }}>
        <TextField
          value={data}
          type="text"
          onChange={getData}
          id="standard-basic"
          label="Title"
          variant="standard"
        />
        <TextField id="standard-basic" label="Country" variant="standard" />
        <TextField id="standard-basic" label="City" variant="standard" />
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
            sx={{ p: 0.5 }}
            id="outlined-multiline-static"
            label="Body"
            multiline
            rows={4}
          />
        </Box>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setPrint(true)}
        >
          Submit
        </button>
      </FormControl>
    </>
  );
};

export default PostForm;
