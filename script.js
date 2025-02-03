const messages = [
    "Quắc??",
    "Ơ tại sao??",
    "Em chắc chưa báo con kphun??",
    "Siêuuu chắc chắn chưa??",
    "Hứ t dỗi rồi)):<<<<",
    "Em thương yêu gì t",
    "Dỗi vãi ò",
    "Đúng là lòng dạ đàn bà",
    "Mắc ghét, t kiếm con khác",
    "Tới cỡ này rồi mà vẫn kéo kiếm chữ no à???",
    "Không chịu đâu tui phốt em đây huhuhu",
    "aicnbhiwebivb huhuhuhuhu"
];

let messageIndex = 0;
let gifIndex = 0;

const gifs = [
    "https://media.giphy.com/media/OgmbF5ibV01vflyU2n/giphy.gif",
    "https://media.giphy.com/media/dEZKOYuY4oQhMOZGEU/giphy.gif",
    "https://media.giphy.com/media/MFkTITj69pMOPlbfeX/giphy.gif",
    "https://media.giphy.com/media/27rspbAAESlzzFtN2e/giphy.gif",
    "https://media.giphy.com/media/65Th0K9yQJtKcxeYyN/giphy.gif",
    "https://media.giphy.com/media/DBH3acVby8yT3geiJD/giphy.gif",
    "https://media.giphy.com/media/uBn5A3rxwD7N8nZvlw/giphy.gif",
    "https://media.giphy.com/media/SVkhYVCi8fKPKvypi6/giphy.gif",
    "https://media.giphy.com/media/AhNIakkgmSKlD4NEcf/giphy.gif",
    "https://media.giphy.com/media/IbyhhY66Z8ovFt0Cv3/giphy.gif",
    "https://media.giphy.com/media/TFUhSMPFJG7fPAiLpQ/giphy.gif",
    "https://media.giphy.com/media/1Bg8qcSlHEf3osc3yN/giphy.gif"
];

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length; 
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    
    const gifElement = document.querySelector('.gif-element'); 
    gifElement.src = gifs[gifIndex];
    
    gifIndex = (gifIndex + 1) % gifs.length;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}