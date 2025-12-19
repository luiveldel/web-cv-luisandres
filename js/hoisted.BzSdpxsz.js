import"./hoisted.DwTsfwdn.js";

class i extends HTMLElement{constructor(){super();
    const o=this.dataset.videoId,r=this.dataset.title;
    this.querySelector("button")?.addEventListener("click",()=>{const t=document.createElement("iframe");
        t.setAttribute("frameborder","0"),
        t.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),
        t.setAttribute("allowfullscreen",""),
        t.setAttribute("width","100%"),
        t.setAttribute("height","100%"),
        this.querySelector(".video-container")?.replaceChildren(t)})}}customElements.define("youtube-embed",i);

    function n(){const e=document.getElementById("dynamicIframe");if(e&&e.contentWindow)try{e.style.height=e.contentWindow.document.body.scrollHeight+"px"}catch(o){console.warn("Cannot resize iframe due to CORS or other issue",o)}}window.addEventListener("load",()=>{const e=document.getElementById("dynamicIframe");e&&e.addEventListener("load",n)});
