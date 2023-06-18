$("h1").on("click", function() {
    $("h1").css("transition", "font-size 4s").css("font-size", "50px")
  });
  
  $(".door").on("click", function() {
    $(".container1").css("transition", "gap 4s").css("gap", "60vw");
    setTimeout(
      function() {
        $(".container1").fadeOut();
        $(".steps").fadeOut();
        $(".container1").remove();
        $(".steps").remove();
        $("html").append(`<button class="btn1"><img src="https://as2.ftcdn.net/v2/jpg/00/22/67/95/1000_F_22679511_RXQ0riBDOngWX0v4uJHYHWu2vuU6CjmT.jpg" style="height: 80vh;">היי! תנו לי כיף! (או שפשוט תקליקו עליי)</img></button>`);
        $(".btn1").on("click", function() {
          while (true) {
            var answer = prompt("איך קוראים לך?");
          if (answer === "אדר") {
            alert("מזל טוב אדרי!!");
            $("h1").text("ברוכים הבאים ליומלדת של אדר!");
            $("h1").css("background-color","lightgreen");
            $("h1").css("transition", "font-size 4s").css("font-size", "120px");
            $("h1").after(`
            <div class="flex-box" style="display: flex; gap: 10px; justify-content: center;">
              <img src="./IMG_6960_2.jpg" style="flex-basis: 0; height: 65vh;">
              <img src="./Screenshot 2023-06-12 122219.png" style="flex-basis: 0; height: 65vh;">
              <div style="flex-basis: 15%; height: 65vh; background-color: lightblue;"><p><h2>אדרדור, מזל טוב ויומולדת שמח</h2><br>מאחלים לך את כל הטוב, שתמשיך להיות כמו שאתה:<br>מקסים, טוב-לב, מצחיק, חכם ומתוק<br>אוהבים וגאים בך<br>אמא ואבא</p></div>
            </div>
            `);
            $(".btn1").remove();

            

            // after(`<div class="flex-box" style="display: flex; gap: 10px; justify-content: center;">`).after(`<img src="./IMG_6960_2.jpg" style="flex-basis: 0; height: 65vh;">`).after(`<img src="./Screenshot 2023-06-12 122219.png" flex-basis: 0; height: 65vh;">`).after(`<div style="flex-basis: 0; height: 65vh; background-color: pink;"></div>`).after(`</div>`);
            
            break;
          } else {
            alert(`היי ${answer}, ידעת שלאדר יש היום יומולדת??`);
          }
          }
           
        });
      }, 4000);
  });

  //<img src:"./IMG_6960_2.jpg/" style="height: 65vh">
  //$(".check").css("display", "inline-block");
  
  //$("h1").after(`<button style="background-color: pink;">new</button>`);
  
  
  
  
  