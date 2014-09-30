(function() {
  var KanbanizeJS;

  KanbanizeJS = (function() {
    KanbanizeJS.prototype.BASE_URL = 'kanbanize.com/index.php/api/kanbanize';

    function KanbanizeJS(options) {
      var domain;
      this.email = options.email, this.password = options.password, domain = options.domain;
      domain = domain != null ? domain : '';
      this.kanbanize_url = "http://'" + domain + "." + this.BASE_URL;
      extend({}, {});
    }

    KanbanizeJS.prototype.call = function(apiCall) {
      var call;
      call = this.executeCall(apiCall);
      return call.getResponseDecoded();
    };

    KanbanizeJS.prototype.executeCall = function(apiCall) {
      var $l, key, params, url, val;
      if (apiCall["function"] !== 'login' && (this.apikey == null)) {
        $l = this.login();
        this.apikey = $l['apikey'];
      }
      url = this.kanbanize_url + "/" + apiCall["function"];
      params = ((function() {
        var _ref, _results;
        _ref = apiCall.data;
        _results = [];
        for (key in _ref) {
          val = _ref[key];
          _results.push(key + '/' + val);
        }
        return _results;
      })()).join('/');
      return $.ajax(url + params);
    };

    KanbanizeJS.prototype.login = function() {
      var call;
      call = {
        "function": 'login',
        data: {
          email: this.email,
          password: this.password
        }
      };
      return this.call(call);
    };

    return KanbanizeJS;

  })();

}).call(this);
