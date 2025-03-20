/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option";
import { Container } from "react-bootstrap";

import { blog } from "../../../blog";

export const blog_1 = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{blog.title} | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        {blog.map
        ((data, i) => {
            return (
            <tr key={i}>
              <h1>{data.title}</h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <p></p>
              <h5>{data.date}</h5>
              <p></p>
              <img src={data.bannerimage.url} alt={data.bannerimage.alt} />
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
