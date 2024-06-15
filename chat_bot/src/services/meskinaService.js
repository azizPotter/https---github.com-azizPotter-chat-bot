const subString1 = "gender";
const subString2 ="nationalize";
//L'API me retourne uniquement des initiales. J'ai trouvé sur Internet ce bloc pour obtenir un contenu plus compréhensible avec des noms en français.
const countryNamesFr = {
    'AD': 'Andorre',
    'AE': 'Émirats Arabes Unis',
    'AF': 'Afghanistan',
    'AG': 'Antigua-et-Barbuda',
    'AI': 'Anguilla',
    'AL': 'Albanie',
    'AM': 'Arménie',
    'AO': 'Angola',
    'AR': 'Argentine',
    'AS': 'Samoa Américaines',
    'AT': 'Autriche',
    'AU': 'Australie',
    'AW': 'Aruba',
    'AX': 'Åland, Îles',
    'AZ': 'Azerbaïdjan',
    'BA': 'Bosnie-Herzégovine',
    'BB': 'Barbade',
    'BD': 'Bangladesh',
    'BE': 'Belgique',
    'BF': 'Burkina Faso',
    'BG': 'Bulgarie',
    'BH': 'Bahreïn',
    'BI': 'Burundi',
    'BJ': 'Bénin',
    'BL': 'Saint-Barthélemy',
    'BM': 'Bermudes',
    'BN': 'Brunéi Darussalam',
    'BO': 'Bolivie',
    'BQ': 'Bonaire, Saint-Eustache et Saba',
    'BR': 'Brésil',
    'BS': 'Bahamas',
    'BT': 'Bhoutan',
    'BV': 'Bouvet, Île',
    'BW': 'Botswana',
    'BY': 'Biélorussie',
    'BZ': 'Belize',
    'CA': 'Canada',
    'CC': 'Cocos (Keeling), Îles',
    'CD': 'Congo, République Démocratique du',
    'CF': 'République Centrafricaine',
    'CG': 'Congo',
    'CH': 'Suisse',
    'CI': "Côte d'Ivoire",
    'CK': 'Cook, Îles',
    'CL': 'Chili',
    'CM': 'Cameroun',
    'CN': 'Chine',
    'CO': 'Colombie',
    'CR': 'Costa Rica',
    'CU': 'Cuba',
    'CV': 'Cap-Vert',
    'CW': 'Curaçao',
    'CX': 'Christmas, Île',
    'CY': 'Chypre',
    'CZ': 'République Tchèque',
    'DE': 'Allemagne',
    'DJ': 'Djibouti',
    'DK': 'Danemark',
    'DM': 'Dominique',
    'DO': 'République Dominicaine',
    'DZ': 'Algérie',
    'EC': 'Équateur',
    'EE': 'Estonie',
    'EG': 'Égypte',
    'EH': 'Sahara Occidental',
    'ER': 'Érythrée',
    'ES': 'Espagne',
    'ET': 'Éthiopie',
    'FI': 'Finlande',
    'FJ': 'Fidji',
    'FM': 'Micronésie, États Fédérés de',
    'FO': 'Féroé, Îles',
    'FR': 'France',
    'GA': 'Gabon',
    'GB': 'Royaume-Uni',
    'GD': 'Grenade',
    'GE': 'Géorgie',
    'GF': 'Guyane Française',
    'GG': 'Guernesey',
    'GH': 'Ghana',
    'GI': 'Gibraltar',
    'GL': 'Groenland',
    'GM': 'Gambie',
    'GN': 'Guinée',
    'GP': 'Guadeloupe',
    'GQ': 'Guinée Équatoriale',
    'GR': 'Grèce',
    'GT': 'Guatemala',
    'GU': 'Guam',
    'GW': 'Guinée-Bissau',
    'GY': 'Guyana',
    'HK': 'Hong Kong',
    'HM': 'Heard-et-Îles MacDonald, Île',
    'HN': 'Honduras',
    'HR': 'Croatie',
    'HT': 'Haïti',
    'HU': 'Hongrie',
    'ID': 'Indonésie',
    'IE': 'Irlande',
    'IL': 'Israël',
    'IM': 'Île de Man',
    'IN': 'Inde',
    'IO': 'Océan Indien, Territoire Britannique de l',
    'IQ': 'Irak',
    'IR': 'Iran, République Islamique d',
    'IS': 'Islande',
    'IT': 'Italie',
    'JE': 'Jersey',
    'JM': 'Jamaïque',
    'JO': 'Jordanie',
    'JP': 'Japon',
    'KE': 'Kenya',
    'KG': 'Kirghizistan',
    'KH': 'Cambodge',
    'KI': 'Kiribati',
    'KM': 'Comores',
    'KN': 'Saint-Kitts-et-Nevis',
    'KP': "Corée, République Populaire Démocratique de",
    'KR': 'Corée, République de',
    'KW': 'Koweït',
    'KY': 'Caïmans, Îles',
    'KZ': 'Kazakhstan',
    'LA': "Lao, République Démocratique Populaire",
    'LB': 'Liban',
    'LC': 'Sainte-Lucie',
    'LI': 'Liechtenstein',
    'LK': 'Sri Lanka',
    'LR': 'Libéria',
    'LS': 'Lesotho',
    'LT': 'Lituanie',
    'LU': 'Luxembourg',
    'LV': 'Lettonie',
    'LY': 'Libye',
    'MA': 'Maroc',
    'MC': 'Monaco',
    'MD': 'Moldavie, République de',
    'ME': 'Monténégro',
    'MF': 'Saint-Martin (partie française)',
    'MG': 'Madagascar',
    'MH': 'Marshall, Îles',
    'MK': 'Macédoine, l ex-République Yougoslave de',
    'ML': 'Mali',
    'MM': 'Myanmar',
    'MN': 'Mongolie',
    'MO': 'Macao',
    'MP': 'Mariannes du Nord, Îles',
    'MQ': 'Martinique',
    'MR': 'Mauritanie',
    'MS': 'Montserrat',
    'MT': 'Malte',
    'MU': 'Maurice',
    'MV': 'Maldives',
    'MW': 'Malawi',
    'MX': 'Mexique',
    'MY': 'Malaisie',
    'MZ': 'Mozambique',
    'NA': 'Namibie',
    'NC': 'Nouvelle-Calédonie',
    'NE': 'Niger',
    'NF': 'Norfolk, Île',
    'NG': 'Nigéria',
    'NI': 'Nicaragua',
    'NL': 'Pays-Bas',
    'NO': 'Norvège',
    'NP': 'Népal',
    'NR': 'Nauru',
    'NU': 'Niue',
    'NZ': 'Nouvelle-Zélande',
    'OM': 'Oman',
    'PA': 'Panama',
    'PE': 'Pérou',
    'PF': 'Polynésie Française',
    'PG': 'Papouasie-Nouvelle-Guinée',
    'PH': 'Philippines',
    'PK': 'Pakistan',
    'PL': 'Pologne',
    'PM': 'Saint-Pierre-et-Miquelon',
    'PN': 'Pitcairn',
    'PR': 'Porto Rico',
    'PS': 'Palestine, État de',
    'PT': 'Portugal',
    'PW': 'Palaos',
    'PY': 'Paraguay',
    'QA': 'Qatar',
    'RE': 'Réunion',
    'RO': 'Roumanie',
    'RS': 'Serbie',
    'RU': 'Russie, Fédération de',
    'RW': 'Rwanda',
    'SA': 'Arabie Saoudite',
    'SB': 'Salomon, Îles',
    'SC': 'Seychelles',
    'SD': 'Soudan',
    'SE': 'Suède',
    'SG': 'Singapour',
    'SH': 'Sainte-Hélène, Ascension et Tristan da Cunha',
    'SI': 'Slovénie',
    'SJ': 'Svalbard et Île Jan Mayen',
    'SK': 'Slovaquie',
    'SL': 'Sierra Leone',
    'SM': 'Saint-Marin',
    'SN': 'Sénégal',
    'SO': 'Somalie',
    'SR': 'Suriname',
    'SS': 'Soudan du Sud',
    'ST': 'Sao Tomé-et-Principe',
    'SV': 'Salvador',
    'SX': 'Saint-Martin (partie néerlandaise)',
    'SY': 'Syrienne, République Arabe',
    'SZ': 'Swaziland',
    'TC': 'Turks et Caïques, Îles',
    'TD': 'Tchad',
    'TF': 'Terres Australes Françaises',
    'TG': 'Togo',
    'TH': 'Thaïlande',
    'TJ': 'Tadjikistan',
    'TK': 'Tokelau',
    'TL': 'Timor-Leste',
    'TM': 'Turkménistan',
    'TN': 'Tunisie',
    'TO': 'Tonga',
    'TR': 'Turquie',
    'TT': 'Trinité-et-Tobago',
    'TV': 'Tuvalu',
    'TW': 'Taïwan, Province de Chine',
    'TZ': 'Tanzanie, République-Unie de',
    'UA': 'Ukraine',
    'UG': 'Ouganda',
    'UM': 'Îles Mineures Éloignées des États-Unis',
    'US': 'États-Unis',
    'UY': 'Uruguay',
    'UZ': 'Ouzbékistan',
    'VA': 'Saint-Siège (État de la Cité du Vatican)',
    'VC': 'Saint-Vincent-et-les Grenadines',
    'VE': 'Venezuela',
    'VG': 'Îles Vierges Britanniques',
    'VI': 'Îles Vierges des États-Unis',
    'VN': 'Viet Nam',
    'VU': 'Vanuatu',
    'WF': 'Wallis et Futuna',
    'WS': 'Samoa',
    'YE': 'Yémen',
    'YT': 'Mayotte',
    'ZA': 'Afrique du Sud',
    'ZM': 'Zambie',
    'ZW': 'Zimbabwe'
};
export default class MeskinaService {

