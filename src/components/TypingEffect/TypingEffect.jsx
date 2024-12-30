import React, { useState, useEffect } from "react";
import "./TypingEffect.scss";

const TypingEffect = ({ words, typingSpeed, deletingSpeed, pauseTime }) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const handleTyping = () => {
      setText((current) =>
        isDeleting
          ? currentWord.substring(0, current.length - 1)
          : currentWord.substring(0, current.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <div className="typewriter">
      <span>{text}</span>
      <span className="cursor">&nbsp;</span>
    </div>
  );
};

export default TypingEffect;
