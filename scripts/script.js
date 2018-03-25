$('#cont').addClass('animated fadeInUp');
$('#header').addClass('animated fadeIn');
$('#hashBtn').click(function () {
    var msg = $('#msg').val();
    console.log(msg);
    hashAlgo = ['SHA-1', 'SHA-224', 'SHA-256', 'SHA-384', 'SHA-512', 'SHA3-224', 'SHA3-256', 'SHA3-384', 'SHA3-512'];
    shaResult = [];
    time=[];
    result='';
    for (var i = 0; i < hashAlgo.length; i++) {
        var t0=performance.now();
        var shaObj = new jsSHA(hashAlgo[i], "TEXT");
        shaObj.update(msg);
        var sha = shaObj.getHash("HEX");
        var t1=performance.now();
        shaResult.push(sha);
        time.push(t1-t0);
    }
    for (i = 0; i < hashAlgo.length; i++) {
        result+=`<div class="hashResult"><h2>${hashAlgo[i]}</h2><a>Hash value : </a> ${shaResult[i]}<p><a>Length : </a>${shaResult[i].length*4}bits</p><p><a>Computational time : </a>${time[i]}ms</p></div>`;
        console.log(hashAlgo[i], shaResult[i],time[i]+'ms');
    }
    console.log(result);
    $('#result').html(result);
    $('.hashResult').addClass('animated bounceInRight');
});