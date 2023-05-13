import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";
import doctor from "../assets/doctors";
import CardComponent from "../Components/CardComponent";
import docMale from "../assets/doc_male.jpg";
import docFemale from "../assets/doc_female.avif";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Import uuid library
import SearchDropDown from "../Components/SearchDowpdown";
import HeaderComponent from "../Components/HeaderComponent";
import { useLocation } from "react-router-dom";

const doctorSpecialties = [
  "Cardiology",
  "Dermatology",
  "Endocrinology",
  "Gastroenterology",
  "Hematology",
  "Neurology",
  "Obstetrics and Gynecology",
  "Oncology",
  "Orthopedics",
  "Pediatrics",
  "Psychiatry",
  "Radiology",
  "Urology",
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchSpeciality, setSearchSpeciality] = useState("");
  const [cities, setCities] = useState([]);
  const [doctors, setDoctors] = useState([])
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      // setSearchQuery(location.state);
      handleAppointmentBooking("location");
    }
  }, []);

  useEffect(() => {
    const url = "http://localhost:8000/miscellaneous/city";
    if (searchCity !== "") {
      axios
        .post(url, { city: searchCity })
        .then((res) => {
          // console.log(res.data);

          setCities(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [searchCity, setSearchCity]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAppointmentBooking = async (e) => {
    if (e !== "location") {
      e.preventDefault();
    }

    let url = "http://localhost:8000/appointment/searchDoc";
    console.log(location.state);
    const { data } = await axios.post(url, e==="location"?location.state:searchQuery);
    console.log(data);
    // loginUser(data);
    setDoctors(data);
    // if (data.message === "Patient not found") {
    //   showToast("Email do not exists, Please SignUp", "#F84F31", "white", 2000);
    // }
  };

  return (
    <>
      <HeaderComponent />
      <Stack sx={{ margin: "1rem 3rem" }}>
        <Stack
          sx={{
            textAlign: "center",
            borderBottom: "1px solid grey",
            padding: "2rem 0",
          }}
        >
          <Typography variant="h4" color="initial" sx={{ margin: "1rem" }}>
            Search Doctor, Make an Appointment
          </Typography>
          <Typography variant="subtitle1" color="initial">
            Discover the best doctors, clinic and hospital the city nearest to
            you
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ padding: "2rem 0" }}>
          <Stack direction="column" sx={{ width: "20%" }}>
            <Box>
              <Typography variant="overline" color="initial">
                Search
              </Typography>
              <Stack direction="row">
                <TextField
                  id="search-bar"
                  className="text"
                  label="Search a Doctor"
                  variant="outlined"
                  size="small"
                  value={searchQuery}
                  onChange={handleChange}
                />
                <IconButton
                  type="submit"
                  aria-label="search"
                  sx={{ backgroundColor: "black", borderRadius: 0 }}
                >
                  <SearchIcon style={{ fill: "white" }} />
                </IconButton>
              </Stack>
            </Box>

            <Box sx={{ marginTop: "1rem" }}>
              <Typography variant="overline" color="initial">
                City
              </Typography>
              <SearchDropDown setInput={setSearchCity} arr={cities} />
            </Box>
            <Box sx={{ marginTop: "1rem" }}>
              <Typography variant="overline" color="initial">
                Speciality
              </Typography>
              <SearchDropDown
                setInput={setSearchSpeciality}
                arr={doctorSpecialties}
              />
            </Box>
          </Stack>

          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              margin: "2rem",
            }}
          >
            {/* {1 == 0
              ? doctor
                  .filter((doc) =>
                    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((doc, idx) => {
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
                      margin=".4rem"
                    />
                  );
                })} */}

                {
                  doctors.map((doc, id)=>(
                    <CardComponent
                      key={id}
                      docId = {doc._id}
                      title={doc.fullName || doc.name}
                      img={doc.gender === "Male" ? docMale : docFemale}
                      cardWidth="200px"
                      imgWidth="200px"
                      imgHeight="200px"
                      link={"/bookAppointment"}
                      margin=".4rem"
                    />
                  ))
                }
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Search;
