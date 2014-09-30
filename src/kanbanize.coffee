class KanbanizeJS
	BASE_URL: 'kanbanize.com/index.php/api/kanbanize';

	constructor: (options) -> 
		{ @email, @password, domain } = options
		domain = domain ? ''
		@kanbanize_url = "http://'#{domain}.#{@BASE_URL}"

		extend {}, {}

	call: (apiCall) ->

		call = @executeCall(apiCall)
		

		return call.getResponseDecoded();
	
	executeCall: (apiCall) ->
		
		if apiCall.function != 'login' && !@apikey?
			$l = @login()
			@apikey = $l['apikey']

		url = @kanbanize_url + "/" + apiCall.function

		params = (for key, val of apiCall.data
			key+'/'+val).join '/'


		$.ajax url + params

		

	login: () ->
		call = {
			function: 'login'
			data:
				email: @email
				password: @password
		}
	
		return @call(call);