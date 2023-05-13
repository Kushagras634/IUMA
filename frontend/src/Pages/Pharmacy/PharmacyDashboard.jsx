import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import listPlugin from "@fullcalendar/list";
import PatientsCards from "../../Components/PatientsCards";
import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";

const PharmacyDashboard = () => {
  return (
    <>
      <div className="conatiner my-2 w-full">
        <Stack className="bg-white p-5 ml-56 mr-1">
          <div>
            <Typography variant="h4">Pharmacy name</Typography>
            <Typography variant="subtitle1">Always cares for customers</Typography>
          </div>
        </Stack>
        <Stack className="bg-white p-5 ml-56 mr-1">
          <div className="flex">
            {/* ----------------------------- Image of Licence here -------------------------- */}
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image=""
                    alt="Licence"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Licence
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
          </div><br />
          <Typography variant="body2">ex Excepteur amet culpa sunt aliquip proident in proident commodo id aliquip amet eiusmod fugiat eu aliqua. tempor sed lorem cillum eiusmod et magna dolor minim anim sint laborum dolor adipiscing sit officia sint consequat consequat. minim consectetur sit consectetur cillum dolor ad dolore deserunt ex sit ad officia cupidatat reprehenderit dolore reprehenderit. aute consequat est et aute veniam qui laborum ad enim ut amet tempor nulla Duis ullamco. commodo lorem dolore elit nostrud irure fugiat exercitation nisi do tempor ipsum lorem proident anim Duis.
et tempor culpa dolore consequat magna officia exercitation lorem consequat non exercitation esse proident ullamco aliquip qui. deserunt sunt incididunt aliquip occaecat officia laboris velit et id ad nulla ullamco Duis qui voluptate eiusmod adipiscing adipiscing. amet irure eu dolor ullamco reprehenderit ullamco ex adipiscing aliquip sit exercitation ipsum voluptate Excepteur mollit sint consectetur anim. officia reprehenderit deserunt nostrud eu deserunt nulla non velit voluptate ipsum qui occaecat in id officia elit velit. enim minim consequat eu labore sunt qui nostrud esse aliquip adipiscing exercitation amet do fugiat nisi.
qui minim commodo Excepteur minim esse incididunt qui pariatur elit occaecat qui culpa deserunt tempor est exercitation. pariatur nostrud non in ipsum ullamco sit adipiscing nostrud magna commodo qui sunt voluptate sunt sunt sed. amet enim laborum irure nulla id sed non sit consectetur qui cillum laboris anim occaecat do. aliqua fugiat deserunt voluptate nisi elit esse irure et aliqua exercitation sed velit laboris ipsum irure. mollit est aute aliqua culpa sit ipsum amet aliqua mollit non ullamco ullamco incididunt aute amet ut. et magna incididunt deserunt dolor commodo minim aliqua quis ullamco anim est aute cillum deserunt proident minim esse laboris. laborum ullamco velit aliqua nulla id reprehenderit nulla amet magna minim eu irure et sint nisi velit.</Typography>
        </Stack>
      </div>
    </>
  );
};

export default PharmacyDashboard;
