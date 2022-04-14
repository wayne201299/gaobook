import "./_nav.scss";

function Nav(props: any) {
  return (
    <div className="w-48 bg-navBlue">
      <ul className="">
        <li className=" cursor-pointer ">
          <a href="#">
            <div className="p-6 hover:bg-navHover" onClick={dropdownClicked}>
              My Collection
            </div>
          </a>
          <ul id="dropdown-container" className="pl-10 hidden">
            <li className="hover:bg-navHover">
              <a href="#">
                <div>Season 1</div>
              </a>
            </li>
            <li className="hover:bg-navHover">
              <a href="#">
                <div>Season 2</div>
              </a>
            </li>
            <li className="hover:bg-navHover">
              <a href="#">
                <div>Season 3</div>
              </a>
            </li>
            <li className="hover:bg-navHover">
              <a href="#">
                <div>Season 4</div>
              </a>
            </li>
            <li className="hover:bg-navHover">
              <a href="#">
                <div>Season 5</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="hover:bg-navHover cursor-pointer">
          <a href="#">
            <div className="p-6">Map</div>
          </a>
        </li>
      </ul>
    </div>
  );
}

function dropdownClicked(): void {
  const drp = document.getElementById("dropdown-container")!;
  if (drp.style.display === "none") {
    drp.style.display = "block";
  } else {
    drp.style.display = "none";
  }
}

export default Nav;
