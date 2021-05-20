import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = lazy(() => import("./components/Main/Main"));
const Page404 = lazy(() => import("./components/NotFound/notFound"));
const Login = lazy(() => import("./components/Login/Login"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const News = lazy(() => import("./components/News/News"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <>
        <Suspense fallback={<Spinner animation="border" />}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/news" component={News} />
            <Route path="/" exact component={Main} />
            <Route component={Page404} />
          </Switch>
        </Suspense>
      </>
    </BrowserRouter>
  );
}

export default App;
