
module.exports ={
	system : {
		port : 3000,		
	}
	,
	cookie : {
		privateKey : 'this is test function',
		cookieMaxAge : 20000000 //20 minute
	},
	mongodb : {
		dbUrl : '127.0.0.1',
		port : 27017,
		sessionDBname : 'sessions'
	},	
}
