    //
    // <div>Saya Adalah Keturunan Pertama</div> menjadi <div>Diakses Melalui Eldest Parent</div>
    // <div>Saya adalah Generasi Termuda, yang paling Tua</div> menjadi <div>Diakses Melalui a Child</div>
    // <div>Saya adalah Generasi Termuda, yang Paling Muda</div> menjadi <div>Diakses Melalui a Child</div>
    // <div>Saya adalah Generasi yang Cukup Tua</div> menjadi <div>Diakses Melalui a Child</div>



    var keturunan = document.getElementById('eldest-parent')

    var dalamK = keturunan.children[0]

    dalamK.innerHTML = 'Diakses Melalui Eldest Parent'

    // / Mendapatkan sibling sebelum <div id="a-child">
    // var contohDiv1PrevSibling = contohDiv1.previousElementSibling;

    var Gentua = document.getElementById("a-child")
    var Gensebelum = Gentua.previousElementSibling
    var Gensesudah = Gentua.nextElementSibling
    Gensebelum.innerHTML = "Diakses Melalui a Child"
    Gensesudah.innerHTML = "Diakses Melalui a Child"

    var akhir = keturunan.children.length - 1
    var akhirK = keturunan.children[akhir]
    akhirK.innerHTML = "Diakses Melalui a Child"
