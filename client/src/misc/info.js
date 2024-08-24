
import React from 'react';

import PaintRed from '../images/paint red.png';
import PaintGreen from '../images/paint green.png';
import PaintBlue from '../images/paint blue.png';

export function info(props) {

  const languages = [
    { value: "SLO" },
    { value: "ENG" }
  ];

  const colors = [
    { value: "red", src: PaintRed },
    { value: "green", src: PaintGreen },
    { value: "blue", src: PaintBlue },
  ];

  return { languages, colors }
}
