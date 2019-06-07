const graphOptions = ticks => ({
  high: 100,
  low: 0,
  width: ticks.length < 7 ? '100%' : ticks.length * 100
});

const toolTipOptions = {
  class: 'chartist-tooltip',
  appendToBody: true,
  anchorToPoint: true
}

const pointLabelOptions = {
  labelOffset: {
    x: 0,
    y: -5
  }
}

const gaugeOptions = {
  size: 305,
  faceText: 'Waste Level',
  valueDisplay: true,
  valueDisplayFontSize: 40,
  min: 0,
  max: 100,
  D: 20,
  markerColors: step => (step > 79 ? 'red' : 'black'),
};

const mapOptions = {
  defaultZoom: 16.8,
  defaultCenter: { lat: 14.640842, lng: 121.000868 },
  defaultOptions: {
    gestureHandling: 'cooperative',
    mapTypeId: 'satellite',
    streetViewControl: false,
    zoomControl: false
  }
};

const area = [
  { lat: 14.643468, lng: 121.004891 },
  { lat: 14.642559, lng: 120.997674 },
  { lat: 14.641322, lng: 120.997843 },
  { lat: 14.640927, lng: 120.995453 },
  { lat: 14.638376, lng: 120.995789 },
  { lat: 14.637682, lng: 120.995924 },
  { lat: 14.638925, lng: 121.005412 },
  { lat: 14.643468, lng: 121.004891 }
];

const areaOptions = {
  strokeOpacity: 0,
  fillColor: '#ff0000',
  fillOpacity: 0.1
};

const roads = [
  [{ lat: 14.643468, lng: 121.004891 }, { lat: 14.642559, lng: 120.997674 }],
  [{ lat: 14.642145, lng: 121.004999 }, { lat: 14.640927, lng: 120.995453 }],
  [{ lat: 14.640276, lng: 121.005260 }, { lat: 14.639644, lng: 121.000785 }],
  [{ lat: 14.639633, lng: 121.005327 }, { lat: 14.638376, lng: 120.995789 }],
  [{ lat: 14.638925, lng: 121.005412 }, { lat: 14.637682, lng: 120.995924 }],
  [{ lat: 14.643468, lng: 121.004891 }, { lat: 14.638925, lng: 121.005412 }],
  [{ lat: 14.643224, lng: 121.002805 }, { lat: 14.638665, lng: 121.003453 }],
  [{ lat: 14.642872, lng: 121.000337 }, { lat: 14.638337, lng: 121.000946 }],
  [{ lat: 14.642731, lng: 120.998954 }, { lat: 14.638840, lng: 120.999535 }],
  [{ lat: 14.641395, lng: 120.998498 }, { lat: 14.638793, lng: 120.998877 }],
  [{ lat: 14.642559, lng: 120.997674 }, { lat: 14.638003, lng: 120.998315 }],
  [{ lat: 14.640927, lng: 120.995453 }, { lat: 14.637682, lng: 120.995924 }]
];

const roadsOptions = {
  strokeOpacity: 0.3,
  strokeColor: '#ff0000',
  strokeWeight: 10
};

const bins = [
  { position: { lat: 14.641897, lng: 121.002980 }, label: '1' },
  { position: { lat: 14.642902, lng: 121.000320 }, label: '2' },
  { position: { lat: 14.641413, lng: 120.999194 }, label: '3' },
  { position: { lat: 14.640946, lng: 120.995442 }, label: '4' },
  { position: { lat: 14.639980, lng: 121.003273 }, label: '5' },
  { position: { lat: 14.638680, lng: 120.998216 }, label: '6' },
  { position: { lat: 14.638896, lng: 121.005429 }, label: '7' },
  { position: { lat: 14.637993, lng: 120.998319 }, label: '8' }
];

const points = [
  { position: { lat: 14.643468, lng: 121.004891 }, label: 'A' },
  { position: { lat: 14.643224, lng: 121.002805 }, label: 'B' },
  { position: { lat: 14.642872, lng: 121.000337 }, label: 'C' },
  { position: { lat: 14.642731, lng: 120.998954 }, label: 'D' },
  { position: { lat: 14.642559, lng: 120.997674 }, label: 'E' },

  { position: { lat: 14.642145, lng: 121.004999 }, label: 'F' },
  { position: { lat: 14.641897, lng: 121.002980 }, label: 'G' },
  { position: { lat: 14.641544, lng: 121.000505 }, label: 'H' },
  { position: { lat: 14.641456, lng: 120.999197 }, label: 'I' },
  { position: { lat: 14.641395, lng: 120.998498 }, label: 'I*' },
  { position: { lat: 14.641322, lng: 120.997843 }, label: 'J' },

  { position: { lat: 14.640927, lng: 120.995453 }, label: 'K' },
  { position: { lat: 14.640276, lng: 121.005260 }, label: 'L' },
  { position: { lat: 14.640015, lng: 121.003259 }, label: 'M' },
  { position: { lat: 14.639644, lng: 121.000785 }, label: 'N' },
  { position: { lat: 14.639633, lng: 121.005327 }, label: 'O' },

  { position: { lat: 14.639389, lng: 121.003346 }, label: 'P' },
  { position: { lat: 14.639049, lng: 121.000862 }, label: 'Q' },
  { position: { lat: 14.638840, lng: 120.999535 }, label: 'R' },
  { position: { lat: 14.638793, lng: 120.998877 }, label: 'R*' },
  { position: { lat: 14.638686, lng: 120.998219 }, label: 'S' },
  { position: { lat: 14.638376, lng: 120.995789 }, label: 'T' },

  { position: { lat: 14.638925, lng: 121.005412 }, label: 'U' },
  { position: { lat: 14.638665, lng: 121.003453 }, label: 'V' },
  { position: { lat: 14.638337, lng: 121.000946 }, label: 'W' },
  { position: { lat: 14.638003, lng: 120.998315 }, label: 'X' },
  { position: { lat: 14.637682, lng: 120.995924 }, label: 'Y' }
];

const resultOptions = {
  strokeOpacity: 0.7,
  strokeColor: '#00ff00',
  strokeWeight: 10
};

const spinnerOptions = {
  lines: 13,
  length: 38,
  width: 17,
  radius: 45,
  scale: 0.35,
  corners: 1,
  color: '#000000',
  fadeColor: 'transparent',
  speed: 0.6,
  rotate: 0,
  animation: 'spinner-line-fade-quick',
  direction: 1,
  zIndex: 2e9,
  top: '50%',
  left: '50%',
  position: 'absolute'
};

const angles = [
  30, 45, 60
];

const switchOptions = {
  onColor: '#ff0000',
  offColor: '#00ff00',
  height: 35,
  width: 80
}

const garbageBinIconOptions = {
  scaledSize: {
    width: 43,
    height: 43
  }
}

module.exports = {
  graphOptions,
  toolTipOptions,
  pointLabelOptions,
  gaugeOptions,
  mapOptions,
  area,
  areaOptions,
  roads,
  roadsOptions,
  bins,
  points,
  resultOptions,
  spinnerOptions,
  angles,
  switchOptions,
  garbageBinIconOptions
};

