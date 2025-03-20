/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container } from "react-bootstrap";

import { blog } from "../../blog";

export const BlogMenu = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <h1>Blog</h1>
        <hr className="t_border my-4 ml-0 text-left" />
        {blog.map
        ((data, i) => {
            return (
            <tr key={i}>
              <h2>
              <a href={`/blog/post?id=${data.id}`}>{data.title}</a>
              </h2>
              <p></p>
              <h5>{data.date}</h5>
              <p></p>
            </tr>
            );
        })}
        <br></br>
        <br></br>
      </Container>
    </HelmetProvider>
  );
};
