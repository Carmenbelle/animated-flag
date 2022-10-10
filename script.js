const flag = document.getElementById('flag');
const rows = 50;
const cols = 75;


const generateUnit = (colNumber) => {
    const flagUnit = document.createElement('div');
    flagUnit.classList.add("flag-unit");
    flagUnit.style.setProperty("animation-delay", `${colNumber * 10}ms`)
    flagUnit.style.setProperty("--displacement", `${colNumber / 4}px`)

    const col = document.getElementById(`col-${colNumber}`);

    col.innerHTML += flagUnit.outerHTML
}

for (let i = 0; i < cols; i++) {
    flag.innerHTML += `<div class="col" id="col-${i}"></div>`;
    for (let j = 0; j < rows; j++) {
        // console.log(i, j);
        generateUnit(i)
    }
}



// for (var i = 0; i < flag.offsetWidth; i++) {
//     var flag_img = document.createElement('div');
//     flag_img.className = 'flag_img';
//     flag_img.style.backgroundPosition = -i + 'px'
//     flag_img.style.animationDelay = i * 10 + 'ms'
//     flag.append(flag_img);
// }