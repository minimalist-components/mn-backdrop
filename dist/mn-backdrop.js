"use strict";function hideBackdrop(event){console.log("keyup");var esc="Escape"===event.key,backdropVisible=document.body.classList.contains("mn-backdrop-visible");esc&&backdropVisible&&document.body.classList.remove("mn-backdrop-visible")}document.addEventListener("keyup",hideBackdrop),console.log("keyup?");
//# sourceMappingURL=mn-backdrop.js.map
