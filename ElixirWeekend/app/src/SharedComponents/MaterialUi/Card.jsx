import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "../../Css/ProductsCardView.css"
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
    display: "inline-block"
  },
});

export default function ImgMediaCard  (props) {
  const classes = useStyles();
  console.log(props.description)

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.alt}
          height="140"
          image={props.image}
          title= {props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.heading}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions class="card_footer">
        <Button size="small" class="btn_green">
          Dodaj u korpu
        </Button>
        <Typography gutterBottom variant="h5" component="h5" class="price">
            {props.price}
          </Typography>
      </CardActions>
    </Card>
  );
}
