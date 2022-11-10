import * as React from "react"
import doctorImg from '../assets/doctor-main.png'

const SvgComponent = (props) => (
  <svg
    width={665}
    height={562}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path
      d="M2.788 266.439C-1.12 171.265 78.156 96.161 154.708 41.217c200.339-117.151 198.82 69.229 380.689 103.53 120.381 22.704 139.926 136.676 120.381 219.318-19.545 82.642-216.775 197.977-331.381 194.345C209.79 554.777 7.675 385.407 2.788 266.439Z"
      stroke="#FF2E00"
      strokeWidth={5}
    />
    <path
      d="M19.877 290.831C16.18 202.759 91.17 133.259 163.583 82.416c189.506-108.41 188.069 64.063 360.104 95.804 113.872 21.01 132.361 126.478 113.872 202.953-18.488 76.474-205.053 183.203-313.463 179.842-108.409-3.362-299.597-160.093-304.219-270.184Z"
      fill="#2EC5BC"
    />
    <mask
      id="a"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x={19}
      y={46}
      width={625}
      height={515}
    >
      <path
        d="M19.588 290.481c-3.697-88.073 71.293-157.572 143.706-208.415 189.507-108.41 188.069 64.063 360.104 95.803 113.873 21.01 132.361 126.478 113.873 202.953-18.489 76.475-205.054 183.204-313.464 179.842-108.409-3.361-299.596-160.093-304.219-270.183Z"
        fill="#36DDD3"
      />
    </mask>
    <g mask="url(#a)">
      <path fill="url(#b)" d="M-174.672 78.635h724.411v482.38h-724.411z" />
    </g>
    <defs>
      <pattern
        id="b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#c" transform="matrix(.0005 0 0 .00075 0 0)" />
      </pattern>
      <image
        id="c"
        width={2000}
        height={1333}
        xlinkHref={doctorImg}
      />
    </defs>
  </svg>
)
export default SvgComponent
