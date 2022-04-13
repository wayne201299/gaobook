import "./_nav.scss";

function Nav(props: any) {
  return (
    <nav className="bg-navBlue">
      <ul>
        <li className="hover:bg-navHover cursor-pointer">
          <a href="#">Collection</a>
        </li>
        <li className="hover:bg-navHover cursor-pointer">
          <a href="#">map</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
