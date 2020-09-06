import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export const ReactTypingEffectTitle = (props) => {
  return (
    <ReactTypingEffect
      text={props.children}
      typingDelay = "1000"
    />
  );
};