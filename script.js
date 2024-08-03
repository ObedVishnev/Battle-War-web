
let i = 1;
function language() {
    const sectionText1 = document.getElementById("text-h2-1");
    const h31 = document.getElementById("h3-1");
    const text3 = document.querySelector(".text-3");
    const downloadtext = document.querySelector(".download-text");
    const button = document.getElementById("download-button");
    h31.innerHTML="";
    if (i % 2 === 1) {
        sectionText1.innerHTML = `<span class='font-extrabold'>Battle War</span>
        is a first-person shooter that is unlike other games of this genre. 
        <h3>You can play online against players from all over the world using interesting mechanics.</h3>
        `
        text3.innerHTML="Varied and interesting maps.<br>Lots of weapons, skins and much more";
        downloadtext.innerHTML = "You can download the game by clicking the button"
        button.innerHTML="download"
    }
    else {
        sectionText1.innerHTML = `<span class="font-extrabold">Battle War</span> - это шутер от первого лица который
                    не похож на другие игры этого жанра. <h3>Вы можете играть
                        онлайн против игроков со всего мира используя интересные механики.</h3>`;
        downloadtext.innerHTML = "Скачать игру можно по кнопке ";
        text3.innerHTML = "Разнообразные и интересные карты.<br>Много оружия, скины и многое другое"
        button.innerHTML="Скачать"
    }
    i++;
}

const menu = document.getElementById("menu");
const leftSide = document.getElementById("aside");
    menu.addEventListener("click",(e)=> {
        setTimeout(()=>{
            console.log(leftSide)
            leftSide.style.display = "flex";
            leftSide.classList.add("aside_anim");
        },0)
        setTimeout(()=> {
            leftSide.style.left="50%"
            leftSide.classList.remove("aside_anim_2");
        },400);
    }) 
const close = document.getElementById("close");
    close.addEventListener("click",(e)=> {
        setTimeout(()=> {
            leftSide.classList.add("aside_anim_2");
        },0)
        setTimeout(()=> {
            leftSide.style.display="none";
            leftSide.classList.remove("aside_anim_2")
        },400)
    })