import { Link } from "react-router-dom";
import "./_nav.scss";

function Nav(props: any) {
  return (
    <div className="w-48 bg-white shadow-md">
      <ul className="">
        <li className=" cursor-pointer ">
          <Link to="/collection">
            <div
              className="p-6 hover:bg-slate-100 active:bg-slate-100"
              onClick={dropdownClicked}
            >
              My Collection
            </div>
          </Link>
          <ul id="dropdown-container" className="pl-10 hidden">
            <li className="hover:bg-slate-100 active:bg-slate-100 p-2">
              <Link to="/collection/1">
                <div>第一彈</div>
              </Link>
            </li>
            <li className="hover:bg-slate-100 active:bg-slate-100 p-2">
              <Link to="/collection/2">
                <div>第二彈</div>
              </Link>
            </li>
            <li className="hover:bg-slate-100 active:bg-slate-100 p-2">
              <Link to="/collection/3">
                <div>第三彈</div>
              </Link>
            </li>
            <li className="hover:bg-slate-100 active:bg-slate-100 p-2">
              <Link to="/collection/4">
                <div>第四彈</div>
              </Link>
            </li>
            <li className="hover:bg-slate-100 active:bg-slate-100 p-2">
              <Link to="/collection/5">
                <div>第五彈</div>
              </Link>
            </li>
          </ul>
        </li>
        <li className="hover:bg-slate-100 active:bg-slate-100 cursor-pointer">
          <Link to="/map">
            <div className="p-6">Map</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

function dropdownClicked(): void {
  const drp = document.getElementById("dropdown-container")!;
  logDemo.bind("bind demo");
  if (drp.style.display === "none") {
    drp.style.display = "block";
  } else {
    drp.style.display = "none";
  }
}

function logDemo(value: string): void {
  console.log("Hi Im demo what is " + value);
}

export default Nav;
