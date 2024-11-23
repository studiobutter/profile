/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option";
import { Container, Row, Col } from "react-bootstrap";

import { FaArrowLeft } from "react-icons/fa";



import BannerImage from "../../../assets/images/arts/Procreate/Music_of_the_Wind/Chara_-_Music_of_the_Winds.png"

export const CharaAni = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | About Internet Persona - Chara Animates</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <br></br>
        <br></br>
        <FaArrowLeft />
        <span> <a href="javascript:window.history.back();" onclick={(e) => e.preventDefault}>Go Back</a></span>
        <br></br>
        <br></br>
        <h1>Chara Animates</h1>
        <br></br>
        <img 
          src={BannerImage} 
          alt="Sona Profile Picture"
          className="banner-image">
        </img>
        <p></p>
        <br></br>
        <p>Chara Animates is a Character persona based on Chara, a Character from Undertale, made by Toby Fox. I used on the internet around 2019 till now. It was start as for role playing on Discord turn to being the main account I used for Discord as well now to incorporate in Underflight Lore. It was a fun journey with this account, learning many things and made many mistakes. Nowadays this character is the soul purpose I started PNGTuber on Twitch.</p>
        <br></br>
        <h2>Socials</h2>
        <Row>
          <Col lg="5">
            <a href="https://www.youtube.com/channel/UCV5DwSdwVVI0wHJT0jlhZTQ">YouTube - Long Form</a>
            <p></p>
            <a href="https://www.youtube.com/channel/UCM_V4AyMDnBxKVVKcUj-ZgQ">YouTube - Short Form</a>
            <p></p>
            <a href="https://twitch.tv/charaanimates/">Twitch</a>
            <p></p>
            <a href="https://www.tiktok.com/@charaanimates/">TikTok</a>
            <p></p>
          </Col>
          <Col lg="5">
            <a href="https://facebook.com/chara.animates/">Facebook</a>
            <p></p>
            <a href="https://instagram.com/charaanimates/">Instagram</a>
            <p></p>
            <a href="https://twitter.com/charaanimate/">Twitter</a>
            <p></p>
            <a href="https://www.tumblr.com/charaanimate">Tumblr</a>
            <p></p>
            <a href="https://discord.gg/v7eJmvQVgw">Discord Server</a>
            <p></p>
          </Col>
        </Row>
        <br></br>
      </Container>
    </HelmetProvider>
  );
};
