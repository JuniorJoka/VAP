import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    user-select: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

div#toast{
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
}`;
