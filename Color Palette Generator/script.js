const refreshBtn = document.querySelector(".refresh-btn");
const maxPaletteBoxes = 32;
const container = document.querySelector(".container");

const generatePalette = () => {
  container.innerHTML = "";
  for (let index = 0; index < maxPaletteBoxes; index++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    //https://www.w3schools.com/jsref/jsref_string_padstart.asp
    randomHex = `#${randomHex.padStart(6, "0")}`;
    console.log(randomHex);
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = ` <div class="rect-box" style="background: ${randomHex}"></div>
                 <span class="hex-value">${randomHex}</span>`;
    
    color.addEventListener('click',()=>copyColor(color,randomHex));
    container.append(color);
  }
};


const copyColor = (elem,hexVal)=>{
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then(()=>{
       colorElement.innerText = 'Copied';
        setTimeout(()=>{
            colorElement.innerText = hexVal;
        },1000);
    }).catch(()=>{
        alert('Unable to Copy Hex Code');
    })
}


generatePalette();


refreshBtn.addEventListener("click", generatePalette);
