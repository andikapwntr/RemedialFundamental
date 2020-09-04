
function tickets(antrian){
    var u25 = 0, u50 = 0;
      
      for (var i = 0; i < antrian.length; i++) {
          switch(antrian[i]){
              case 25:
                  u25++;
                  break;
              case 50:
                  u25 > 0 ? u25-- : u25 = -1;
                  u50++;
                  break;
              case 100:
                  u25 > 0 && u50 > 0 ? u50-- : (u25 > 2 ? u25 -= 2 : u25 = -1);
                  u25--;
                  break;
          }
         if(u25<0){
            return "NO";
         }
      }
      return "YES";
  }

  
  console.log(tickets([25,25,50]))
  console.log(tickets([25,100]))

  

  
