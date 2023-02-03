import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import cardImage from "../assets/2213424.webp"

const handleLink = (item) => {
    window.location.href = item;
  };

const CardComponent = ({ img, title, cardWidth, imgWidth, imgHeight, link, margin }) => {
  return (
    <Card sx={{ maxWidth: cardWidth, cursor: "pointer", margin: margin }}>
      <CardActionArea onClick={() => handleLink(link)}>
        <CardMedia
          image={img !== ""? img : cardImage}
          title={title}
          sx={{ height: imgHeight, width: imgWidth }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography>{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
