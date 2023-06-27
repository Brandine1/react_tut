import logo from "../assets/images/logo_icon.webp";
export default function Header(props) {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="brandine" height="60" />
      <ul>
        <li>
          <a href="/">Brandine</a>
        </li>
        <li>
          <a href="/kletus_spuckler">Kletus</a>
        </li>
      </ul>
    </nav>
  );
}