    async getCommandChoice(choice) {
        if (choice.includes(subString1)) {
            var item = choice.split(':')[1].trim();
            try {
                const gender = await this.getGender(item);
                console.log(gender);
                switch(gender){
                    case "male":
                        return "Je pense que tu es un homme.";
                        case "female":
                            return "Je pense que tu es une femme.";
                }
            } catch (error) {
                console.error('Error in getCommandChoice:', error);
                return error; 
            }
        }else if (choice.includes(subString2)) {
            var item = choice.split(':')[1].trim();
            try {
                const country = await this.getnationalize(item);
                return "Je pense que ton origine est la suivante : <br>" + this.getCountryNameFr(country);
            } catch (error) {
                console.error('Error in getCommandChoice:', error);
                return error; 
            }
    }else return "Je n'ai pas compris votre commande.";
    }
    async getGender(item) {
        const url = `https://api.genderize.io?name=${item}`;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();  
            console.log(data); 
            return data.gender;
        } catch (error) {
            console.error('Error in getRecipeByIngredient:', error);
            throw error; 
        }
    }
    async getnationalize(item) {
        const url = `https://api.nationalize.io/?name=${item}`;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();  
            let highestProbability = -1;
            let countryWithHighestProbability = null;
    
            data.country.forEach(country => {
                if (country.probability > highestProbability) {
                    highestProbability = country.probability;
                    countryWithHighestProbability = country.country_id;
                }
            });
            console.log(countryWithHighestProbability);
            return countryWithHighestProbability;
        } catch (error) {
            console.error('Error in getRecipeByIngredient:', error);
            throw error; 
        }
    }
    getCountryNameFr(countryCode) {
        const code = countryCode.toUpperCase();
        if (countryNamesFr.hasOwnProperty(code)) {
            return countryNamesFr[code];
        } else {
            return `Pays non trouvé pour le code '${countryCode}'`;
        }
    }
}

