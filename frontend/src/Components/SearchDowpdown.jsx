
import React, { useState, useMemo } from "react";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  ListSubheader,
  TextField,
  InputAdornment
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const containsText = (text, searchText) =>
  text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;


const SearchDropDown = (props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const [searchText, setSearchText] = useState("");
  const displayedOptions = useMemo(
    () => props.arr.filter((option) => containsText(option, searchText)),
    [searchText]
  );

  const handleChange = (e) => {
    props.setInput(e.target.value)
    setSearchText(e.target.value)
  }

  return (
    <Box sx={{  }}>
      <FormControl fullWidth >
        <InputLabel id="search-select-label">Options</InputLabel>
        <Select
          // Disables auto focus on MenuItems and allows TextField to be in focus
          MenuProps={{paper: {maxHeight: '100px'} }}
          labelId="search-select-label"
          id="search-select"
          value={selectedOption}
          label="Options"
          onChange={(e) => setSelectedOption(e.target.value)}
          onClose={() => setSearchText("")}
          // This prevents rendering empty string in Select's value
          // if search text would exclude currently selected option.
          renderValue={() => selectedOption}
        >
          {/* TextField is put into ListSubheader so that it doesn't
              act as a selectable item in the menu
              i.e. we can click the TextField without triggering any selection.*/}
          <ListSubheader >
            <TextField
              size="small"
              // Autofocus on textfield
              autoFocus
              placeholder="Type to search..."
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key !== "Escape") {
                  // Prevents autoselecting item while typing (default Select behaviour)
                  e.stopPropagation();
                }
              }}
            />
          </ListSubheader>
          {displayedOptions.map((option, i) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}


export default SearchDropDown