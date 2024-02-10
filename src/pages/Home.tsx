import React from "react"; // Import React here
import ReactDOM from "react-dom"; // Import ReactDOM here
import Header from "../components/Header";
import Divider from "@mui/material/Divider";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";





const Home = () => {
  return (
    <>
      <Header />
      <Divider />
      <YMaps>
        <Map
          defaultState={{
            center: [55.75, 37.57],
            zoom: 9,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark defaultGeometry={[55.75, 37.57]} />
        </Map>
      </YMaps>
    </>
  );
};

export default Home;
