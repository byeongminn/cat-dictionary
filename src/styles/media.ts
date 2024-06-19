interface Breakpoints {
  mobile: number;
  tablet: number;
  laptop: number;
}

const breakpoints: Breakpoints = {
  mobile: 576,
  tablet: 768,
  laptop: 1024,
};

const media = {
  mobile: `screen and (max-width: ${breakpoints.mobile}px)`,
  tablet: `screen and (max-width: ${breakpoints.tablet}px)`,
  laptop: `screen and (max-width: ${breakpoints.laptop}px)`,
};

export default media;
