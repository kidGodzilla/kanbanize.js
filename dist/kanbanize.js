(function() {
  var KanbanizeJS;

  KanbanizeJS = (function() {
    KanbanizeJS.prototype.BASE_URL = 'kanbanize.com/index.php/api/kanbanize';

    function KanbanizeJS(options) {
      var domain;
      this.key = options.key, domain = options.domain, this.user = options.user, this.password = options.password;
      domain = domain != null ? domain : '';
      this.kanbanize_url = "http://'" + domain + "." + this.BASE_URL;
      extend({}, {});
    }

    return KanbanizeJS;

  })();

}).call(this);
