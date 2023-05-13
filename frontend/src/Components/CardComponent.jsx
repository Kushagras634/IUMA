import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import cardImage from "../assets/2213424.webp";
import { useNavigate } from "react-router-dom";

const CardComponent = ({
  img,
  title,
  cardWidth,
  imgWidth,
  imgHeight,
  link,
  margin,
  docId,
}) => {
  const navigate = useNavigate();

  const handleLink = () => {
    if (link!="#") {
      navigate(link, { state: { id: docId } });
    }
  };

  return (
    <Card sx={{ maxWidth: cardWidth, cursor: "pointer", margin: margin }}>
      <CardActionArea onClick={handleLink}>
        <CardMedia
          image={img !== "" ? img : cardImage}
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
