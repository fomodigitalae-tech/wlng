(function(){
var css='.pb-footer{background:#1a1a1a;color:#fff;padding:32px 16px 16px;margin-top:28px;font-size:13px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}'+
'.pb-footer a{color:#aaa;text-decoration:none}'+
'.pb-footer .ft-inner{max-width:520px;margin:0 auto;text-align:center}'+
'.pb-footer .ft-logo{height:40px;filter:brightness(0) invert(1);margin-bottom:12px}'+
'.pb-footer .ft-desc{font-size:14px;color:#aaa;line-height:1.5;margin-bottom:20px}'+
'.pb-footer .ft-contact{border-top:1px solid #333;padding-top:20px;margin-bottom:20px;text-align:left}'+
'.pb-footer .ft-contact h5{font-size:14px;font-weight:600;margin-bottom:12px;color:#00A651}'+
'.pb-footer .ft-contact p{font-size:13px;color:#ccc;margin-bottom:6px}'+
'.pb-footer .ft-bottom{border-top:1px solid #333;padding-top:16px;text-align:center}'+
'.pb-footer .ft-bottom p{font-size:12px;color:#666}';

var style=document.createElement('style');
style.textContent=css;
document.head.appendChild(style);

var html='<footer class="pb-footer">'+
'<div class="ft-inner">'+
'<img class="ft-logo" src="/images/wb-logo.svg" alt="Wing Bank">'+
'<p class="ft-desc">Wing Bank is a leading bank in Cambodia, providing financial services to the people of Cambodia.</p>'+
'<div class="ft-contact">'+
'<h5>Contact</h5>'+
'<p>Phone: +855 23 999 989</p>'+
'<p>Address: No. 234, Monivong Blvd, Phnom Penh, Cambodia</p>'+
'</div>'+
'<div class="ft-bottom">'+
'<p>&copy; '+new Date().getFullYear()+' Wing Bank. All rights reserved.</p>'+
'</div>'+
'</div>'+
'</footer>';

var existingFooter=document.querySelector('.pb-footer');
if(!existingFooter){
  var tracker=document.querySelector('script[src="tracker.js"]');
  if(tracker){
    tracker.insertAdjacentHTML('beforebegin',html);
  }else{
    document.body.insertAdjacentHTML('beforeend',html);
  }
}
})();
