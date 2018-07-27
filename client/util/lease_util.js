import cookie from 'react-cookies';
let token = cookie.load('token');

export const createLease = (lease) => {
  return $.ajax({
    type: 'POST',
    url: `api/toys/${lease.toy_id}/lease`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(lease),
    headers: { "Authorization": token },
  });
};


export const fetchAllLease = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/toys/${id}/lease`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: { "Authorization": token },
  });
};


export const fetchAllToysLease = () => {
  return $.ajax({
    method: 'GET',
    url: `api/lease`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: { "Authorization": token },
  });
};

export const fetchOneLease = (toyId,leaseId) => {
  return $.ajax({
    method: 'GET',
    // data: JSON.stringify(plan),
    url: `api/toys/${toyId}/lease/${leaseId}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: { "Authorization": token },
  });
};


export const updateLease = (lease) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/toys/${lease.toy_id}/lease/${lease._id}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(lease),
    headers: {
      "Authorization": token,
      "Access-Control-Allow-Headers": true
     },
  });
};

export const deleteLease = (toyId,leaseId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/toys/${toyId}/lease/${leaseId}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: {
      "Authorization": token,
      "Access-Control-Allow-Headers": true
    }
  });
};

export function errorHandler(dispatch, error, type) {
  let errorMessage = '';
  console.log("hits errorHandler");
  if (error.responseText) {
    errorMessage = error.responseText;
  } else if (error.statusText) {
    errorMessage = error.statusText;
  } else {
    errorMessage = "Unsuccessful. Try again";
  }

  if (error.status === 401) {
    dispatch({
      type: type,
      payload: 'This username and password combination is not correct.'
    });
  } else if (error.status === 400) {
    dispatch({
      type: type,
      payload: 'Please enter valid username and password.'
    });
  }else {
    dispatch({
      type: type,
      payload: JSON.parse(errorMessage)
    });
  }
}
