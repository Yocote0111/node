// include
function include(src){ 
  let s = document.createElement('script');
  s.setAttribute('src', src);
  document.getElementsByTagName('head')[0].append(s); 
}

// jquery feature
include('https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');

// show image in console
console.image = function (img, scale=100){
  console.log('%c ', `padding: ${Math.min(50, img.height/img.width*scale)}px ${scale}px; background:url(${img.src}) no-repeat center; background-size: contain`);
  console.log(img);
}

// console each element
console.each = function($e, f){ 
  f = f || console.log; 
  $e.each((i,e)=>f(e)); 
}

// Download file
Blob.prototype.download = function(name='download.txt'){
  let a = document.createElement('a');
  a.href = URL.createObjectURL(this);
  a.download = this.name || name;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}


console.image = function(img){
  console.log('%c', `font-size:${img.height}; background-image:url(${img.src}); no-repeat;`);
}

let i1 = 


whideyuki@jari.or.jp

