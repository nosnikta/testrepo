// JavaScript Document

$(document).ready(function(){
	
	//Kant mouse in and out
	$("#Kant").mouseover(function(){
		$("#textarea").append("How can a theory based on duty help us make better ethical decisions.");
	});
	$("#Kant").mouseout(function(){
		$("#textarea").empty();
	});
	
	//Egoism mouse in and out
	$("#egoism").mouseover(function(){
		$("#textarea").append("How can a theory based on duty help us make ethical decisions?");
	});
	$("#egoism").mouseout(function(){
		$("#textarea").empty();
	});
	
	$("#aristotle").mouseover(function(){
		$("#textarea").append("How can a theory based on developing a good character help us make ethical decisions?");
	});
	$("#aristotle").mouseout(function(){
		$("#textarea").empty();
	});
	
	
	
	
	
});