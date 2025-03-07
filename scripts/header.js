const { height: pageHederHeight} = document
.querySelector(".page-header")
.getBoundingClientRect ();
document.body.style.paddingTop = `${pageHederHeight}px`;
