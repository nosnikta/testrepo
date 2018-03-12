// JavaScript Document

$(document).ready(function(){
	
	//Kant mouse in and out
	/*
	$("#Kant").mouseover(function(){
		$("#textarea").append("How can a theory based on duty help us make better ethical decisions.");
	});
	$("#Kant").mouseout(function(){
		$("#textarea").empty();
	});
	*/
	$("#Kant").bind("mouseenter focus", function(){
		$("#textarea").append("How can a theory based on duty help us make better ethical decisions.");
	});
	
	$("#Kant").bind("mouseleave focusout", function(){
		$("#textarea").empty();
	});
	
	
	//----------------------------------------------------------//
	$("#egoism").bind("mouseenter focus", function(){
		$("#textarea").append("How can a theory based on duty help us make ethical decisions?");
	});
	
	$("#egoism").bind("mouseleave focusout", function(){
		$("#textarea").empty();
	});
	
	//----------------------------------------------------------//
	$("#aristotle").bind("mouseenter focus", function(){
		$("#textarea").append("How can a theory based on developing a good character help us make ethical decisions?");
	});
	
	$("#aristotle").bind("mouseleave focusout", function(){
		$("#textarea").empty();
	});
	
	//----------------------------------------------------------//
	$("#ethicsofcare").bind("mouseenter focus", function(){
		$("#textarea").append("How can a theory based on caring for the community help us make ethical decisions?");
	});
	
	$("#ethicsofcare").bind("mouseleave focusout", function(){
		$("#textarea").empty();
	});
	
	//----------------------------------------------------------//
	$("#justice").bind("mouseenter focus", function(){
		$("#textarea").append("Businesses have the power to effect change. Do they have a moral responsibility to do so?");
	});
	
	$("#justice").bind("mouseleave focusout", function(){
		$("#textarea").empty();
	});
	
	//----------------------------------------------------------//
	$("#CSR").bind("mouseenter focus", function(){
		$("#textarea").append("Should a company prioritise its shareholders over the other stakeholders?");
	});
	
	$("#CSR").bind("mouseleave focusout", function(){
		$("#textarea").empty();
	});
	
	//----------------------------------------------------------//
	$("#indigenousaust").bind("mouseenter focus", function(){
		$("#textarea").append("What responsiblity do we have to ensure we don't contribute to inequity in our society?");
	});
	
	$("#indigenousaust").bind("mouseleave focusout", function(){
		$("#textarea").empty();
	});
	
	//----------------------------------------------------------//
	$("#sustainablitiy").bind("mouseenter focus", function(){
		$("#textarea").append("If business operations harm the environment, who is responsible?");
	});
	
	$("#sustainablitiy").bind("mouseleave focusout", function(){
		$("#textarea").empty();
	});
	
	//----------------------------------------------------------//
	$("#workplace").bind("mouseenter focus", function(){
		$("#textarea").append("What rights and responsiblities arise from employment contracts?");
	});
	
	$("#workplace").bind("mouseleave focusout", function(){
		$("#textarea").empty();
	});
	
	//----------------------------------------------------------//
	$("#global").bind("mouseenter focus", function(){
		$("#textarea").append("What responsiblities do multinational compnaies have in foreign countries?");
	});
	
	$("#global").bind("mouseleave focusout", function(){
		$("#textarea").empty();
	});
	
});