define(["js/lib/coursera","js/lib/api"],function(Coursera,API){var api=API("/api/catalog.v1/",{type:"rest"});return api.on("always",function(apiEvent){var xhr=apiEvent.xhr,url=apiEvent.url;if(xhr.status>=400)Coursera.multitracker.push(["api.error."+xhr.status,{timing:apiEvent.timing,url:url,status:xhr.status,response:xhr.responseText}]);else Coursera.multitracker.push(["api.ok."+xhr.status,{timing:apiEvent.timing,url:url,status:xhr.status}])}),api});