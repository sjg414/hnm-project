import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavBar = ({ authentication, setAuthentication }) => {
  const [login, setLogin] = useState("로그인");
  const [display, setDisplay] = useState("none");
  const navigate = useNavigate();
  const menuItems = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sport",
    "Sale",
    "지속가능성",
  ];

  const goToLogin = () => {
    if (authentication === true) {
      setLogin("로그인");
      setAuthentication(false);
      navigate("/");
    } else navigate("/login");
  };
  const goToHome = () => {
    navigate("/");
  };
  const search = (event) => {
    let text = event.target.value;
    if (event.key === "Enter") {
      navigate(`/?q=${text}`);
    }
  };

  useEffect(() => {
    authentication === true ? setLogin("로그아웃") : setLogin("로그인");
  }, [authentication]);

  return (
    <div className="NavBar-area">
      <div className="NavBar-top">
        <div className="sideMenu-area">
          <div className="side-menuButton hide">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => {
                setDisplay("");
              }}
            />
          </div>
          <div className="side-menuList hide" style={{ display: `${display}` }}>
            {menuItems.map((item) => (
              <button>{item}</button>
            ))}
            <FontAwesomeIcon
              className="side-exit"
              icon={faTimes}
              onClick={() => {
                setDisplay("none");
              }}
            />
          </div>
        </div>
        <div className="logo-img">
          <img
            width={90}
            src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
            alt=""
            onClick={goToHome}
          />
        </div>
        <div className="login-area" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          {login}
        </div>
      </div>
      <div className="NavBar-bottom">
        <div className="menuBtn">
          {menuItems.map((item) => (
            <button>{item}</button>
          ))}
        </div>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="제품검색"
            onKeyDown={(event) => {
              search(event);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
