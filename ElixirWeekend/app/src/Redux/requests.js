import { getLocale } from "../i18n";
import * as cookie from "../cookie";
import { keycloakObject } from "../index";

export function get(endpoint, params, actions) {
  const urlParams = createGetUrLParams(params);
  if (actions.beginAction) {
    actions.beginAction();
  }
  const token = cookie.get("token");
  return fetch(endpoint + urlParams, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": getLocale().toUpperCase(),
      Authorization: "Bearer " + token,
    },
  }).then((response) => {
    const message = processResponse(response);
    const data = response.json();
    if (message === "") {
      return data;
    }
    console.error(endpoint + ": " + message);
    if (actions.errorAction) {
      data.then((errors) => actions.errorAction(errors));
    }
    if (response.status === 401) {
      keycloakObject.logout();
    }
    return null;
  });
}

export function post(endpoint, body, actions) {
  if (actions.beginAction) {
    actions.beginAction();
  }
  const token = cookie.get("token");
  return fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": getLocale(),
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(body),
  }).then((response) => {
    const message = processResponse(response);
    const data = response.text();
    if (message === "") {
      return response.status;
    }
    console.error(endpoint + ": " + message);
    if (actions.errorAction) {
      data.then((errors) => actions.errorAction(errors));
    }
    if (response.status === 401) {
      keycloakObject.logout();
    }
    return null;
  });
}

export function put(endpoint, body, actions) {
  if (actions.beginAction) {
    actions.beginAction();
  }
  const token = cookie.get("token");
  return fetch(endpoint, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": getLocale(),
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(body),
  }).then((response) => {
    const message = processResponse(response);
    const data = response.text();
    if (message === "") {
      return response.status;
    }
    if (actions.errorAction) {
      data.then((errors) => actions.errorAction(errors));
    }
    if (response.status === 401) {
      keycloakObject.logout();
    }
    return null;
  });
}

function createGetUrLParams(params) {
  let urlParams = "?";
  Object.keys(params).forEach(
    (key) => (urlParams += key + "=" + params[key] + "&")
  );
  urlParams = urlParams.substring(0, urlParams.length - 1);
  return urlParams;
}

function processResponse(response) {
  if (response.status === 200) {
    return "";
  }
  if (response.status === 400) {
    return " Status 400 - Bad request!";
  }
  if (response.status === 401) {
    return "Status 401 - Unauthorized access!";
  }
  if (response.status === 404) {
    return "Status 404 - Page not found!";
  }
  if (response.status === 500) {
    return "Status 500 - Server error!";
  }
  return null;
}
