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
          ${mode} response: ${data}`);
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
    try {
      return JSON.parse(response);
    } catch (e) {
      console.log(`error in response; here is the raw response: ${response}`)
      return {};
    }
  }
  return {
    post,
    get,
  };
})();

export default Net;