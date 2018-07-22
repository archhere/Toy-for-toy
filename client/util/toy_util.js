import cookie from 'react-cookies';
let token = cookie.load('token');

export const createToy = (toy) => {
  return $.ajax({
    type: 'POST',
    url: 'api/toys',
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(toy),
    headers: { "Authorization": token },
  });
};

export const fetchAllToys = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/toys',
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: { "Authorization": token },
  });
};


export const fetchOneToy = (id) => {
  return $.ajax({
    method: 'GET',
    // data: JSON.stringify(plan),
    url: `api/toys/${id}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: { "Authorization": token },
  });
};

export const fetchToysByGPS = (gps) => {
  return $.ajax({
    method: 'GET',
    url: 'api/search',
    dataType: 'html',
    params: gps,
    contentType: "application/json; charset=utf-8",
    headers: { "Authorization": token },
  });
};

export const fetchToysByZip = (zip) => {
  return $.ajax({
    method: 'GET',
    url: 'api/search/byzip',
    dataType: 'html',
    params: zip,
    contentType: "application/json; charset=utf-8",
    headers: { "Authorization": token },
  });
};

export const fetchToysByCity = (city) => {
  return $.ajax({
    method: 'GET',
    url: 'api/search/bycity',
    dataType: 'html',
    params: city,
    contentType: "application/json; charset=utf-8",
    headers: { "Authorization": token },
  });
};


export const updateToy = (toy) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/toys/${toy._id}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(toy),
    headers: {
      "Authorization": token,
      "Access-Control-Allow-Headers": true
     },
  });
};

export const deleteToy = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/toys/${id}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: {
      "Authorization": token,
      "Access-Control-Allow-Headers": true
    }
  });
};
