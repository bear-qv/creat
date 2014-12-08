$(document).ready(function(){
  $('.button').click(function(){
    $.post('/json',{'aaa':'bbb','xxx':'asdasd'},function(data){
      
    })
  })
})