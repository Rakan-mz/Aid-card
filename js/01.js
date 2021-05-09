var text_title = "";
// var text_title2 = "";
var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');
var img = new Image();
img.crossOrigin = "anonymous";

var x = 370;
var y = 600;


window.addEventListener('load', DrawPlaceholder)

function DrawPlaceholder() {
    img.onload = function () {
        DrawOverlay(img);
        DrawText();
        DynamicText(img)
    };
    img.src = '../img/3.jpeg';

}
function DrawOverlay(img) {
    ctx.drawImage(img, 0, 0);
    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
colorInput = document.getElementById("color");

font_size = document.getElementById("font_size");


var fontSize = font_size.value;

var size_template = "bold Xpx Tajawal";
ctx.font = size_template.replace("Xpx", $("#font_size").val() + "px");
var value = '';

var x;

// function passVal(val){
//     x = this.val;
//     x = x + "px";
// }


var myGamePiece;

function startGame() {
    var words = "heloo woeweelrd"
//     myGamePiece = new component("red", 10, 10, words);
    myGameArea.start();
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

// function component(color, x, y, text) {
//     this.speedX = 0;
//     this.speedY = 0;
//     this.x = x;
//     this.y = y;
//     this.update = function () {
//         ctx = myGameArea.context;
//         ctx.fillStyle = color;
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//         ctx.fillText(text, this.x, this.y);
//         ctx.font = "40px Georgia";


//     }
//     this.newPos = function () {
//         this.x += this.speedX;
//         this.y += this.speedY;
//     }
// }

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}

function moveup() {
    y = y - 10;
    // console.log(y = y + 10)
    return y;
}

function movedown() {
    y = y + 10;
}

function moveleft() {
    x = x - 10;
}

function moveright() {
    x = x + 10;
}

function clearmove() {
    this.x = 0;
    this.y = 0;
}



function DrawText() {



    ctx.fillStyle = colorInput.value;
    ctx.textBaseline = 'middle';
    ctx.font = $("#font_size").val() + "px";
    ctx.fillText(text_title, x, y);
    ctx.font = size_template.replace("Xpx", $("#font_size").val() + "px");
    $("#font_size").on('change', function () {
        ctx.font = size_template.replace("Xpx", $("#font_size").val() + "px");
        $("#wfont_size").val($(this).val());
    });
}


$(document).ready(function () {
    $("#name, #color, #font_size").change(function () {
        //   alert("The text has been changed.");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        DrawOverlay(img);
        DrawText();

    });

    $("#font_size").change(function () {
        //   alert("The font-size has been changed.");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        DrawOverlay(img);
        DrawText();

    });
    $("#up, #down, #right, #left").click(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        DrawOverlay(img);
        DrawText();
    });
});

// setInterval(function() {
//     // DrawText(); 
//   },    100);

// setInterval(function() {
//     // DrawText(); 
//     ctx.clearRect(0,0,canvas.width,canvas.height) ;
//     DrawOverlay(img);

//   }, 900);

function DynamicText(img) {
    document.getElementById('name').addEventListener('keyup', function () {
        text_title = this.value;
        function timer() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            DrawOverlay(img);
            DrawText();
            // ctx.fillText(text_title, 680, 300);
            // window.change = function(val) {
            //     ctx.clearRect(0, 0, canvas.width, canvas.height);
            //     ctx.restore();
            //     ctx.font = "20px Georgia";
            //     ctx.fillText(val, 10, 50);
            //     ctx.save();
            //   }
        }
        setTimeout(timer, 500);
    });

    //   document.getElementById('name2').addEventListener('keyup', function() {
    //     text_title2 = this.value;
    //     function timer(){
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     DrawOverlay(img);
    //     DrawText(); 
    //     ctx.fillText(text_title2, 680, 500);
    //     }
    //     setTimeout(timer,500);
    //   });
}

function handleImage(e) {
    var reader = new FileReader();
    var img = "";
    var src = "";
    reader.onload = function (event) {
        img = new Image();
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }
        img.src = event.target.result;
        src = event.target.result;
        canvas.classList.add("show");
        DrawOverlay(img);
        DrawText();
        DynamicText(img);
    }

    reader.readAsDataURL(e.target.files[0]);

}
function convertToImage() {
    window.open(canvas.toDataURL('png'));
}
function download() {
    var dt = canvas.toDataURL('image/jpeg');
    this.href = dt;
};
downloadLnk.addEventListener('click', download, false);
downloadLnk1.addEventListener('click', download, false);
