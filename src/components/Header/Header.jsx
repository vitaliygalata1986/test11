import { useState } from "react";
import { Link } from "react-router-dom";

// style.css
import "./Header.css";

export default function Header() {
  // change color
  const [changeColor, setChangeColor] = useState(false);

  // input
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <header className="header">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/img/LogoMeal.jpg" alt="logo" />
        </a>

        <ul className="nav navbar-nav">
          {/* random link */}
          <li className="header-random">
            <Link className="header-random-link" to="/random">
              Random Product
            </Link>
          </li>

          <li className="home" onClick={() => console.log(value)}>
            <a className="home" href="/">
              Home
            </a>
          </li>

          <li
            className="api"
            onMouseEnter={() => setChangeColor(true)}
            onMouseLeave={() => setChangeColor(false)}
            style={{
              backgroundColor: changeColor ? "#c52d2f" : "",
            }}
          >
            <a className="api" href="/">
              API
            </a>
          </li>

          <li>
            <div className="search">
              <form action="">
                <input
                  value={value}
                  onChange={onChange}
                  type="text"
                  className="search-form"
                  placeholder=" Search"
                />
              </form>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
