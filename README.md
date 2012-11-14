[![Build Status](https://secure.travis-ci.org/mdb/phl-poll-finder.png?branch=master)](https://travis-ci.org/mdb/phl-poll-finder)

# phl-poll-finder

A Node.js module for finding the polling center for a Philadelphia address.

phl-poll-finder is based on [Mark Headd](http://twitter.com/mheadd)'s [phlfindpolls gist](https://gist.github.com/4015200).

The module uses Philadelphia's [311 Mobile Data Service API](http://services.phila.gov/ULRS311).

## Getting Started

Install phl-poll-finder:

    npm install phl-poll-finder

Require and instantiate phl-poll-finder:
  
    var phlPollFinder = require('phl-poll-finder')();

## Example Usage

Get latitude and longitude coordinates for a Philadelpia address:

    phlPollFinder.findPoll('1500 market street', function (d) {
      console.log(d);

      /* Example response:
        [{
          attributes: {
            WARD_1: 8,
            DIVISION_1: 15,
            POLLING_PL: 'THE PHOENIX APTS',
            ADDRESS: '1600 ARCH STREET',
            PARKING_AC: 'L',
            BUILDING_A: 'M'
          }
        }]
      */
    });
