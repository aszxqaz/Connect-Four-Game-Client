import { Color } from "../components/constants";

type CounterLargeSVGProps = {
  fillColor: Color;
} & React.SVGProps<SVGSVGElement>;

export const CounterLarge: React.FC<CounterLargeSVGProps> = ({
  fillColor: fill,
  ...rest
}) => {
  return (
    <svg
    //   width="70"
    //   height="75"
      viewBox="0 0 70 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g id="counter-red-large">
        <circle id="Oval Copy 41" cx="35" cy="35" r="35" fill="black" />
        <circle id="Oval Copy 42" cx="35" cy="40" r="35" fill="black" />
        <g id="Oval Copy 43" filter="url(#filter0_i_5_6366)">
          <circle cx="35" cy="35" r="32" fill={fill} />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_5_6366"
          x="3"
          y="3"
          width="64"
          height="64"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_5_6366"
          />
        </filter>
      </defs>
    </svg>
  );
};
