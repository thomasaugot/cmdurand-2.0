/**
 * Reliable device detection utilities based on screen size and user agent
 */

export const getWindowDimensions = () => {
  if (typeof window === "undefined") {
    return { width: 0, height: 0 };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export const isMobile = () => {
  if (typeof window === "undefined") return false;

  const width = window.innerWidth;
  const userAgent = navigator.userAgent.toLowerCase();

  if (width < 768) return true;

  const mobileKeywords = [
    "android",
    "iphone",
    "ipod",
    "blackberry",
    "windows phone",
    "mobile",
    "opera mini",
    "iemobile",
  ];

  return mobileKeywords.some((keyword) => userAgent.includes(keyword));
};

export const isTablet = () => {
  if (typeof window === "undefined") return false;

  const width = window.innerWidth;
  const userAgent = navigator.userAgent.toLowerCase();
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  const tabletKeywords = ["ipad", "tablet", "kindle", "playbook", "silk"];
  const hasTabletKeyword = tabletKeywords.some((keyword) =>
    userAgent.includes(keyword)
  );

  const isIPad = /macintosh/.test(userAgent) && isTouch;

  const isTabletSize = width >= 768 && width <= 1024 && isTouch;

  return hasTabletKeyword || isIPad || isTabletSize;
};

export const isTabletLandscape = () => {
  if (typeof window === "undefined") return false;
  
  const { width, height } = getWindowDimensions();
  
  // Vérifie d'abord si c'est une tablette
  if (!isTablet()) return false;
  
  // En landscape, la largeur est supérieure à la hauteur
  return width > height;
};

export const isMobileLandscape = () => {
  if (typeof window === "undefined") return false;
  
  const { width, height } = getWindowDimensions();
  
  // Vérifie d'abord si c'est un mobile
  if (!isMobile()) return false;
  
  // En landscape, la largeur est supérieure à la hauteur
  return width > height;
};

export const isDesktop = () => {
  if (typeof window === "undefined") return true;

  return !isMobile() && !isTablet();
};

export const isTouchDevice = () => {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};

let listeners = new Set();
let cachedSnapshot = null;

const SERVER_SNAPSHOT = {
  isMobile: true,
  isMobileLandscape: false,
  isTablet: false,
  isTabletLandscape: false,
  isDesktop: false,
  isTouchDevice: false,
  windowDimensions: { width: 0, height: 0 },
};

const deviceStore = {
  getSnapshot() {
    const newSnapshot = {
      isMobile: isMobile(),
      isMobileLandscape: isMobileLandscape(),
      isTablet: isTablet(),
      isTabletLandscape: isTabletLandscape(),
      isDesktop: isDesktop(),
      isTouchDevice: isTouchDevice(),
      windowDimensions: getWindowDimensions(),
    };

    if (
      !cachedSnapshot ||
      cachedSnapshot.isMobile !== newSnapshot.isMobile ||
      cachedSnapshot.isMobileLandscape !== newSnapshot.isMobileLandscape ||
      cachedSnapshot.isTablet !== newSnapshot.isTablet ||
      cachedSnapshot.isTabletLandscape !== newSnapshot.isTabletLandscape ||
      cachedSnapshot.isDesktop !== newSnapshot.isDesktop ||
      cachedSnapshot.isTouchDevice !== newSnapshot.isTouchDevice ||
      cachedSnapshot.windowDimensions.width !==
        newSnapshot.windowDimensions.width ||
      cachedSnapshot.windowDimensions.height !==
        newSnapshot.windowDimensions.height
    ) {
      cachedSnapshot = newSnapshot;
    }

    return cachedSnapshot;
  },

  getServerSnapshot() {
    return SERVER_SNAPSHOT;
  },

  subscribe(listener) {
    if (typeof window === "undefined") return () => {};

    listeners.add(listener);

    if (listeners.size === 1) {
      let timeoutId;
      const debouncedUpdate = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          listeners.forEach((l) => l());
        }, 100);
      };

      window.addEventListener("resize", debouncedUpdate);
      window.addEventListener("orientationchange", debouncedUpdate);

      deviceStore._cleanup = () => {
        window.removeEventListener("resize", debouncedUpdate);
        window.removeEventListener("orientationchange", debouncedUpdate);
        clearTimeout(timeoutId);
      };
    }

    return () => {
      listeners.delete(listener);
      if (listeners.size === 0 && deviceStore._cleanup) {
        deviceStore._cleanup();
      }
    };
  },
};

export { deviceStore };