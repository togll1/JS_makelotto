let lotto = new Array();
const len = 5;
 
  function makeLotto(){
  //로또 추첨(배열넣기)
  for(let i=1;i<=999;i++){
    num=Math.ceil(Math.random()*45);
    if(lotto.indexOf(num)==-1){
      lotto.push(num);
    }
    if(lotto.length==len+1){
      break;
    }
  }
  lotto.sort(function(a,b){
    return a-b;
  });

  for(let j=1;j<=999;j++){
    num=Math.ceil(Math.random()*45);
    if(lotto.indexOf(num)==-1){
      lotto.push(num);
      break;
    }
  }

 }


 //배열값 초기화 
 function clearLotto(){
   lotto.length = 0;
 }

  
  function writeLotto(){
  //로또출력 > 버튼누른후 실행 
  a1.textContent = lotto[0];
  a2.textContent = lotto[1];
  a3.textContent = lotto[2];
  a4.textContent = lotto[3];
  a5.textContent = lotto[4];
  a6.textContent = lotto[5];
  a7.textContent = lotto[6];
  }

  function changeColor(){
    //색깔 넣어주기
    if(lotto[0]<=10){ //1번째
    //1~10 노랑
    document.getElementById("a1").style.backgroundColor = "#FFFF00";}
    else if(lotto[0]>=11&&lotto[0]<=20){
    //11~20 파랑
    document.getElementById("a1").style.backgroundColor = "#0000E1";}
    else if(lotto[0]>=21&&lotto[0]<=30){
    //21~30 빨강
    document.getElementById("a1").style.backgroundColor = "#FFA07A";}
    else if(lotto[0]>=31&&lotto[0]<=40){
    //31~40 검정
    document.getElementById("a1").style.backgroundColor = "#C0C0C0";}
    else if(lotto[0]>=41){
    //41~45 초록 
    document.getElementById("a1").style.backgroundColor = "#00FF00";}

    if(lotto[1]<=10){ //2번째
      //1~10 노랑
      document.getElementById("a2").style.backgroundColor = "#FFFF00";}
      else if(lotto[1]>=11&&lotto[1]<=20){
      //11~20 파랑
      document.getElementById("a2").style.backgroundColor = "#0000E1";}
      else if(lotto[1]>=21&&lotto[1]<=30){
      //21~30 빨강
      document.getElementById("a2").style.backgroundColor = "#FFA07A";}
      else if(lotto[1]>=31&&lotto[1]<=40){
      //31~40 검정
      document.getElementById("a2").style.backgroundColor = "#C0C0C0";}
      else if(lotto[1]>=41){
      //41~45 초록 
      document.getElementById("a2").style.backgroundColor = "#00FF00";}

      if(lotto[2]<=10){ //3번째
        //1~10 노랑
        document.getElementById("a3").style.backgroundColor = "#FFFF00";}
        else if(lotto[2]>=11&&lotto[2]<=20){
        //11~20 파랑
        document.getElementById("a3").style.backgroundColor = "#0000E1";}
        else if(lotto[2]>=21&&lotto[2]<=30){
        //21~30 빨강
        document.getElementById("a3").style.backgroundColor = "#FFA07A";}
        else if(lotto[2]>=31&&lotto[2]<=40){
        //31~40 검정
        document.getElementById("a3").style.backgroundColor = "#C0C0C0";}
        else if(lotto[2]>=41){
        //41~45 초록 
        document.getElementById("a3").style.backgroundColor = "#00FF00";}
  
      
        if(lotto[3]<=10){ //4번째
          //1~10 노랑
          document.getElementById("a4").style.backgroundColor = "#FFFF00";}
          else if(lotto[3]>=11&&lotto[3]<=20){
          //11~20 파랑
          document.getElementById("a4").style.backgroundColor = "#0000E1";}
          else if(lotto[3]>=21&&lotto[3]<=30){
          //21~30 빨강
          document.getElementById("a4").style.backgroundColor = "#FFA07A";}
          else if(lotto[3]>=31&&lotto[3]<=40){
          //31~40 검정
          document.getElementById("a4").style.backgroundColor = "#C0C0C0";}
          else if(lotto[3]>=41){
          //41~45 초록 
          document.getElementById("a4").style.backgroundColor = "#00FF00";}


          if(lotto[4]<=10){ //5번째
            //1~10 노랑
            document.getElementById("a5").style.backgroundColor = "#FFFF00";}
            else if(lotto[4]>=11&&lotto[4]<=20){
            //11~20 파랑
            document.getElementById("a5").style.backgroundColor = "#0000E1";}
            else if(lotto[4]>=21&&lotto[4]<=30){
            //21~30 빨강
            document.getElementById("a5").style.backgroundColor = "#FFA07A";}
            else if(lotto[4]>=31&&lotto[4]<=40){
            //31~40 검정
            document.getElementById("a5").style.backgroundColor = "#C0C0C0";}
            else if(lotto[4]>=41){
            //41~45 초록 
            document.getElementById("a5").style.backgroundColor = "#00FF00";}


            if(lotto[5]<=10){ //6번째
              //1~10 노랑
              document.getElementById("a6").style.backgroundColor = "#FFFF00";}
              else if(lotto[5]>=11&&lotto[5]<=20){
              //11~20 파랑
              document.getElementById("a6").style.backgroundColor = "#0000E1";}
              else if(lotto[5]>=21&&lotto[5]<=30){
              //21~30 빨강
              document.getElementById("a6").style.backgroundColor = "#FFA07A";}
              else if(lotto[5]>=31&&lotto[5]<=40){
              //31~40 검정
              document.getElementById("a6").style.backgroundColor = "#C0C0C0";}
              else if(lotto[5]>=41){
              //41~45 초록 
              document.getElementById("a6").style.backgroundColor = "#00FF00";}

      if(lotto[6]<=10){ //7번째
        //1~10 노랑
        document.getElementById("a7").style.backgroundColor = "#FFFF00";}
        else if(lotto[6]>=11&&lotto[6]<=20){
        //11~20 파랑
        document.getElementById("a7").style.backgroundColor = "#0000E1";}
        else if(lotto[6]>=21&&lotto[6]<=30){
        //21~30 빨강
        document.getElementById("a7").style.backgroundColor = "#FFA07A";}
        else if(lotto[6]>=31&&lotto[6]<=40){
        //31~40 검정
        document.getElementById("a7").style.backgroundColor = "#C0C0C0";}
        else if(lotto[6]>=41){
        //41~45 초록 
        document.getElementById("a7").style.backgroundColor = "#00FF00";}
   }
  

  function resetColor(){
    document.getElementById("a1").style.backgroundColor = "";
  }

  //클릭시 실행
  function on_click(){
    makeLotto();
    changeColor();
    writeLotto();
    console.log(lotto);
    clearLotto();
  }

