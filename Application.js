$(document).ready (function() {
	$("#box1").on("mouseenter", function(){
		$("#bannerbc") .css ("text-indent", "0");
  		$("#banner").hide();
  		$("#arrowbc").show();
	});
	$("#box1").on("mouseleave", function(){
		$("#bannerbc").css("text-indent", "-5000px");
  		$("#banner").show();
  		$("#arrowbc").hide();
	});
	$("#box2").on("mouseenter", function(){
		$("#bannerhr").css("text-indent", "0");
  		$("#banner").hide();
  		$("#arrowhr").show();
	});
	$("#box2").on("mouseleave", function(){
		$("#bannerhr").css("text-indent", "-5000px");
  		$("#banner").show();
  		$("#arrowhr").hide();
	});
	$("#box3").on("mouseenter", function(){
		$("#bannercf").css("text-indent", "0");
  		$("#banner").hide();
  		$("#arrowcf").show();
	});
	$("#box3").on("mouseleave", function(){
		$("#bannercf").css("text-indent", "-5000px");
  		$("#banner").show();
  		$("#arrowcf").hide();
	});
});