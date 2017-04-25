const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

bands.sort((band1, band2) => {
    const band1Array = band1.split(" ");
    const band2Array = band2.split(" ");
    let band1Compare;
    let band2Compare
    
    if(band1Array[0] == "A" || band1Array[0] == "An" || band1Array[0] == "The") {
        band1Compare = band1Array[1];
    }
    else band1Compare = band1Array[0];
    
    if(band2Array[0] == "A" || band2Array[0] == "An" || band2Array[0] == "The") {
        band2Compare = band2Array[1];
    }
    else band2Compare = band2Array[0];
    
    return band1Compare < band2Compare ? -1 : 1;
});

const bandList = document.querySelector("#bands");
bands.forEach(band => {
    bandList.innerHTML += `<li>${band}</li>`;
});

// bands.forEach(band => {
//     let listItem = document.createElement("li");
//     listItem.innerHTML = band;
//     bandList.appendChild(listItem);
// });
