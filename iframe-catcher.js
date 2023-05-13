//get current page URL
let pageUrl = window.location.href;
let iframeUrl = '';

// Example Page URL that has an iframe parameter
pageUrl = "http://domain.com?iframe_url=https://example.com?product=shirt&color=blue&newuser&size=m"
let urlParams = pageUrl.split("?");
urlParams.shift();// Ignoring the left-side of the query String


//Get the value of iframe parameter from the window URL
for(let i = 0; i < urlParams.length; i++){

    let queryString = new URLSearchParams(urlParams[i])
    for(let pair of queryString.entries()){
        if (pair[0] === "iframe_url"){
            iframeUrl = pair[1]; //iframe src
        }
    }
}

console.log("Page URL is -->", pageUrl); 
console.log("iframe URL is -->", iframeUrl);

//Injecting an iframe element to the website with iframeUrl
if(iframeUrl){

    let styles = `
    
    #container{
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
    }
    
    #button{
        width: fit-content;
        height: fit-content;
        font-size: 2rem;
    }

    #button:hover{
        cursor: pointer;
        color: white;
        background-color: black;
        transition: 200ms ease-in-out;
    }

    #frame{
        width: 600px;
        height: 300px;
        border: 1px solid black;
        border-radius: 10px;
    }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    const cont = document.createElement("div");
    cont.id = "container";
    document.body.appendChild(cont);
    const container = document.querySelector('#container')

    const but = document.createElement("button");
    but.type = "button";
    but.id = "button";
    but.innerText = "Button";
    container.appendChild(but);
    

    const iframe = document.createElement("iframe");
    iframe.src = "";
    iframe.id = "frame";
    container.appendChild(iframe);

    const h = document.createElement("h1")
    h.innerText = iframeUrl;
    container.appendChild(h);
}