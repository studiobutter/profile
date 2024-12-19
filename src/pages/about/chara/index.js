/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option";
import { Container, Row, Col } from "react-bootstrap";

import { FaArrowLeft } from "react-icons/fa";

import SonaImage from "../../../assets/images/arts/Procreate/Music_of_the_Wind/Chara_-_Music_of_the_Winds.png"

export const CharaAni = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Internet Persona - Chara Animates | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <FaArrowLeft /> <a href="javascript:window.history.back();" onclick={(e) => e.preventDefault}>Go Back</a>
        <br></br>
        <br></br>
        <h1>Chara Animates</h1>
        <br></br>
        <img 
          src={SonaImage} 
          alt="Sona Profile Picture"
          className="sona-image">
        </img>
        <p></p>
        <br></br>
        <p>Chara Animates is a Character persona based on Chara, a Character from Undertale, made by Toby Fox. I used on the internet around 2019 till now. It was start as for role playing on Discord turn to being the main account I used for Discord as well now to incorporate in Underflight Lore. It was a fun journey with this account, learning many things and made many mistakes. Nowadays this character is the soul purpose I started PNGTuber on Twitch.</p>
        <p>Finding social media? It has been moved to <a href="../socials">Social Page</a></p>
        <br></br>
      </Container>
    </HelmetProvider>
  );
};
