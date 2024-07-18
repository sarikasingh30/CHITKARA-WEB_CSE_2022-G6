// Yeh function promise kar raha hai movie download 
// krke dega 
// - FulFill: Movie download ho gai
// - Rejected: Movie due to any reason 
// download nahi ho paai 


// "myurldownload.com/avengers.mp4"






// function downloadMovie (url) {
//     return new Promise(function (resolve, reject) {
//         let ext = url.split('/').pop().split('.').pop(); 
//         if(ext != 'mp4'){
//             reject("Sahi URL dedo");
//         }
//         else {
//             setTimeout(function(){
//             resolve(url.split('/').pop());
//             }, 2000);
//         }
//     })
// }
// // downloadMovie function ek promise return krta hai, 
// // downloadMovie is a promise 

// function compressMovie (file) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function(){
//             let compressedM = file.split('.')[0]+".zip"; 
//             console.log("file compressed",compressedM)
//             resolve(compressedM);
//         }, 2000);
        
//     })
// }

// function uploadMovie (file) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function(){
//             let newLink= "www.newSite.com/"+file; 
//             console.log("filecompressed",newLink)
//             resolve(newLink);
//         }, 2000);
        
//     })
// }

// downloadMovie('myurl.com/avengers.mp4')
// .then(function(movie){
// console.log(movie);
// return movie
// }).then(compressMovie)
// .then(uploadMovie)
// .catch(function (err) {
// console.log(err);
// })


function hello(){
    console.log(this)
}
hello()