let userBalance = 500;
let price = 100;
let post = [null, null, null, "A001DFX0", null];
let postIndex = 1;
let smsCode = "A001DFX0";


function getTheParcel () {
    for (let i = 0; i <= post.length; i++ ){
        if (post[i] === smsCode){
            postIndex += i;
            userBalance -= price;
            console.log(`Заберите посылку ${smsCode} из ячейки № ${postIndex} 
                Ваш счет составляет: ${userBalance} ед.`);
                break;
        } 
    } 
}

getTheParcel(smsCode);
