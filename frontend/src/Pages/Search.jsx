import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import doctor from "../assets/doctors";
import CardComponent from "../Components/CardComponent";
import docMale from "../assets/doc_male.jpg";
import docFemale from "../assets/doc_female.avif";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Stack sx={{ margin: "1rem 3rem" }}>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Stack></Stack>
        <Stack direction="row">
          <TextField
            id="search-bar"
            className="text"
            label="Search a Doctor"
            variant="outlined"
            placeholder="Search..."
            size="small"
            value={searchQuery}
            onChange={handleChange}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: "blue" }} />
          </IconButton>
        </Stack>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          margin: "2rem",
        }}
      >
        {searchQuery !== ""
          ? doctor.filter(doc=>doc.name.toLowerCase().includes(searchQuery.toLowerCase())).map((doc, idx) => {
              return (
                <CardComponent
                  key={idx}
                  title={doc.name}
                  img={doc.gender === "Male" ? docMale : docFemale}
                  cardWidth="200px"
                  imgWidth="200px"
                  imgHeight="200px"
                  link={"/search"}
                  margin="1rem"
                />
              );
            })
          : doctor.map((doc, idx) => {
              return (
                <CardComponent
                  key={idx}
                  title={doc.name}
                  img={doc.gender === "Male" ? docMale : docFemale}
                  cardWidth="200px"
                  imgWidth="200px"
                  imgHeight="200px"
                  link={"/search"}
                  margin="1rem"
                />
              );
            })}
      </Box>
    </Stack>
  );
};

export default Search;
