import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Circle = styled.div`
  svg {
    left: -500px;
    position: absolute;
    transition: all 500ms;
    transform: rotate(
      ${({ setRotate }) => (setRotate ? -setRotate.distance : 0)}deg
    );
  }
  .node {
    fill: #2a7aff;
  }
  .node.active {
    fill : #fff;
  }
  .text {
    position: absolute;
    font-size: 36px;
    fill: #2a7aff;
    font-family: "Montserrat";
    letter-spacing: 0em;
    transition: all 0.2s ease-in-out;
  }
  .text.active {
    fill:#fff;
  }
  .btn {
    fill: #000;
    fill-opacity: 0;
  }
`;

const toRad = dec => {
  return dec * (Math.PI / 180);
};

const Spinner = props => {
  const { select, setSelect, data } = props;
  const [state, setState] = useState({
    range: 180,
    radius: 320,
    number: data.length,
    position: []
  });

  useEffect(() => {
    const { range, number, radius } = state;
    const middle = { x: 500, y: 500 };
    const angle = range / number;
    let position = data.map((_, index) => {
      const distance = angle * index;
      const addX = middle.x + Math.cos(toRad(distance)) * radius;
      const addY = middle.y + Math.sin(toRad(distance)) * radius;
      return { x: addX, y: addY, distance: distance };
    });
    setState({ ...state, position: position });
  });
  return (
    <Circle setRotate={state.position[select]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1000"
        height="1000"
      >
        <defs>
          <path
            id="prefix__spinner_circle-a"
            d="M499.777 820.555C322.617 820.555 179 676.938 179 499.777 179 322.617 322.617 179 499.777 179s320.778 143.617 320.778 320.777-143.617 320.778-320.778 320.778zM499.5 819C675.955 819 819 675.955 819 499.5S675.955 180 499.5 180 180 323.045 180 499.5 323.045 819 499.5 819z"
          />
          <linearGradient
            id="prefix__spinner_circle-b"
            x1="7.779%"
            x2="92.221%"
            y1="0%"
            y2="105.478%"
          >
            <stop offset="0%" stopColor="#F7618B" />
            <stop offset="100%" stopColor="#2A7AFF" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <mask id="prefix__spinner_circle-c" fill="#fff">
            <use xlinkHref="#prefix__spinner_circle-a" />
          </mask>
          <use
            fill="#D8D8D8"
            opacity=".5"
            transform="matrix(-1 0 0 1 999.555 0)"
            xlinkHref="#prefix__spinner_circle-a"
          />
          <g
            fill="url(#prefix__spinner_circle-b)"
            mask="url(#prefix__spinner_circle-c)"
          >
            <path d="M874 93H126v814h748z" />
          </g>
          <g>
            {data.map((item, index) => {
              const { position } = state;
              if (position.length > 0) {
                const { x, y, distance } = position[index];
                const transform =
                  "translate(" + x + " " + y + " ) rotate(" + distance + ")";
                return (
                  <React.Fragment key={index}>
                    <circle transform={transform} r="10" className={select===index?'node active':'node'}/>
                    <text className={select===index?"text active":"text"} transform={transform}>
                      <tspan x="35" y="12">
                        {item.name}
                      </tspan>
                    </text>
                    <rect
                      className="btn"
                      transform={transform}
                      width={200}
                      height={200}
                      x="-20"
                      y="-100"
                      onClick={() => setSelect(index)}
                    />
                  </React.Fragment>
                );
              } else return null;
            })}
          </g>
        </g>
      </svg>
    </Circle>
  );
};

export default Spinner;
