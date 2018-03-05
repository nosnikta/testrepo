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
	
	//Aristotle mouse in and out
	$("#aristotle").mouseover(function(){
		$("#textarea").append("How can a theory based on developing a good character help us make ethical decisions?");
	});
	$("#aristotle").mouseout(function(){
		$("#textarea").empty();
	});
	
	//ethicsofcare mouse in and out
	$("#ethicsofcare").mouseover(function(){
		$("#textarea").append("How can a theory based on caring for the community help us make ethical decisions?");
	});
	$("#ethicsofcare").mouseout(function(){
		$("#textarea").empty();
	});
	
	$("#justice").mouseover(function(){
		$("#textarea").append("Businesses have the power to effect change. Do they have a moral responsibility to do so?");
	});
	$("#justice").mouseout(function(){
		$("#textarea").empty();
	});
	
	$("#CSR").mouseover(function(){
		$("#textarea").append("Should a company prioritise its shareholders over the other stakeholders?");
	});
	$("#CSR").mouseout(function(){
		$("#textarea").empty();
	});
	
	$("#indigenousaust").mouseover(function(){
		$("#textarea").append("What responsiblity do we have to ensure we don't contribute to inequity in our society?");
	});
	$("#indigenousaust").mouseout(function(){
		$("#textarea").empty();
	});
	
	$("#sustainablitiy").mouseover(function(){
		$("#textarea").append("If business operations harm the environment, who is responsible?");
	});
	$("#sustainablitiy").mouseout(function(){
		$("#textarea").empty();
	});
	
	
	$("#workplace").mouseover(function(){
		$("#textarea").append("What rights and responsiblities arise from employment contracts?");
	});
	$("#workplace").mouseout(function(){
		$("#textarea").empty();
	});
	
	$("#global").mouseover(function(){
		$("#textarea").append("What responsiblities do multinational compnaies have in foreign countries?");
	});
	$("#global").mouseout(function(){
		$("#textarea").empty();
	});
	
});