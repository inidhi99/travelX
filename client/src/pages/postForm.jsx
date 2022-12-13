import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
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

// Image files goes here
const itemData = [
  {
    img: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Breakfast',
  },
];

const PostForm = () => {
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
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>

      {/* Input Form */}
      <FormControl sx={{ width: '25ch' }}>
        <TextField
          id="standard-basic"
          label="Add Description"
          variant="standard"
        />

        <TextField
          id="standard-basic"
          label="Add Location"
          variant="standard"
        />
      </FormControl>
    </>
  );
};

export default PostForm;

// title countery city body
