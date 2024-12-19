import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option";
import { Container, Row, Col } from "react-bootstrap";

import { FaArrowLeft } from "react-icons/fa";

import BannerImage from "../../../assets/images/arts/Photoshops/Untitled87_20220111105658.png"
import CoverImage from "../../../assets/images/arts/Procreate/Multiverse_Cover_Arts/Multiverse_Cover_Art.png"

export const Underflight = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Underflight | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <FaArrowLeft /> <a href="javascript:window.history.back();" onclick={(e) => e.preventDefault}>Go Back</a>
        <br></br>
        <br></br>
        <h1>Underflight</h1>
        <hr className="t_border my-4 ml-0 text-left" />
        <br></br>
        <Row>
          <Col md={6}>
            <img 
              src={BannerImage} 
              alt="Background for Underflight"
              className="image">
            </img>
            <p></p>
          </Col>
          <Col md={6}>
            <p>Underflight is a Alterative Universe story of the following indie games, Undertale and Deltarune, created by Toby Fox. The story focus on main Characters from those game like Chara, Asriel, Frisk, Kris, Susie, etc.... The story starts in the future where they encounter a mysterious portal where their journey awaits and new powers to obtain. Two new character will also appears on the series.</p>
            <p>It was made based on the events in Undertale, the ongoing game Deltarune and Sky: Children of the Light. But since then, the story has branch out more with combination of many HoYoverse game soon to be added.</p>
            <p>It was planned to be an animated project but my skill isn't good enough as an Artist and I feek like I have a lot to learn so it has been on halt since.</p>
            <p>While the animated project haven't started yet. The art have been made and posted on social media.</p>
          </Col>
        </Row>
        <br></br>
        <h2>Records of the Multiverse</h2>
        <hr className="t_border my-4 ml-0 text-left" />
        <br></br>
        <Row>
          <Col md={4}>
            <img 
              src={CoverImage} 
              alt="Cover Art for Record of the Multiverse - Volume 2"
              className="cover">
            </img>
            <p></p>
          </Col>
          <Col md={8}>
            <p>Records of the Multiverse is an extension to the Underflight Project where we gather a ton of official music to create a story from there and create a playlist series.</p>
            <p>The project is on <a href="https://open.spotify.com/user/6rzaww1isidilrdh9ee1gtlx7?si=e53b94ca37314da2">Spotify</a>, <a href="https://music.apple.com/profile/studiobuttermedia">Apple Music</a> and <a href="https://www.youtube.com/channel/UCRglLNZaRX1eHR6GKcAxL6g?feature=shared">YouTube Music</a></p>
          </Col>
        </Row>
        <br></br>
      </Container>
    </HelmetProvider>
  );
};
