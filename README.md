# pKanbanize
A nice class to interact with [kanbanize](http://kanbanize.com ) API from js


##Basic usage:
```javascript
var kanbanize = KanbanizeJS({
	email: 'carlo.panzi@gmail.com',
	password:'Samarcanda'
	});
	
$projects = $kanbanize->getProjectsAndBoards();
echo '<pre>';
print_r($projects);
echo '</pre>';
```