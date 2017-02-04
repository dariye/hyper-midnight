const black = '#000000'
const white = '#ffffff'
const midnightExpress = '#1C2140'
const carissma = '#E3868F'
const radicalRed = '#FF506C'
const athensGray = '#ECF0F1'
const madison = '#2C3E50'
const blackHaze = '#F7F7F7'

const foregroundColor = athensGray
const backgroundColor = midnightExpress
const borderColor = midnightExpress
const cursorColor = radicalRed

const colors = {
  black,
  white,
  red: radicalRed,
  green: radicalRed ,
  yellow: radicalRed,
  blue: radicalRed,
  magenta: radicalRed,
  cyan: radicalRed,
  lightBlack: radicalRed,
  lightRed: radicalRed,
  lightGreen: radicalRed,
  lightYellow: radicalRed,
  lightBlue: radicalRed,
  lightMagenta: radicalRed,
  lightCyan: radicalRed,
  colorCubes: white,
  grayscale: athensGray
}

exports.decorateConfig = config => Object.assign({}, config, {
  foregroundColor,
  backgroundColor,
  borderColor,
  cursorColor,
  colors,
  termCSS: `
    ${config.termCSS || '' }
    .cursor-node {
      border-left: 2px solid;
    }
    ::selection {
      background: ${blackHaze};
    }
  `,
  css: `
    ${config.css || ''}
    .tab_tab {
      color: ${blackHaze};
      font-size: 11px;
      text-transform: uppercase !important;
      margin-top: -1px;
      border-top: 1px solid transparent !important;
    }
    .tab_tab.tab_active {
      color: ${blackHaze};
      font-weight: bold !important;
      border-top: 2px solid ${radicalRed} !important;
    }
  `
});
