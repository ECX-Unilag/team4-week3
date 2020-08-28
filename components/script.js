let plagResp, plagCent, uniqResp, uniqCent, downloadBtn, downloadScreen,
    drops, openDrops, cancelDownload, scrOne, scrTwo, nextDslide, Yes, No;

    
    plagResp = document.querySelector('#plaigarised-resp');
    plagCent = document.querySelector('#plaigiarism-percent');
    uniqResp = document.querySelector('#unique-resp');
    uniqCent = document.querySelector('#unique-percent');
    downloadBtn = document.querySelector('#download');
    downloadScreen = document.querySelector('#downloadScreen');
    drops = document.querySelector('#drops');
    openDrops = document.querySelector('#open-drops');
    cancelDownload = document.querySelector('#cancel-download');
    scrOne = document.querySelector('#screen-one');
    scrTwo = document.querySelector('#screen-two');
    nextDslide = document.querySelector('#next-dslide');
    Yes = document.querySelector('#yes');
    No = document.querySelector('#no');
    Exit = document.querySelector('#exit');
    


    drops.style.display = 'none';
    downloadScreen.style.display = 'none';
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
    

downloadBtn.addEventListener('click', function() {
    downloadScreen.style.display = 'block';
    downloadScreen.style.position = 'absolute';
    downloadScreen.style.top = '27%';
    downloadScreen.style.width = "44%";
    downloadScreen.style.marginLeft = '8%';
});
cancelDownload.onclick = cancelDOwnloads;
No.onclick = cancelDOwnloads;
Yes.onclick = function() {
    window.location.href = "download-page.html";
}
function cancelDOwnloads() {
    downloadScreen.style.display = 'none';
}
nextDslide.onclick = function() {
    scrOne.style.display = 'none';
    scrTwo.style.display = 'block';
}
openDrops.onclick = function() {
    if(drops.style.display == 'none') {
        drops.style.display = 'block';
    } else {
        drops.style.display = 'none';
    }
}

