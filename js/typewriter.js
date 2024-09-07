// const words = [
//     "Hey there! I'm a software developer, crafting code that types itself , builds cool things, and brings ideas to life.  See more on my GitHub/portfolio! "
// ];
// let i = 0;
// let j = 0;
// let currentWord = "";
// let isDeleting = false;

// function type() {
//     currentWord = words[i];
//     if (isDeleting) {
//         document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
//         j--;
//         if (j == 0) {
//             isDeleting = false;
//             i++;
//             if (i == words.length) {
//                 i = 0;
//             }
//         }
//     } else {
//         document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
//         j++;
//         if (j == currentWord.length) {
//             isDeleting = true;
//         }
//     }
//     setTimeout(type, 100);
// }

// type();


const words = [
    "Hello!, I'm Bernard, A Full-Stack Developer. Discover my work, Where innovation meets creativity and passion for excellence.  Welcome!"
];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    currentWord = words[i];
    if (isDeleting) {
        document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
        j--;
        if (j == 0) {
            isDeleting = false;
            i++;
            if (i == words.length) {
                i = 0;
            }
        }
    } else {
        document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
        j++;
        if (j == currentWord.length) {
            isDeleting = true;
        }
    }
    setTimeout(type, 100);
}

type();