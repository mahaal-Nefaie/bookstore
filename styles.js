/*function containerStyle(container) {
    container.style.display = "flex";
    container.style.flexWrap = "nowrap";
    container.style.gap = "20px";
    container.style.overflowX = "auto";
    container.style.overflowY = "hidden";
    container.style.padding = "10px";
    container.style.scrollBehavior = "smooth";
}*/
function gridContainerStyle(container){
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.justifyContent = "center";
    container.style.gap = "20px";
}
function sliderContainerStyle(container){
    container.style.display = "flex";
    container.style.flexWrap = "nowrap";
    container.style.gap = "20px";
    container.style.overflowX = "auto";
    container.style.scrollBehavior = "smooth";
     container.style.direction = "rtl";

}
function cardStyle(card) {
    card.style.minWidth = "220px";
    card.style.width = "220px";

    card.style.padding = "15px";
    card.style.border = "1px solid rgba(226,220,220,0.18)";
    card.style.borderRadius = "12px";
    card.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
    card.style.textAlign = "center";
    card.style.backgroundColor = "rgba(255,255,255,0.1)";
    card.style.backdropFilter = "blur(10px)";
    card.style.display = "flex";
    card.style.flexDirection = "column";

    card.style.flexShrink = "0";
}
if (window.innerWidth <= 768) {
    document.querySelectorAll(".card").forEach(card => {
        card.style.maxWidth = "100%";
    });
}
function buttonsDivStyle(div) {
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.gap = "10px";
    div.style.marginTop = "10px";
}

function cartButtonStyle(cartButton) {
    cartButton.style.background = "rgba(61, 155, 192, 0.8)";
    cartButton.style.color = "white";
    cartButton.style.border = "none";
    cartButton.style.padding = "8px";
    cartButton.style.borderRadius = "8px";
    cartButton.style.cursor = "pointer";
    cartButton.style.fontSize = "16px";
    cartButton.addEventListener("mouseover", () => {
        cartButton.style.backgroundColor = "rgba(90, 148, 214, 0.8)";
        cartButton.style.transform = "scale(1.05)";
    });
    cartButton.addEventListener("mouseout", () => {
        cartButton.style.backgroundColor = "rgba(61, 155, 192, 0.8)";
        cartButton.style.transform = "scale(1)";
    })};
  function favButtonStyle(favButton) {
    favButton.style.backgroundColor = "red";
    favButton.style.color = "white";
    favButton.style.border = "none";
    favButton.style.padding = "8px";
    favButton.style.borderRadius = "8px";
    favButton.style.cursor = "pointer";
}



function messageStyle(msg) {
    msg.style.background = "rgba(144, 233, 144, 1)";
    msg.style.fontSize = "18px";
    //msg.style.marginTop = "10px";
    msg.style.bottom = "30px";
    // msg.style.right = "30px";
    msg.style.borderRadius = "8px";
    msg.style.color = "black";
    msg.style.padding = "12px 18px";
}


function notificationsStyle(notifications) {
    notifications.style.position = "fixed";
    notifications.style.bottom = "20px";
    notifications.style.right = "20px";
    notifications.style.display = "flex";
    notifications.style.flexDirection = "column";
    notifications.style.gap = "10px";
    notifications.style.zIndex = "1000";
}