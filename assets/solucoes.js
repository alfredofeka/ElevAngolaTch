(function(){
  var grid=document.querySelector('.cabgrid');
  if(!grid)return;
  var WA='244924433318';
  var cards=[].slice.call(grid.querySelectorAll('.cab'));
  var chips=[].slice.call(document.querySelectorAll('.chips button'));
  var bar=document.querySelector('.cabbar');
  var n=bar.querySelector('.n'), list=bar.querySelector('.list'), wa=bar.querySelector('.wa'), form=bar.querySelector('.fm');
  var sel=[];
  try{sel=JSON.parse(sessionStorage.getItem('cabs')||'[]')}catch(e){}
  function save(){try{sessionStorage.setItem('cabs',JSON.stringify(sel))}catch(e){}}
  function render(){
    cards.forEach(function(c){
      var on=sel.indexOf(c.dataset.code)>-1;
      c.classList.toggle('sel',on);
      c.querySelector('.fav').setAttribute('aria-pressed',on);
    });
    bar.classList.toggle('on',sel.length>0);
    n.textContent=sel.length+(sel.length===1?' cabine guardada':' cabines guardadas');
    list.textContent=sel.join(', ');
    var msg='Olá! Gostaria de um orçamento para elevador de passageiros. Cabines que me interessam: '+sel.join(', ')+'.';
    wa.href='https://wa.me/'+WA+'?text='+encodeURIComponent(msg);
    form.href='contactos.html?tipo=edificio&msg='+encodeURIComponent(msg)+'#pedido';
  }
  grid.addEventListener('click',function(e){
    var b=e.target.closest('.fav');
    if(!b)return;
    var code=b.closest('.cab').dataset.code, i=sel.indexOf(code);
    if(i>-1)sel.splice(i,1);else sel.push(code);
    save();render();
  });
  chips.forEach(function(ch){
    ch.addEventListener('click',function(){
      chips.forEach(function(x){x.setAttribute('aria-pressed',x===ch)});
      var cat=ch.dataset.cat;
      cards.forEach(function(c){c.hidden=!(cat==='all'||c.dataset.cat===cat)});
    });
  });
  bar.querySelector('.clear').addEventListener('click',function(){sel=[];save();render()});
  render();
})();
