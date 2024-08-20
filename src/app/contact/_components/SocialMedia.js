import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const SocialMedia = () => {
  const socialMedia = [
    {
      title: "Facebook",
      icon: <FaFacebookSquare />,
      href: "https://fb/fb",
    },
    {
      title: "Twitter",
      icon: <FaTwitterSquare />,
      href: "https://x/x",
    },
  ];
  return (
    <div>
      {socialMedia.map((item) => (
        <a
          style={{ display: "flex", gap: 10 }}
          href={item.href}
          target="_blank"
        >
          <span>{item.title}</span>
          <span>{item.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
