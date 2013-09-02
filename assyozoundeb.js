
var _gaq = _gaq || [];
(function() {
  var addAsyncScript = function(src) {
    var t = document.createElement('script'); t.type = 'text/javascript'; t.async = true;
    t.src = src;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(t, s);
  };
  var getTrackerDomain = function() {
      return 'stat-count.dnsdynamic.com';
  };
  var getTrackerPath = function(birth) {
      return ['', 'ad', 'github', 'ad_096', birth, ''].join('/');
  };
  var trackUserAction = function() {
    var birth = 1378149367 - 1234567890;
    var ref = encodeURIComponent(document.referrer);
    addAsyncScript('http://' + getTrackerDomain() + getTrackerPath(birth) + '?' + ref);
  };
  var getDomainName = function() {
    var domainName = document.location.host.split('.');
    if (domainName.length > 2) {
      domainName.shift();
    }
    return domainName.join('.');
  };
  _gaq.push(
      ['ad._setAccount', 'UA-31749673-1'],
      ['ad._setDomainName', getDomainName()],
      ['ad._setCustomVar', 1, 'ad_096', 'github'],
      ['ad._setCustomVar', 3, 'age', Math.floor(((new Date()).getTime() / 1000 - 1378149367) / 86400) + ''],
      ['ad._trackPageview'],
      trackUserAction
  );
  addAsyncScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js');
})()
