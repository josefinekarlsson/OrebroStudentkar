$(document).ready(function () {

    $('#imgmapStudentrepr').hover(function () {
        show_box('Studenter har rätt att vara med och fatta beslut kring sin utbildning. Därför finns det studentrepresentantplatser i' +
            ' flera olika råd och nämnder på Örebro Universitet. Läs mer om studentrepresentanter <a href="/Om/Studentrepresentanter">här</a>');
    }, function () {
        
    });

    $('#imgmapFum').hover(function () {
        show_box('Fullmäktige är det högst beslutande organet inom Örebro studentkår och består av 41 ' + 
            'ledamöter som representerar sin kårsektion. Fullmäktige sammanträder fyra gånger per år och beslutar ' +
           'vilken riktning Örebro studentkår ska arbeta mot. <a href="/Om/FUM">Läs mer -></a>' );
    }, function () {

    });

    $('#imgmapKS').hover(function () {
        show_box('Kårstyrelsen är studentkårens verkställande organ och direkt underställd Fullmäktige. Kårstyrelsen består av nio ledamöter, '
            + 'en för varje kårsektion, samt ordförande och vice ordförande. <a href="/Om/KS">Läs mer -></a>');
    }, function () {
    });

    $('#imgmapRad').hover(function () {
        show_box('Underställd kårstyrelsen har ÖS en mängd råd i vilka inom ÖS engagerade medlemmar träffas. Dessa råd är av olika karaktär. '
            + 'Några av råden är bland annat utbildningsbevakarrådet, i vilket alla kårsektioners utbildningsbevakare träffas, UniSex, inom vilket '
            + 'alla kårsektioners sexmästare träffas, samt kassörrådet, inom vilket alla kårsektioners kassörer träffas.');
    }, function () {
    });

    $('#imgmapProjekt').hover(function () {
        show_box('ÖS driver en del projekt under ett verksamhetsår. Ett återkommande projekt är akutboendet, som hjälper nya studenter att få en '
            + 'en tillfällig sovplats tills de hittar ett permanent boende.');
    }, function () {
    });

    $('#imgmapArvoderade').hover(function () {
        show_box('På ÖS kansli är tre personer heltidsarvoderade: ÖS ordförande, ÖS vice ordförande och ÖS studiesocialt ansvarige. ' +
            'Att en person är arvoderad innebär att personen får en fast ersättning för att utföra sitt uppdrag. ' +
            '<a href="/Om/Roller">Här</a> kan du läsa mer om vad de arvoderades uppgifter är.');
    }, function () {
    });

    $('#imgmapTjansteman').hover(function () {
        show_box('På ÖS centralt arbetar tre tjänstemän, en informatör och ett student- och doktorandombud (kallas kort studentombudet)' +
            ' på heltid samt en ekonom på 50 %. Läs mer om dessa roller <a href="/Om/Roller">här</a>');
    }, function () {
    });

    $('#imgmapSektioner').hover(function () {
        show_box('Kårsektionerna delar in studenter efter ämnesområden och det finns nio kårsektioner inom Örebro studentkår. Dessa är studentkårens ' + 
            'operativa del och arbetar närmast studenterna. Det är till din studentsektion som sköter bland annat utbildningsbevakning och anordnar den lokala introduktionen. <a href="/Sektion/Index">Läs mer -> </a>');
    }, function () {
    });

    $('#imgmapLosnummer').hover(function () {
        show_box('Lösnummer är ÖS tidning. Lösnummers uppdrag är att granska Örebro universitet, ÖS och att rapportera om sådant som kan '
            + 'vara av intresse för studenterna. <a href="/Studentliv/Losnummer">Här</a> kan du läsa mer om Lösnummer.');
    }, function () {
    });

    //$('#imgmapStudenter').hover(function () {
    //    show_box('Detta är den absolut viktigaste delen av Örebro studentkår - utan studenter finns inte studentkåren. '); 
    //});

    $('.close').click(function () {
        close_box();
    });

    $('.backdrop').click(function () {
        close_box();
    });
});

function show_box(msg) {
    $('#boxtext').html(msg); 
    $('.box').animate({ 'opacity': '1.00' }, 200, 'linear');
    $('.backdrop, .box').css('display', 'block');
    $('body').css('overflow', 'hidden'); 
}

function close_box() {
    $('.backdrop, .box').animate({ 'opacity': '0' }, 200, 'linear', function () {
        $('.backdrop, .box').css('display', 'none');
        $('body').css('overflow', 'auto');
    });
}