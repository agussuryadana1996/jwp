/* Variable */

/* Variable string*/
let nama="agus";

/* Variable integer*/
let nilai=50;

/* Constant*/
const country="Indonesia";

/* Data Type*/

/* Operator*/

/* output*/
//alert(nama);

/* Conditional*/
/*if (nama=="agus"){
    alert("welcome");
} else {
    alert("pergi sana");
}*/

/* Conditional
for (let i=0; i<=10; i++){
    //console.log(i);
}

let j = 0;
while (j<=15) {
    //console.log(j);
    j++;
}

let k = 0;
do {
    //console.log( k );
  k++;
} while (k < 3);*/

/* function
function test1() {
    if (nama=="agus"){
        console.log("masuk");
    } else {
        console.log("keluar");
    }
}

test1();*/

function login(username, password){
    if(username && pasword){
        console.log("Selamat Datang");
        console.log("username :" + username);
        console.log("password :" + password);
    } else if(username || password){
        console.log("Salah");
    }
    else{
        console.log("gagal");
    }
}

login();