// isMobile.js
const isMobile = (ua) => {
  const mobileRegex1 =
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/;

  return mobileRegex1.test(ua);
};

module.exports = isMobile;
