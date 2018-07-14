module.exports = function(url, params, method = "post", target = "_blank") {
  let b = document.getElementsByTagName("body"),
    i = "form" + Date.now(),
    s = document.createElement("form");
  s.setAttribute("id", i);
  s.setAttribute("method", method);
  s.setAttribute("action", url);
  s.setAttribute("target", target);
  for (let k in params) {
    let input = document.createElement("input");
    input.setAttribute("name", k);
    input.setAttribute("value", params[k]);
    s.appendChild(input);
  }
  if (b && b[0]) {
    b[0].appendChild(s);
  }
  s.submit();
  setTimeout(() => {
    s.remove();
  }, 0);
};
