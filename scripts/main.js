
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/DS 4200 Image 1.jpeg") {
      myImage.setAttribute("src", "images/DS 4200 Image 2.jpg");
    } 
    else if (mySrc === "images/DS 4200 Image 2.jpg") {
      myImage.setAttribute("src", "images/DS 4200 Image 3.jpg");
    }
    else if (mySrc === "images/DS 4200 Image 3.jpg") {
      myImage.setAttribute("src", "images/DS 4200 Image 4.jpeg");
    }
    else if (mySrc === "images/DS 4200 Image 4.jpeg") {
      myImage.setAttribute("src", "images/DS 4200 Image 5.jpeg");
    }
    else {
      myImage.setAttribute("src", "images/DS 4200 Image 1.jpeg");
    }
  };

  
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };