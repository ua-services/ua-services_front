import { Cookies } from "react-cookie";

function getHeaders(extraHeaders = {}) {
  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
  };

  // Add auth token
  const cookies = new Cookies();
  const user = cookies.get("user");
  if (user && user.token) headers.Authorization = `${user.token}`;

  Object.keys(extraHeaders).forEach(key => {
    if (extraHeaders[key] === null) delete headers[key];
    else headers[key] = extraHeaders[key];
  });

  return headers;
}


async function modifiedFetch(url, params = {}) {
  const headers = getHeaders(params.headers);

  const response = await fetch(url, { ...params, headers });

  // Body is empty
  let text = await response.text();
  if (!text) text = "{}";

  // Parse json from body
  try {
    const jsonBody = JSON.parse(text);

    // Response is not in 200-299 range
    if (!response.ok) {
      if (jsonBody.errors && typeof jsonBody.errors === "object") {
        return Promise.reject(jsonBody.errors);
      }

      return Promise.reject(jsonBody);
    }

    return jsonBody;
  }
  catch (error) {
    return Promise.reject(error);
  }
}

export default modifiedFetch;
