const responsive = require('./responsive.json');
const colors = require('./colors.json');

const PRIMARY_500 = colors['Primary']['500'].color;
const GAP = responsive.GAP;
const MAIN_FONT_FAMILY = "Ubuntu";
const FMODS_FONT_FAMILY = 'Arial';
const FONT_FAMILY_STYLE = 'sans-serif';

const ON_BACKGROUND = colors['On Background'].color;
const BACKGROUND = colors['Background'].color;

module.exports = {
  body: {
    'default': {
      'margin' : '0',
      'padding' : `0`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'color': `${ON_BACKGROUND}`,
      'background-color': `${BACKGROUND}`,
    },
  },
  h1: {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size' : '34px',
      'line-height': "1.12",
      'font-weight': '400',
      'color': `${ON_BACKGROUND}`
    },
    'phone': {
      "line-height": "1.09",
      'font-size' : '80px',
    },
    'tablet': {
      'font-size': '81px',
      'line-height': "1.11",
    }
  },
  h2: {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '24px',
      'line-height': '1.2',
      'letter-spacing': '0.4px',
      'font-weight': '400',
      'color': `${ON_BACKGROUND}`
    },
    'phone': {
      'font-size' : '70px',
      'line-height': '1.26em',
      'letter-spacing': '0',
    },
    'tablet': {
      'font-size': '81px',
      'line-height': '1.12',
    }
  },
  h3: {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '14px',
      'line-height': '1.2',
      'font-weight': '400',
      'color': `${ON_BACKGROUND}`
    },
    'phone': {
      'font-size': '32px',
    }
  },
  p: {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '12px',
      'line-height': '1.2',
      'letter-spacing': '0',
      'font-weight': '400',
      'color': `${ON_BACKGROUND}`
    },
    'phone': {
      'font-size': '30px',
    }
  },
  ".p-med": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '17px',
      'line-height': '1.2',
      'letter-spacing': '-0.1px',
      'font-weight': '400',
      'color': `${ON_BACKGROUND}`
    },
    "phone": {
      'font-size': '35px',
      'letter-spacing': '0em',
    },
    "tablet": {
      'font-size': '41px',
      'letter-spacing': '-0.01em',
    },
  },
  ".title-m": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '33px',
      "letter-spacing": "2.5%",
      'line-height': '1.2',
      'font-weight': '400',
      'color': `${ON_BACKGROUND}`
    },
    "phone": {
      'font-size': '68px',
      "letter-spacing": "0.01em"
    },
    "tablet": {
      'font-size': '50px',
      'letter-spacing': '0.015em',
    }
  },
  ".title-story-m": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '30px',
      'line-height': '1.2',
      'letter-spacing': '0.015em',
      'font-weight': '400',
      'color': `${ON_BACKGROUND}`
    },
    "phone": {
      'font-size': '36px',
      "letter-spacing": "0.01em"
    },
    "tablet": {
      'font-size': '50px',
    }
  },
  ".p-big": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size' : '20px',
      'line-height': '100%',
      'letter-spacing': '-0.25px',
      'font-weight': '400',
      'color': `${ON_BACKGROUND}`
    },
    'phone': {
      'font-size': '35px',
      'line-height': '1.3',
      'letter-spacing': '0',
    }
  },
  ".p-small": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size' : '16px',
      'line-height': '125%',
      'letter-spacing': '-0.35px',
      'font-weight': '400',
      'color': `${ON_BACKGROUND}`
    },
    'phone':{
      'font-size': '25px',
      'line-height': '1.36',
      'letter-spacing': '0',
    }
  },

  ".p-story-small": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size' : '13px',
      'line-height': '1.35',
      'letter-spacing': '0',
      'font-weight': '400',
      'color': `${ON_BACKGROUND}`
    },
    'phone':{
      'font-size': '25px',
      'line-height': '1.2',
    }
  },

  ".subtitle": {
    'default': {
      'margin' : '0',
      'padding' : `4px ${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size' : '13px',
      'line-height': '1.2',
      'letter-spacing': '2%',
      'font-weight': '700',
      "text-transform": "uppercase",
      "color": PRIMARY_500
    },
    'phone':{
      'padding' : `${GAP}px`,
      'font-size': '30px',
      'letter-spacing': '0',
    }
  },
  input: {
    'default': {
      'margin' : '0',
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '15px',
      'line-height': '20px',
      'letter-spacing': '-0.04em',
      'font-weight': '300',
      'color': `${ON_BACKGROUND}`
    },
    'phone':{
      "font-size": "31px",
      "line-height": "31px",
      "letter-spacing": "-0.025em",
    }, 
    'tablet':{
      'font-size': '35px',
      'line-height': '31px',
    }
  },
  textarea: {
    'default': {
      'margin' : '0',
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '15px',
      'line-height': '20px',
      'letter-spacing': '-0.04em',
      'font-weight': '300',
      'color': `${ON_BACKGROUND}`
    },
    'phone':{
      "font-size": "31px",
      "line-height": "31px",
      "letter-spacing": "-0.025em",
    }, 
    'tablet':{
      'font-size': '35px',
      'line-height': '31px',
    }
  },
  ".big-title": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '24px',
      'line-height': '1.2',
      'letter-spacing': '0',
      'font-weight': '400',
      'color': `${ON_BACKGROUND}`
    },
    'tablphoneet':{
      'font-size': '50px',
    },
    'phone':{
      'font-size': '60px',
    }
  },
  ".main-menu__link": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '16px',
      'line-height': '1.2',
      'letter-spacing': '0.03em',
      'font-weight': '400',
      'color': '#6aaab7'
    },
    'phone':{
      'padding' : `0 ${GAP}px`,
      'font-size': '35px',
    }
  },
  ".back-link": {
    'default': {
      'font-size': '20px',
    },
    'phone':{
      'font-size': '30px',
    },
    'tablet':{
      'font-size': '40px'
    }
  },

  a: {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '15px',
      'line-height': '1.2',
      'letter-spacing': '0.03em',
      'font-weight': '400',
      'color': '#6aaab7'
    },
    'phone':{
      'font-size': '38px',
      'line-height': '1.2',
    }
  },

  ".arrow-link-small": {
    'default': {
      'font-size': '24px',
      'line-height': '1.2',
      'letter-spacing': '-0.01em',
      'color': '#6aaab7'
    },
    'phone':{
      'font-size': '35px',
      'line-height': '1.2',
    }
  },

  ".time": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '20px',
      'line-height': '1.2',
      'letter-spacing': '0.03em',
      'font-weight': '400',
      'color': `${ON_BACKGROUND}`
    },
    'phone':{
      'font-size': '40px',
      'line-height': '1.2',
    }
  },
  button: {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '20px',
      'line-height': '1.2',
      'letter-spacing': '0.03em',
      'font-weight': '400',
      'color': `${ON_BACKGROUND}`
    },
    'phone':{
      'font-size': '38px',
      'line-height': '1.2',
    }
  }
}