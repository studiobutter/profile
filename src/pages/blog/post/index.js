/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option";
import { Container } from "react-bootstrap";

import { blog } from "../../../blog";

export const BlogPost = () => {
  const location = useLocation(); // Access the current location
  const queryParams = new URLSearchParams(location.search); // Parse the query string
  const id = parseInt(queryParams.get("id"), 10); // Get the 'id' parameter from the query string and convert to number

  const blogPost = blog.find((data) => data.id === id); // Find the blog post with the matching id

  if (!blogPost) {
    return <p>Blog post not found.</p>; // Handle case where no blog post matches the id
  }

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{blogPost.title} | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <h1>{blogPost.title}</h1>
        <hr className="t_border my-4 ml-0 text-left" />
        <h5>{blogPost.date}</h5>
        <p></p>
        <img
          className="banner-image"
          src={blogPost.bannerimage.url}
          alt={blogPost.bannerimage.alt}
        />
        <p></p>
        {blogPost.content.map((contentBlock, index) => (
          <p key={index}>{contentBlock.text}</p>
        ))}
        <p></p>
        <h3>Links</h3>
        <ul>
          {blogPost.links.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <br />
        <br />
      </Container>
    </HelmetProvider>
  );
};
