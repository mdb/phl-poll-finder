var nock = require('nock');
var expect = require('expect.js');
var pollFinderPath = '../phl-poll-finder';
var fakeRespBody = './fixtures/response-body.js';

describe("PHLPollFinder", function() {
  var phlPollFinder;

  describe("#settings", function () {
    it("exists as a public object on a PHLPollFinder instance", function () {
      phlPollFinder = require(pollFinderPath)();
      expect(typeof phlPollFinder.settings).to.eql('object');
    });

    it("has default options", function () {
      phlPollFinder = require(pollFinderPath)();
      expect(phlPollFinder.settings.geometryType).to.eql("esriGeometryPoint");
      expect(phlPollFinder.settings.inSR).to.eql(4326);
      expect(phlPollFinder.settings.spatialRel).to.eql("esriSpatialRelWithin");
      expect(phlPollFinder.settings.returnCountOnly).to.eql(false);
      expect(phlPollFinder.settings.returnIdsOnly).to.eql(false);
      expect(phlPollFinder.settings.returnGeometry).to.eql(false);
      expect(phlPollFinder.settings.outFields).to.eql(['WARD_1,DIVISION_1,POLLING_PL,ADDRESS,PARKING_AC,BUILDING_A']),
      expect(phlPollFinder.settings.f).to.eql("pjson");
    });
    
    it("has default options whose values can be overridden on instantiation", function () {
      phlPollFinder = require(pollFinderPath)({
        geometryType: "geometry override",
        inSR: "inSR override",
        spatialRel: "spatialRel override",
        returnCountOnly: "returnCountOnly override",
        returnIdsOnly: "returnIdsOnly override",
        returnGeometry: "returnGeometry override",
        outFields: "outFields override",
        f: "f override"
      });

      expect(phlPollFinder.settings.geometryType).to.eql("geometry override");
      expect(phlPollFinder.settings.inSR).to.eql("inSR override");
      expect(phlPollFinder.settings.spatialRel).to.eql("spatialRel override");
      expect(phlPollFinder.settings.returnCountOnly).to.eql("returnCountOnly override");
      expect(phlPollFinder.settings.returnIdsOnly).to.eql("returnIdsOnly override");
      expect(phlPollFinder.settings.returnGeometry).to.eql("returnGeometry override");
      expect(phlPollFinder.settings.outFields).to.eql("outFields override");
      expect(phlPollFinder.settings.f).to.eql("f override");
    });
  });

  describe("#apiHost", function () {
    it("is set to the API host on instantiation", function () {
      phlPollFinder = require(pollFinderPath)();
      expect(phlPollFinder.apiHost).to.eql("http://gis.phila.gov/ArcGIS/rest/services/PhilaGov");
    });
  });
  
  describe("#locationPath", function () {
    it("is set to the API location path on instantiation", function () {
      phlPollFinder = require(pollFinderPath)();
      expect(phlPollFinder.locationPath).to.eql("/PollingPlaces/MapServer/1/query");
    });
  });

  describe("#findLocation", function () {
    it("exists as a public method on a PHLPollFinder instance", function () {
      phlPollFinder = require(pollFinderPath)();
      expect(typeof phlPollFinder.findLocation).to.eql("function");
    });

    it("", function (done) {
      done();
    });
  });
});
