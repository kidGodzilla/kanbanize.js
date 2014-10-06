class KanbanizeJS
	BASE_URL: 'kanbanize.com/index.php/api/kanbanize';

	constructor: (options) -> 
		{ @email, @password, domain } = options
		domain = if domain? then domain+'.' else ''
		@kanbanize_url = "http://#{domain}#{@BASE_URL}"

	_getUrl: (call) ->
		url = [ @kanbanize_url, call.function ]
		for key, val of call.data
			url.push key, encodeURIComponent(val)
		url.join('/')

	call: (apiCall) ->

		
		if apiCall.function != 'login' && !@apikey?
			l = @login()
			@apikey = l.apikey

		call = @_executeCall(apiCall)

		return call.getResponseDecoded();
	
	_executeCall: (apiCall) ->
		
		url = @_getUrl(apiCall)

		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = () ->
			if (xmlhttp.readyState == 4 )
				if(xmlhttp.status == 200)
					console.log('good')
				else 
					console.log('something else other than 200 was returned')

		#$.ajax 
		xmlhttp.open("POST", url, true);
		xmlhttp.send();
		

	login: () ->
		call = {
			function: 'login'
			data:
				email: @email
				password: @password
		}
	
		return @call(call);


window.KanbanizeJS = KanbanizeJS