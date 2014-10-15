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

	_call: (apiCall) ->

		if apiCall.function != 'login' && !@apikey?
			l = @login()
			@apikey = l.apikey

		url = @_getUrl(apiCall)

		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = () ->
			if (xmlhttp.readyState == 4 )
				if(xmlhttp.status == 200)
					console.log('good')
				else 
					console.log('something else other than 200 was returned')

		xmlhttp.open("POST", url, true);
		xmlhttp.send();
		

	login: () ->
		call = {
			function: 'login'
			data:
				email: @email
				password: @password
		}
	
		@_call(call);


window.KanbanizeJS = KanbanizeJS