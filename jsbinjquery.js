$(document).ready(function(){
  $("#html-but").click(function(){
    $(".html").toggle();
    });
  $("#css-but").click(function(){
    $(".css").toggle();
    });
  $("#js-but").click(function(){
    $(".js").toggle();
    });
  $("#res-but").click(function(){
    $(".result").toggle();
    });
  $("#run-but").click(function(){
  	var html = $("#html").val(); // HTML code
    var content = $("#preview").contents().find("body"); // iframe id is 'preview'

    content.html(html);

    var csVal = $("#css").val();
    var cssLink = "<style>" + csVal + "</style>"; // cssVal contains css code
    var head = $("#preview").contents().find("head");
    head.append(cssLink);

    var jsCode = $("#js").val();

    var js ='<script>'+jsCode+'<\/script>' ; 

    // following part is not working
    var content = $('#preview').contents();
    content.find('head').append('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"><\/script>' );             
    content.find('body').append(js );

  });
  });