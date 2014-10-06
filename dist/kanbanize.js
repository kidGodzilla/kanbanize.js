(function() {
  var KanbanizeJS;

  KanbanizeJS = (function() {
    KanbanizeJS.prototype.BASE_URL = 'kanbanize.com/index.php/api/kanbanize';

    function KanbanizeJS(options) {
      var domain;
      this.email = options.email, this.password = options.password, domain = options.domain;
      domain = domain != null ? domain + '.' : '';
      this.kanbanize_url = "http://" + domain + this.BASE_URL;
    }

    KanbanizeJS.prototype._getUrl = function(call) {
      var key, url, val, _ref;
      url = [this.kanbanize_url, call["function"]];
      _ref = call.data;
      for (key in _ref) {
        val = _ref[key];
        url.push(key, encodeURIComponent(val));
      }
      return url.join('/');
    };

    KanbanizeJS.prototype.call = function(apiCall) {
      var call, l;
      if (apiCall["function"] !== 'login' && (this.apikey == null)) {
        l = this.login();
        this.apikey = l.apikey;
      }
      call = this._executeCall(apiCall);
      return call.getResponseDecoded();
    };

    KanbanizeJS.prototype._executeCall = function(apiCall) {
      var url, xmlhttp;
      url = this._getUrl(apiCall);
      xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4) {
          if (xmlhttp.status === 200) {
            return console.log('good');
          } else {
            return console.log('something else other than 200 was returned');
          }
        }
      };
      xmlhttp.open("POST", url, true);
      return xmlhttp.send();
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

  window.KanbanizeJS = KanbanizeJS;

}).call(this);
