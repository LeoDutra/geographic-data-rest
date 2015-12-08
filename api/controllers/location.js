'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  country_by_ISO3166_1_alpha_2_code: country_by_ISO3166_1_alpha_2_code,
  country_by_ISO3166_1_alpha_3_code: country_by_ISO3166_1_alpha_3_code
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function country_by_ISO3166_1_alpha_2_code(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var ISO_3166_1_Alpha_2_code = req.swagger.params.code.value;
  
  for (var i = 0, l = locations.length; i < l; i++) {
  	if (locations[i].ISO_3166_1_Alpha_2_code === ISO_3166_1_Alpha_2_code) {
  		return res.json(locations[i]);
  	}
  }

  // this sends back a JSON response which is a single string
  res.json(null);
}

function country_by_ISO3166_1_alpha_3_code(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var ISO_3166_1_Alpha_3_code = req.swagger.params.code.value;
  
  for (var i = 0, l = locations.length; i < l; i++) {
  	if (locations[i].ISO_3166_1_Alpha_3_code === ISO_3166_1_Alpha_3_code) {
  		return res.json(locations[i]);
  	}
  }

  // this sends back a JSON response which is a single string
  res.json(null);
}


var locations = [{
    "englishShortName": "Afghanistan",
    "ISO_3166_1_Alpha_2_code": "AF",
    "ISO_3166_1_Alpha_3_code": "AFG",
    "ISO_3166_1_Numeric_3_code": "004"
}, {
    "englishShortName": "Åland Islands",
    "ISO_3166_1_Alpha_2_code": "AX",
    "ISO_3166_1_Alpha_3_code": "ALA",
    "ISO_3166_1_Numeric_3_code": "248"
}, {
    "englishShortName": "Albania",
    "ISO_3166_1_Alpha_2_code": "AL",
    "ISO_3166_1_Alpha_3_code": "ALB",
    "ISO_3166_1_Numeric_3_code": "008"
}, {
    "englishShortName": "Algeria",
    "ISO_3166_1_Alpha_2_code": "DZ",
    "ISO_3166_1_Alpha_3_code": "DZA",
    "ISO_3166_1_Numeric_3_code": "012"
}, {
    "englishShortName": "American Samoa",
    "ISO_3166_1_Alpha_2_code": "AS",
    "ISO_3166_1_Alpha_3_code": "ASM",
    "ISO_3166_1_Numeric_3_code": "016"
}, {
    "englishShortName": "Andorra",
    "ISO_3166_1_Alpha_2_code": "AD",
    "ISO_3166_1_Alpha_3_code": "AND",
    "ISO_3166_1_Numeric_3_code": "020"
}, {
    "englishShortName": "Angola",
    "ISO_3166_1_Alpha_2_code": "AO",
    "ISO_3166_1_Alpha_3_code": "AGO",
    "ISO_3166_1_Numeric_3_code": "024"
}, {
    "englishShortName": "Anguilla",
    "ISO_3166_1_Alpha_2_code": "AI",
    "ISO_3166_1_Alpha_3_code": "AIA",
    "ISO_3166_1_Numeric_3_code": "660"
}, {
    "englishShortName": "Antarctica",
    "ISO_3166_1_Alpha_2_code": "AQ",
    "ISO_3166_1_Alpha_3_code": "ATA",
    "ISO_3166_1_Numeric_3_code": "010"
}, {
    "englishShortName": "Antigua and Barbuda",
    "ISO_3166_1_Alpha_2_code": "AG",
    "ISO_3166_1_Alpha_3_code": "ATG",
    "ISO_3166_1_Numeric_3_code": "028"
}, {
    "englishShortName": "Argentina",
    "ISO_3166_1_Alpha_2_code": "AR",
    "ISO_3166_1_Alpha_3_code": "ARG",
    "ISO_3166_1_Numeric_3_code": "032"
}, {
    "englishShortName": "Armenia",
    "ISO_3166_1_Alpha_2_code": "AM",
    "ISO_3166_1_Alpha_3_code": "ARM",
    "ISO_3166_1_Numeric_3_code": "051"
}, {
    "englishShortName": "Aruba",
    "ISO_3166_1_Alpha_2_code": "AW",
    "ISO_3166_1_Alpha_3_code": "ABW",
    "ISO_3166_1_Numeric_3_code": "533"
}, {
    "englishShortName": "Australia",
    "ISO_3166_1_Alpha_2_code": "AU",
    "ISO_3166_1_Alpha_3_code": "AUS",
    "ISO_3166_1_Numeric_3_code": "036"
}, {
    "englishShortName": "Austria",
    "ISO_3166_1_Alpha_2_code": "AT",
    "ISO_3166_1_Alpha_3_code": "AUT",
    "ISO_3166_1_Numeric_3_code": "040"
}, {
    "englishShortName": "Azerbaijan",
    "ISO_3166_1_Alpha_2_code": "AZ",
    "ISO_3166_1_Alpha_3_code": "AZE",
    "ISO_3166_1_Numeric_3_code": "031"
}, {
    "englishShortName": "Bahamas",
    "ISO_3166_1_Alpha_2_code": "BS",
    "ISO_3166_1_Alpha_3_code": "BHS",
    "ISO_3166_1_Numeric_3_code": "044"
}, {
    "englishShortName": "Bahrain",
    "ISO_3166_1_Alpha_2_code": "BH",
    "ISO_3166_1_Alpha_3_code": "BHR",
    "ISO_3166_1_Numeric_3_code": "048"
}, {
    "englishShortName": "Bangladesh",
    "ISO_3166_1_Alpha_2_code": "BD",
    "ISO_3166_1_Alpha_3_code": "BGD",
    "ISO_3166_1_Numeric_3_code": "050"
}, {
    "englishShortName": "Barbados",
    "ISO_3166_1_Alpha_2_code": "BB",
    "ISO_3166_1_Alpha_3_code": "BRB",
    "ISO_3166_1_Numeric_3_code": "052"
}, {
    "englishShortName": "Belarus",
    "ISO_3166_1_Alpha_2_code": "BY",
    "ISO_3166_1_Alpha_3_code": "BLR",
    "ISO_3166_1_Numeric_3_code": "112"
}, {
    "englishShortName": "Belgium",
    "ISO_3166_1_Alpha_2_code": "BE",
    "ISO_3166_1_Alpha_3_code": "BEL",
    "ISO_3166_1_Numeric_3_code": "056"
}, {
    "englishShortName": "Belize",
    "ISO_3166_1_Alpha_2_code": "BZ",
    "ISO_3166_1_Alpha_3_code": "BLZ",
    "ISO_3166_1_Numeric_3_code": "084"
}, {
    "englishShortName": "Benin",
    "ISO_3166_1_Alpha_2_code": "BJ",
    "ISO_3166_1_Alpha_3_code": "BEN",
    "ISO_3166_1_Numeric_3_code": "204"
}, {
    "englishShortName": "Bermuda",
    "ISO_3166_1_Alpha_2_code": "BM",
    "ISO_3166_1_Alpha_3_code": "BMU",
    "ISO_3166_1_Numeric_3_code": "060"
}, {
    "englishShortName": "Bhutan",
    "ISO_3166_1_Alpha_2_code": "BT",
    "ISO_3166_1_Alpha_3_code": "BTN",
    "ISO_3166_1_Numeric_3_code": "064"
}, {
    "englishShortName": "Bolivia (Plurinational State of)",
    "ISO_3166_1_Alpha_2_code": "BO",
    "ISO_3166_1_Alpha_3_code": "BOL",
    "ISO_3166_1_Numeric_3_code": "068"
}, {
    "englishShortName": "Bonaire, Sint Eustatius and Saba",
    "ISO_3166_1_Alpha_2_code": "BQ",
    "ISO_3166_1_Alpha_3_code": "BES",
    "ISO_3166_1_Numeric_3_code": "535"
}, {
    "englishShortName": "Bosnia and Herzegovina",
    "ISO_3166_1_Alpha_2_code": "BA",
    "ISO_3166_1_Alpha_3_code": "BIH",
    "ISO_3166_1_Numeric_3_code": "070"
}, {
    "englishShortName": "Botswana",
    "ISO_3166_1_Alpha_2_code": "BW",
    "ISO_3166_1_Alpha_3_code": "BWA",
    "ISO_3166_1_Numeric_3_code": "072"
}, {
    "englishShortName": "Bouvet Island",
    "ISO_3166_1_Alpha_2_code": "BV",
    "ISO_3166_1_Alpha_3_code": "BVT",
    "ISO_3166_1_Numeric_3_code": "074"
}, {
    "englishShortName": "Brazil",
    "ISO_3166_1_Alpha_2_code": "BR",
    "ISO_3166_1_Alpha_3_code": "BRA",
    "ISO_3166_1_Numeric_3_code": "076"
}, {
    "englishShortName": "British Indian Ocean Territory",
    "ISO_3166_1_Alpha_2_code": "IO",
    "ISO_3166_1_Alpha_3_code": "IOT",
    "ISO_3166_1_Numeric_3_code": "086"
}, {
    "englishShortName": "Brunei Darussalam",
    "ISO_3166_1_Alpha_2_code": "BN",
    "ISO_3166_1_Alpha_3_code": "BRN",
    "ISO_3166_1_Numeric_3_code": "096"
}, {
    "englishShortName": "Bulgaria",
    "ISO_3166_1_Alpha_2_code": "BG",
    "ISO_3166_1_Alpha_3_code": "BGR",
    "ISO_3166_1_Numeric_3_code": "100"
}, {
    "englishShortName": "Burkina Faso",
    "ISO_3166_1_Alpha_2_code": "BF",
    "ISO_3166_1_Alpha_3_code": "BFA",
    "ISO_3166_1_Numeric_3_code": "854"
}, {
    "englishShortName": "Burundi",
    "ISO_3166_1_Alpha_2_code": "BI",
    "ISO_3166_1_Alpha_3_code": "BDI",
    "ISO_3166_1_Numeric_3_code": "108"
}, {
    "englishShortName": "Cambodia",
    "ISO_3166_1_Alpha_2_code": "KH",
    "ISO_3166_1_Alpha_3_code": "KHM",
    "ISO_3166_1_Numeric_3_code": "116"
}, {
    "englishShortName": "Cameroon",
    "ISO_3166_1_Alpha_2_code": "CM",
    "ISO_3166_1_Alpha_3_code": "CMR",
    "ISO_3166_1_Numeric_3_code": "120"
}, {
    "englishShortName": "Canada",
    "ISO_3166_1_Alpha_2_code": "CA",
    "ISO_3166_1_Alpha_3_code": "CAN",
    "ISO_3166_1_Numeric_3_code": "124"
}, {
    "englishShortName": "Cabo Verde",
    "ISO_3166_1_Alpha_2_code": "CV",
    "ISO_3166_1_Alpha_3_code": "CPV",
    "ISO_3166_1_Numeric_3_code": "132"
}, {
    "englishShortName": "Cayman Islands",
    "ISO_3166_1_Alpha_2_code": "KY",
    "ISO_3166_1_Alpha_3_code": "CYM",
    "ISO_3166_1_Numeric_3_code": "136"
}, {
    "englishShortName": "Central African Republic",
    "ISO_3166_1_Alpha_2_code": "CF",
    "ISO_3166_1_Alpha_3_code": "CAF",
    "ISO_3166_1_Numeric_3_code": "140"
}, {
    "englishShortName": "Chad",
    "ISO_3166_1_Alpha_2_code": "TD",
    "ISO_3166_1_Alpha_3_code": "TCD",
    "ISO_3166_1_Numeric_3_code": "148"
}, {
    "englishShortName": "Chile",
    "ISO_3166_1_Alpha_2_code": "CL",
    "ISO_3166_1_Alpha_3_code": "CHL",
    "ISO_3166_1_Numeric_3_code": "152"
}, {
    "englishShortName": "China",
    "ISO_3166_1_Alpha_2_code": "CN",
    "ISO_3166_1_Alpha_3_code": "CHN",
    "ISO_3166_1_Numeric_3_code": "156"
}, {
    "englishShortName": "Christmas Island",
    "ISO_3166_1_Alpha_2_code": "CX",
    "ISO_3166_1_Alpha_3_code": "CXR",
    "ISO_3166_1_Numeric_3_code": "162"
}, {
    "englishShortName": "Cocos (Keeling) Islands",
    "ISO_3166_1_Alpha_2_code": "CC",
    "ISO_3166_1_Alpha_3_code": "CCK",
    "ISO_3166_1_Numeric_3_code": "166"
}, {
    "englishShortName": "Colombia",
    "ISO_3166_1_Alpha_2_code": "CO",
    "ISO_3166_1_Alpha_3_code": "COL",
    "ISO_3166_1_Numeric_3_code": "170"
}, {
    "englishShortName": "Comoros",
    "ISO_3166_1_Alpha_2_code": "KM",
    "ISO_3166_1_Alpha_3_code": "COM",
    "ISO_3166_1_Numeric_3_code": "174"
}, {
    "englishShortName": "Congo",
    "ISO_3166_1_Alpha_2_code": "CG",
    "ISO_3166_1_Alpha_3_code": "COG",
    "ISO_3166_1_Numeric_3_code": "178"
}, {
    "englishShortName": "Congo (Democratic Republic of the)",
    "ISO_3166_1_Alpha_2_code": "CD",
    "ISO_3166_1_Alpha_3_code": "COD",
    "ISO_3166_1_Numeric_3_code": "180"
}, {
    "englishShortName": "Cook Islands",
    "ISO_3166_1_Alpha_2_code": "CK",
    "ISO_3166_1_Alpha_3_code": "COK",
    "ISO_3166_1_Numeric_3_code": "184"
}, {
    "englishShortName": "Costa Rica",
    "ISO_3166_1_Alpha_2_code": "CR",
    "ISO_3166_1_Alpha_3_code": "CRI",
    "ISO_3166_1_Numeric_3_code": "188"
}, {
    "englishShortName": "Côte d'Ivoire",
    "ISO_3166_1_Alpha_2_code": "CI",
    "ISO_3166_1_Alpha_3_code": "CIV",
    "ISO_3166_1_Numeric_3_code": "384"
}, {
    "englishShortName": "Croatia",
    "ISO_3166_1_Alpha_2_code": "HR",
    "ISO_3166_1_Alpha_3_code": "HRV",
    "ISO_3166_1_Numeric_3_code": "191"
}, {
    "englishShortName": "Cuba",
    "ISO_3166_1_Alpha_2_code": "CU",
    "ISO_3166_1_Alpha_3_code": "CUB",
    "ISO_3166_1_Numeric_3_code": "192"
}, {
    "englishShortName": "Curaçao",
    "ISO_3166_1_Alpha_2_code": "CW",
    "ISO_3166_1_Alpha_3_code": "CUW",
    "ISO_3166_1_Numeric_3_code": "531"
}, {
    "englishShortName": "Cyprus",
    "ISO_3166_1_Alpha_2_code": "CY",
    "ISO_3166_1_Alpha_3_code": "CYP",
    "ISO_3166_1_Numeric_3_code": "196"
}, {
    "englishShortName": "Czech Republic",
    "ISO_3166_1_Alpha_2_code": "CZ",
    "ISO_3166_1_Alpha_3_code": "CZE",
    "ISO_3166_1_Numeric_3_code": "203"
}, {
    "englishShortName": "Denmark",
    "ISO_3166_1_Alpha_2_code": "DK",
    "ISO_3166_1_Alpha_3_code": "DNK",
    "ISO_3166_1_Numeric_3_code": "208"
}, {
    "englishShortName": "Djibouti",
    "ISO_3166_1_Alpha_2_code": "DJ",
    "ISO_3166_1_Alpha_3_code": "DJI",
    "ISO_3166_1_Numeric_3_code": "262"
}, {
    "englishShortName": "Dominica",
    "ISO_3166_1_Alpha_2_code": "DM",
    "ISO_3166_1_Alpha_3_code": "DMA",
    "ISO_3166_1_Numeric_3_code": "212"
}, {
    "englishShortName": "Dominican Republic",
    "ISO_3166_1_Alpha_2_code": "DO",
    "ISO_3166_1_Alpha_3_code": "DOM",
    "ISO_3166_1_Numeric_3_code": "214"
}, {
    "englishShortName": "Ecuador",
    "ISO_3166_1_Alpha_2_code": "EC",
    "ISO_3166_1_Alpha_3_code": "ECU",
    "ISO_3166_1_Numeric_3_code": "218"
}, {
    "englishShortName": "Egypt",
    "ISO_3166_1_Alpha_2_code": "EG",
    "ISO_3166_1_Alpha_3_code": "EGY",
    "ISO_3166_1_Numeric_3_code": "818"
}, {
    "englishShortName": "El Salvador",
    "ISO_3166_1_Alpha_2_code": "SV",
    "ISO_3166_1_Alpha_3_code": "SLV",
    "ISO_3166_1_Numeric_3_code": "222"
}, {
    "englishShortName": "Equatorial Guinea",
    "ISO_3166_1_Alpha_2_code": "GQ",
    "ISO_3166_1_Alpha_3_code": "GNQ",
    "ISO_3166_1_Numeric_3_code": "226"
}, {
    "englishShortName": "Eritrea",
    "ISO_3166_1_Alpha_2_code": "ER",
    "ISO_3166_1_Alpha_3_code": "ERI",
    "ISO_3166_1_Numeric_3_code": "232"
}, {
    "englishShortName": "Estonia",
    "ISO_3166_1_Alpha_2_code": "EE",
    "ISO_3166_1_Alpha_3_code": "EST",
    "ISO_3166_1_Numeric_3_code": "233"
}, {
    "englishShortName": "Ethiopia",
    "ISO_3166_1_Alpha_2_code": "ET",
    "ISO_3166_1_Alpha_3_code": "ETH",
    "ISO_3166_1_Numeric_3_code": "231"
}, {
    "englishShortName": "Falkland Islands (Malvinas)",
    "ISO_3166_1_Alpha_2_code": "FK",
    "ISO_3166_1_Alpha_3_code": "FLK",
    "ISO_3166_1_Numeric_3_code": "238"
}, {
    "englishShortName": "Faroe Islands",
    "ISO_3166_1_Alpha_2_code": "FO",
    "ISO_3166_1_Alpha_3_code": "FRO",
    "ISO_3166_1_Numeric_3_code": "234"
}, {
    "englishShortName": "Fiji",
    "ISO_3166_1_Alpha_2_code": "FJ",
    "ISO_3166_1_Alpha_3_code": "FJI",
    "ISO_3166_1_Numeric_3_code": "242"
}, {
    "englishShortName": "Finland",
    "ISO_3166_1_Alpha_2_code": "FI",
    "ISO_3166_1_Alpha_3_code": "FIN",
    "ISO_3166_1_Numeric_3_code": "246"
}, {
    "englishShortName": "France",
    "ISO_3166_1_Alpha_2_code": "FR",
    "ISO_3166_1_Alpha_3_code": "FRA",
    "ISO_3166_1_Numeric_3_code": "250"
}, {
    "englishShortName": "French Guiana",
    "ISO_3166_1_Alpha_2_code": "GF",
    "ISO_3166_1_Alpha_3_code": "GUF",
    "ISO_3166_1_Numeric_3_code": "254"
}, {
    "englishShortName": "French Polynesia",
    "ISO_3166_1_Alpha_2_code": "PF",
    "ISO_3166_1_Alpha_3_code": "PYF",
    "ISO_3166_1_Numeric_3_code": "258"
}, {
    "englishShortName": "French Southern Territories",
    "ISO_3166_1_Alpha_2_code": "TF",
    "ISO_3166_1_Alpha_3_code": "ATF",
    "ISO_3166_1_Numeric_3_code": "260"
}, {
    "englishShortName": "Gabon",
    "ISO_3166_1_Alpha_2_code": "GA",
    "ISO_3166_1_Alpha_3_code": "GAB",
    "ISO_3166_1_Numeric_3_code": "266"
}, {
    "englishShortName": "Gambia",
    "ISO_3166_1_Alpha_2_code": "GM",
    "ISO_3166_1_Alpha_3_code": "GMB",
    "ISO_3166_1_Numeric_3_code": "270"
}, {
    "englishShortName": "Georgia",
    "ISO_3166_1_Alpha_2_code": "GE",
    "ISO_3166_1_Alpha_3_code": "GEO",
    "ISO_3166_1_Numeric_3_code": "268"
}, {
    "englishShortName": "Germany",
    "ISO_3166_1_Alpha_2_code": "DE",
    "ISO_3166_1_Alpha_3_code": "DEU",
    "ISO_3166_1_Numeric_3_code": "276"
}, {
    "englishShortName": "Ghana",
    "ISO_3166_1_Alpha_2_code": "GH",
    "ISO_3166_1_Alpha_3_code": "GHA",
    "ISO_3166_1_Numeric_3_code": "288"
}, {
    "englishShortName": "Gibraltar",
    "ISO_3166_1_Alpha_2_code": "GI",
    "ISO_3166_1_Alpha_3_code": "GIB",
    "ISO_3166_1_Numeric_3_code": "292"
}, {
    "englishShortName": "Greece",
    "ISO_3166_1_Alpha_2_code": "GR",
    "ISO_3166_1_Alpha_3_code": "GRC",
    "ISO_3166_1_Numeric_3_code": "300"
}, {
    "englishShortName": "Greenland",
    "ISO_3166_1_Alpha_2_code": "GL",
    "ISO_3166_1_Alpha_3_code": "GRL",
    "ISO_3166_1_Numeric_3_code": "304"
}, {
    "englishShortName": "Grenada",
    "ISO_3166_1_Alpha_2_code": "GD",
    "ISO_3166_1_Alpha_3_code": "GRD",
    "ISO_3166_1_Numeric_3_code": "308"
}, {
    "englishShortName": "Guadeloupe",
    "ISO_3166_1_Alpha_2_code": "GP",
    "ISO_3166_1_Alpha_3_code": "GLP",
    "ISO_3166_1_Numeric_3_code": "312"
}, {
    "englishShortName": "Guam",
    "ISO_3166_1_Alpha_2_code": "GU",
    "ISO_3166_1_Alpha_3_code": "GUM",
    "ISO_3166_1_Numeric_3_code": "316"
}, {
    "englishShortName": "Guatemala",
    "ISO_3166_1_Alpha_2_code": "GT",
    "ISO_3166_1_Alpha_3_code": "GTM",
    "ISO_3166_1_Numeric_3_code": "320"
}, {
    "englishShortName": "Guernsey",
    "ISO_3166_1_Alpha_2_code": "GG",
    "ISO_3166_1_Alpha_3_code": "GGY",
    "ISO_3166_1_Numeric_3_code": "831"
}, {
    "englishShortName": "Guinea",
    "ISO_3166_1_Alpha_2_code": "GN",
    "ISO_3166_1_Alpha_3_code": "GIN",
    "ISO_3166_1_Numeric_3_code": "324"
}, {
    "englishShortName": "Guinea-Bissau",
    "ISO_3166_1_Alpha_2_code": "GW",
    "ISO_3166_1_Alpha_3_code": "GNB",
    "ISO_3166_1_Numeric_3_code": "624"
}, {
    "englishShortName": "Guyana",
    "ISO_3166_1_Alpha_2_code": "GY",
    "ISO_3166_1_Alpha_3_code": "GUY",
    "ISO_3166_1_Numeric_3_code": "328"
}, {
    "englishShortName": "Haiti",
    "ISO_3166_1_Alpha_2_code": "HT",
    "ISO_3166_1_Alpha_3_code": "HTI",
    "ISO_3166_1_Numeric_3_code": "332"
}, {
    "englishShortName": "Heard Island and McDonald Islands",
    "ISO_3166_1_Alpha_2_code": "HM",
    "ISO_3166_1_Alpha_3_code": "HMD",
    "ISO_3166_1_Numeric_3_code": "334"
}, {
    "englishShortName": "Holy See",
    "ISO_3166_1_Alpha_2_code": "VA",
    "ISO_3166_1_Alpha_3_code": "VAT",
    "ISO_3166_1_Numeric_3_code": "336"
}, {
    "englishShortName": "Honduras",
    "ISO_3166_1_Alpha_2_code": "HN",
    "ISO_3166_1_Alpha_3_code": "HND",
    "ISO_3166_1_Numeric_3_code": "340"
}, {
    "englishShortName": "Hong Kong",
    "ISO_3166_1_Alpha_2_code": "HK",
    "ISO_3166_1_Alpha_3_code": "HKG",
    "ISO_3166_1_Numeric_3_code": "344"
}, {
    "englishShortName": "Hungary",
    "ISO_3166_1_Alpha_2_code": "HU",
    "ISO_3166_1_Alpha_3_code": "HUN",
    "ISO_3166_1_Numeric_3_code": "348"
}, {
    "englishShortName": "Iceland",
    "ISO_3166_1_Alpha_2_code": "IS",
    "ISO_3166_1_Alpha_3_code": "ISL",
    "ISO_3166_1_Numeric_3_code": "352"
}, {
    "englishShortName": "India",
    "ISO_3166_1_Alpha_2_code": "IN",
    "ISO_3166_1_Alpha_3_code": "IND",
    "ISO_3166_1_Numeric_3_code": "356"
}, {
    "englishShortName": "Indonesia",
    "ISO_3166_1_Alpha_2_code": "ID",
    "ISO_3166_1_Alpha_3_code": "IDN",
    "ISO_3166_1_Numeric_3_code": "360"
}, {
    "englishShortName": "Iran (Islamic Republic of)",
    "ISO_3166_1_Alpha_2_code": "IR",
    "ISO_3166_1_Alpha_3_code": "IRN",
    "ISO_3166_1_Numeric_3_code": "364"
}, {
    "englishShortName": "Iraq",
    "ISO_3166_1_Alpha_2_code": "IQ",
    "ISO_3166_1_Alpha_3_code": "IRQ",
    "ISO_3166_1_Numeric_3_code": "368"
}, {
    "englishShortName": "Ireland",
    "ISO_3166_1_Alpha_2_code": "IE",
    "ISO_3166_1_Alpha_3_code": "IRL",
    "ISO_3166_1_Numeric_3_code": "372"
}, {
    "englishShortName": "Isle of Man",
    "ISO_3166_1_Alpha_2_code": "IM",
    "ISO_3166_1_Alpha_3_code": "IMN",
    "ISO_3166_1_Numeric_3_code": "833"
}, {
    "englishShortName": "Israel",
    "ISO_3166_1_Alpha_2_code": "IL",
    "ISO_3166_1_Alpha_3_code": "ISR",
    "ISO_3166_1_Numeric_3_code": "376"
}, {
    "englishShortName": "Italy",
    "ISO_3166_1_Alpha_2_code": "IT",
    "ISO_3166_1_Alpha_3_code": "ITA",
    "ISO_3166_1_Numeric_3_code": "380"
}, {
    "englishShortName": "Jamaica",
    "ISO_3166_1_Alpha_2_code": "JM",
    "ISO_3166_1_Alpha_3_code": "JAM",
    "ISO_3166_1_Numeric_3_code": "388"
}, {
    "englishShortName": "Japan",
    "ISO_3166_1_Alpha_2_code": "JP",
    "ISO_3166_1_Alpha_3_code": "JPN",
    "ISO_3166_1_Numeric_3_code": "392"
}, {
    "englishShortName": "Jersey",
    "ISO_3166_1_Alpha_2_code": "JE",
    "ISO_3166_1_Alpha_3_code": "JEY",
    "ISO_3166_1_Numeric_3_code": "832"
}, {
    "englishShortName": "Jordan",
    "ISO_3166_1_Alpha_2_code": "JO",
    "ISO_3166_1_Alpha_3_code": "JOR",
    "ISO_3166_1_Numeric_3_code": "400"
}, {
    "englishShortName": "Kazakhstan",
    "ISO_3166_1_Alpha_2_code": "KZ",
    "ISO_3166_1_Alpha_3_code": "KAZ",
    "ISO_3166_1_Numeric_3_code": "398"
}, {
    "englishShortName": "Kenya",
    "ISO_3166_1_Alpha_2_code": "KE",
    "ISO_3166_1_Alpha_3_code": "KEN",
    "ISO_3166_1_Numeric_3_code": "404"
}, {
    "englishShortName": "Kiribati",
    "ISO_3166_1_Alpha_2_code": "KI",
    "ISO_3166_1_Alpha_3_code": "KIR",
    "ISO_3166_1_Numeric_3_code": "296"
}, {
    "englishShortName": "Korea (Democratic People's Republic of)",
    "ISO_3166_1_Alpha_2_code": "KP",
    "ISO_3166_1_Alpha_3_code": "PRK",
    "ISO_3166_1_Numeric_3_code": "408"
}, {
    "englishShortName": "Korea (Republic of)",
    "ISO_3166_1_Alpha_2_code": "KR",
    "ISO_3166_1_Alpha_3_code": "KOR",
    "ISO_3166_1_Numeric_3_code": "410"
}, {
    "englishShortName": "Kuwait",
    "ISO_3166_1_Alpha_2_code": "KW",
    "ISO_3166_1_Alpha_3_code": "KWT",
    "ISO_3166_1_Numeric_3_code": "414"
}, {
    "englishShortName": "Kyrgyzstan",
    "ISO_3166_1_Alpha_2_code": "KG",
    "ISO_3166_1_Alpha_3_code": "KGZ",
    "ISO_3166_1_Numeric_3_code": "417"
}, {
    "englishShortName": "Lao People's Democratic Republic",
    "ISO_3166_1_Alpha_2_code": "LA",
    "ISO_3166_1_Alpha_3_code": "LAO",
    "ISO_3166_1_Numeric_3_code": "418"
}, {
    "englishShortName": "Latvia",
    "ISO_3166_1_Alpha_2_code": "LV",
    "ISO_3166_1_Alpha_3_code": "LVA",
    "ISO_3166_1_Numeric_3_code": "428"
}, {
    "englishShortName": "Lebanon",
    "ISO_3166_1_Alpha_2_code": "LB",
    "ISO_3166_1_Alpha_3_code": "LBN",
    "ISO_3166_1_Numeric_3_code": "422"
}, {
    "englishShortName": "Lesotho",
    "ISO_3166_1_Alpha_2_code": "LS",
    "ISO_3166_1_Alpha_3_code": "LSO",
    "ISO_3166_1_Numeric_3_code": "426"
}, {
    "englishShortName": "Liberia",
    "ISO_3166_1_Alpha_2_code": "LR",
    "ISO_3166_1_Alpha_3_code": "LBR",
    "ISO_3166_1_Numeric_3_code": "430"
}, {
    "englishShortName": "Libya",
    "ISO_3166_1_Alpha_2_code": "LY",
    "ISO_3166_1_Alpha_3_code": "LBY",
    "ISO_3166_1_Numeric_3_code": "434"
}, {
    "englishShortName": "Liechtenstein",
    "ISO_3166_1_Alpha_2_code": "LI",
    "ISO_3166_1_Alpha_3_code": "LIE",
    "ISO_3166_1_Numeric_3_code": "438"
}, {
    "englishShortName": "Lithuania",
    "ISO_3166_1_Alpha_2_code": "LT",
    "ISO_3166_1_Alpha_3_code": "LTU",
    "ISO_3166_1_Numeric_3_code": "440"
}, {
    "englishShortName": "Luxembourg",
    "ISO_3166_1_Alpha_2_code": "LU",
    "ISO_3166_1_Alpha_3_code": "LUX",
    "ISO_3166_1_Numeric_3_code": "442"
}, {
    "englishShortName": "Macao",
    "ISO_3166_1_Alpha_2_code": "MO",
    "ISO_3166_1_Alpha_3_code": "MAC",
    "ISO_3166_1_Numeric_3_code": "446"
}, {
    "englishShortName": "Macedonia (the former Yugoslav Republic of)",
    "ISO_3166_1_Alpha_2_code": "MK",
    "ISO_3166_1_Alpha_3_code": "MKD",
    "ISO_3166_1_Numeric_3_code": "807"
}, {
    "englishShortName": "Madagascar",
    "ISO_3166_1_Alpha_2_code": "MG",
    "ISO_3166_1_Alpha_3_code": "MDG",
    "ISO_3166_1_Numeric_3_code": "450"
}, {
    "englishShortName": "Malawi",
    "ISO_3166_1_Alpha_2_code": "MW",
    "ISO_3166_1_Alpha_3_code": "MWI",
    "ISO_3166_1_Numeric_3_code": "454"
}, {
    "englishShortName": "Malaysia",
    "ISO_3166_1_Alpha_2_code": "MY",
    "ISO_3166_1_Alpha_3_code": "MYS",
    "ISO_3166_1_Numeric_3_code": "458"
}, {
    "englishShortName": "Maldives",
    "ISO_3166_1_Alpha_2_code": "MV",
    "ISO_3166_1_Alpha_3_code": "MDV",
    "ISO_3166_1_Numeric_3_code": "462"
}, {
    "englishShortName": "Mali",
    "ISO_3166_1_Alpha_2_code": "ML",
    "ISO_3166_1_Alpha_3_code": "MLI",
    "ISO_3166_1_Numeric_3_code": "466"
}, {
    "englishShortName": "Malta",
    "ISO_3166_1_Alpha_2_code": "MT",
    "ISO_3166_1_Alpha_3_code": "MLT",
    "ISO_3166_1_Numeric_3_code": "470"
}, {
    "englishShortName": "Marshall Islands",
    "ISO_3166_1_Alpha_2_code": "MH",
    "ISO_3166_1_Alpha_3_code": "MHL",
    "ISO_3166_1_Numeric_3_code": "584"
}, {
    "englishShortName": "Martinique",
    "ISO_3166_1_Alpha_2_code": "MQ",
    "ISO_3166_1_Alpha_3_code": "MTQ",
    "ISO_3166_1_Numeric_3_code": "474"
}, {
    "englishShortName": "Mauritania",
    "ISO_3166_1_Alpha_2_code": "MR",
    "ISO_3166_1_Alpha_3_code": "MRT",
    "ISO_3166_1_Numeric_3_code": "478"
}, {
    "englishShortName": "Mauritius",
    "ISO_3166_1_Alpha_2_code": "MU",
    "ISO_3166_1_Alpha_3_code": "MUS",
    "ISO_3166_1_Numeric_3_code": "480"
}, {
    "englishShortName": "Mayotte",
    "ISO_3166_1_Alpha_2_code": "YT",
    "ISO_3166_1_Alpha_3_code": "MYT",
    "ISO_3166_1_Numeric_3_code": "175"
}, {
    "englishShortName": "Mexico",
    "ISO_3166_1_Alpha_2_code": "MX",
    "ISO_3166_1_Alpha_3_code": "MEX",
    "ISO_3166_1_Numeric_3_code": "484"
}, {
    "englishShortName": "Micronesia (Federated States of)",
    "ISO_3166_1_Alpha_2_code": "FM",
    "ISO_3166_1_Alpha_3_code": "FSM",
    "ISO_3166_1_Numeric_3_code": "583"
}, {
    "englishShortName": "Moldova (Republic of)",
    "ISO_3166_1_Alpha_2_code": "MD",
    "ISO_3166_1_Alpha_3_code": "MDA",
    "ISO_3166_1_Numeric_3_code": "498"
}, {
    "englishShortName": "Monaco",
    "ISO_3166_1_Alpha_2_code": "MC",
    "ISO_3166_1_Alpha_3_code": "MCO",
    "ISO_3166_1_Numeric_3_code": "492"
}, {
    "englishShortName": "Mongolia",
    "ISO_3166_1_Alpha_2_code": "MN",
    "ISO_3166_1_Alpha_3_code": "MNG",
    "ISO_3166_1_Numeric_3_code": "496"
}, {
    "englishShortName": "Montenegro",
    "ISO_3166_1_Alpha_2_code": "ME",
    "ISO_3166_1_Alpha_3_code": "MNE",
    "ISO_3166_1_Numeric_3_code": "499"
}, {
    "englishShortName": "Montserrat",
    "ISO_3166_1_Alpha_2_code": "MS",
    "ISO_3166_1_Alpha_3_code": "MSR",
    "ISO_3166_1_Numeric_3_code": "500"
}, {
    "englishShortName": "Morocco",
    "ISO_3166_1_Alpha_2_code": "MA",
    "ISO_3166_1_Alpha_3_code": "MAR",
    "ISO_3166_1_Numeric_3_code": "504"
}, {
    "englishShortName": "Mozambique",
    "ISO_3166_1_Alpha_2_code": "MZ",
    "ISO_3166_1_Alpha_3_code": "MOZ",
    "ISO_3166_1_Numeric_3_code": "508"
}, {
    "englishShortName": "Myanmar",
    "ISO_3166_1_Alpha_2_code": "MM",
    "ISO_3166_1_Alpha_3_code": "MMR",
    "ISO_3166_1_Numeric_3_code": "104"
}, {
    "englishShortName": "Namibia",
    "ISO_3166_1_Alpha_2_code": "NA",
    "ISO_3166_1_Alpha_3_code": "NAM",
    "ISO_3166_1_Numeric_3_code": "516"
}, {
    "englishShortName": "Nauru",
    "ISO_3166_1_Alpha_2_code": "NR",
    "ISO_3166_1_Alpha_3_code": "NRU",
    "ISO_3166_1_Numeric_3_code": "520"
}, {
    "englishShortName": "Nepal",
    "ISO_3166_1_Alpha_2_code": "NP",
    "ISO_3166_1_Alpha_3_code": "NPL",
    "ISO_3166_1_Numeric_3_code": "524"
}, {
    "englishShortName": "Netherlands",
    "ISO_3166_1_Alpha_2_code": "NL",
    "ISO_3166_1_Alpha_3_code": "NLD",
    "ISO_3166_1_Numeric_3_code": "528"
}, {
    "englishShortName": "New Caledonia",
    "ISO_3166_1_Alpha_2_code": "NC",
    "ISO_3166_1_Alpha_3_code": "NCL",
    "ISO_3166_1_Numeric_3_code": "540"
}, {
    "englishShortName": "New Zealand",
    "ISO_3166_1_Alpha_2_code": "NZ",
    "ISO_3166_1_Alpha_3_code": "NZL",
    "ISO_3166_1_Numeric_3_code": "554"
}, {
    "englishShortName": "Nicaragua",
    "ISO_3166_1_Alpha_2_code": "NI",
    "ISO_3166_1_Alpha_3_code": "NIC",
    "ISO_3166_1_Numeric_3_code": "558"
}, {
    "englishShortName": "Niger",
    "ISO_3166_1_Alpha_2_code": "NE",
    "ISO_3166_1_Alpha_3_code": "NER",
    "ISO_3166_1_Numeric_3_code": "562"
}, {
    "englishShortName": "Nigeria",
    "ISO_3166_1_Alpha_2_code": "NG",
    "ISO_3166_1_Alpha_3_code": "NGA",
    "ISO_3166_1_Numeric_3_code": "566"
}, {
    "englishShortName": "Niue",
    "ISO_3166_1_Alpha_2_code": "NU",
    "ISO_3166_1_Alpha_3_code": "NIU",
    "ISO_3166_1_Numeric_3_code": "570"
}, {
    "englishShortName": "Norfolk Island",
    "ISO_3166_1_Alpha_2_code": "NF",
    "ISO_3166_1_Alpha_3_code": "NFK",
    "ISO_3166_1_Numeric_3_code": "574"
}, {
    "englishShortName": "Northern Mariana Islands",
    "ISO_3166_1_Alpha_2_code": "MP",
    "ISO_3166_1_Alpha_3_code": "MNP",
    "ISO_3166_1_Numeric_3_code": "580"
}, {
    "englishShortName": "Norway",
    "ISO_3166_1_Alpha_2_code": "NO",
    "ISO_3166_1_Alpha_3_code": "NOR",
    "ISO_3166_1_Numeric_3_code": "578"
}, {
    "englishShortName": "Oman",
    "ISO_3166_1_Alpha_2_code": "OM",
    "ISO_3166_1_Alpha_3_code": "OMN",
    "ISO_3166_1_Numeric_3_code": "512"
}, {
    "englishShortName": "Pakistan",
    "ISO_3166_1_Alpha_2_code": "PK",
    "ISO_3166_1_Alpha_3_code": "PAK",
    "ISO_3166_1_Numeric_3_code": "586"
}, {
    "englishShortName": "Palau",
    "ISO_3166_1_Alpha_2_code": "PW",
    "ISO_3166_1_Alpha_3_code": "PLW",
    "ISO_3166_1_Numeric_3_code": "585"
}, {
    "englishShortName": "Palestine, State of",
    "ISO_3166_1_Alpha_2_code": "PS",
    "ISO_3166_1_Alpha_3_code": "PSE",
    "ISO_3166_1_Numeric_3_code": "275"
}, {
    "englishShortName": "Panama",
    "ISO_3166_1_Alpha_2_code": "PA",
    "ISO_3166_1_Alpha_3_code": "PAN",
    "ISO_3166_1_Numeric_3_code": "591"
}, {
    "englishShortName": "Papua New Guinea",
    "ISO_3166_1_Alpha_2_code": "PG",
    "ISO_3166_1_Alpha_3_code": "PNG",
    "ISO_3166_1_Numeric_3_code": "598"
}, {
    "englishShortName": "Paraguay",
    "ISO_3166_1_Alpha_2_code": "PY",
    "ISO_3166_1_Alpha_3_code": "PRY",
    "ISO_3166_1_Numeric_3_code": "600"
}, {
    "englishShortName": "Peru",
    "ISO_3166_1_Alpha_2_code": "PE",
    "ISO_3166_1_Alpha_3_code": "PER",
    "ISO_3166_1_Numeric_3_code": "604"
}, {
    "englishShortName": "Philippines",
    "ISO_3166_1_Alpha_2_code": "PH",
    "ISO_3166_1_Alpha_3_code": "PHL",
    "ISO_3166_1_Numeric_3_code": "608"
}, {
    "englishShortName": "Pitcairn",
    "ISO_3166_1_Alpha_2_code": "PN",
    "ISO_3166_1_Alpha_3_code": "PCN",
    "ISO_3166_1_Numeric_3_code": "612"
}, {
    "englishShortName": "Poland",
    "ISO_3166_1_Alpha_2_code": "PL",
    "ISO_3166_1_Alpha_3_code": "POL",
    "ISO_3166_1_Numeric_3_code": "616"
}, {
    "englishShortName": "Portugal",
    "ISO_3166_1_Alpha_2_code": "PT",
    "ISO_3166_1_Alpha_3_code": "PRT",
    "ISO_3166_1_Numeric_3_code": "620"
}, {
    "englishShortName": "Puerto Rico",
    "ISO_3166_1_Alpha_2_code": "PR",
    "ISO_3166_1_Alpha_3_code": "PRI",
    "ISO_3166_1_Numeric_3_code": "630"
}, {
    "englishShortName": "Qatar",
    "ISO_3166_1_Alpha_2_code": "QA",
    "ISO_3166_1_Alpha_3_code": "QAT",
    "ISO_3166_1_Numeric_3_code": "634"
}, {
    "englishShortName": "Réunion",
    "ISO_3166_1_Alpha_2_code": "RE",
    "ISO_3166_1_Alpha_3_code": "REU",
    "ISO_3166_1_Numeric_3_code": "638"
}, {
    "englishShortName": "Romania",
    "ISO_3166_1_Alpha_2_code": "RO",
    "ISO_3166_1_Alpha_3_code": "ROU",
    "ISO_3166_1_Numeric_3_code": "642"
}, {
    "englishShortName": "Russian Federation",
    "ISO_3166_1_Alpha_2_code": "RU",
    "ISO_3166_1_Alpha_3_code": "RUS",
    "ISO_3166_1_Numeric_3_code": "643"
}, {
    "englishShortName": "Rwanda",
    "ISO_3166_1_Alpha_2_code": "RW",
    "ISO_3166_1_Alpha_3_code": "RWA",
    "ISO_3166_1_Numeric_3_code": "646"
}, {
    "englishShortName": "Saint Barthélemy",
    "ISO_3166_1_Alpha_2_code": "BL",
    "ISO_3166_1_Alpha_3_code": "BLM",
    "ISO_3166_1_Numeric_3_code": "652"
}, {
    "englishShortName": "Saint Helena, Ascension and Tristan da Cunha",
    "ISO_3166_1_Alpha_2_code": "SH",
    "ISO_3166_1_Alpha_3_code": "SHN",
    "ISO_3166_1_Numeric_3_code": "654"
}, {
    "englishShortName": "Saint Kitts and Nevis",
    "ISO_3166_1_Alpha_2_code": "KN",
    "ISO_3166_1_Alpha_3_code": "KNA",
    "ISO_3166_1_Numeric_3_code": "659"
}, {
    "englishShortName": "Saint Lucia",
    "ISO_3166_1_Alpha_2_code": "LC",
    "ISO_3166_1_Alpha_3_code": "LCA",
    "ISO_3166_1_Numeric_3_code": "662"
}, {
    "englishShortName": "Saint Martin (French part)",
    "ISO_3166_1_Alpha_2_code": "MF",
    "ISO_3166_1_Alpha_3_code": "MAF",
    "ISO_3166_1_Numeric_3_code": "663"
}, {
    "englishShortName": "Saint Pierre and Miquelon",
    "ISO_3166_1_Alpha_2_code": "PM",
    "ISO_3166_1_Alpha_3_code": "SPM",
    "ISO_3166_1_Numeric_3_code": "666"
}, {
    "englishShortName": "Saint Vincent and the Grenadines",
    "ISO_3166_1_Alpha_2_code": "VC",
    "ISO_3166_1_Alpha_3_code": "VCT",
    "ISO_3166_1_Numeric_3_code": "670"
}, {
    "englishShortName": "Samoa",
    "ISO_3166_1_Alpha_2_code": "WS",
    "ISO_3166_1_Alpha_3_code": "WSM",
    "ISO_3166_1_Numeric_3_code": "882"
}, {
    "englishShortName": "San Marino",
    "ISO_3166_1_Alpha_2_code": "SM",
    "ISO_3166_1_Alpha_3_code": "SMR",
    "ISO_3166_1_Numeric_3_code": "674"
}, {
    "englishShortName": "Sao Tome and Principe",
    "ISO_3166_1_Alpha_2_code": "ST",
    "ISO_3166_1_Alpha_3_code": "STP",
    "ISO_3166_1_Numeric_3_code": "678"
}, {
    "englishShortName": "Saudi Arabia",
    "ISO_3166_1_Alpha_2_code": "SA",
    "ISO_3166_1_Alpha_3_code": "SAU",
    "ISO_3166_1_Numeric_3_code": "682"
}, {
    "englishShortName": "Senegal",
    "ISO_3166_1_Alpha_2_code": "SN",
    "ISO_3166_1_Alpha_3_code": "SEN",
    "ISO_3166_1_Numeric_3_code": "686"
}, {
    "englishShortName": "Serbia",
    "ISO_3166_1_Alpha_2_code": "RS",
    "ISO_3166_1_Alpha_3_code": "SRB",
    "ISO_3166_1_Numeric_3_code": "688"
}, {
    "englishShortName": "Seychelles",
    "ISO_3166_1_Alpha_2_code": "SC",
    "ISO_3166_1_Alpha_3_code": "SYC",
    "ISO_3166_1_Numeric_3_code": "690"
}, {
    "englishShortName": "Sierra Leone",
    "ISO_3166_1_Alpha_2_code": "SL",
    "ISO_3166_1_Alpha_3_code": "SLE",
    "ISO_3166_1_Numeric_3_code": "694"
}, {
    "englishShortName": "Singapore",
    "ISO_3166_1_Alpha_2_code": "SG",
    "ISO_3166_1_Alpha_3_code": "SGP",
    "ISO_3166_1_Numeric_3_code": "702"
}, {
    "englishShortName": "Sint Maarten (Dutch part)",
    "ISO_3166_1_Alpha_2_code": "SX",
    "ISO_3166_1_Alpha_3_code": "SXM",
    "ISO_3166_1_Numeric_3_code": "534"
}, {
    "englishShortName": "Slovakia",
    "ISO_3166_1_Alpha_2_code": "SK",
    "ISO_3166_1_Alpha_3_code": "SVK",
    "ISO_3166_1_Numeric_3_code": "703"
}, {
    "englishShortName": "Slovenia",
    "ISO_3166_1_Alpha_2_code": "SI",
    "ISO_3166_1_Alpha_3_code": "SVN",
    "ISO_3166_1_Numeric_3_code": "705"
}, {
    "englishShortName": "Solomon Islands",
    "ISO_3166_1_Alpha_2_code": "SB",
    "ISO_3166_1_Alpha_3_code": "SLB",
    "ISO_3166_1_Numeric_3_code": "090"
}, {
    "englishShortName": "Somalia",
    "ISO_3166_1_Alpha_2_code": "SO",
    "ISO_3166_1_Alpha_3_code": "SOM",
    "ISO_3166_1_Numeric_3_code": "706"
}, {
    "englishShortName": "South Africa",
    "ISO_3166_1_Alpha_2_code": "ZA",
    "ISO_3166_1_Alpha_3_code": "ZAF",
    "ISO_3166_1_Numeric_3_code": "710"
}, {
    "englishShortName": "South Georgia and the South Sandwich Islands",
    "ISO_3166_1_Alpha_2_code": "GS",
    "ISO_3166_1_Alpha_3_code": "SGS",
    "ISO_3166_1_Numeric_3_code": "239"
}, {
    "englishShortName": "South Sudan",
    "ISO_3166_1_Alpha_2_code": "SS",
    "ISO_3166_1_Alpha_3_code": "SSD",
    "ISO_3166_1_Numeric_3_code": "728"
}, {
    "englishShortName": "Spain",
    "ISO_3166_1_Alpha_2_code": "ES",
    "ISO_3166_1_Alpha_3_code": "ESP",
    "ISO_3166_1_Numeric_3_code": "724"
}, {
    "englishShortName": "Sri Lanka",
    "ISO_3166_1_Alpha_2_code": "LK",
    "ISO_3166_1_Alpha_3_code": "LKA",
    "ISO_3166_1_Numeric_3_code": "144"
}, {
    "englishShortName": "Sudan",
    "ISO_3166_1_Alpha_2_code": "SD",
    "ISO_3166_1_Alpha_3_code": "SDN",
    "ISO_3166_1_Numeric_3_code": "729"
}, {
    "englishShortName": "Suriname",
    "ISO_3166_1_Alpha_2_code": "SR",
    "ISO_3166_1_Alpha_3_code": "SUR",
    "ISO_3166_1_Numeric_3_code": "740"
}, {
    "englishShortName": "Svalbard and Jan Mayen",
    "ISO_3166_1_Alpha_2_code": "SJ",
    "ISO_3166_1_Alpha_3_code": "SJM",
    "ISO_3166_1_Numeric_3_code": "744"
}, {
    "englishShortName": "Swaziland",
    "ISO_3166_1_Alpha_2_code": "SZ",
    "ISO_3166_1_Alpha_3_code": "SWZ",
    "ISO_3166_1_Numeric_3_code": "748"
}, {
    "englishShortName": "Sweden",
    "ISO_3166_1_Alpha_2_code": "SE",
    "ISO_3166_1_Alpha_3_code": "SWE",
    "ISO_3166_1_Numeric_3_code": "752"
}, {
    "englishShortName": "Switzerland",
    "ISO_3166_1_Alpha_2_code": "CH",
    "ISO_3166_1_Alpha_3_code": "CHE",
    "ISO_3166_1_Numeric_3_code": "756"
}, {
    "englishShortName": "Syrian Arab Republic",
    "ISO_3166_1_Alpha_2_code": "SY",
    "ISO_3166_1_Alpha_3_code": "SYR",
    "ISO_3166_1_Numeric_3_code": "760"
}, {
    "englishShortName": "Taiwan, Province of China",
    "ISO_3166_1_Alpha_2_code": "TW",
    "ISO_3166_1_Alpha_3_code": "TWN",
    "ISO_3166_1_Numeric_3_code": "158"
}, {
    "englishShortName": "Tajikistan",
    "ISO_3166_1_Alpha_2_code": "TJ",
    "ISO_3166_1_Alpha_3_code": "TJK",
    "ISO_3166_1_Numeric_3_code": "762"
}, {
    "englishShortName": "Tanzania, United Republic of",
    "ISO_3166_1_Alpha_2_code": "TZ",
    "ISO_3166_1_Alpha_3_code": "TZA",
    "ISO_3166_1_Numeric_3_code": "834"
}, {
    "englishShortName": "Thailand",
    "ISO_3166_1_Alpha_2_code": "TH",
    "ISO_3166_1_Alpha_3_code": "THA",
    "ISO_3166_1_Numeric_3_code": "764"
}, {
    "englishShortName": "Timor-Leste",
    "ISO_3166_1_Alpha_2_code": "TL",
    "ISO_3166_1_Alpha_3_code": "TLS",
    "ISO_3166_1_Numeric_3_code": "626"
}, {
    "englishShortName": "Togo",
    "ISO_3166_1_Alpha_2_code": "TG",
    "ISO_3166_1_Alpha_3_code": "TGO",
    "ISO_3166_1_Numeric_3_code": "768"
}, {
    "englishShortName": "Tokelau",
    "ISO_3166_1_Alpha_2_code": "TK",
    "ISO_3166_1_Alpha_3_code": "TKL",
    "ISO_3166_1_Numeric_3_code": "772"
}, {
    "englishShortName": "Tonga",
    "ISO_3166_1_Alpha_2_code": "TO",
    "ISO_3166_1_Alpha_3_code": "TON",
    "ISO_3166_1_Numeric_3_code": "776"
}, {
    "englishShortName": "Trinidad and Tobago",
    "ISO_3166_1_Alpha_2_code": "TT",
    "ISO_3166_1_Alpha_3_code": "TTO",
    "ISO_3166_1_Numeric_3_code": "780"
}, {
    "englishShortName": "Tunisia",
    "ISO_3166_1_Alpha_2_code": "TN",
    "ISO_3166_1_Alpha_3_code": "TUN",
    "ISO_3166_1_Numeric_3_code": "788"
}, {
    "englishShortName": "Turkey",
    "ISO_3166_1_Alpha_2_code": "TR",
    "ISO_3166_1_Alpha_3_code": "TUR",
    "ISO_3166_1_Numeric_3_code": "792"
}, {
    "englishShortName": "Turkmenistan",
    "ISO_3166_1_Alpha_2_code": "TM",
    "ISO_3166_1_Alpha_3_code": "TKM",
    "ISO_3166_1_Numeric_3_code": "795"
}, {
    "englishShortName": "Turks and Caicos Islands",
    "ISO_3166_1_Alpha_2_code": "TC",
    "ISO_3166_1_Alpha_3_code": "TCA",
    "ISO_3166_1_Numeric_3_code": "796"
}, {
    "englishShortName": "Tuvalu",
    "ISO_3166_1_Alpha_2_code": "TV",
    "ISO_3166_1_Alpha_3_code": "TUV",
    "ISO_3166_1_Numeric_3_code": "798"
}, {
    "englishShortName": "Uganda",
    "ISO_3166_1_Alpha_2_code": "UG",
    "ISO_3166_1_Alpha_3_code": "UGA",
    "ISO_3166_1_Numeric_3_code": "800"
}, {
    "englishShortName": "Ukraine",
    "ISO_3166_1_Alpha_2_code": "UA",
    "ISO_3166_1_Alpha_3_code": "UKR",
    "ISO_3166_1_Numeric_3_code": "804"
}, {
    "englishShortName": "United Arab Emirates",
    "ISO_3166_1_Alpha_2_code": "AE",
    "ISO_3166_1_Alpha_3_code": "ARE",
    "ISO_3166_1_Numeric_3_code": "784"
}, {
    "englishShortName": "United Kingdom of Great Britain and Northern Ireland",
    "ISO_3166_1_Alpha_2_code": "GB",
    "ISO_3166_1_Alpha_3_code": "GBR",
    "ISO_3166_1_Numeric_3_code": "826"
}, {
    "englishShortName": "United States of America",
    "ISO_3166_1_Alpha_2_code": "US",
    "ISO_3166_1_Alpha_3_code": "USA",
    "ISO_3166_1_Numeric_3_code": "840"
}, {
    "englishShortName": "United States Minor Outlying Islands",
    "ISO_3166_1_Alpha_2_code": "UM",
    "ISO_3166_1_Alpha_3_code": "UMI",
    "ISO_3166_1_Numeric_3_code": "581"
}, {
    "englishShortName": "Uruguay",
    "ISO_3166_1_Alpha_2_code": "UY",
    "ISO_3166_1_Alpha_3_code": "URY",
    "ISO_3166_1_Numeric_3_code": "858"
}, {
    "englishShortName": "Uzbekistan",
    "ISO_3166_1_Alpha_2_code": "UZ",
    "ISO_3166_1_Alpha_3_code": "UZB",
    "ISO_3166_1_Numeric_3_code": "860"
}, {
    "englishShortName": "Vanuatu",
    "ISO_3166_1_Alpha_2_code": "VU",
    "ISO_3166_1_Alpha_3_code": "VUT",
    "ISO_3166_1_Numeric_3_code": "548"
}, {
    "englishShortName": "Venezuela (Bolivarian Republic of)",
    "ISO_3166_1_Alpha_2_code": "VE",
    "ISO_3166_1_Alpha_3_code": "VEN",
    "ISO_3166_1_Numeric_3_code": "862"
}, {
    "englishShortName": "Viet Nam",
    "ISO_3166_1_Alpha_2_code": "VN",
    "ISO_3166_1_Alpha_3_code": "VNM",
    "ISO_3166_1_Numeric_3_code": "704"
}, {
    "englishShortName": "Virgin Islands (British)",
    "ISO_3166_1_Alpha_2_code": "VG",
    "ISO_3166_1_Alpha_3_code": "VGB",
    "ISO_3166_1_Numeric_3_code": "092"
}, {
    "englishShortName": "Virgin Islands (U.S.)",
    "ISO_3166_1_Alpha_2_code": "VI",
    "ISO_3166_1_Alpha_3_code": "VIR",
    "ISO_3166_1_Numeric_3_code": "850"
}, {
    "englishShortName": "Wallis and Futuna",
    "ISO_3166_1_Alpha_2_code": "WF",
    "ISO_3166_1_Alpha_3_code": "WLF",
    "ISO_3166_1_Numeric_3_code": "876"
}, {
    "englishShortName": "Western Sahara",
    "ISO_3166_1_Alpha_2_code": "EH",
    "ISO_3166_1_Alpha_3_code": "ESH",
    "ISO_3166_1_Numeric_3_code": "732"
}, {
    "englishShortName": "Yemen",
    "ISO_3166_1_Alpha_2_code": "YE",
    "ISO_3166_1_Alpha_3_code": "YEM",
    "ISO_3166_1_Numeric_3_code": "887"
}, {
    "englishShortName": "Zambia",
    "ISO_3166_1_Alpha_2_code": "ZM",
    "ISO_3166_1_Alpha_3_code": "ZMB",
    "ISO_3166_1_Numeric_3_code": "894"
}, {
    "englishShortName": "Zimbabwe",
    "ISO_3166_1_Alpha_2_code": "ZW",
    "ISO_3166_1_Alpha_3_code": "ZWE",
    "ISO_3166_1_Numeric_3_code": "716"
}];