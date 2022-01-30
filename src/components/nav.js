import { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  box-shadow: ${(props) => {
    return "1px 1px 4px 0 " + props.theme.colors.shadowColor2;
  }};
  width: 100%;
  z-index: 3;

  .logo {
    display: block;
    float: left;
    font-size: 2em;
    padding: 10px 20px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.buttonColor} !important;
    background-color: ${(props) =>
      props.theme.colors.buttonBackground} !important;
    &:hover {
      background-color: ${(props) => props.theme.colors.buttonColor} !important;
      color: ${(props) => props.theme.colors.buttonBackground} !important;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;

    li {
      a {
        display: block;
        padding: 20px 20px;
        border-right: 1px solid ${(props) => props.theme.colors.shadowColor2};
        text-decoration: none;
        color: ${(props) => props.theme.colors.buttonColor} !important;
        background-color: ${(props) =>
          props.theme.colors.buttonBackground} !important;
        &:hover {
          background-color: ${(props) =>
            props.theme.colors.buttonColor} !important;
          color: ${(props) => props.theme.colors.buttonBackground} !important;
        }
        @media (min-width: 48em) {
          padding: 20px 30px;
        }
      }
      @media (min-width: 48em) {
        float: left;
      }
    }
  }

  .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
    @media (min-width: 48em) {
      clear: none;
      float: right;
      max-height: none;
    }
  }

  .menu-btn {
    display: none;

    &:checked ~ .menu {
      max-height: 240px;
    }
    &:checked ~ .menu-icon .navicon {
      background: transparent;
    }
    &:checked ~ .menu-icon .navicon:before {
      transform: rotate(-45deg);
    }
    &:checked ~ .menu-icon .navicon:after {
      transform: rotate(45deg);
    }
    &:checked ~ .menu-icon:not(.steps) .navicon:before,
    &:checked ~ .menu-icon:not(.steps) .navicon:after {
      top: 0;
    }
  }

  .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
    @media (min-width: 48em) {
      display: none;
    }
  }
  .navicon {
    background: ${(props) => props.theme.colors.buttonBackground};
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;

    &::before,
    &::after {
      background: ${(props) => props.theme.colors.buttonBackground};
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      transition: all 0.2s ease-out;
      width: 100%;
    }

    &::before {
      top: 5px;
    }

    &::after {
      top: -5px;
    }
  }
`;

function Nav({ routes, appName }) {
  return (
    <StyledNav>
      {appName?.length > 0 ? (
        <Link to="/" className="logo">
          {appName}
        </Link>
      ) : (
        ""
      )}
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        {routes?.map((navitem, i) => {
          return (
            <li key={i}>
              <Link key={i} to={`/${navitem.to}`} className={navitem.className}>
                {navitem.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </StyledNav>
  );
}

export default memo(Nav);
