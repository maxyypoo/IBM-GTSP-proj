const Net = (() => {
  const debug = false;
  const post = (jsonStr, route, callback = x => {}) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", route);
    xhr.setRequestHeader("Content-Type", "application/json");
    attachORSC(xhr, debug, callback, "get");
    xhr.send(jsonStr);
  };
  const get = (route, callback = x => {}) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", route);
    attachORSC(xhr, debug, callback, "get");
    xhr.send();
  };
  const attachORSC = (xhr, debug, callback, mode) => {
    if (debug) {
      xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
          let data = getObj(xhr.response);
          console.log(`status: ${this.status};
            ${mode} response: ${JSON.stringify(data)}`);
          callback(data);
        }
      };
    } else {
      xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
          callback(getObj(xhr.response));
        }
      };
    }
  }
  const getObj = (response) => {
    if (typeof response == 'string') {
      return JSON.parse(response);
    } else {
      return response;
    }
  }
  return {
    post,
    get,
  };
})();

export default Net;