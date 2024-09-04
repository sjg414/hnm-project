//page 제목과 메뉴 표현을 위한 컴포넌트
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Menubar = ({ authenticate, setAuthenticate }) => {
  const [loginText, setLoginText] = useState("로그인"); //로그인, 로그아웃 상태관리
  const [display, setDisplay] = useState("none");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" }); //mobile responsive
  const navigate = useNavigate();

  //메뉴 리스트
  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sports",
    "Sale",
    "지속가능성",
  ];

  //로그인 버튼 클릭 시 로그인 화면으로 이동
  const goToLogin = () => {
    //인증된 상태이면(로그인상태이면), 로그아웃 후 홈페이지로 이동
    if (authenticate === true) {
      setAuthenticate(false);
      navigate("/");
    } else {
      //인증되지 않았으면, 로그인 페이지로 이동
      navigate("/login");
    }
  };

  //검색 키워드 받아서 url 변경
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  //인증 상태에 따라 로그인, 로그아웃 표시
  useEffect(() => {
    authenticate === true ? setLoginText("로그아웃") : setLoginText("로그인");
  }, [authenticate]);

  return (
    <div>
      <div className="top-area">
        {isTabletOrMobile && (
          <div>
            <div className="side-button">
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => {
                  setDisplay("");
                }}
              />
            </div>
            <div className="side-menubar" style={{ display: display }}>
              <div>
                <ul>
                  {menuList.map((item) => (
                    <li
                      key={item}
                      onClick={() => {
                        console.log("item?", item);
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="side-exit">
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => {
                    setDisplay("none");
                  }}
                />
              </div>
            </div>
          </div>
        )}

        <div>
          <div className="login-container" onClick={() => goToLogin()}>
            <FontAwesomeIcon icon={faUser} />
            <div>{loginText}</div>
          </div>
        </div>
      </div>
      <div className="menu-logo">
        <img
          width={200}
          src="https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg"
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      {!isTabletOrMobile && (
        <div className="menu-area">
          <ul className="menubar">
            {menuList.map((item) => (
              <li
                key={item}
                onClick={() => {
                  console.log("item?", item);
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="search-area">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              type="text"
              placeholder="제품검색"
              onKeyDown={(event) => {
                search(event);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menubar;
