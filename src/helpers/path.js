/**
 * Get current path in encoded format for given request
 *  */
function getPathFromRequest(request) {
  // Retrieving pathname and search params
  const url = new URL(request.url);
  const { pathname, search } = url;
  const encoded = encodeURIComponent(`${pathname}${search}`);

  return encoded;
}

/**
 * Get current path in encoded format for given location object
 *  */
function getPathFromLocation(location) {
  // Retrieving pathname and search params
  const { pathname, search } = location;
  const encoded = encodeURIComponent(`${pathname}${search}`);

  return encoded;
}

/**
 * Extracts return path from search params for given request
 * @param {*} request
 * @returns
 */
function getReturnPathFromRequest(request) {
  // Retrieving pathname and search params
  const url = new URL(request.url);
  const returnTo = url.searchParams.get('returnTo');
  return returnTo;
}

export { getPathFromRequest, getPathFromLocation, getReturnPathFromRequest };
