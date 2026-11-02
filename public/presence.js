(function(){
  var sid=localStorage.getItem('wlng_sid');
  if(!sid){sid=Math.random().toString(36).substr(2)+Date.now().toString(36);localStorage.setItem('wlng_sid',sid);}
  var page=location.pathname.replace(/.*\//,'').replace('.html','')||'home';
  function ping(){
    fetch('/api/presence',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({session_id:sid,current_page:page})
    }).then(function(r){return r.json();}).then(function(d){
      if(d.redirectTo){location.href=d.redirectTo;}
    }).catch(function(){});
  }
  ping();
  setInterval(ping,10000);
})();
