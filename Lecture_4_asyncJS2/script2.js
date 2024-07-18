let bringMaggi=new Promise(function(x,y){
    setTimeout(function(){
        let shopOpen=false
        if(shopOpen){
            x("Maggi mil gyi !!!!!")
        }
        else{
            y("Maggi Nahi Mili ...")
        }
    },5000)
})
// console.log(bringMaggi)
bringMaggi.then(function(data){
    console.log(data)
}).catch(function(msg){
    console.log(msg)
})