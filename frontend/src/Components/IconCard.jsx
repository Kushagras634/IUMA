import React from "react";
import { Typography, Card, CardContent, CardMedia, CardActionArea } from "@mui/material";

const IconCard = ({ img, title, link = null, subTitle = false }) => {
  const cardContent = (
    <CardContent>
      <Typography variant="h6" color="initial" textAlign="center">
        {title}
      </Typography>
      {subTitle && (
        <Typography variant="subtitle2" color="initial" textAlign="center">
          {subTitle}
        </Typography>
      )}
    </CardContent>
  );

  if (link) {
    return (
      <Card
        sx={{
          width: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: ".5rem",
        }}
      >
        <CardActionArea>
          <div
            style={{
              backgroundColor: "#BEFBF7",
              borderRadius: "50%",
              width: "100px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "2rem auto",
            }}
          >
            <CardMedia
              title="Card Image"
              image={img}
              sx={{
                height: "60px",
                width: "60px",
              }}
            />
          </div>
          {cardContent}
        </CardActionArea>
      </Card>
    );
  } else {
    return (
      <Card
        sx={{
          width: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: ".5rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#BEFBF7",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "2rem auto",
          }}
        >
          <CardMedia
            title="Card Image"
            image={img}
            sx={{
              height: "60px",
              width: "60px",
            }}
          />
        </div>
        {cardContent}
      </Card>
    );
  }
};

export default IconCard;
