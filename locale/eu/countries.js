var _countries = {"BD": "Bangladesh", "WF": "Wallis eta Futuna", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia eta Herzegovina", "BB": "Barbados", "BE": "Belgika", "BL": "Saint Barth\u00e9lemy", "BM": "Bermuda", "BN": "Brunei Darussalam", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaika", "BV": "Bouvet uhartea", "BW": "Botswana", "WS": "Samoa", "BR": "Brasil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "BZ": "Belize", "TN": "Tunez", "RW": "Rwanda", "RS": "Serbia", "LT": "Lithuania", "RE": "Reunion", "LU": "Luxenburgo", "TJ": "Tajikistan", "RO": "Errumania", "TK": "Tokelau", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "Hego Georgia eta Hego Sandwich Uharteak", "GR": "Grezia", "GQ": "Ekuatore Ginea", "GP": "Guadalupe", "JP": "Japonia", "GY": "Guyana", "GG": "Guernsey", "GF": "Guyana Frantsesa", "GE": "Georgia", "GD": "Granada", "GB": "Erresuma Batua", "GA": "Gabon", "SV": "El Salvador", "GN": "Ginea", "GM": "Ganbia", "GL": "Groenlandia", "KW": "Kuwait", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "IL": "Israel", "JO": "Jordania", "HR": "Kroazia", "HT": "Haiti", "HU": "Hungaria", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard eta McDonald Uharteak", "AD": "Andorra", "PR": "Puerto Rico", "PS": "Palestina", "IO": "Ozeano Indikoko Lurralde Britaniarra", "PW": "Palau", "PT": "Portugal", "KR": "Hego Korea", "PY": "Paraguai", "AI": "Anguilla", "PA": "Panama", "PF": "Polinesia Frantziarra", "PG": "Papua Ginea Berria", "PE": "Peru", "PK": "Pakistan", "PH": "Filipinak", "PN": "Pitcairn", "PL": "Polonia", "PM": "Saint-Pierre eta Mikelune", "ZM": "Zambia", "EH": "Mendebaldeko Sahara", "RU": "Russia", "EE": "Estonia", "EG": "Egipto", "ZA": "Hegoafrika", "EC": "Ekuador", "AL": "Albania", "AO": "Angola", "KZ": "Kazakhstan", "ET": "Etiopia", "ZW": "Zimbawe", "KY": "Kaiman Uharteak", "ES": "Espainia", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldabiako errepublika", "MG": "Madagascar", "MF": "Saint Martin", "UY": "Uruguai", "MC": "Monako", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Makao", "MN": "Mongolia", "MH": "Marshall Uharteak", "MK": "Macedoniako errepublia yugoslabiar federala", "MU": "Maurizio", "MT": "Malta", "MW": "Malawi", "MV": "Maldivak", "MQ": "Martinika", "MP": "Ipar Mariana Uharteak", "MS": "Montserrat", "MR": "Mauritania", "AU": "Australia", "UG": "Uganda", "UA": "Ukraina", "MX": "Mexiko", "MZ": "Mozambique", "FR": "Frantzia", "MA": "Maroko", "AF": "Afganistan", "AX": "\u00c5land Uharteak", "FI": "Finlandia", "FJ": "Fidji", "FK": "Falkland uharteak (Malvinak)", "FM": "Mikronesia", "FO": "Faroe uharteak", "NI": "Nikaragua", "NL": "Herbehereak", "NO": "Norvegia", "NA": "Namibia", "NC": "Kaledonia Berria", "NE": "Niger", "NF": "Norfolk Uharteak", "NG": "Nigeria", "NZ": "Zelanda Berria", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Uharteak", "CI": "Boli Kosta", "CH": "Suitza", "CO": "Kolonbia", "CN": "Txina", "CM": "Kamerun", "CL": "Txile", "CC": "Cocos (Keeling) Uharteak", "CA": "Kanada", "CG": "Kongo-Brazzaville", "CF": "Afrika Erdiko Errepublika", "CD": "Congo-Kinshasa", "CZ": "Txekiar errepublika", "CY": "Txipre", "CX": "Christmas Uhartea", "CR": "Costa Rica", "KP": "Ipar Korea", "CV": "Cabo Verde", "CU": "Kuba", "SZ": "Swazilandia", "SY": "Siria", "KG": "Kirgizistan", "KE": "Kenya", "SR": "Surinam", "KI": "Kiribati", "KH": "Kanbodia", "KN": "Saint Kitts eta Nevis", "KM": "Comoros", "ST": "Sao Tome eta Principe uharteak", "SK": "Eslovakia", "SJ": "Svalbard eta Jan Mayen Uharteak", "SI": "Eslovenia", "SH": "Saint Helena", "SO": "Somalia", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leona", "SC": "Seychelles", "SB": "Salomon Uharteak", "SA": "Saudi Arabia", "SG": "Singapur", "SE": "Suedia", "SD": "Sudan", "DO": "Dominikar errepublika", "DM": "Dominika", "DJ": "Djibouti", "DK": "Dinamarka", "DE": "Alemania", "YE": "Yemen", "AT": "Austria", "DZ": "Aljeria", "US": "Estatu Batuak", "YT": "Mayotte", "UM": "Estatu Batuetako Itsasoz Haraindiko Uharteak", "LB": "Libano", "LC": "Saint Lucia", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad eta Tobago", "TR": "Turkia", "LK": "Sri Lanka", "LI": "Liechtenstein", "LV": "Latvia", "TO": "Tonga", "TL": "Ekialdeko Timor", "TM": "Turkmenistan", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailandia", "TF": "Hegoaldeko Frantziar Lurraldeak", "TG": "Togo", "TD": "Txad", "TC": "Turkiar eta Caicos Uharteak", "LY": "Libia", "VA": "Vatikano Hiriko Estatua", "VC": "Saint Vincent eta Grenadinak", "AE": "U.A.E.", "VE": "Venezuela", "AG": "Antigua eta Barbuda", "VG": "Erresuma Batuko Birjina Uharteak", "IQ": "Irak", "VI": "Estatu batuetako birjina uharteak", "IS": "Islandia", "IR": "Iran", "AM": "Armenia", "IT": "Italia", "VN": "Vietnam", "AN": "Holandarren Antillak", "AQ": "Antartika", "AS": "Amerikar Samoa", "AR": "Argentina", "IM": "Man uhartea", "VU": "Vanuatu", "AW": "Aruba", "IN": "India", "TZ": "Tanzania", "AZ": "Azerbaijan", "IE": "Irlanda", "ID": "Indonesia", "MY": "Malasia", "QA": "Katar"}