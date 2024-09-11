import { useIsDarkmodeActive } from "@/hooks/useIsDarkmode";

export const LearnMoreShowAll = ({ className }: { className?: string }) => {
  const { isDarkmodeActive } = useIsDarkmodeActive();
  return (
    <>
      {isDarkmodeActive ? (
        <>
          <svg
            width="300"
            height="160"
            viewBox="0 0 300 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <rect
              x="19.5"
              y="-29.5"
              width="260"
              height="185"
              rx="16.5"
              fill="#020817"
              stroke="#454F61"
            />
            <g filter="url(#filter0_dd_84_1262)">
              <rect
                x="33.4375"
                y="45.7935"
                width="233.062"
                height="72.6118"
                rx="7.5"
                fill="#020817"
                stroke="#454F61"
              />
              <rect
                x="43.9375"
                y="89.0747"
                width="47.5825"
                height="14.2271"
                rx="7.11356"
                fill="#454F61"
                stroke="#0F1525"
              />
              <rect
                x="97.9961"
                y="89.0747"
                width="80.9378"
                height="14.2271"
                rx="7.11356"
                fill="#454F61"
                stroke="#0F1525"
              />
              <rect
                x="44.4141"
                y="60.9014"
                width="183.667"
                height="10.3767"
                rx="5.18833"
                fill="#454F61"
              />
            </g>
            <g filter="url(#filter1_dd_84_1262)">
              <rect
                x="33.4375"
                y="-37.2056"
                width="233.062"
                height="72.6118"
                rx="7.5"
                fill="#020817"
                stroke="#454F61"
              />
              <rect
                x="43.9375"
                y="6.07715"
                width="47.5825"
                height="14.2271"
                rx="7.11356"
                fill="#454F61"
                stroke="#0F1525"
              />
              <rect
                x="97.9961"
                y="6.07617"
                width="80.9378"
                height="14.2271"
                rx="7.11356"
                fill="#454F61"
                stroke="#0F1525"
              />
            </g>
            <path
              d="M133.44 146.16C131.74 146.16 130.68 145.17 130.56 143.71L131.67 143.64C131.8 144.63 132.4 145.18 133.46 145.18C134.38 145.18 134.91 144.83 134.91 144.16C134.91 143.56 134.6 143.19 133.03 142.81C131.33 142.4 130.71 141.91 130.71 140.8C130.71 139.58 131.64 138.74 133.17 138.74C134.8 138.74 135.72 139.71 135.88 141.05L134.78 141.11C134.67 140.29 134.13 139.72 133.15 139.72C132.33 139.72 131.82 140.14 131.82 140.76C131.82 141.38 132.17 141.61 133.55 141.94C135.4 142.37 136.02 143.06 136.02 144.1C136.02 145.37 134.97 146.16 133.44 146.16ZM136.888 146V138.9H137.948V141.45C138.228 140.84 138.808 140.56 139.508 140.56C140.668 140.56 141.298 141.39 141.298 142.58V146H140.238V142.86C140.238 141.91 139.908 141.45 139.228 141.45C138.448 141.45 137.948 141.95 137.948 142.88V146H136.888ZM144.679 146.12C143.149 146.12 142.149 145.03 142.149 143.34C142.149 141.65 143.149 140.56 144.679 140.56C146.199 140.56 147.199 141.65 147.199 143.34C147.199 145.03 146.199 146.12 144.679 146.12ZM144.679 145.2C145.579 145.2 146.099 144.51 146.099 143.34C146.099 142.17 145.579 141.48 144.679 141.48C143.779 141.48 143.249 142.17 143.249 143.34C143.249 144.51 143.779 145.2 144.679 145.2ZM149.013 146L147.393 140.68H148.503L149.643 144.84L150.813 140.68H151.823L152.993 144.84L154.133 140.68H155.253L153.623 146H152.433L151.313 142.2L150.203 146H149.013ZM159.756 146.12C158.656 146.12 157.936 145.59 157.936 144.67C157.936 143.76 158.476 143.27 159.636 143.04L161.466 142.69C161.466 141.87 161.086 141.46 160.326 141.46C159.646 141.46 159.266 141.77 159.126 142.35L158.026 142.28C158.226 141.22 159.056 140.56 160.326 140.56C161.766 140.56 162.526 141.37 162.526 142.75V144.82C162.526 145.08 162.616 145.16 162.816 145.16H163.006V146C162.936 146.02 162.766 146.03 162.616 146.03C162.006 146.03 161.646 145.8 161.556 145.18C161.286 145.74 160.586 146.12 159.756 146.12ZM159.936 145.28C160.886 145.28 161.466 144.68 161.466 143.83V143.49L159.916 143.79C159.276 143.91 159.036 144.16 159.036 144.57C159.036 145.03 159.366 145.28 159.936 145.28ZM164.958 146C164.258 146 163.788 145.66 163.788 144.87L163.798 138.9H164.858V144.77C164.858 145.02 164.978 145.13 165.218 145.13H165.648V146H164.958ZM167.649 146C166.949 146 166.479 145.66 166.479 144.87L166.489 138.9H167.549V144.77C167.549 145.02 167.669 145.13 167.909 145.13H168.339V146H167.649Z"
              fill="white"
            />
            <path d="M131 148H169" stroke="white" stroke-width="0.5" />
            <defs>
              <filter
                id="filter0_dd_84_1262"
                x="26.9375"
                y="39.2935"
                width="246.062"
                height="85.6118"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_84_1262"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_84_1262"
                  result="effect2_dropShadow_84_1262"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_84_1262"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_dd_84_1262"
                x="26.9375"
                y="-43.7056"
                width="246.062"
                height="85.6118"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_84_1262"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_84_1262"
                  result="effect2_dropShadow_84_1262"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_84_1262"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </>
      ) : (
        <>
          <svg
            width="300"
            height="160"
            viewBox="0 0 300 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <rect
              x="19.5"
              y="-29.5"
              width="260"
              height="185"
              rx="16.5"
              fill="white"
              stroke="#E2E8F0"
            />
            <g filter="url(#filter0_dd_84_1211)">
              <rect
                x="33.4375"
                y="45.7935"
                width="233.062"
                height="72.6118"
                rx="7.5"
                fill="white"
                fill-opacity="0.98"
                stroke="#E2E8F0"
              />
              <rect
                x="44.4375"
                y="89.5747"
                width="46.5825"
                height="13.2271"
                rx="6.61356"
                fill="#E2E8F0"
              />
              <rect
                x="43.9375"
                y="89.0747"
                width="47.5825"
                height="14.2271"
                rx="7.11356"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
              />
              <rect
                x="98.4961"
                y="89.5747"
                width="79.9378"
                height="13.2271"
                rx="6.61356"
                fill="#E2E8F0"
              />
              <rect
                x="97.9961"
                y="89.0747"
                width="80.9378"
                height="14.2271"
                rx="7.11356"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
              />
              <rect
                x="44.4141"
                y="60.9014"
                width="183.667"
                height="10.3767"
                rx="5.18833"
                fill="#E2E8F0"
              />
            </g>
            <g filter="url(#filter1_dd_84_1211)">
              <rect
                x="33.4375"
                y="-37.2056"
                width="233.062"
                height="72.6118"
                rx="7.5"
                fill="white"
                fill-opacity="0.98"
                stroke="#E2E8F0"
              />
              <rect
                x="44.4375"
                y="6.57715"
                width="46.5825"
                height="13.2271"
                rx="6.61356"
                fill="#E2E8F0"
              />
              <rect
                x="43.9375"
                y="6.07715"
                width="47.5825"
                height="14.2271"
                rx="7.11356"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
              />
              <rect
                x="98.4961"
                y="6.57617"
                width="79.9378"
                height="13.2271"
                rx="6.61356"
                fill="#E2E8F0"
              />
              <rect
                x="97.9961"
                y="6.07617"
                width="80.9378"
                height="14.2271"
                rx="7.11356"
                stroke="#CFD9F1"
                stroke-opacity="0.7"
              />
            </g>
            <path
              d="M133.44 146.16C131.74 146.16 130.68 145.17 130.56 143.71L131.67 143.64C131.8 144.63 132.4 145.18 133.46 145.18C134.38 145.18 134.91 144.83 134.91 144.16C134.91 143.56 134.6 143.19 133.03 142.81C131.33 142.4 130.71 141.91 130.71 140.8C130.71 139.58 131.64 138.74 133.17 138.74C134.8 138.74 135.72 139.71 135.88 141.05L134.78 141.11C134.67 140.29 134.13 139.72 133.15 139.72C132.33 139.72 131.82 140.14 131.82 140.76C131.82 141.38 132.17 141.61 133.55 141.94C135.4 142.37 136.02 143.06 136.02 144.1C136.02 145.37 134.97 146.16 133.44 146.16ZM136.888 146V138.9H137.948V141.45C138.228 140.84 138.808 140.56 139.508 140.56C140.668 140.56 141.298 141.39 141.298 142.58V146H140.238V142.86C140.238 141.91 139.908 141.45 139.228 141.45C138.448 141.45 137.948 141.95 137.948 142.88V146H136.888ZM144.679 146.12C143.149 146.12 142.149 145.03 142.149 143.34C142.149 141.65 143.149 140.56 144.679 140.56C146.199 140.56 147.199 141.65 147.199 143.34C147.199 145.03 146.199 146.12 144.679 146.12ZM144.679 145.2C145.579 145.2 146.099 144.51 146.099 143.34C146.099 142.17 145.579 141.48 144.679 141.48C143.779 141.48 143.249 142.17 143.249 143.34C143.249 144.51 143.779 145.2 144.679 145.2ZM149.013 146L147.393 140.68H148.503L149.643 144.84L150.813 140.68H151.823L152.993 144.84L154.133 140.68H155.253L153.623 146H152.433L151.313 142.2L150.203 146H149.013ZM159.756 146.12C158.656 146.12 157.936 145.59 157.936 144.67C157.936 143.76 158.476 143.27 159.636 143.04L161.466 142.69C161.466 141.87 161.086 141.46 160.326 141.46C159.646 141.46 159.266 141.77 159.126 142.35L158.026 142.28C158.226 141.22 159.056 140.56 160.326 140.56C161.766 140.56 162.526 141.37 162.526 142.75V144.82C162.526 145.08 162.616 145.16 162.816 145.16H163.006V146C162.936 146.02 162.766 146.03 162.616 146.03C162.006 146.03 161.646 145.8 161.556 145.18C161.286 145.74 160.586 146.12 159.756 146.12ZM159.936 145.28C160.886 145.28 161.466 144.68 161.466 143.83V143.49L159.916 143.79C159.276 143.91 159.036 144.16 159.036 144.57C159.036 145.03 159.366 145.28 159.936 145.28ZM164.958 146C164.258 146 163.788 145.66 163.788 144.87L163.798 138.9H164.858V144.77C164.858 145.02 164.978 145.13 165.218 145.13H165.648V146H164.958ZM167.649 146C166.949 146 166.479 145.66 166.479 144.87L166.489 138.9H167.549V144.77C167.549 145.02 167.669 145.13 167.909 145.13H168.339V146H167.649Z"
              fill="black"
            />
            <path d="M131 148H169" stroke="black" stroke-width="0.5" />
            <defs>
              <filter
                id="filter0_dd_84_1211"
                x="26.9375"
                y="39.2935"
                width="246.062"
                height="85.6118"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_84_1211"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_84_1211"
                  result="effect2_dropShadow_84_1211"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_84_1211"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_dd_84_1211"
                x="26.9375"
                y="-43.7056"
                width="246.062"
                height="85.6118"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_84_1211"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_84_1211"
                  result="effect2_dropShadow_84_1211"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_84_1211"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </>
      )}
    </>
  );
};
