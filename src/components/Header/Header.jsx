import React from 'react';
import {useDispatch} from "react-redux";
import logo from "../../assets/img/logo.png";
import {push} from "connected-react-router"

const Header = () => {
    const dispatch = useDispatch();

    return (
        <>
        <header>
            <div class="head_inner">
                <div class="container">
                    <div class="head_logo">
                        <h1 class="head_logo_img">
                            <img alt="Logo" src={logo} width="128px" onClick={() => dispatch(push('/'))} />
                        </h1>
                    </div>
                    {/* <a class="menuBtn" id="menuBtn">
                        <div></div>
                        <div></div>
                        <div></div>
                    </a> */}
                </div>
            </div>
            
            {/* <nav id="nav" class="groble_nav">
                <ul>
                    <li><a href="">私について</a></li>
                    <li><a href="">制作実績</a></li>
                    <li><a href="">お問い合わせ</a></li>
                </ul>
            </nav> */}
        </header>
            
        </>
    );
}

export default Header