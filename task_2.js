const str = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const word = 'Lorem';

let flag;
let temp;
for (let i = 0; i < str.length; i++) {
    temp = i + 1;
    flag = true;
    for (let j = 0; j < word.length; j++) {
        if ((i >= str.length)||(word[j] !== str[i++])) {
            flag = false;
            break;
        }
    }
    if (flag) break;
    else {
        i = temp;
    }
}
console.log(`String:\n${str}\nHere is word that we are searching for: ${word}\nTrue or False: ${flag}`)
