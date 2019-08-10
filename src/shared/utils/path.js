export const isActivePath = (path, match, location) => {
  return !!(match || path === location.pathname);
};
