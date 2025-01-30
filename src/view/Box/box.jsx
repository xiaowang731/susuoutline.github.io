import React from "react";
import "./Box.scss";
import { Typography } from "antd";
import ReactMarkdown from "react-markdown";

const Box = () => {
  const markdownContent = `# My Markdown Content This is a sample Markdown content.`;
  return (
    <Typography>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>;
    </Typography>
  );
};

export default Box;
