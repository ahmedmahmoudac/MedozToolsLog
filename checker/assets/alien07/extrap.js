function trimSpaces(s){
        var res;
        var i;
        res = "";
        for (i = 0; i < s.length; i++){
                if ((s.charAt(i) != " ") && (s.charAt(i) != "-"))
                        res += s.charAt(i);
        }
        return res;
}

//mengembalikan benar jika input yang diberikan benar (semuanya angka)
//string dianggap telah dilewatkan ke trimSpaces
function isValidInput(s){
        for (i = 0; i < s.length; i++){
                var i;
                if ((s.charAt(i) < "0") || (s.charAt(i) > "9"))
                        return false;
        }
        return true;
}

//membatasi angka agar tidak lebih dari 9
function fix(num){
        if (num <= 9) return num; else return (num - 9);
}

//untuk mengecek kebenaran dengan >> luhn check digit algorithm <<
function check(number){
        var i;
        var ganjil;
        var genap;
        var tanda;

        genap = 0;
        ganjil = 0;
        //tanda = 1 artinya jumlah digitnya ganjil
        if (number.length % 2) tanda = 0; else tanda = 1;
        for (i = 0; i < number.length; i++) {
                if ((i + tanda) % 2) //ganjil
                        ganjil += fix(2 * (number.charAt(i)));
                else
                        genap += parseInt(number.charAt(i), 10);
        }
        return (((ganjil + genap) % 10) == 0);
}

//fungsi utama
function validateInput(inp){
        var tmp;
        var Msg;
        var Msg2;
        tmp = trimSpaces(inp.nomor.value)
        if ((tmp == "") || (!isValidInput(tmp))){
                alert("Nomor Kartu yang Anda masukkan TIDAK VALID !!");
                return false;
        }
        Msg = "Kartu ini ";
        Msg2 = "";
        if (check(tmp))
                alert(Msg + "\n\nVALID!!\n\n" + Msg2);
        else
                alert(Msg + "\n\nTIDAK VALID!!\nCek lagi Nomor Kartunya.\n\n" + Msg2);
        return false;
}

//mencari beberapa angka valid yang dekat dengan nomor yang diberikan
function findN(formName){
        var start;
        var startn;
        var res;
        var i;
		var exp;
		var cvv;
		var delim;

        expH = trimSpaces(formName.exp.value);
        cvvH = trimSpaces(formName.cvv.value);
        delimH = trimSpaces(formName.delim.value);
        start = trimSpaces(formName.nomor.value);
        if ((start == "") || (!isValidInput(start))){
                alert("ISI YANG BENER! ^_^");
                return;
        }
        res = "Results :\n";
        startn = parseInt(start,10);
        for (i=-50; i<9000; i++)  {
                num = "" + (parseInt(start,10)+i);
                if (check(num)) {
                        res += (startn + i) + delimH + expH + delimH + cvvH + "\n";
                }
        }
        formName.hasil.value = res;
}
//
//akhir skrip di sini
//
//------------------------------------------------------->