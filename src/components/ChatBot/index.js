import React from "react";
import Chatbot from 'react-chatbot-kit'
import { Container } from "../Grid";

import config from "./config"
import messageParser from "./messageParser"
import actionProvider from "./actionProvider"

import "./styles.css"

function Bot() {
  return (
    <Container settings="color">
      <Chatbot
        config={config}
        actionProvider={actionProvider}
        messageParser={messageParser}
      />
    </Container>
  );
}

export default Bot;