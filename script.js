const canvas = document.getElementById("myCanvas")
console.log(canvas)
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker")

isDrawing = false;


function addDate(){
    const date = new Date().toLocaleDateString();
    ctx.font = "16px Verdana"
    ctx.strokeText(date,lastX+10,lastY+10,)
}

function addTime(){
    const date = new Date().toLocaleTimeString()
    ctx.font = "16px Verdana"
    ctx.strokeText(date,lastX+50,lastY+50)
}


colorPicker.addEventListener("change",(e) => {
    ctx.strokeStyle = e.target.value
    console.log(e.target.value)
})

canvas.addEventListener("mousedown",(e) =>{
    isDrawing = true
    lastX = e.offsetX
    lastY = e.offsetY
})

canvas.addEventListener("mousemove",(e) =>{
   if (isDrawing) {
    ctx.beginPath()
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke()
    lastX = e.offsetX
    lastY = e.offsetY
   }
})

canvas.addEventListener("mouseup", (e) => {
    isDrawing = false;

})

const backgroundColor = document.getElementById("backgroundColor")
console.log(backgroundColor)

backgroundColor.addEventListener("change", (e) => {
    ctx.fillStyle = e.target.value
    ctx.fillRect(0,0,800,585)
})

const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click",(e) => {
    ctx.fillStyle = "#ffffff"
    ctx.clearRect(0,0,800,585);
})

const fontSize = document.getElementById("FontSize")

fontSize.addEventListener("change", (e) => ctx.lineWidth = e.target.value)

const saveBtn = document.getElementById("Save")


saveBtn.addEventListener("click", () => {
    addDate()
    addTime()
    localStorage.setItem("canvasContents",canvas.toDataURL())
    let link = document.createElement("a")
    link.download = "my-canvas.png"
    link.href = canvas.toDataURL()
    link.click()

})
