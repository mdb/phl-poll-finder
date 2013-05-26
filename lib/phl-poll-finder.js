var _ = require('underscore');
var request = require('request');
var phlGeocode = require('phl-geocode')();

function PHLPollFinder(opts) {
  this.defaultSettings = {
    geometryType: 'esriGeometryPoint',
    inSR: 4326,
    spatialRel: 'esriSpatialRelWithin',
    returnCountOnly: false,
    returnIdsOnly: false,
    returnGeometry: false,
    outFields: ['WARD_1,DIVISION_1,POLLING_PL,ADDRESS,PARKING_AC,BUILDING_A'],
    f: 'pjson'
  };

  this.apiHost = "http://gis.phila.gov/ArcGIS/rest/services/PhilaGov";
  this.locationPath = "/PollingPlaces/MapServer/1/query";
  this.settings = opts ? _.defaults(opts, this.defaultSettings) : this.defaultSettings;
  this.responseBody = "";
}

PHLPollFinder.prototype.find = function(address, callback) {
  var apiBase = this.apiHost + this.locationPath;
  var url = buildURLBase(apiBase, this.settings);
  var lat; 
  var long; 
  var self = this; 

  phlGeocode.getCoordinates(address, function (error, result) {
    if (error) console.log(error);

    lat = result[0].latitude;
    long = result[0].longitude;
    url += 'geometry={"x":"' + long + '","y":"' + lat + '"}';
    self.callAPI(url, callback);
  });
};

PHLPollFinder.prototype.callAPI = function(url, callback) {
  var self = this;
  var result;
  
  request(url, function (error, response, body) {
    if (error) console.log(error);

    self.responseBody = body;
    result = JSON.parse(self.responseBody);
    callback(result.features);
  });
};

module.exports = function(opts) {
  return new PHLPollFinder(opts);
};

// helpers
function buildURLBase(urlBase, settings) {
  var url =  urlBase + '?';
  var item;

  for(item in settings) {
    url += item + "=" + encodeURI(settings[item]) + "&";
  }

  return url;
}
