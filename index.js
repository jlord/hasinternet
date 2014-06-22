var dns = require('dns')

module.exports = hasInternet

function hasInternet(cb,link) {
	if (process.browser) return cb(false, navigator.onLine) 
	if (typeof link !== 'string') link = 'www.google.com'
	dns.lookup(link, function(err, addresses) {
	  if (err) return cb(err, false) // an error, no www
	  return cb(false, true) // no error, has www
	})
}