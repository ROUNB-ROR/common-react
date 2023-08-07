import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';

// Stateless component represents page link button on the pagination
function PageLink(props) {
  //
  const {
    label,
    searchQuery,
    page,
    path
  } = props;

  // Since the page labels contain special characters dangerouslySetInnerHTML is
  // used with getMarkup function
  const getMarkup = () => ({
    __html: label
  });

  // Setting the page in the search query
  const REGEX = /([?;&])page=[^&;]*[;&]?/;
  const QUERY = searchQuery.replace(REGEX, '$1').replace(/&$/, '');
  const SEARCH_QUERY = `${QUERY.length > 2 ? `${QUERY}&` : '?'}page=${page}`;
  return /*#__PURE__*/React.createElement(Link, {
    className: "page-link",
    to: `${path}${SEARCH_QUERY}`,
    dangerouslySetInnerHTML: getMarkup()
  });
}

//
PageLink.propTypes = {
  label: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired
};

// Component represents pagination element on the page
function Pagination(props) {
  const {
    links,
    lastPage
  } = props;

  // Function to extract the page number of the url
  const getPageNumber = url => {
    const STR = '?page=';
    return Number(url.slice(url.indexOf(STR) + STR.length));
  };

  // Finding out the total number of pages
  const NUMBER_OF_PAGES = lastPage;
  // Index of active page
  let activePageIndex = links.findIndex(item => item.active);
  // Selecting first two page items (Previous and 1), active and three page items
  // before and after the active, last two page items (including Next)
  const PAGE_ITEMS_TO_SHOW = links.filter((page, index) => page.url && (index < 2 || Math.abs(index - activePageIndex) < 4 || index >= links.length - 2));
  // Finding the position for active page in the array of the selected pages
  activePageIndex = PAGE_ITEMS_TO_SHOW.findIndex(item => item.active);
  const location = useLocation();
  return PAGE_ITEMS_TO_SHOW.length > 1 ? /*#__PURE__*/React.createElement("ul", {
    className: "pagination"
  }, PAGE_ITEMS_TO_SHOW
  // Creating page links for each selected page
  .map((page, index) => {
    const PAGE_NUMBER = getPageNumber(page.url);

    // Replacing label for the third item before and after the active
    // with ...
    // Except the situation when the item is second or before the last
    // page to exclude the situations like
    //  1 ... 3 4
    // and
    //  1 2 ... 4
    const PAGE_LABEL = Math.abs(index - activePageIndex) === 3 && index > 1 && index < PAGE_ITEMS_TO_SHOW.length - 2 && PAGE_NUMBER > 2 && PAGE_NUMBER < NUMBER_OF_PAGES - 1 ? '...' : page.label;

    // No other unique values are available so the key will include
    // index
    const key = `page${index}`;
    return /*#__PURE__*/React.createElement("li", {
      className: `page-item ${page.active ? 'active' : ''}`,
      key: key
    }, /*#__PURE__*/React.createElement(PageLink, {
      path: location.pathname,
      page: PAGE_NUMBER,
      label: PAGE_LABEL,
      searchQuery: location.search
    }));
  })) : '';
}

//
Pagination.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
    active: PropTypes.bool
  })).isRequired,
  lastPage: PropTypes.number.isRequired
};
export default Pagination;