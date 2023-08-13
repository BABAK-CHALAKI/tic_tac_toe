let cells = document.getElementsByClassName("cell");
let btn = document.getElementById("btn")
let restart = document.getElementById("restart")
let scores_x = document.getElementById("scores_x")
let scores_o = document.getElementById("scores_o")
let draw = document.getElementById("scores_draw")
let scores_x_counter = 0;
let scores_o_counter = 0;
let draw_counter = 0;

let buttons = [[cells[0], cells[1], cells[2]],
               [cells[3], cells[4], cells[5]],
               [cells[6], cells[7], cells[8]]];

let  flags = [[null, null, null],
              [null, null, null],
              [null, null, null]];

 let ply = "x";

 




function show_index(x, y){
   if(flags[x][y] == null){
   if(ply =="x"){
   flags[x][y] = "x";   
   buttons[x][y].innerHTML = "x"
   buttons[x][y].classList.add("x");
   ply = "o";
}
else if(ply =="o"){
    flags[x][y] = "o";
   buttons[x][y].innerHTML = "o";
   buttons[x][y].classList.add("o");
   ply = "x";
}
}

check_game()
}
function check_game(){
   if(flags[0][0] == "x" && flags[0][1] == "x" && flags[0][2] == "x"){scores_x_counter++;
      scores_x.innerHTML = scores_x_counter;
      scores_x.style.color = "gold" }

      else if(flags[1][0] == "x" && flags[1][1] == "x" && flags[1][2] == "x"){scores_x_counter++;
         scores_x.innerHTML = scores_x_counter;
         scores_x.style.color = "gold" }

         else if(flags[2][0] == "x" && flags[2][1] == "x" && flags[2][2] == "x"){scores_x_counter++;
            scores_x.innerHTML = scores_x_counter;
            scores_x.style.color = "gold" }

            else if(flags[0][0] == "x" && flags[1][0] == "x" && flags[2][0] == "x"){scores_x_counter++;
               scores_x.innerHTML = scores_x_counter;
               scores_x.style.color = "gold" }

              else if(flags[0][1] == "x" && flags[1][1] == "x" && flags[2][1] == "x"){scores_x_counter++;
                  scores_x.innerHTML = scores_x_counter;
                  scores_x.style.color = "gold" } 

                else if(flags[0][2] == "x" && flags[1][2] == "x" && flags[2][2] == "x"){scores_x_counter++;
         scores_x.innerHTML = scores_x_counter;
         scores_x.style.color = "gold" }

         else if(flags[2][0] == "x" && flags[1][1] == "x" && flags[0][2] == "x"){scores_x_counter++;
            scores_x.innerHTML = scores_x_counter;
            scores_x.style.color = "gold" }

            else if(flags[0][0] == "x" && flags[1][1] == "x" && flags[2][2] == "x"){scores_x_counter++;
               scores_x.innerHTML = scores_x_counter;
               scores_x.style.color = "gold" }
   

   if(flags[0][0] == "o" && flags[0][1] == "o" && flags[0][2] == "o"){scores_o_counter++;
      scores_o.innerHTML = scores_o_counter;
      scores_o.style.color = "gold" }

      else if(flags[1][0] == "o" && flags[1][1] == "o" && flags[1][2] == "o"){scores_o_counter++;
         scores_o.innerHTML = scores_o_counter;
         scores_o.style.color = "gold" }

         else if(flags[2][0] == "o" && flags[2][1] == "o" && flags[2][2] == "o"){scores_o_counter++;
            scores_o.innerHTML = scores_o_counter;
            scores_o.style.color = "gold" }

            else if(flags[0][0] == "o" && flags[1][0] == "o" && flags[2][0] == "o"){scores_o_counter++;
               scores_o.innerHTML = scores_o_counter;
               scores_o.style.color = "gold" }

              else if(flags[0][1] == "o" && flags[1][1] == "o" && flags[2][1] == "o"){scores_o_counter++;
                  scores_o.innerHTML = scores_o_counter;
                  scores_o.style.color = "gold" } 

                else if(flags[0][2] == "o" && flags[1][2] == "o" && flags[2][2] == "o"){scores_o_counter++;
         scores_o.innerHTML = scores_o_counter;
         scores_o.style.color = "gold" }

         else if(flags[2][0] == "o" && flags[1][1] == "o" && flags[0][2] == "o"){scores_o_counter++;
            scores_o.innerHTML = scores_o_counter;
            scores_o.style.color = "gold" }

            else if(flags[0][0] == "o" && flags[1][1] == "o" && flags[2][2] == "o"){scores_o_counter++;
               scores_o.innerHTML = scores_o_counter;
               scores_o.style.color = "gold" }
                  


               else if(flags[x][y] == null){
                  draw.innerHTML = draw_counter;
               }

}
btn.onclick = function(){
   if(flags[i][j] == null){ draw.innerHTML = draw_counter;}
}
