const WA='244924433318';
function toggleMenu(){document.querySelector('.navlinks')?.classList.toggle('open')}
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.navlinks')?.classList.remove('open')));
const supabaseUrl='https://jllngroqukqrpqyudilu.supabase.co';
const supabaseAnon='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp'+'sbG5ncm9xdWtxcnBxeXVkaWx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzNzcyNTcsImV4cCI6MjEwNDk1MzI1N30.PSTHZvwIukd7SloZ6ezBTm-HxJypQnBjDntoD_X6__8';
let sb=null;
function getSB(){if(!sb && window.supabase) sb=window.supabase.createClient(supabaseUrl,supabaseAnon);return sb}
async function submitLead(e){e.preventDefault();const form=e.currentTarget, status=form.querySelector('.status'), btn=form.querySelector('button[type=submit]');status.textContent='';status.className='status';btn.disabled=true;btn.textContent='A ENVIAR...';const data={nome:form.nome.value.trim(),telefone:form.telefone.value.trim(),email:form.email.value.trim()||null,tipo_pedido:'orcamento',tipo_projeto:form.tipo_projeto.value,localizacao:form.localizacao.value.trim(),pisos:form.pisos.value?Number(form.pisos.value):null,paragens:form.paragens.value?Number(form.paragens.value):null,mensagem:form.mensagem.value.trim(),origem:'site_elevangola'};try{const client=getSB();if(!client)throw new Error('Supabase indisponível');const {error}=await client.from('leads').insert([data]);if(error)throw error;status.className='status success';status.textContent='Pedido enviado. A nossa equipa entrará em contacto consigo.';form.reset()}catch(err){console.error(err);status.className='status error';status.textContent='Não foi possível enviar pelo formulário. Contacte-nos directamente por WhatsApp.'}finally{btn.disabled=false;btn.textContent='ENVIAR PEDIDO DE ORÇAMENTO'}}

// Banners dinâmicos: presentes na página inicial e em todas as páginas de suporte.
document.querySelectorAll('.dynamic-slider').forEach(slider=>{
  const slides=[...slider.querySelectorAll('.slide')];
  const dots=[...slider.querySelectorAll('.slider-dots button')];
  if(slides.length<2)return;
  let index=0;
  const show=(n)=>{
    index=(n+slides.length)%slides.length;
    slides.forEach((s,i)=>s.classList.toggle('active',i===index));
    dots.forEach((d,i)=>d.classList.toggle('active',i===index));
  };
  dots.forEach((d,i)=>d.addEventListener('click',()=>{show(i);reset();}));
  let timer=setInterval(()=>show(index+1),5500);
  const reset=()=>{clearInterval(timer);timer=setInterval(()=>show(index+1),5500)};
});

// Pré-preenchimento do pedido de orçamento a partir das páginas de solução (?tipo=...&msg=...)
(function(){const f=document.querySelector('form.form');if(!f)return;const q=new URLSearchParams(location.search);const map={vivenda:'Elevador para vivenda',edificio:'Elevador para edifício',carga:'Monta-cargas / elevador de carga'};if(map[q.get('tipo')])f.tipo_projeto.value=map[q.get('tipo')];if(q.get('msg'))f.mensagem.value=q.get('msg')})();

// Aviso "role para baixo" nos banners com porta a abrir: desaparece ao primeiro scroll.
document.querySelectorAll('.scrollcue').forEach(function(cue){
  var gone=false;
  function onScroll(){if(gone)return;if(window.scrollY>24){gone=true;cue.classList.add('hide');window.removeEventListener('scroll',onScroll)}}
  window.addEventListener('scroll',onScroll,{passive:true});
  cue.addEventListener('click',function(){window.scrollBy({top:window.innerHeight*0.72,behavior:'smooth'})});
});
