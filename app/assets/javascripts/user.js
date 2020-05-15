$(function(){
  $('.required').on('blur',function(){
    if($(this).val() == ""){
      $(this).siblings('span.error_required').text("※入力必須項目です");
    } else {
      $(this).siblings('span.error_required').text("");
    }
  });
$("#name").on('blur', function(){
  if(!$(this).val().match(/^[ぁ-んァ-ンー-龥 ]{1,12}$/) && !$(this).val().length == 0){
    $(this).siblings('span.error_name').text("※正しく入力して下さい");
  } else {
    $(this).siblings('span.error_name').text("");
  }
  });
$("#mail").on('blur', function(){
  if(!$(this).val().match(/^[a-zA-Z0-9_\#!$%&`'*+\-{|}~^\/=?\.]+@[a-zA-Z0-9][a-zA-Z0-9\.-]+$/) && !$(this).val().length == 0) {
    $(this).siblings('span.error_mail').text("※正しく入力してください");
} else {
    $(this).siblings('span.error_email').text("");
  }
  });
$("#pass").on('blur', function(){
  if(!$(this).val().match(/^[a-z\d]{8,100}$/i) && !$(this).val().length == 0) {
    $(this).siblings('span.error_pass').text("※正しく入力して下さい");
  } else {
    $(this).siblings("span.error_pass").text("");
  }
  })
$("#pass1").on('blur', function(){
  if(!$(this).val().match(/^[a-z\d]{8,100}$/i) && !$(this).val().length == 0) {
  $(this).siblings('span.error_pass1').text("※正しく入力して下さい");
  }
  })
});