window.addEventListener('load', (event) => {
  //Regenerate image
  document.getElementById("regenButton").addEventListener("click",(event)=>{
    console.log("Calling regenerateImage function");
    regenerateImage();
  });
  console.log("Events added");
  regenerateImage();
});
//https://www.w3schools.com/tags/canvas_imagedata_data.asp
function regenerateImage(){
  var canvas = document.getElementById("generatedimage");
  var ctx = canvas.getContext("2d");
  var imgData = ctx.createImageData(1920, 1080);
  for (i = 0; i < imgData.data.length; i += 4) {
    //math random all colors
    imgData.data[i+0] = Math.round((Math.random() * 255));
    imgData.data[i+1] = Math.round((Math.random() * 255));
    imgData.data[i+2] = Math.round((Math.random() * 255));
    imgData.data[i+3] = 255;
  }
  ctx.putImageData(imgData, 10, 10);
}