/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container } from "react-bootstrap";

import { changelog } from "../../changelog";

export const Changelogs = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Changelogs | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <h1>Changelogs</h1>
        <p></p>
        <i>Changelogs are based on the changes I made thru <a href="https://github.com/studiobutter/profile/pulls?q=is%3Apr+is%3Aclosed">GitHub Pull Request</a></i>
        <p></p>
        <br></br>
        {changelog.map
        ((data, i) => {
          return (
            <tr key={i}>
              <h5>{data.date}</h5>
              <p></p>
              <p>{data.content}</p>
              <br></br>
            </tr>
          );
        })}
        <br></br>
        <br></br>
      </Container>
    </HelmetProvider>
  );
};
