/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import "./style.css";
import "./style_btn.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container } from "react-bootstrap";

import ClipboardJS from "clipboard";

import CollabImage from "../../assets/images/collab/Collaboration_Artwork.png"

export const Collab = () => {
  useEffect(() => {
    const clipboard = new ClipboardJS('.uids');
  
    clipboard.on('success', function(e) {
      console.log('Text copied:', e.text);
      e.clearSelection();
    });
  
    clipboard.on('error', function(e) {
      console.log('Error copying text:', e);
    });
  
    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Internet Persona - Chara Animates | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <br></br>
        <h1>Collaboration</h1>
        <br></br>
        <p>This will be the place for current and upcoming community Collaboration.</p>
        <br></br>
        <h2>Ongoing</h2>
        <br></br>
        <img 
          src={CollabImage} 
          alt="Collaboration Image: Frisk and Chara wondering the next Universe."
          className="collab-image">
        </img>
        <p></p>
        <br></br>
        <p>Open Collaboration is now open! Create Now! Use #CharaAniCollab and #RecordsMultiverse. <a href="collab" class="uids" onClick={(e) => e.preventDefault()} data-clipboard-text="#CharaAniCollab #RecordsMultiverse">Click here to copy Hashtags</a></p>
        <p><strong>Theme: </strong>Always Together.</p>
        <p>You may allow replacing the current watermark with yours but you will need to add <strong>©Studio Butter</strong> with it.</p>
        <p>You might get a chance to be picked for a private collaboration for your art to be spotlight on the next playlist cover. Open Collaboration ends on December 30th. Artwork wll be picked around December 31st - January 1st. Selected Artists will be contact on January 2nd.</p>
        <br></br>
        <a href="https://raw.githubusercontent.com/studiobutter/profile/refs/heads/main/src/assets/downloadables/Collaboration_Artwork.procreate" className="text_2">
          <div id="button_h" className="ac_btn btn ">
            Download Procreate Project
          <div className="ring one"></div>
          <div className="ring two"></div>
          <div className="ring three"></div>
          </div>
        </a>
        <a href="https://raw.githubusercontent.com/studiobutter/profile/refs/heads/main/src/assets/downloadables/Collaboration_Artwork.psd" className="text_2">
          <div id="button_h" className="ac_btn btn ">
            Download Photoshop Project
          <div className="ring one"></div>
          <div className="ring two"></div>
          <div className="ring three"></div>
          </div>
        </a>
        <br></br>
        <br></br>
      </Container>
    </HelmetProvider>
  );
};
