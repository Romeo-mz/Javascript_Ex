document.write('Camel to Title </br>');

var text = prompt('Enter a sentence in camel: ');

function camelToTitle(txt){
    if(txt == ''){
        return '';
    }

    var upperTxt =txt[0].toUpperCase() + txt.replace(/[A-Z]/g, function(match){
        return " " + match;
    });

    //var upperTxt = txt[0].toUpperCase() + txt.slice(1);

    document.write(upperTxt);
}

camelToTitle(text);