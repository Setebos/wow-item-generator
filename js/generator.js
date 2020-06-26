Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}; 

const syllables = [
	"gar",
	"tas",
	"tar",
	"trax",
	"var",
	"lur",
	"gor",
	"zar",
	"vor",
	"lar",
	"mon",
	"gaz",
	"nah",
	"vah",
	"gah",
];

const objects = [
	{object: "hache", type: "f"},
	{object: "épée", type: "f"},
	{object: "lance", type: "f"},
	{object: "glaive", type: "m"},
	{object: "masse", type: "f"},
	{object: "baguette", type: "f"},
	{object: "bâton", type: "m"},
	{object: "gantelêts", type: "mp"},
	{object: "manteau", type: "m"},
	{object: "arbalète", type: "f"},
	{object: "dagues", type: "fp"},
	{object: "dague", type: "f"},
	{object: "fléau", type: "m"},
	{object: "gants", type: "mp"},
	{object: "brassards", type: "mp"},
	{object: "casque", type: "m"},
	{object: "amulette", type: "f"},
	{object: "rapière", type: "f"},
	{object: "bottes", type: "fp"},
	{object: "bottines", type: "fp"},
	{object: "orbe", type: "f"},
	{object: "pagaie", type: "f"},
	{object: "jambières", type: "fp"},
	{object: "plastron", type: "m"},
	{object: "épaulières", type: "fp"},
	{object: "cotte de mailles", type: "f"},
	{object: "machète", type: "f"},
	{object: "disques", type: "mp"},
	{object: "javelines", type: "fp"},
	{object: "carquois", type: "m"},
	{object: "fourchette", type: "f"},
	{object: "bouclier", type: "m"},
	{object: "targe", type: "f"},
	{object: "ceinture", type: "f"},
	{object: "ceinturon", type: "m"},
	{object: "sceptre", type: "m"},
	{object: "marteau", type: "m"},
	{object: "hallebarde", type: "f"},
];

const badstuffs = [
	{m: "délabré", f: "délabrée", mp: "délabrés", fp: "délabrées"},
	{m: "rabougri", f: "rabougrie", mp: "rabougris", fp: "rabougries"},
	{m: "rouillé", f: "rouillée", mp: "rouillés", fp: "rouillées"},
	{m: "brisé", f: "brisée", mp: "brisés", fp: "brisées"},
	{m: "fatigué", f: "fatiguée", mp: "fatigués", fp: "fatiguées"},
	{m: "craquelé", f: "craquelée", mp: "craquelés", fp: "craquelées"},
	{m: "émoussé", f: "émoussée", mp: "émoussés", fp: "émoussées"},
	{m: "cassé", f: "cassée", mp: "cassés", fp: "cassées"},
	{m: "tordu", f: "tordue", mp: "tordus", fp: "tordues"},
	{m: "usé", f: "usée", mp: "usés", fp: "usées"},
	{m: "en morceaux", f: "en morceaux", mp: "en morceaux", fp: "en morceaux"},
	{m: "en lambeaux ", f: "en lambeaux ", mp: "en lambeaux ", fp: "en lambeaux "},
];

const adjectives = [
	{m: "maudit", f: "maudite", mp: "maudits", fp: "maudites"},
	{m: "brisé", f: "rouillée", mp: "rouillés", fp: "rouillées"},
	{m: "divin", f: "divine", mp: "divins", fp: "divines"},
	{m: "cruel", f: "cruelle", mp: "cruels", fp: "cruelles"},
	{m: "farouche", f: "farouche", mp: "farouches", fp: "farouches"},
	{m: "maléfique", f: "maléfique", mp: "maléfiques", fp: "maléfiques"},
	{m: "infernal", f: "infernale", mp: "infernaux", fp: "infernales"},
	{m: "arcanique", f: "arcanique", mp: "arcaniques", fp: "arcaniques"},
	{m: "brisé", f: "brisée", mp: "brisés", fp: "brisées"},
	{m: "endormi", f: "endormie", mp: "endormis", fp: "endormies"},
	{m: "irritant", f: "irritante", mp: "irritants", fp: "irritantes"},
	{m: "magnanime", f: "magnanime", mp: "magnanimes", fp: "magnanimes"},
	{m: "terrible", f: "terrible", mp: "terribles", fp: "terribles"},
	{m: "rituel", f: "rituelle", mp: "rituels", fp: "rituelles"},
	{m: "cérémoniel", f: "cérémonielle", mp: "cérémonielles", fp: "cérémonielles"},
	{m: "bienveillant", f: "bienveillante", mp: "bienveillants", fp: "bienveillantes"},
	{m: "malveillant", f: "malveillante", mp: "malveillants", fp: "malveillantes"},
	{m: "enflammé", f: "enflammée", mp: "enflammés", fp: "enflammées"},
	{m: "tumultueux", f: "tumultueuse", mp: "tumultueux", fp: "tumultueuses"},
	{m: "rugueux", f: "rugueuse", mp: "rugueux", fp: "rugueuses"},
	{m: "impie", f: "impie", mp: "impies", fp: "impies"},
	{m: "secret", f: "secrete", mp: "secrets", fp: "secretes"},
	{m: "déviant", f: "déviante", mp: "déviants", fp: "déviantes"},
	{m: "éternel", f: "éternelle", mp: "éternels", fp: "éternelles"},
	{m: "resplendissant", f: "resplendissante", mp: "resplendissants", fp: "resplendissantes"},
	{m: "répugnant", f: "répugnante", mp: "répugnants", fp: "répugnantes"},
	{m: "visionnaire", f: "visionnaire", mp: "visionnaires", fp: "visionnaires"},
	{m: "vertueux", f: "vertueuse", mp: "vertueux", fp: "vertueuses"},
	{m: "ajusté", f: "ajustée", mp: "ajustés", fp: "ajustées"},
]

