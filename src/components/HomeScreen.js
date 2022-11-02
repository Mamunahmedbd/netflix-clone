import React from "react";
import requests from "../Requests";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import Row from "./Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />
      <Row
        title="Treding Now"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horrar Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentories" fetchUrl={requests.fetchDocumentories} />
    </div>
  );
}

export default HomeScreen;
