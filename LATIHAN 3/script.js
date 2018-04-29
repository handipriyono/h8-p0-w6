var usernama = document.getElementById('username')
var passwordt = document.getElementById('password')
var emailt = document.getElementById('email')


var passwordt2 = document.getElementById('password2')
var emailt2 = document.getElementById('email2')



function cekan() {

  if (usernama.value === '') {
    alert('username tidak boleh kosong')

  } else if (passwordt.value === '') {
    alert('password tidak boleh kosong')
  } else if (passwordt.value.length < 6) {
    alert('Password harus lebih dari 6')
  } else if (passwordt2.value === '') {
    alert('password Konfirmasi tidak boleh kosong')
  } else if (emailt.value === '') {
    alert('Email tidak boleh kosong')
  } else if (emailt2.value === '') {
    alert('Email konfirmasi tidak boleh kosong')
  } else if (emailt.value !== emailt2.value) {
    alert('Email konfirmasi harus sama')
  } else if (passwordt.value !== password2.value) {
    alert('password konfirmasi harus sama')
  } else {
    usernama.value = ''
    email.value = ''
    emailt2.value = ''
    passwordt.value = ''
    passwordt2.value = ''
    alert('Registrasi success!')
  }




}