const suffixes = [
	" de l'inquisiteur",
	" du démon supérieur",
	" de N'Yaf'Atar, éntité du vide",
	" de la foêt maudite",
	" de la forêt enchantée",
	" du prince sombre",
	" du dernier gardien",
	" du satyre",
	" de la banshee",
	" de la liche",
	" du paladin",
	" du rituel profane",
	" de la main ardente",
	" de la croisade perdue",
	" du roi des vers",
	" de la sangsue",
	" du chevalier errant",
	" de mauvais augure",
	", de l'oubliée",
	", chef d'oeuvre de Bel-Amon",
	", fierté du chevalier dragon",
	", dernière oeuvre de Kel'Moras",
	" du regret",
	" à l'oriflamme",
	" d'excellente qualité"
]

$(document).ready(function () {
    createItem("b");

    $("#refresh-item").click(function () {
        createItem($('input[name=level]:checked').val());
    });
});

let lastClass = '';

createItem = function (level) {
    const object 	 = objects.randomElement();
    const badstuff   = badstuffs.randomElement();
    const adjective1 = adjectives.randomElement();
    const adjective2 = adjectives.filter(function (value) {
        return value.m != adjective1.m;
    }).randomElement();
    const adjective3 = adjectives.filter(function (value) {
        return value.m != adjective1.m && value.m != adjective2.m;
    }).randomElement();
    const suffix = suffixes.randomElement();

    const syllable1 = syllables.randomElement();
	const syllable2 = syllables.filter((value) => {
		return value != syllable1;
	}).randomElement();
	const syllable3 = syllables.filter((value) => {
		return value != syllable1 && value != syllable2;
	}).randomElement();
	let name = syllable1+syllable2+syllable3;
	name = capitalize(name);

    let item = '';
    switch (level) {
    	case "b":
    		item = `${object.object} ${badstuff[object.type]}`;
    		$("#wow-item").removeClass(lastClass);
    		$("#wow-item").addClass('color-common');
    		lastClass = 'color-common'
    	break;
    	case "u":
    		item = `${object.object} ${adjective1[object.type]}`;
    		$("#wow-item").removeClass(lastClass);
    		$("#wow-item").addClass('color-uncommon');
    		lastClass = 'color-uncommon'
    	break;
    	case "r":
    		item = `${object.object} ${adjective1[object.type]} ${adjective2[object.type]}`;
    		$("#wow-item").removeClass(lastClass);
    		$("#wow-item").addClass('color-rare');
    		lastClass = 'color-rare'
    	break;
    	case "e":
    		item = `${object.object} ${adjective1[object.type]} ${adjective2[object.type]} ${adjective3[object.type]}`;
    		$("#wow-item").removeClass(lastClass);
    		$("#wow-item").addClass('color-epic');
    		lastClass = 'color-epic'
    	break;
    	case "l":
    		item = `${object.object} ${adjective1[object.type]} ${adjective2[object.type]} ${adjective3[object.type]}${suffix}`;
    		$("#wow-item").removeClass(lastClass);
    		$("#wow-item").addClass('color-legendary');
    		lastClass = 'color-legendary'
    	break;
    	case "a":
    		item = `${name}, ${object.object} ${adjective1[object.type]} ${adjective2[object.type]} ${adjective3[object.type]}${suffix}`;
    		$("#wow-item").removeClass(lastClass);
    		$("#wow-item").addClass('color-artifact');
    		lastClass = 'color-artifact'
    	break;
    }

    $('#wow-item').html(item);

};
