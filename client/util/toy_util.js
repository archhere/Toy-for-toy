import cookie from 'react-cookies';
let token = cookie.load('token');

export const createToy = (toy) => {
  return $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/toys',
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(toy),
    headers: { "Authorization": token },
  });
};

export const fetchAllToys = () => {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/toys',
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: { "Authorization": token },
  });
};


export const fetchOneToy = (id) => {
  return $.ajax({
    method: 'GET',
    // data: JSON.stringify(plan),
    url: `http://localhost:3000/api/toys/${id}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: { "Authorization": token },
  });
};

export const updateToy = (toy) => {
  return $.ajax({
    method: 'PATCH',
    url: `http://localhost:3000/api/toys/${toy._id}`,
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
    url: `http://localhost:3000/api/toys/${id}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: {
      "Authorization": token,
      "Access-Control-Allow-Headers": true
    }
  });
};
