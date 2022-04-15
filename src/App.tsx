import "./App.scss";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Collection from "./page/Collection";
import Map from "./page/Map";

function App(props: any) {
  return (
    <div className="">
      <Link to="/collection">
        <div className="m-4 text-5xl cursor-pointer">Home</div>
      </Link>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Collection />} />
          <Route path="collection" element={<Collection />} />
          <Route path="map" element={<Map />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="flex">
      <Nav></Nav>
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
