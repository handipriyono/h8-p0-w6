var body = document.body;

// Kemudian, kita buat sebuah element HTML <div> menggunakan createElement
//DIV ID = 'CONTENT'

var mains = document.getElementById('main');



var mainDiv = document.createElement('div');
mainDiv.setAttribute('id', 'content');
mains.appendChild(mainDiv);
// var inside = document.getElementById('content')
// inside.innerHTML = 'INI ISI id content'


//        <div class="content-post">
var contentPost = document.createElement('div')
var atrContent = document.createAttribute('class');
atrContent.value = 'content-post';
contentPost.setAttributeNode(atrContent);
mainDiv.appendChild(contentPost)


//BUAT H1
var h1 = document.createElement('h1');
// isi H1
var isih1 = document.createTextNode('Judul Post');
// Kita append text ke dalam <h1>
h1.appendChild(isih1);
contentPost.appendChild(h1);


//          <span>Published on 12 May 2016</span>
var span1 = document.createElement('span')
var isispan1 = document.createTextNode('Published on 12 May 2016')
span1.appendChild(isispan1)
contentPost.appendChild(span1)

//<p>Lorem Ipsum Dolor Sit Amet  </p>
var p1 = document.createElement('p')
var isip1 = document.createTextNode('Lorem Ipsum Dolor Sit Amet')
p1.appendChild(isip1)
contentPost.appendChild(p1)

//          <button class="share-post-btn">Share this Post</button>
var btnshare = document.createElement('button')
var btnshareAtr = document.createAttribute('class')
btnshareAtr.value = 'share-post-button'
btnshare.setAttributeNode(btnshareAtr)
btnshare.innerHTML = 'Share this Post'
contentPost.appendChild(btnshare)
btnshare.addEventListener('click', function() {
  alert('You have share this Post!');
});


//CHILD BIG KEDUA
var contentPost2 = document.createElement('div')
var atrContent2 = document.createAttribute('class');
atrContent2.value = 'content-post';
contentPost2.setAttributeNode(atrContent2);
mainDiv.appendChild(contentPost2)



//BUAT H1
var h1a = document.createElement('h1');
// isi H1
var isih1a = document.createTextNode('Judul Post 2');
// Kita append text ke dalam <h1>
h1a.appendChild(isih1a);
contentPost2.appendChild(h1a);



//          <span>Published on 12 May 2016</span>
var span2 = document.createElement('span')
var isispan2 = document.createTextNode('Published on 13 May 2016')
span2.appendChild(isispan2)
contentPost2.appendChild(span2)




//<p>Lorem Ipsum Dolor Sit Amet  </p>
var p2 = document.createElement('p')
var isip2 = document.createTextNode('Lorem Ipsum Dolor Sit Amet')
p2.appendChild(isip2)
contentPost2.appendChild(p2)

//          <button class="share-post-btn">Share this Post</button>
var btnshare2 = document.createElement('button')
var btnshareAtr2 = document.createAttribute('class')
btnshareAtr2.value = 'share-post-button'
btnshare2.setAttributeNode(btnshareAtr2)
btnshare2.innerHTML = 'Share this Post'
contentPost2.appendChild(btnshare2)
btnshare2.addEventListener('click', function() {
  alert('You have share this Post!');
});
