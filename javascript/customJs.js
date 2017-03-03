<script  src="https://code.jquery.com/jquery-3.1.1.min.js"  crossorigin="anonymous"></script>
<script>

  $(document).ajaxStart(function(){
    $("#profilePic").attr("src","images/progress.gif");
  }).ajaxStop(function(){
    console.log("Ajax Stopped.")
  }).ajaxSuccess(function(){
    console.log("Ajax Success")
  }).ajaxComplete(function(){
    console.log("Ajax Completed")
  })

  $('document').ready(function(){
        $.ajax({
      url:"https://public-api.wordpress.com/rest/v1/sites/25262138/posts",
      success: function(data){
        console.log(data);
        $("#name").text("Name: "+data.posts[0].author.name);
        $("#email").text("Email : "+data.posts[0].author.email);
        $("#profilePic").attr("src",data.posts[0].author.avatar_URL);
        $("#bannerName").text("Hi I am "+data.posts[0].author.name)
        $("#logoName").text(data.posts[0].author.name)
        $("#profileUrl").text("Check at: "+data.posts[0].author.profile_URL)
        $("#logoFName").text(data.posts[0].author.first_name)
        $("#logoLName").text(data.posts[0].author.last_name)
      },
      error: function(){


      }
    })
  })
</script>
