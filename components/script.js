let txtCount = document.querySelector('#txt-count');
let textarea = document.querySelector('#text-cont');
let run = document.querySelector('#run');
let removeError = document.querySelector('#cancel');

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