import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {"🏁" :"Chequered Flag","🚩" :"Triangular Flag","🎌" :"Crossed Flags","🏴":"Black Flag",
"🏳️‍🌈" :"Rainbow Flag","🏳️‍":"Transgender Flag","🏴‍☠️":"Pirate Flag","🇦🇨": "Ascension Island","🇦🇩": "Andorra","🇦🇪":"United Arab Emirates","🇦🇫": "Afghanistan","🇦🇬": "Antigua & Barbuda",
"🇦🇮": "Anguilla",
"🇦🇱": "Albania",
"🇦🇲": "Armenia",
"🇦🇴": "Angola",
"🇦🇶": "Antarctica",
"🇦🇷":"Argentina",
"🇦🇸":"American Samoa",
"🇦🇹":"Austria",
"🇦🇺": "Australia",
"🇦🇼": "Aruba",
"🇦🇽": "Åland Islands",
"🇦🇿": "Azerbaijan",
"🇧🇦": "Bosnia & Herzegovina",
"🇧🇧": "Barbados",
"🇧🇩":"Bangladesh",
"🇧🇪":"Belgium",
"🇧🇫":"Burkina Faso",
"🇧🇬":"Bulgaria",
"🇧🇭":"Bahrain",
"🇧🇮":"Burundi",
"🇧🇯":"Benin",
"🇧🇱":"St. Barthélemy",
"🇧🇲": "Bermuda",
"🇧🇳": "Brunei",
"🇧🇴": "Bolivia",
"🇧🇶":"Caribbean Netherlands",
"🇧🇷": "Brazil",
"🇧🇸":"Bahamas",
"🇧🇹":"Bhutan",
"🇧🇻":"Bouvet Island",
"🇧🇾": "Belarus",
"🇧🇿":"Belize",
"🇨🇦": "Canada",
"🇨🇨": "Cocos (Keeling) Islands",
"🇨🇩": "Congo - Kinshasa",
"🇨🇫":"Central African Republic",
"🇨🇬": "Congo - Brazzaville",
"🇨🇭":"Switzerland",
"🇨🇮":"Côte d’Ivoire",
"🇨🇰": "Cook Islands",
"🇨🇱": "Chile",
"🇨🇲": "Cameroon",
"🇨🇳": "China",
"🇨🇴": "Colombia",
"🇨🇵": "Clipperton Island",
"🇨🇷": "Costa Rica",
"🇨🇺":"CubaCape Verde",
"🇨🇼": "Curaçao",
"🇨🇽":"Christmas Island",
"🇨🇾": "Cyprus",
"🇨🇿":"Czechia",
"🇩🇪": "Germany",
"🇩🇬": "Diego Garcia",
"🇩🇯": "Djibouti",
"🇩🇰": "Denmark",
"🇩🇲": "Dominica",
"🇩🇴": "Dominican Republic",
"🇩🇿": "Algeria",
"🇪🇦": "Ceuta & Melilla",
"🇪🇨": "Ecuador",
"🇪🇪": "Estonia",
"🇪🇬": "Egypt",
"🇪🇭": "Western Sahara",
"🇪🇷": "Eritrea",
"🇪🇸": "Spain",
"🇪🇹":"Ethiopia",
"🇪🇺": "European Union",
"🇫🇮":"Finland",                                                                                                                                                                                                                                                                                                                                                                         
"🇫🇯":"Fiji",                                                                                                                                                                                                                                                                            
"🇫🇰": "Falkland Islands",
"🇫🇲": "Micronesia",
"🇫🇴": "Faroe Islands",
"🇫🇷": "France",
"🇬🇦": "Gabon",
"🇬🇧": "United Kingdom",
"🇬🇩": "Grenada",
"🇬🇪": "Georgia",
"🇬🇫": "French Guiana",
"🇬🇬": "Guernsey",
"🇬🇭": "Ghana",
"🇬🇮": "Gibraltar",
"🇬🇱": "Greenland",
"🇬🇲": "Gambia",
"🇬🇳": "Guinea",
"🇬🇵": "Guadeloupe",
"🇬🇶": "Equatorial Guinea",
"🇬🇷": "Greece",
"🇬🇸": "South Georgia & South Sandwich Islands",
"🇬🇹": "Guatemala",
"🇬🇺": "Guam",
"🇬🇼": "Guinea-Bissau",
"🇬🇾":"Guyana",
"🇭🇰":"Hong Kong SAR China",
"🇭🇲": "Heard & McDonald Islands",
"🇭🇳":"Honduras",
"🇭🇷":"Croatia",
"🇭🇹":"Haiti",
"🇭🇺": "Hungary",
"🇮🇨": "Kuwait",
"🇰🇾":"Cayman Islands",
"🇰🇿": "Kazakhstan",
"🇱🇦": "Laos",
"🇱🇧": "Lebanon",
"🇱🇨": "St. Lucia",
"🇱🇮": "Liechtenstein",
"🇱🇰": "Sri Lanka",
"🇱🇷": "Liberia",
"🇱🇸": "Lesotho",
"🇱🇹": "Lithuania",
"🇱🇺": "Luxembourg",
"🇱🇻": "Latvia",
"🇱🇾": "Libya",
"🇲🇦": "Morocco",
"🇲🇨":"Monaco",
"🇲🇩": "Moldova",
"🇲🇪":"Montenegro",
"🇲🇫": "St.Martin",
"🇲🇬":"Madagascar",
"🇲🇭":"Marshall Islands",
"🇲🇰":"North Macedonia",
"🇲🇱":"Mali",
"🇲🇲":"Myanmar (Burma)",
"🇲🇳": "Mongolia",
"🇲🇴":"Macao Sar China",
"🇲🇵":"Northern Mariana Islands",
"🇲🇶":"Martinique",
"🇲🇷":"Mauritania",
"🇲🇸":"Montserrat",
"🇲🇹": "Malta",
"🇲🇺": "Mauritius",
"🇲🇻": "Maldives",
  "🇲🇼": "Malawi",
  "🇲🇽": "Mexico",
  "🇲🇾": "Malaysia",
  "🇲🇿": "Mozambique",
  "🇳🇦": "Namibia",
  "🇳🇨": "New Caledonia",
  "🇳🇪":"Niger",
  "🇳🇫": "Norfolk Island",
  "🇳🇬": "Nigeria",
  "🇳🇮": "Nicaragua",
  "🇳🇱": "Netherlands",
  "🇳🇴": "Norway",
  "🇳🇵": "Nepal",
  "🇳🇷": "Nauru",
  "🇳🇺": "Niue",
  "🇳🇿": "New Zealand",
  "🇴🇲": "Oman",
  "🇵🇦": "Panama",
  "🇵🇪": "Peru",
  "🇵🇫": "French Polynesia",
  "🇵🇬": "Papua New Guinea",
  "🇵🇭": "Philippines",
  "🇵🇰": "Pakistan",
  "🇵🇱": "Poland",
  "🇵🇲": "St. Pierre & Miquelon",
  "🇵🇳": "Pitcairn Islands",
  "🇵🇷": "Puerto Rico",
  "🇵🇸": "Palestinian Territories",
  "🇵🇹": "Portugal",
  "🇵🇼": "Palau",
  "🇵🇾": "Paraguay",
  "🇶🇦": "Qatar",
 "🇷🇪": "Réunion",
 "🇷🇴": "Romania",
 "🇷🇸": "Serbia",
 "🇸🇩": "Sudan",
  "🇸🇪": "Sweden",
  "🇸🇬": "Singapore",
  "🇸🇭": "Helena",
  "🇸🇮": "Slovenia",
  "🇸🇯" :"Svalbard & Jan Mayen",
  "🇸🇰": "Slovakia",
  "🇸🇱": "ierra Leone",
  "🇸🇲": "San Marino",
  "🇸🇳": "Senegal",
  "🇸🇴":"Somalia",
  "🇸🇷":"Suriname",
  "🇸🇸":"South Sudan",
  "🇸🇹" :"São Tomé & Príncipe",
  "🇸🇻":"El Salvador",
  "🇸🇽": "Sint Maarten",
  "🇸🇾":"Syria",
  "🇸🇿":"Eswatini",
  "🇹🇦":"Tristan Da Cunha",
  "🇹🇨": "Turks & Caicos Islands",
  "🇹🇩":"Chad",
  "🇹🇫":"French Southern Territories",
  "🇹🇬": "Togo",
  "🇹🇭": "Thailand",
  "🇹🇯": "Tajikistan",
  "🇹🇰":"Tokelau",
  "🇹🇱" : "Timor-Leste",
  "🇹🇲" : "Turkmenistan",
  "🇹🇳": "Tunisia",
  "🇹🇴": "Tonga",
  "🇹🇷": "Turkey",
  "🇹🇹":"Trinidad & Tobago",
  "🇹🇻": "Tuvalu",
  "🇹🇼":"Taiwan",
  "🇹🇿":"Tanzania",
  "🇺🇦": "Ukraine",
  "🇺🇬": "Uganda",
  "🇺🇲":"U.S. Outlying Islands",
  "🇺🇳": "United Nations",
  "🇺🇸": "United States",
  "🇺🇾": "Uruguay",
  "🇺🇿": "Uzbekistan",
  "🇻🇦": "Vatican City",
  "🇻🇨":"St. Vincent & Grenadines",
  "🇻🇪":"Venezuela",
  "🇻🇬": "British Virgin Islands",
  "🇻🇮": "U.S. Virgin Islands",
  "🇻🇳": "Vietnam",
  "🇻🇺": "Vanuatu",
  "🇼🇫":"Wallis & Futuna",
  "🇼🇸": "Samoa",
 "🇽🇰": "Kosovo",
  "🇾🇪": "Yemen",
  "🇾🇹": "Mayotte",
  "🇿🇦": "South Africa",
  "🇿🇲": "Zambia",
"🇿🇼":"Zimbabwe", 
"🏴󠁧󠁢󠁳󠁣󠁴󠁿": "Scotland"


};
var knownEmojis = Object.keys(emojiDictionary);

export default function App() {
  var [emoji, setEmoji] = useState("");

  function emojiFind(event) {
    var inputEmoji = event.target.value;
    var meaning = emojiDictionary[inputEmoji];
    if (meaning === undefined) {
      meaning = "No match found ";
    }
    if (inputEmoji === "") {
      meaning = "";
    }
    setEmoji(meaning);
  }
  function emojiPoint(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmoji(meaning);
  }
  return (
    <div className="App">
    <div className= "firstHalf">
      <h1 className = "heading"><span style = {{ color: "white"}}>TRUE</span> EMOJI</h1>
      <input  className = "inputBox" onChange={emojiFind} placeholder="Enter your emoji."></input>
      <div className="meaning">Flag belongs to :<span style={{color:"white" , fontSize:"3rem"}}> {emoji} </span></div>
    </div>

      <div className = "emojisPart">
        <h2 className = "know">Emojis we know: </h2>
        {knownEmojis.map(function (emoji) {
          return (
            <span
              onClick={() => emojiPoint(emoji)}
              style={{
                fontSize: "2.5rem",
                paddingRight: "2rem",
                cursor: "pointer",
                paddingLeft:"2rem"
                
              
              }}
              key={emoji}
            >
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
