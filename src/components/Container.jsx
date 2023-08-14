import { useState } from "react";

function Container() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const charSet =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    let generatedPassword = "";
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }

    setPassword(generatedPassword);
  };

  function myFunction() {
    // Get the text field
    var copyText = document.querySelector(".inpEl")
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

  return (
    <div className="container">
      <h1 className="h1El">Password Generator</h1>
      <div className="copy">
        <input className="inpEl" type="text" value={password} readOnly />
        <img onClick={()=>myFunction()} className="img" src="copy.svg" alt="" />
      </div>

      <div className="box">
        <div className="boxHeader">
          <h4 className="h4El">Character Length</h4>
          <h2 className="h2El">10</h2>
        </div>
        <input className="inp" type="range" />

        <div className="chek">
          <div className="chek-text">
            <input className="checkbox" type="checkbox" />
            <p className="pEl">Include Uppercase Letters</p>
          </div>
          <div className="chek-text">
            <input className="checkbox" type="checkbox" />
            <p className="pEl">Include Lowercase Letters</p>
          </div>
          <div className="chek-text">
            <input className="checkbox" type="checkbox" />
            <p className="pEl">Include Numbers</p>
          </div>
          <div className="chek-text">
            <input className="checkbox" type="checkbox" />
            <p className="pEl">Include Symbols</p>
          </div>
        </div>
        <div className="foother">
          <h3 className="h3Foother">STRENGTH</h3>
          <img src="medium.svg" alt="" />
        </div>

        <button className="btn" onClick={generatePassword}>
          GENERATE
        </button>
      </div>
    </div>
  );
}

export default Container;
