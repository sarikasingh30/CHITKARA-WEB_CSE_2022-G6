// endTime - startTime >=1 sec

function delay(){
let currentTime=new Date().getTime()
while(new Date().getTime() - currentTime < 1000){

}

}
// delay()
function delayn(n){
    for(let i=0;i<n;i++){
        delay()
    }
}
delayn(5)
console.log("Hello")




