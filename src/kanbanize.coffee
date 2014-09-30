class KanbanizeJS
	BASE_URL: 'kanbanize.com/index.php/api/kanbanize';

	constructor: (options) -> 
		{@key, domain, @user, @password} = options
		domain = domain ? ''
		@kanbanize_url = "http://'#{domain}.#{@BASE_URL}"

		extend {}, {}
