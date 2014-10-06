# pKanbanize
A nice class to interact with [kanbanize](http://kanbanize.com ) API from js


##Basic usage:
```javascript
var kanbanize = KanbanizeJS({
	email: 'user@domain.com',
	password:'passs'
	});

$projects = $kanbanize->getProjectsAndBoards();
echo '<pre>';
print_r($projects);
echo '</pre>';
```