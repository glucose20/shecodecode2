import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MediaControlCard from '@mui/material/Card'
import ComplexGrid from '../ComplexGrid';
import Yourself from '../post/Yourself'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import Box from '@mui/material/Box';
import QuiltedImageList from './imageList';
import MiniPost from '../post/post';


const sections = [
  // { title: 'Travel', url: '#' , color: '#f6ffb1'},
  { title: 'Khánh An (Health)', url: '#' , color: '#615c62', textcolor: '#f6bfc6'},
  { title: 'Uyên Thư (Career)', url: '#' , color: '#f6bfc6', textcolor: '#000000'},
  { title: 'Du Nhiên (Travel)', url: '#', color: '#615c62', textcolor: '#f6bfc6' },
  // { title: 'Health', url: '#' , color: '#f6ffb1'},
  { title: 'Mẫn Nhi (Beauty)', url: '#' , color: '#f6bfc6', textcolor: '#000000'},
  { title: 'Tuệ Lâm (Funny)', url: '#' , color: '#615c62', textcolor: '#f6bfc6'},
  { title: 'Mỹ Tâm (Soul)', url: '#' , color: '#f6bfc6', textcolor: '#000000'},
  { title: 'Huyền Vi (Challenge)', url: '#' , color: '#615c62', textcolor: '#f6bfc6'},
  // { title: 'Style', url: '#' , color: '#f6ffb1'},

];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    author: 'Sou',
    date: '12-06-2023'

  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    author: 'Key',
    date: '23-12-2023'

  },

  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    author: 'Key',
    date: '23-12-2023'

  },

  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    author: 'Key',
    date: '23-12-2023'

  },

  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    author: 'Key',
    date: '23-12-2023'

  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({  
  typography: {
    fontFamily: 
      '"Yellowtail", cursive',
  },
});

export default function Blog() {
  return (
    // <ThemeProvider theme={defaultTheme}>
    <>
      <CssBaseline />
     
      <Box sx={{  
                  bgcolor: '#cfe8fc',
                  backgroundRepeat: "no-repeat",
                  position: 'fixed', 
                  zIndex: '500',
                  top: '0', 
                  bottom: '0',
                  right: '0', 
                  left: '0'}}> 
      <main>
      <Box sx={{
        maxHeight: '100vh', overflow: 'auto'
      }}>

        <Container maxWidth="lg">
          <Header title="Her game, her healing" sections={sections} />  
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6}>
                <Yourself sx={{
                  width: '100%'
                }}/>
              </Grid>

              <Grid item xs={6} sm={6} sx={{
                height: '70vw',
                // overflowY: 'hidden',
                overflow: 'auto',
              }}>
                <Grid container spacing={3}>
                  {featuredPosts.map((post) => (
                    <Grid item xs={12} sm={12} > 
                    <MiniPost  sx = {{width: '100%', height: 300}} key={post.title} post={post} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid> 

            <QuiltedImageList />


            <MainFeaturedPost post={mainFeaturedPost} />
            

            <Grid container spacing={5} sx={{ mt: 10 }}>
              <Main title="From the firehose" posts={posts} />
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid >

            <ComplexGrid sx={{ mt: 10 }}/>
          </Container>
          <Footer
            title="Footer"
            description="Something here to give the footer a purpose!"
            />
      </Box>
      </main>

      </Box>
      </>
    // </ThemeProvider>
  );
}
