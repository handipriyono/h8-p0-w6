    //
    //
    // <h1 id="fill-me"></h1> menjadi <h1 id="fill-me">HALO!</h1>
    // <p className="change-all-of-me"></p> menjadi <p className="change-all-of-me">HALO JUGA!</p>
    // <h2>Change the Inside of H2!</h2> menjadi <h2>Apa Kabar!</h2>


    var Hasatu = document.getElementById('fill-me')
    Hasatu.innerHTML = 'HALO!'

    var ubahP = document.getElementsByClassName("change-all-of-me")

    for (let i = 0; i < ubahP.length; i++) {
      ubahP[i].innerHTML = 'HALO JUGA!'
    }

    var Hadua = document.getElementsByTagName('h2')


    for (let i = 0; i < Hadua.length; i++) {
      Hadua[i].innerHTML = 'Apa Kabar!'
    }
