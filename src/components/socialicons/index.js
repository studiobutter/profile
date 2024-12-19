import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaTiktok,
  FaCircle,
  FaDiscord,
  FaTumblr,
} from "react-icons/fa";
import { 
  FaBluesky,
  FaThreads
} from "react-icons/fa6"
import { CgMoreO } from "react-icons/cg";
import { ReactComponent as HoYoLAB } from "../../assets/icons/HoYoLAB_Gray.svg";
import { socialprofils } from "../../content_option";

const ICON_MAPPING = {
  default: FaCircle,
  github: FaGithub,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  threads: FaThreads,
  bluesky: FaBluesky,
  twitter: FaTwitter,
  tumblr: FaTumblr,
  tiktok: FaTiktok,
  twitch: FaTwitch,
  youtube: FaYoutube,
  discord: FaDiscord,
  hoyolab: HoYoLAB,
  more: CgMoreO,
};

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {Object.entries(socialprofils).map(([platform, url]) => {
          const IconComponent = ICON_MAPPING[platform] || ICON_MAPPING.default;
          return (
            <li key={platform}>
              <a href={url}>
                <IconComponent />
              </a>
            </li>
          );
        })}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
