var $ = require('jquery');

function addTrad(id, entity) {
   $string = '#'+id+'EN';
   $en = $($string);
   $es = $('#' + id + 'ES');
   saveToTrad($en.val(), $es.val(), id+1, entity)
}

function saveToTrad(en, es, id, entity) {
   console.log(en);
   console.log(es);
   $.ajax({
      url: '/admin/'+entity+'/trad/add',
      method: "POST",
      data: {en: en, es: es, id:id}
   })
}

window.addTrad = addTrad;
window.saveToTrad = saveToTrad;