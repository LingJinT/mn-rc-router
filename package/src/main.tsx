import React from "react";
import ReactDom from "react-dom";
import { Router, Route, BeforeEnter } from "./components/Router";
import Root from "./root";
import About from "./about";
import Home from "./home";

const hasPermission: BeforeEnter = (to, fromPath, record) => {
  if (fromPath === "/") {
    return false;
  }
  return true;
};

const routes: Route[] = [
  {
    path: "/",
    el: <Root />,
    child: [
      {
        path: "/home/:id",
        el: <Home />,
      },
      {
        path: "/test",
        el: <div>test</div>,
        beforeEnter: [
          () => {
            return true;
          },
          hasPermission,
        ],
      },
    ],
  },
  {
    path: "/about",
    el: <About />,
    beforeEnter: hasPermission,
  },
];

const App = () => {
  return <Router routes={routes} />;
};

const div = document.createElement("div");
document.body.appendChild(div);

ReactDom.render(<App />, div);
