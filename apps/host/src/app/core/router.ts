
// https://krasimirtsonev.com/blog/article/A-modern-JavaScript-router-in-100-lines-history-api-pushState-hash-url
export class Router{

  routes = [];
  mode = null;
  root = "/";
  interval:any = null;
  current:any = null;


  constructor(options) {
    this.mode = window.history.pushState ? "history" : "hash";
    if (options.mode) this.mode = options.mode;
    if (options.root) this.root = options.root;

    this.listen();
  }

  add = (path, cb) => {
    this.routes.push({ path, cb });
    return this;
  };

  remove = path => {
    for (let i = 0; i < this.routes.length; i += 1) {
      if (this.routes[i].path === path) {
        this.routes.slice(i, 1);
        return this;
      }
    }
    return this;
  };

  flush = () => {
    this.routes = [];
    return this;
  };

  clearSlashes = path =>
        path
          .toString()
          .replace(/\/$/, "")
          .replace(/^\//, "");

  getFragment = () => {
    let fragment = "";

    if (this.mode === "history") {
      fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
      fragment = fragment.replace(/\?(.*)$/, "");
      fragment = this.root !== "/" ? fragment.replace(this.root, "") : fragment;
    } else {
      const match = window.location.href.match(/#(.*)$/);
      fragment = match ? match[1] : "";
    }
    return this.clearSlashes(fragment);
  };

  navigate = (path = "") => {
    if (this.mode === "history") {
      window.history.pushState(null, null, this.root + this.clearSlashes(path));
    } else {
      window.location.href = `${window.location.href.replace(/#(.*)$/, "")}#${path}`;
    }
    return this;
  };

  listen = () => {
    clearInterval(this.interval);
    this.interval = setInterval(this.intervalFn, 50);
  };

  intervalFn = () => {
    if (this.current === this.getFragment()) return;
    this.current = this.getFragment();

    this.routes.some(route => {
      const match = this.current.match(route.path);
      if (match) {
        debugger;
        match.shift();
        route.cb.apply({}, match);
        return match;
      }
      return false;
    });
  };
}
