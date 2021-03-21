var canvas = new fabric.Canvas('myCanvas');
blockWidth = 30;
blockHeight = 30;
x = 10;
y = 10;
var player = "";
var block = "";
function update(){
    fabric.Image.fromURL("player.png",function(Img){
     player = Img;
     player.scaleToWidth(150);
     player.scaleToHeight(140);
     player.set({
         top:y,
         left:x
     });
     canvas.add(player);
    });
    }
    function new_image(get_Img){
        fabric.Image.fromURL(get_Img,function(Img){
         block = Img;
         block.scaleToWidth(blockWidth);
         block.scaleToHeight(blockHeight);
         block.set({
             top:y,
             left:x
         });
         canvas.add(block);
        });
        }
        window.addEventListener("keydown", my_keydown);
      function my_keydown(e){
          key = e.keyCode;
          console.log(key)
          if(key == '70'){
              new_image('thor_face.png');
              console.log("f");
          }
          if(key == '66'){
            new_image('spiderman_body.png');
            console.log("b");
        }
        if(key == '76'){
            new_image('hulk_legs.png');
            console.log("l");
        }
        if(key == '82'){
            new_image('ironman_right_hand.png');
            console.log("r");
        }
        if(key == '72'){
            new_image('captain_america_left_hand.png');
            console.log("h");
        }
        if(key == '38'){
up();
console.log(up);
        }
        if(key == '40'){
            down();
            console.log(down);
                    }
                    if(key == '37'){
                        left();
                        console.log(left);
                                }    
                                if(key == '39'){
                                    right();
                                    console.log(right);
                                            }       
        }
        function up(){
            if(y >=0){
                y = y - blockHeight;
                console.log("block height = " + blockHeight);
                console.log("X = " + x + "Y = " + y);
                canvas.remove(player);
                update();
            }
        }
        function down(){
            if(y <=500){
                y = y + blockHeight;
                console.log("block height = " + blockHeight);
                console.log("X = " + x + "Y = " + y);
                canvas.remove(player);
                update();
            }
        }
        function left(){
            if(x >=0){
                x = x - blockWidth;
                console.log("block width = " + blockWidth);
                console.log("X = " + x + "Y = " + y);
                canvas.remove(player);
                update();
            }
        }
        function right(){
            if(x <=850){
                x = x + blockWidth;
                console.log("block width = " + blockWidth);
                console.log("X = " + x + "Y = " + y);
                canvas.remove(player);
                update();
            }
        }