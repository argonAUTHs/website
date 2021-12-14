const responsive = require('./responsive.json');
const colors = require('./colors.json');

const PRIMARY_500 = colors['Primary']['500'].color;
const GAP = responsive.GAP;
const MAIN_FONT_FAMILY = "Ubuntu";
const FMODS_FONT_FAMILY = 'Arial';
const FONT_FAMILY_STYLE = 'sans-serif';

module.exports = {
  h1: {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '81px',
      'line-height': "1.11",
      'font-weight': '400',
    },
    'tablet' : {
      "line-height": "1.09",
      'font-size' : '80px',
    },
    'phone': {
      'font-size' : '34px',
      'line-height': '112%'
    }
  },

  h2: {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '81px',
      'line-height': '1.12',
      'font-weight': '400',
    },
    'tablet' : {
      'font-size' : '70px',
      'line-height': '1.26em',
    },
    'phone':{
      'font-size': '24px',
      'line-height': '1.2',
      'letter-spacing': '0.4px',
    }
  },
  h3: {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '35px',
      'line-height': '1.2',
      'font-weight': '400',
    },
    'phone': {
      'font-size': '14px',
    }
  },
  p: {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '30px',
      'line-height': '1.2',
      'letter-spacing': '0',
      'font-weight': '400',
    },
    'phone': {
      'font-size': '12px',
    }
  },
  ".p-med": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '41px',
      'line-height': '1.2',
      'letter-spacing': '-0.01em',
      'font-weight': '400',
    },
    "tablet": {
      'font-size': '35px',
      'letter-spacing': '0em',
    },
    "phone": {
      'font-size': '17px',
      'letter-spacing': '-0.1px',
    }
  },
  ".title-m": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '50px',
      'line-height': '1.2',
      'letter-spacing': '0.015em',
      'font-weight': '400',
    },
    "tablet": {
      'font-size': '68px',
      "letter-spacing": "0.01em"
    },
    "phone": {
      'font-size': '33px',
      "letter-spacing": "2.5%"
    }
  },
  ".title-story-m": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '50px',
      'line-height': '1.2',
      'letter-spacing': '0.015em',
      'font-weight': '400',
    },
    "tablet": {
      'font-size': '36px',
      "letter-spacing": "0.01em"
    },
    "phone": {
      'font-size': '30px',
    }
  },
  ".p-big": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '35px',
      'line-height': '1.3',
      'letter-spacing': '0',
      'font-weight': '400',
    },
    'phone': {
      'font-size' : '20px',
      'line-height': '100%',
      'letter-spacing': '-0.25px'    
    }
  },
  ".p-small": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '25px',
      'line-height': '1.36',
      'letter-spacing': '0',
      'font-weight': '400',
    },
    'phone':{
      'font-size' : '16px',
      'line-height': '125%',
      'letter-spacing': '-0.35px',
    }
  },

  ".p-story-small": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '25px',
      'line-height': '1.2',
      'letter-spacing': '0',
      'font-weight': '400',
    },
    'phone':{
      'font-size' : '13px',
      'line-height': '1.35',
    }
  },

  ".subtitle": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '30px',
      'line-height': '1.2',
      'letter-spacing': '0',
      'font-weight': '700',
      "text-transform": "uppercase",
      "color": PRIMARY_500
    },
    'phone':{
      'padding' : `4px ${GAP}px`,
      'font-size' : '13px',
      'letter-spacing': '2%',
    }
  },
  input: {
    'default': {
      'margin' : '0',
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '35px',
      'line-height': '31px',
      'letter-spacing': '-0.04em',
      'font-weight': '300',
    },
    'tablet':{
      "font-size": "31px",
      "line-height": "31px",
      "letter-spacing": "-0.025em",
    }, 
    'phone':{
      'font-size': '15px',
      'line-height': '20px',
    }
  },
  textarea: {
    'default': {
      'margin' : '0',
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '35px',
      'line-height': '31px',
      'letter-spacing': '-0.04em',
      'font-weight': '300',
    },
    'tablet':{
      "font-size": "31px",
      "line-height": "31px",
      "letter-spacing": "-0.025em",
    }, 
    'phone':{
      'font-size': '15px',
      'line-height': '20px',
    }
  },
  ".big-title": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '60px',
      'line-height': '1.2',
      'letter-spacing': '0',
      'font-weight': '400',
    },
    'tablet':{
      'font-size': '50px',
    },
    'phone':{
      'font-size': '24px',
      'letter-spacing': '',
    }
  },
  ".main-menu__link": {
    'default': {
      'margin' : '0',
      'padding' : `0 ${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '35px',
      'line-height': '1.2',
      'letter-spacing': '0.03em',
      'font-weight': '400',
    },
    'phone':{
      'padding' : `${GAP}px`,
      'font-size': '16px',
      'letter-spacing': '',
    }
  },
  ".back-link": {
    'default': {
      'font-size': '40px',
    },
    'tablet':{
      'font-size': '30px',
    },
    'phone':{
      'font-size': '20px'
    }
  },

  a: {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '38px',
      'line-height': '1.2',
      'letter-spacing': '0.03em',
      'font-weight': '400',
    },
    'phone':{
      'font-size': '15px',
      'line-height': '1.2',
    }
  },

  ".arrow-link-small": {
    'default': {
      'font-size': '35px',
      'line-height': '1.2',
      'letter-spacing': '-0.01em',
    },
    'phone':{
      'font-size': '24px',
      'line-height': '1.2',
    }
  },

  ".time": {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '40px',
      'line-height': '1.2',
      'letter-spacing': '0.03em',
      'font-weight': '400',
    },
    'phone':{
      'font-size': '20px',
      'line-height': '1.2',
    }
  },

  button: {
    'default': {
      'margin' : '0',
      'padding' : `${GAP}px`,
      'font-family': `${MAIN_FONT_FAMILY}, ${FMODS_FONT_FAMILY}, ${FONT_FAMILY_STYLE}`,
      'font-size': '38px',
      'line-height': '1.2',
      'letter-spacing': '0.03em',
      'font-weight': '400',
    },
    'phone':{
      'font-size': '20px',
      'line-height': '1.2',
    }
  }
}