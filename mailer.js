 /**
   * @File-name : mailer.js
   * @author : Gunaseelan.T
   * @File-Description : email sender.
  **/
var email = require('mailer');
var jsonfile = require('jsonfile');
var forEach = require('async-foreach').forEach;

var file = '/mnt/c/Users/Guna-TAMUC/Downloads/list.json'

jsonfile.readFile(file, function(err, obj) {
  	if(err){
  		console.log(err);
  	}else{
  		forEach(obj, function(item, index, arr) {
		 	email.send({
			    host : "smtp.gmail.com",
			    port : "465",
			    ssl : true,
			    domain : "",
			    to : item.EMAIL,
			    from : "*****@gmail.com",
			    subject : "RE: Subject",
			    text: "Mail by Mailer library",
			    html: "<span> Hi "+"<br />"+" "+"<br />"+" "+"<br />"+" "+"<br />"+" "+"<br />"+" "+"<br />"+" "+"<br />"+" "+"<br />"+" "+"<br />"+" TEST "+"<br />"+" "+"<br />"+" ",
			    authentication : "login",      
			    username : '*****',
			    password : '*****'
			    },
			    function(err, result){	
			      	if(err){ 
			      		console.log(err); 
			      	}else { 
			      		console.log('hurray! Email Sent');
			      	}
				}
			);
		});
  		
  	}
})