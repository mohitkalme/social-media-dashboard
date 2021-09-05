"use strict";var dark=document.getElementById("dark");window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){e.matches?(document.body.classList="dark",dark.checked=!1):(document.body.classList="light",dark.checked=!0)}));var setLightMode=function(){document.body.classList="light"},setDarkMode=function(){document.body.classList="dark"},setColorMode=function(){localStorage.getItem("theme")&&("dark"===localStorage.getItem("theme")?(dark.checked=!1,setDarkMode()):(dark.checked=!0,setLightMode()))};function themeChanger(){dark.checked?(localStorage.setItem("theme","light"),setLightMode()):(localStorage.setItem("theme","dark"),setDarkMode())}setColorMode(),dark.addEventListener("click",themeChanger);
//# sourceMappingURL=script.js.map