angular.module("ngDesigners", [])
	.controller("ngController", function() 
	{
		this.hello = "world";
		this.item = {
			name : "Nafeen",
			description : "is awesome"
		};
	});