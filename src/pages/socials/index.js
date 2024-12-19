/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";

import { FaArrowLeft } from "react-icons/fa";

import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaTiktok,
  FaDiscord,
  FaTumblr,
  
} from "react-icons/fa";
import { 
  FaBluesky,
  FaThreads,
  FaBilibili,
} from "react-icons/fa6"
import { ReactComponent as HoYoLAB } from "../../assets/icons/HoYoLAB_Gray.svg";

// Resize the SVG icon to 80
const HoYoLABIcon = () => <HoYoLAB width="18" height="18" />;

export const Socials = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Social Media | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <FaArrowLeft /> <a href="javascript:window.history.back();" onclick={(e) => e.preventDefault}>Go Back</a>
        <br></br>
        <br></br>
        <h1>Socials</h1>
        <hr className="t_border my-4 ml-0 text-left" />
        <br></br>
        <h2>Company and stuff</h2>
        <br></br>
        <Row>
          <Col lg="5">
            <FaGithub /> <a href="https://github.com/studiobutter">GitHub</a>
            <p></p>
            <FaYoutube /> <a href="https://www.youtube.com/channel/UCRglLNZaRX1eHR6GKcAxL6g">YouTube</a>
            <p></p>
            <FaTiktok /> <a href="https://www.tiktok.com/@studiobutter/">TikTok</a>
            <p></p>
            <FaThreads /> <a href="https://www.threads.net/@studiobuttermedia">Threads</a>
            <p></p>
            <FaBluesky /> <a href="https://bsky.app/profile/studiobutter.bsky.social">BlueSky</a>
            <p></p>
          </Col>
          <Col lg="5">
            <FaFacebookF /> <a href="https://www.facebook.com/studiobuttermedia">Facebook</a>
            <p></p>
            <FaInstagram /> <a href="https://instagram.com/studiobuttermedia/">Instagram</a>
            <p></p>
            <FaTwitter /> <a href="https://twitter.com/StudioButter2/">Twitter</a>
            <p></p>
            <FaTumblr /> <a href="https://www.tumblr.com/studiobuttermedia">Tumblr</a>
            <p></p>
          </Col>
        </Row>
        <hr className="t_border my-4 ml-0 text-left" />
        <br></br>
        <h2>Casual Channels - Chara Animates</h2>
        <br></br>
        <Row>
          <Col lg="5">
            <FaYoutube /> <a href="https://www.youtube.com/channel/UCV5DwSdwVVI0wHJT0jlhZTQ">YouTube - Long Form</a>
            <p></p>
            <FaYoutube /> <a href="https://www.youtube.com/channel/UCM_V4AyMDnBxKVVKcUj-ZgQ">YouTube - Short Form</a>
            <p></p>
            <FaTwitch /> <a href="https://twitch.tv/charaanimates/">Twitch</a>
            <p></p>
            <FaTiktok /> <a href="https://www.tiktok.com/@charaanimates/">TikTok</a>
            <p></p>
            <FaBilibili /> <a href="https://space.bilibili.com/3493144289085854">Bilibili</a>
            <p></p>
            <HoYoLABIcon /> <a href="https://www.hoyolab.com/accountCenter/postList?id=196149311">HoYoLAB</a>
            <p></p>
          </Col>
          <Col lg="5">
            <FaFacebookF /> <a href="https://facebook.com/chara.animates/">Facebook</a>
            <p></p>
            <FaInstagram /> <a href="https://instagram.com/charaanimates/">Instagram</a>
            <p></p>
            <FaTwitter /> <a href="https://twitter.com/charaanimate/">Twitter</a>
            <p></p>
            <FaTumblr /> <a href="https://www.tumblr.com/charaanimate">Tumblr</a>
            <p></p>
            <FaBluesky /> <a href="https://bsky.app/profile/charaanimates.bsky.social">BlueSky</a>
            <p></p>
            <FaDiscord /> <a href="https://discord.gg/v7eJmvQVgw">Discord Server</a>
            <p></p>
          </Col>
        </Row>
        <br></br>
      </Container>
    </HelmetProvider>
  );
};
