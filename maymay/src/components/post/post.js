import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { StyledEngineProvider } from '@mui/material/styles';
import CustomizedSlider from '../slider/hearSlider';
import { Box, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(90deg)' : 'rotate(-90deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MiniPost(props) {
    const { post } = props;
    const { sx } = props;

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const a = {
        ...sx,
        display: 'flex',
        alignItems: 'center', justifyContent: 'space-around'
    };

  return (

    <Card sx={a}>
          <StyledEngineProvider injectFirst>
        </StyledEngineProvider>
      <hearSlider />

      <CardMedia
        sx={{ height: '94%', aspectRatio: 1, borderRadius: 1, marginLeft: 1, boxShadow: '7px 10px 20px 0 rgba( 0, 0, 0, .5)'}}
        image={post.image}
      />
      <CardContent sx={{flex:1, padding: 4}}>
        <Box sx={{ justifyContent: 'space-around'}}>
        <Avatar  sx={{ width:  100, height: 100 }} aria-label="avatar"
            alt={post.author}
            src="/static/images/avatar/1.jpg">
          </Avatar>

          <Box>
          <Typography gutterBottom variant="h5" component="div">
            {post.author}
          </Typography>

          <Typography variant="h6">
            {post.title}
          </Typography>

          <Typography  >
            {post.date}
          </Typography>
          </Box>
        </Box>
          
         
      
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
        <CardActions>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
          <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <CustomizedSlider sx={{width: '100%'}}/>
      </CardContent>

    </Card>
  );
}