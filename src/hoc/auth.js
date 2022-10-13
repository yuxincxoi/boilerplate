import { Axios } from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../actions/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
  // option
  // true: 로그인 유저만 출입 가능, false: 로그인 유저 출입 불가, null: 아무나 출입 가능

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);

        // 로그인하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            navigate("/login");
          }
        } else {
          // 로그인 상태
          if (adminRoute && !response.payload.isAdmin) {
            navigate("/");
          } else {
            navigate("/");
          }
        }
      });
    });

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
