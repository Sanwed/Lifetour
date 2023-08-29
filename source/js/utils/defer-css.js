const deferCss = () => {
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = 'css/style.min.css';
  const goDefer = document.querySelector('link');
  goDefer.parentNode.insertBefore(style, goDefer);

  const style1 = document.createElement('link');
  style1.rel = 'stylesheet';
  style1.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
  style1.integrity = 'sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==';
  style1.crossOrigin = 'anonymous';
  const goDefer1 = document.querySelector('link');
  goDefer1.parentNode.insertBefore(style1, goDefer1);
};

export {deferCss};
