let txtCount = document.querySelector('#txt-count');
let textarea = document.querySelector('#text-cont');
let run = document.querySelector('#run');
let removeError = document.querySelector('#cancel');
let plagResp = document.querySelector('#plaigarised-resp');
let plagCent = document.querySelector('#plaigiarism-percent');
let uniqResp = document.querySelector('#unique-resp');
let uniqCent = document.querySelector('#unique-percent');
let downloadBtn = document.querySelector('#download');
let downloadScreen = document.querySelector('#downloadScreen');
let drops = document.querySelector('#drops');
let openDrops = document.querySelector('#open-drops');
let cancelDownload = document.querySelector('#cancel-download');

drops.style.display = 'none';
downloadScreen.style.display = 'none';
downloadBtn.addEventListener('click', function() {
    downloadScreen.style.display = 'block';
    downloadScreen.style.position = 'absolute';
    downloadScreen.style.top = '27%';
    downloadScreen.style.width = "44%";
    downloadScreen.style.marginLeft = '8%';
});

cancelDownload.onclick = function() {
    downloadScreen.style.display = 'none';
}

openDrops.onclick = function() {
    if(drops.style.display == 'none') {
        drops.style.display = 'block';
    } else {
        drops.style.display = 'none';
    }
}


// let menu, drop, ham, closes;
//         menu = document.querySelector('#menu');
//         drop = document.querySelector('#drop');
//         ham = 'Assets/menu.svg';
//         closes = 'Assets/close.svg';
//         menu.onclick = function() {
//             if (menu.src.match(ham)) {
//                 menu.src = closes;
//                 drop.style.display = 'flex';
//             } else {
//                 menu.src = ham;
//                 drop.style.display = 'none';
//             }
//         }

plagResp.style.color = '#FF0000';
plagResp.style.fontWeight = 'bold';
plagCent.style.color = '#FF0000';
plagCent.style.fontWeight = 'bold';
plagCent.style.fontSize = '1.8vw';
uniqResp.style.color = '#00D930';
uniqResp.style.fontWeight = 'bold';
uniqCent.style.color = '#00D930';
uniqCent.style.fontWeight = 'bold';
uniqCent.style.fontSize = '1.8vw';

textarea.value = textarea.value.replace(/^\s*|\s*$/g,'');

    let errorMsg = document.querySelector('#errorMsg');
    
    errorMsg.style.width = "44%";
    errorMsg.style.display = "none";
    errorMsg.style.marginLeft = '8%';
    errorMsg.style.background = '#FFD874';
    errorMsg.style.padding = "1%";
    errorMsg.style.fontSize = "2vw";   
    errorMsg.style.color = 'rgba(0, 0, 0, 0.88)';
    errorMsg.style.position = 'absolute';
    errorMsg.style.borderRadius = '5px';
    errorMsg.style.top = '27%';

function showAlert() {
    errorMsg.style.display = "block";
}

function changeBottomBorder() {
    textarea.style.borderColor = '#FDB600';
    var count = (textarea.value.split(" ").length) - 1;
    txtCount.innerHTML = count + ' / 500 Words';
    if (textarea.value.length == 0) {
      textarea.style.borderBottom = '4px solid #E4E4E4';
      count = 0;
    } else {
      textarea.style.borderBottom = '4px solid #FDB600';
    }
    if(count === 5) {
        showAlert();
        setTimeout (function () {
            errorMsg.style.display = "none";
        }, 5000);
        textarea.disabled = true;
        run.disabled = true;
        textarea.style.borderBottom = '4px solid #FF0000';
    }
};
removeError.addEventListener('click', function() {
    textarea.disabled = false;
    run.disabled = false;  
    textarea.style.borderBottom = '4px solid #FDB600';
});



run.addEventListener('click', function() {
    window.location.href =  "result-page.html";
});