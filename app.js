const _0x1ab57b=_0x156a;(function(_0x58284e,_0x245c01){const _0x217449=_0x156a,_0x4902f0=_0x58284e();while(!![]){try{const _0x2f2e98=parseInt(_0x217449(0x218))/0x1*(-parseInt(_0x217449(0x249))/0x2)+-parseInt(_0x217449(0x267))/0x3*(-parseInt(_0x217449(0x201))/0x4)+parseInt(_0x217449(0x27c))/0x5*(parseInt(_0x217449(0x1bf))/0x6)+parseInt(_0x217449(0x1c5))/0x7+-parseInt(_0x217449(0x254))/0x8*(-parseInt(_0x217449(0x1c4))/0x9)+parseInt(_0x217449(0x22a))/0xa*(-parseInt(_0x217449(0x1cb))/0xb)+-parseInt(_0x217449(0x1ea))/0xc*(-parseInt(_0x217449(0x21a))/0xd);if(_0x2f2e98===_0x245c01)break;else _0x4902f0['push'](_0x4902f0['shift']());}catch(_0x1df65b){_0x4902f0['push'](_0x4902f0['shift']());}}}(_0xc402,0x9d017));const GOOGLE_SHEETS_URL=_0x1ab57b(0x1fa);function showToast(_0x4678bd){const _0x18edaf=_0x1ab57b,_0x33f6c4=document['getElementById']('toast');_0x33f6c4[_0x18edaf(0x1e5)]=_0x4678bd,_0x33f6c4['className']=_0x18edaf(0x230),setTimeout(function(){const _0xcf2b6=_0x18edaf;_0x33f6c4[_0xcf2b6(0x256)]=_0x33f6c4[_0xcf2b6(0x256)][_0xcf2b6(0x21d)]('show','');},0xbb8);}function _0x156a(_0x13f6da,_0x460e9d){const _0xc4029a=_0xc402();return _0x156a=function(_0x156a3,_0x25eb56){_0x156a3=_0x156a3-0x1a1;let _0x5c2d51=_0xc4029a[_0x156a3];return _0x5c2d51;},_0x156a(_0x13f6da,_0x460e9d);}function syncToGoogle(_0x16c89b){const _0x1d888f=_0x1ab57b;if(!GOOGLE_SHEETS_URL||GOOGLE_SHEETS_URL[_0x1d888f(0x236)]('COLE_SUA'))return;if(!_0x16c89b||Object[_0x1d888f(0x206)](_0x16c89b)[_0x1d888f(0x1ae)]===0x0)return;showToast(_0x1d888f(0x215)),fetch(GOOGLE_SHEETS_URL,{'method':_0x1d888f(0x277),'mode':_0x1d888f(0x1c1),'headers':{'Content-Type':_0x1d888f(0x204)},'body':JSON['stringify'](_0x16c89b)})[_0x1d888f(0x1db)](_0x522fad=>console[_0x1d888f(0x26b)](_0x1d888f(0x23b),_0x522fad));}let currentUser=null,state={'tx':[],'categories':[],'recurring':[],'licenseKey':null};function getStorageKey(){const _0x4fc932=_0x1ab57b;if(!currentUser)return null;return _0x4fc932(0x251)+currentUser[_0x4fc932(0x26f)][_0x4fc932(0x21d)](/[^a-z0-9]/gi,'_');}function loadState(){const _0x3ce703=_0x1ab57b,_0x441015=getStorageKey();if(!_0x441015)return;try{const _0x2d69b3=localStorage[_0x3ce703(0x208)](_0x441015);_0x2d69b3?state=JSON[_0x3ce703(0x22f)](_0x2d69b3):state={'tx':[],'categories':[],'recurring':[],'licenseKey':null};if(!state['recurring'])state[_0x3ce703(0x234)]=[];if(!state['categories'])state[_0x3ce703(0x222)]=[];if(!state['tx'])state['tx']=[];if(state['licenseKey']===undefined)state[_0x3ce703(0x1d9)]=null;}catch(_0x352773){console[_0x3ce703(0x26b)](_0x352773);}}function saveState(){const _0x24a19f=_0x1ab57b,_0x3eb96d=getStorageKey();if(_0x3eb96d)localStorage[_0x24a19f(0x1ba)](_0x3eb96d,JSON['stringify'](state));}const ADMIN_USER={'email':_0x1ab57b(0x255),'pass':_0x1ab57b(0x1c6),'name':_0x1ab57b(0x226)};function toggleAuth(_0x1da716){const _0x57384d=_0x1ab57b;document[_0x57384d(0x252)](_0x57384d(0x24f))[_0x57384d(0x1ac)][_0x57384d(0x258)]=_0x1da716===_0x57384d(0x274)?'block':_0x57384d(0x209),document[_0x57384d(0x252)](_0x57384d(0x1d3))[_0x57384d(0x1ac)][_0x57384d(0x258)]=_0x1da716==='register'?'block':'none';}function doLogin(){const _0xb43041=_0x1ab57b,_0x2da03e=document[_0xb43041(0x252)](_0xb43041(0x238))['value'][_0xb43041(0x26d)](),_0x2079ba=document[_0xb43041(0x252)](_0xb43041(0x1a7))[_0xb43041(0x21f)]['trim']();if(_0x2da03e===ADMIN_USER[_0xb43041(0x26f)]&&_0x2079ba===ADMIN_USER[_0xb43041(0x1f8)]){setUser(ADMIN_USER);return;}const _0x726ba8=JSON[_0xb43041(0x22f)](localStorage[_0xb43041(0x208)](_0xb43041(0x1da))||'[]'),_0x216dee=_0x726ba8[_0xb43041(0x276)](_0x5f0370=>_0x5f0370[_0xb43041(0x26f)]===_0x2da03e&&_0x5f0370[_0xb43041(0x1f8)]===_0x2079ba);_0x216dee?setUser(_0x216dee):document[_0xb43041(0x252)](_0xb43041(0x1e8))[_0xb43041(0x1ac)][_0xb43041(0x258)]=_0xb43041(0x260);}function setUser(_0x3d9870){const _0x224733=_0x1ab57b;state={'tx':[],'categories':[],'recurring':[],'licenseKey':null},currentUser=_0x3d9870,sessionStorage[_0x224733(0x1ba)](_0x224733(0x232),JSON[_0x224733(0x1dc)](_0x3d9870)),document[_0x224733(0x252)](_0x224733(0x273))[_0x224733(0x1ac)]['display']=_0x224733(0x209),document[_0x224733(0x252)](_0x224733(0x244))[_0x224733(0x1ac)][_0x224733(0x258)]=_0x224733(0x260),document[_0x224733(0x252)]('currentUserDisplay')[_0x224733(0x1e5)]=_0x224733(0x229)+(_0x3d9870['name']||_0x3d9870[_0x224733(0x26f)]),loadState(),initApp();}function doLogout(){const _0x5ba69c=_0x1ab57b;sessionStorage[_0x5ba69c(0x25d)]('boxmotors_logged_user'),currentUser=null,location['reload']();}function doRegister(){const _0x14b559=_0x1ab57b,_0x458e29=document[_0x14b559(0x252)](_0x14b559(0x235))[_0x14b559(0x21f)],_0x57a130=document[_0x14b559(0x252)](_0x14b559(0x250))[_0x14b559(0x21f)],_0x3bcfe7=document[_0x14b559(0x252)](_0x14b559(0x1ce))['value'],_0x57a07d=document[_0x14b559(0x252)](_0x14b559(0x24d))[_0x14b559(0x21f)],_0x455e18=document[_0x14b559(0x252)](_0x14b559(0x1ab)),_0x28db23=document[_0x14b559(0x252)]('regStatus');if(!_0x57a130||!_0x57a07d)return alert(_0x14b559(0x22c));_0x455e18[_0x14b559(0x1b6)]=!![],_0x455e18['textContent']='Salvando...',syncToGoogle({'action':'register','nome':_0x458e29,'email':_0x57a130,'telefone':_0x3bcfe7,'senha':_0x57a07d});const _0x3d646a=JSON['parse'](localStorage['getItem'](_0x14b559(0x1da))||'[]');if(_0x3d646a['find'](_0x5cac2b=>_0x5cac2b[_0x14b559(0x26f)]===_0x57a130)){alert(_0x14b559(0x216)),_0x455e18[_0x14b559(0x1b6)]=![];return;}const _0x17e9fc={'name':_0x458e29,'email':_0x57a130,'phone':_0x3bcfe7,'pass':_0x57a07d};_0x3d646a[_0x14b559(0x1fe)](_0x17e9fc),localStorage[_0x14b559(0x1ba)](_0x14b559(0x1da),JSON[_0x14b559(0x1dc)](_0x3d646a)),_0x28db23[_0x14b559(0x1e5)]=_0x14b559(0x23d),setTimeout(()=>{const _0x45961d=_0x14b559;toggleAuth(_0x45961d(0x274)),_0x455e18[_0x45961d(0x1b6)]=![],_0x28db23[_0x45961d(0x1e5)]='';},0x7d0);}function resetSystemUsers(){const _0x2ce9cd=_0x1ab57b,_0x3017ba=prompt(_0x2ce9cd(0x264));if(_0x3017ba===_0x2ce9cd(0x1c6))confirm(_0x2ce9cd(0x205))&&(localStorage[_0x2ce9cd(0x25d)](_0x2ce9cd(0x1da)),alert(_0x2ce9cd(0x1d8)),location[_0x2ce9cd(0x224)]());else _0x3017ba!==null&&alert('Senha\x20incorreta.');}const DEFAULT_CATS=[_0x1ab57b(0x268),_0x1ab57b(0x247),_0x1ab57b(0x214),_0x1ab57b(0x21b),_0x1ab57b(0x1b3)];function initApp(){const _0x5de8b3=_0x1ab57b;document[_0x5de8b3(0x252)](_0x5de8b3(0x1f1))[_0x5de8b3(0x21f)]=new Date()[_0x5de8b3(0x257)]()[_0x5de8b3(0x1b5)](0x0,0xa),ensureDefaults(),applyTheme(),checkLicense(),updateUI();}function ensureDefaults(){const _0x5d440a=_0x1ab57b;(!state[_0x5d440a(0x222)]||state[_0x5d440a(0x222)][_0x5d440a(0x1ae)]===0x0)&&(state[_0x5d440a(0x222)]=[...DEFAULT_CATS],saveState());const _0x41d26a=state[_0x5d440a(0x222)]['map'](_0x385722=>_0x5d440a(0x20a)+_0x385722+'\x22>'+_0x385722+_0x5d440a(0x1b9))[_0x5d440a(0x217)]('');document['getElementById']('categoria')[_0x5d440a(0x1f6)]=_0x41d26a,document['getElementById'](_0x5d440a(0x261))['innerHTML']=_0x5d440a(0x223)+_0x41d26a;}function updateUI(){renderTxList(),renderChart(),updateTotals(),checkLicense();}function uid(){const _0x2d3101=_0x1ab57b;return Date['now']()[_0x2d3101(0x1de)](0x24)+Math[_0x2d3101(0x1e2)]()[_0x2d3101(0x1de)](0x24)[_0x2d3101(0x270)](0x2);}function fmt(_0xde1a00){const _0x1ce884=_0x1ab57b;return _0x1ce884(0x20f)+Number(_0xde1a00)['toFixed'](0x2)[_0x1ce884(0x21d)]('.',',');}document[_0x1ab57b(0x252)](_0x1ab57b(0x200))[_0x1ab57b(0x27b)](_0x1ab57b(0x1ee),()=>{if(!canAdd())return;saveTx(uid());}),document[_0x1ab57b(0x252)](_0x1ab57b(0x23e))['addEventListener']('click',()=>{const _0x12678e=_0x1ab57b;saveTx(document[_0x12678e(0x252)]('editingId')['value']);});function saveTx(_0x34d5e9){const _0x25f6f5=_0x1ab57b,_0xcf7982=document[_0x25f6f5(0x252)]('tipo')['value'],_0x3ec0b1=document[_0x25f6f5(0x252)](_0x25f6f5(0x25a))[_0x25f6f5(0x21f)],_0x5eb68c=document[_0x25f6f5(0x252)]('descricao')[_0x25f6f5(0x21f)][_0x25f6f5(0x26d)](),_0x2a20bb=Number(document[_0x25f6f5(0x252)](_0x25f6f5(0x1c7))['value']),_0x18f7f1=document[_0x25f6f5(0x252)]('data')['value'];if(!_0x2a20bb||_0x2a20bb<=0x0)return alert(_0x25f6f5(0x1ff));const _0x3f6b1f=state['tx']['findIndex'](_0x32b1fe=>_0x32b1fe['id']===_0x34d5e9);currentUser&&syncToGoogle({'action':_0x25f6f5(0x20d),'userEmail':currentUser[_0x25f6f5(0x26f)],'tipo':_0xcf7982,'categoria':_0x3ec0b1,'descricao':_0x5eb68c,'valor':_0x2a20bb,'data':_0x18f7f1});if(_0x3f6b1f>=0x0)state['tx'][_0x3f6b1f]={'id':_0x34d5e9,'tipo':_0xcf7982,'categoria':_0x3ec0b1,'descricao':_0x5eb68c,'valor':_0x2a20bb,'data':_0x18f7f1};else state['tx'][_0x25f6f5(0x1fe)]({'id':_0x34d5e9,'tipo':_0xcf7982,'categoria':_0x3ec0b1,'descricao':_0x5eb68c,'valor':_0x2a20bb,'data':_0x18f7f1});cancelEdit(),saveState(),updateUI();}function editTx(_0x4644cd){const _0x5df71c=_0x1ab57b,_0x3e794f=state['tx'][_0x5df71c(0x276)](_0x7a80bc=>_0x7a80bc['id']===_0x4644cd);if(!_0x3e794f)return;document[_0x5df71c(0x252)](_0x5df71c(0x1c0))['value']=_0x3e794f[_0x5df71c(0x1c0)],document[_0x5df71c(0x252)](_0x5df71c(0x25a))['value']=_0x3e794f[_0x5df71c(0x25a)],document[_0x5df71c(0x252)](_0x5df71c(0x1d6))['value']=_0x3e794f[_0x5df71c(0x1d6)],document[_0x5df71c(0x252)](_0x5df71c(0x1c7))[_0x5df71c(0x21f)]=_0x3e794f['valor'],document[_0x5df71c(0x252)](_0x5df71c(0x1f1))[_0x5df71c(0x21f)]=_0x3e794f[_0x5df71c(0x1f1)],document['getElementById'](_0x5df71c(0x246))[_0x5df71c(0x21f)]=_0x4644cd,document['getElementById'](_0x5df71c(0x200))['style']['display']=_0x5df71c(0x209),document['getElementById'](_0x5df71c(0x23e))[_0x5df71c(0x1ac)][_0x5df71c(0x258)]=_0x5df71c(0x237),document[_0x5df71c(0x252)](_0x5df71c(0x1ad))['style']['display']=_0x5df71c(0x237);}function deleteTx(_0x322854){const _0x460a82=_0x1ab57b;if(confirm('Apagar?')){state['tx']=state['tx']['filter'](_0x39641e=>_0x39641e['id']!==_0x322854);if(document[_0x460a82(0x252)]('editingId')[_0x460a82(0x21f)]===_0x322854)cancelEdit();saveState(),updateUI();}}function cancelEdit(){const _0x4a2f92=_0x1ab57b;document['getElementById']('descricao')['value']='',document['getElementById'](_0x4a2f92(0x1c7))[_0x4a2f92(0x21f)]='',document['getElementById'](_0x4a2f92(0x246))[_0x4a2f92(0x21f)]='',document[_0x4a2f92(0x252)]('addTx')[_0x4a2f92(0x1ac)]['display']='inline-block',document[_0x4a2f92(0x252)](_0x4a2f92(0x23e))[_0x4a2f92(0x1ac)][_0x4a2f92(0x258)]=_0x4a2f92(0x209),document[_0x4a2f92(0x252)](_0x4a2f92(0x1ad))['style'][_0x4a2f92(0x258)]='none';}function renderTxList(){const _0x5c99d7=_0x1ab57b,_0x31c88a=document[_0x5c99d7(0x252)](_0x5c99d7(0x1e9));_0x31c88a[_0x5c99d7(0x1f6)]='';const _0x5107f1=document['getElementById']('filtroCategoria')[_0x5c99d7(0x21f)],_0x815a12=document['getElementById']('filtroData')['value'],_0x3a1d78=state['tx'][_0x5c99d7(0x269)](_0x308d6a=>{const _0x6ee42a=_0x5c99d7;if(_0x5107f1&&_0x308d6a[_0x6ee42a(0x25a)]!==_0x5107f1)return![];if(_0x815a12&&_0x308d6a[_0x6ee42a(0x1f1)]!==_0x815a12)return![];return!![];})[_0x5c99d7(0x265)]((_0x457f35,_0x5751f2)=>_0x5751f2['data'][_0x5c99d7(0x271)](_0x457f35[_0x5c99d7(0x1f1)]));_0x3a1d78[_0x5c99d7(0x1df)](_0x18b04b=>{const _0x1a6a6c=_0x5c99d7;_0x31c88a[_0x1a6a6c(0x1f6)]+=_0x1a6a6c(0x272)+_0x18b04b[_0x1a6a6c(0x1d6)]+_0x1a6a6c(0x245)+_0x18b04b['categoria']+_0x1a6a6c(0x207)+_0x18b04b['data']+'</div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:right\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22amount\x20'+_0x18b04b[_0x1a6a6c(0x1c0)]+'\x22>'+(_0x18b04b[_0x1a6a6c(0x1c0)]===_0x1a6a6c(0x22b)?'+':'-')+'\x20'+fmt(_0x18b04b[_0x1a6a6c(0x1c7)])+_0x1a6a6c(0x24b)+_0x18b04b['id']+_0x1a6a6c(0x20b)+_0x18b04b['id']+_0x1a6a6c(0x1fb);});}function updateTotals(){const _0x4c70f3=_0x1ab57b,_0x4d301d=state['tx'][_0x4c70f3(0x269)](_0x200821=>_0x200821[_0x4c70f3(0x1c0)]===_0x4c70f3(0x22b))[_0x4c70f3(0x1f9)]((_0x4717e0,_0x8377ad)=>_0x4717e0+_0x8377ad['valor'],0x0),_0x5f1c13=state['tx'][_0x4c70f3(0x269)](_0x47648a=>_0x47648a[_0x4c70f3(0x1c0)]===_0x4c70f3(0x1c8))['reduce']((_0x56a1d8,_0x539b14)=>_0x56a1d8+_0x539b14[_0x4c70f3(0x1c7)],0x0);document[_0x4c70f3(0x252)](_0x4c70f3(0x248))[_0x4c70f3(0x1e5)]=fmt(_0x4d301d-_0x5f1c13),document['getElementById']('receitas')[_0x4c70f3(0x1e5)]=fmt(_0x4d301d),document['getElementById']('despesas')[_0x4c70f3(0x1e5)]=fmt(_0x5f1c13);}document[_0x1ab57b(0x252)](_0x1ab57b(0x1ed))[_0x1ab57b(0x27b)](_0x1ab57b(0x1ee),updateUI),document['getElementById']('limparFiltro')['addEventListener']('click',()=>{const _0x4c2172=_0x1ab57b;document[_0x4c2172(0x252)](_0x4c2172(0x261))['value']='',document[_0x4c2172(0x252)](_0x4c2172(0x240))[_0x4c2172(0x21f)]='',updateUI();});function renderChart(){const _0x25853f=_0x1ab57b,_0x486e43=document[_0x25853f(0x252)](_0x25853f(0x1d7)),_0x55dbdd=_0x486e43[_0x25853f(0x1a5)]('2d');_0x55dbdd['clearRect'](0x0,0x0,_0x486e43['width'],_0x486e43[_0x25853f(0x1eb)]);const _0x3f58be={};state['tx']['filter'](_0x74572b=>_0x74572b[_0x25853f(0x1c0)]===_0x25853f(0x1c8))[_0x25853f(0x1df)](_0x1160ae=>_0x3f58be[_0x1160ae['categoria']]=(_0x3f58be[_0x1160ae[_0x25853f(0x25a)]]||0x0)+_0x1160ae[_0x25853f(0x1c7)]);const _0x1672ca=Object['entries'](_0x3f58be)[_0x25853f(0x265)]((_0x3ce545,_0x1e8d5b)=>_0x1e8d5b[0x1]-_0x3ce545[0x1]);if(!_0x1672ca[_0x25853f(0x1ae)]){_0x55dbdd[_0x25853f(0x227)]=_0x25853f(0x21c),_0x55dbdd['fillText'](_0x25853f(0x27a),0xa,0x14);return;}let _0x168136=0xa;const _0x2e7a14=_0x1672ca[0x0][0x1]||0x1;_0x1672ca[_0x25853f(0x1df)](([_0x3ec2c9,_0x4c6c31],_0x318bda)=>{const _0x1820fb=_0x25853f,_0x2874c7=_0x4c6c31/_0x2e7a14*(_0x486e43[_0x1820fb(0x1aa)]-0x78);_0x55dbdd[_0x1820fb(0x227)]='hsl('+_0x318bda*0x32+_0x1820fb(0x1a4),_0x55dbdd[_0x1820fb(0x1f4)](0x64,_0x168136,_0x2874c7,0x14),_0x55dbdd['fillStyle']=document['body'][_0x1820fb(0x23a)](_0x1820fb(0x20c))==='light'?_0x1820fb(0x1a3):_0x1820fb(0x1bc),_0x55dbdd[_0x1820fb(0x219)](_0x3ec2c9,0xa,_0x168136+0xe),_0x55dbdd['fillText'](fmt(_0x4c6c31),0x64+_0x2874c7+0x5,_0x168136+0xe),_0x168136+=0x1e;});}function toggleBackupMenu(){const _0x24d56e=_0x1ab57b;if(!isPro()){alert(_0x24d56e(0x1b8));return;}const _0x77e93=document[_0x24d56e(0x252)](_0x24d56e(0x1cd));_0x77e93[_0x24d56e(0x1ac)]['display']=_0x77e93[_0x24d56e(0x1ac)]['display']===_0x24d56e(0x209)||_0x77e93[_0x24d56e(0x1ac)]['display']===''?_0x24d56e(0x260):_0x24d56e(0x209);}document[_0x1ab57b(0x252)]('exportJson')[_0x1ab57b(0x27b)](_0x1ab57b(0x1ee),()=>{const _0x18e345=_0x1ab57b;if(!isPro())return alert(_0x18e345(0x22d));const _0x48f309=JSON[_0x18e345(0x1dc)](state);downloadFile(_0x48f309,_0x18e345(0x1a2),_0x18e345(0x204));}),document['getElementById']('exportCsv')[_0x1ab57b(0x27b)](_0x1ab57b(0x1ee),()=>{const _0x41e64c=_0x1ab57b;if(!isPro())return alert(_0x41e64c(0x212));if(!state['tx']||state['tx'][_0x41e64c(0x1ae)]===0x0)return alert(_0x41e64c(0x1fd));let _0x523167=_0x41e64c(0x210);state['tx']['forEach'](_0x19d6a9=>{const _0x4e7140=_0x41e64c;let _0x19c09b=String(_0x19d6a9['valor'])['replace']('.',','),_0x154af4=(_0x19d6a9[_0x4e7140(0x1d6)]||'')[_0x4e7140(0x21d)](/"/g,'\x22\x22');_0x523167+=_0x19d6a9['id']+';'+_0x19d6a9[_0x4e7140(0x1c0)]+';'+_0x19d6a9[_0x4e7140(0x25a)]+';\x22'+_0x154af4+'\x22;'+_0x19c09b+';'+_0x19d6a9[_0x4e7140(0x1f1)]+'\x0a';}),downloadFile(_0x523167,_0x41e64c(0x1b7),_0x41e64c(0x1b2));});function downloadFile(_0x4f6751,_0x57a250,_0x969291){const _0x2178ed=_0x1ab57b,_0xd3ff36=new Blob([_0x4f6751],{'type':_0x969291}),_0x5e9dc7=document[_0x2178ed(0x1af)]('a');_0x5e9dc7[_0x2178ed(0x1fc)]=URL[_0x2178ed(0x253)](_0xd3ff36),_0x5e9dc7[_0x2178ed(0x1d2)]=_0x2178ed(0x1a1)+new Date()['toISOString']()['slice'](0x0,0xa)+'.'+_0x57a250,document['body'][_0x2178ed(0x1e3)](_0x5e9dc7),_0x5e9dc7['click'](),document[_0x2178ed(0x22e)][_0x2178ed(0x279)](_0x5e9dc7);}function processRestore(_0x4009db){const _0x1c2df5=_0x1ab57b;if(!isPro())return _0x4009db['value']='',alert(_0x1c2df5(0x275));const _0x4827c9=_0x4009db['files'][0x0];if(!_0x4827c9)return;if(!_0x4827c9[_0x1c2df5(0x1d4)]['endsWith']('.json')){alert('ERRO:\x20Por\x20favor\x20selecione\x20o\x20arquivo\x20de\x20Backup\x20do\x20Sistema\x20(.json).\x0a\x0aO\x20arquivo\x20CSV\x20(Planilha)\x20serve\x20apenas\x20para\x20o\x20Excel\x20e\x20não\x20pode\x20ser\x20restaurado.'),_0x4009db[_0x1c2df5(0x21f)]='';return;}const _0x434d26=new FileReader();_0x434d26[_0x1c2df5(0x1a9)]=function(_0xa76fad){const _0x1fa0c1=_0x1c2df5;try{const _0x1328ee=JSON[_0x1fa0c1(0x22f)](_0xa76fad[_0x1fa0c1(0x1c3)][_0x1fa0c1(0x211)]);if(Array[_0x1fa0c1(0x25e)](_0x1328ee['tx'])){if(confirm(_0x1fa0c1(0x1bb))){const _0x542125=state['licenseKey'];state=_0x1328ee;if(_0x542125===_0x1fa0c1(0x26c))state[_0x1fa0c1(0x1d9)]=_0x1fa0c1(0x26c);saveState(),alert(_0x1fa0c1(0x25b)),location['reload']();}}else alert('Arquivo\x20inválido.');}catch(_0x399046){alert('Erro\x20ao\x20ler\x20arquivo:\x20'+_0x399046);}},_0x434d26[_0x1c2df5(0x1be)](_0x4827c9);}let recFocusDate=new Date();function getMonthKey(_0x31af22){const _0x3ef470=_0x1ab57b;return _0x31af22['getFullYear']()+'-'+(_0x31af22[_0x3ef470(0x220)]()+0x1);}function formatMonth(_0x465abf){const _0x55fab5=_0x1ab57b,_0x1bdbe1={'year':_0x55fab5(0x24c),'month':_0x55fab5(0x1bd)};return _0x465abf[_0x55fab5(0x1f7)]('pt-BR',_0x1bdbe1);}function setRecMonth(_0x3e5201){const _0x334d39=_0x1ab57b;recFocusDate=new Date(_0x3e5201['getFullYear'](),_0x3e5201[_0x334d39(0x220)](),0x1),document[_0x334d39(0x252)](_0x334d39(0x1a6))[_0x334d39(0x1e5)]=formatMonth(recFocusDate),renderRecList();}function prevRecMonth(){const _0x3d5be0=_0x1ab57b,_0x3c26e2=new Date(recFocusDate);_0x3c26e2['setMonth'](_0x3c26e2[_0x3d5be0(0x220)]()-0x1),setRecMonth(_0x3c26e2);}function nextRecMonth(){const _0x352028=_0x1ab57b,_0x55bc35=new Date(recFocusDate);_0x55bc35[_0x352028(0x278)](_0x55bc35[_0x352028(0x220)]()+0x1),setRecMonth(_0x55bc35);}function openRecurring(){const _0x44e0b5=_0x1ab57b;document[_0x44e0b5(0x243)](_0x44e0b5(0x24a))[_0x44e0b5(0x1ac)]['display']=_0x44e0b5(0x209),document[_0x44e0b5(0x252)](_0x44e0b5(0x1ca))[_0x44e0b5(0x1ac)][_0x44e0b5(0x258)]=_0x44e0b5(0x260),setRecMonth(recFocusDate||new Date());}function closePages(){const _0x3bd781=_0x1ab57b;document[_0x3bd781(0x252)](_0x3bd781(0x23f))[_0x3bd781(0x1ac)][_0x3bd781(0x258)]=_0x3bd781(0x209),document[_0x3bd781(0x252)](_0x3bd781(0x1ca))[_0x3bd781(0x1ac)][_0x3bd781(0x258)]='none',document[_0x3bd781(0x243)](_0x3bd781(0x24a))[_0x3bd781(0x1ac)][_0x3bd781(0x258)]=_0x3bd781(0x1f3),ensureDefaults();}function saveRecurring(){const _0x89d00=_0x1ab57b,_0x32856f=document[_0x89d00(0x252)](_0x89d00(0x23c))['value'],_0x1b96bb=document[_0x89d00(0x252)]('recDesc')[_0x89d00(0x21f)][_0x89d00(0x26d)](),_0x27392d=Number(document[_0x89d00(0x252)](_0x89d00(0x241))[_0x89d00(0x21f)]),_0x3cc189=document[_0x89d00(0x252)](_0x89d00(0x1b0))[_0x89d00(0x21f)];if(!_0x1b96bb||!_0x27392d)return alert(_0x89d00(0x1a8));if(!state[_0x89d00(0x234)])state[_0x89d00(0x234)]=[];const _0x3ef71c=_0x32856f?state[_0x89d00(0x234)][_0x89d00(0x276)](_0x272125=>_0x272125['id']===_0x32856f):null,_0x2ceb66={'id':_0x32856f||uid(),'desc':_0x1b96bb,'valor':_0x27392d,'dia':_0x3cc189,'history':_0x3ef71c&&_0x3ef71c[_0x89d00(0x1f2)]?_0x3ef71c[_0x89d00(0x1f2)]:{}};if(_0x32856f){const _0x1952b3=state[_0x89d00(0x234)]['findIndex'](_0x1b9b00=>_0x1b9b00['id']===_0x32856f);if(_0x1952b3>=0x0)state[_0x89d00(0x234)][_0x1952b3]=_0x2ceb66;else state[_0x89d00(0x234)]['push'](_0x2ceb66);}else state[_0x89d00(0x234)][_0x89d00(0x1fe)](_0x2ceb66);saveState(),resetRecForm(),renderRecList(),showToast(_0x89d00(0x1cf));}function editRec(_0x162a07){const _0x3d973f=_0x1ab57b,_0x14bb4a=state[_0x3d973f(0x234)][_0x3d973f(0x276)](_0x5f56bc=>_0x5f56bc['id']===_0x162a07);if(!_0x14bb4a)return;document[_0x3d973f(0x252)](_0x3d973f(0x1d5))['value']=_0x14bb4a[_0x3d973f(0x24e)],document[_0x3d973f(0x252)]('recValor')[_0x3d973f(0x21f)]=_0x14bb4a['valor'],document[_0x3d973f(0x252)]('recDia')[_0x3d973f(0x21f)]=_0x14bb4a[_0x3d973f(0x203)],document[_0x3d973f(0x252)](_0x3d973f(0x23c))[_0x3d973f(0x21f)]=_0x162a07,document['getElementById'](_0x3d973f(0x1e6))[_0x3d973f(0x1e5)]='Editando\x20Regra',document[_0x3d973f(0x252)](_0x3d973f(0x1cc))[_0x3d973f(0x1e5)]='Atualizar\x20Regra',document[_0x3d973f(0x252)]('btnCancelRec')[_0x3d973f(0x1ac)]['display']=_0x3d973f(0x237);}function deleteRec(_0x4fc074){const _0x5dcf9e=_0x1ab57b;confirm(_0x5dcf9e(0x1c2))&&(state[_0x5dcf9e(0x234)]=state[_0x5dcf9e(0x234)][_0x5dcf9e(0x269)](_0x2120b3=>_0x2120b3['id']!==_0x4fc074),saveState(),renderRecList(),resetRecForm());}function markRecPaid(_0x36d04c){const _0x293e1e=_0x1ab57b,_0x27df9a=state['recurring']['find'](_0x27eb23=>_0x27eb23['id']===_0x36d04c);if(!_0x27df9a)return;if(!_0x27df9a['history'])_0x27df9a[_0x293e1e(0x1f2)]={};const _0x418361=getMonthKey(recFocusDate),_0x1ef2c0=_0x27df9a[_0x293e1e(0x1f2)][_0x418361]||_0x293e1e(0x1e4);_0x27df9a[_0x293e1e(0x1f2)][_0x418361]=_0x1ef2c0==='pago'?_0x293e1e(0x1e4):_0x293e1e(0x25c),saveState(),renderRecList();}function resetRecForm(){const _0x3df8c5=_0x1ab57b;document[_0x3df8c5(0x252)](_0x3df8c5(0x1d5))[_0x3df8c5(0x21f)]='',document['getElementById'](_0x3df8c5(0x241))['value']='',document[_0x3df8c5(0x252)](_0x3df8c5(0x1b0))[_0x3df8c5(0x21f)]='',document[_0x3df8c5(0x252)]('recEditId')[_0x3df8c5(0x21f)]='',document[_0x3df8c5(0x252)](_0x3df8c5(0x1e6))[_0x3df8c5(0x1e5)]=_0x3df8c5(0x1b1),document[_0x3df8c5(0x252)](_0x3df8c5(0x1cc))['textContent']=_0x3df8c5(0x1c9),document[_0x3df8c5(0x252)](_0x3df8c5(0x221))[_0x3df8c5(0x1ac)][_0x3df8c5(0x258)]=_0x3df8c5(0x209);}function renderRecList(){const _0xefdce5=_0x1ab57b,_0xfaebec=document[_0xefdce5(0x252)](_0xefdce5(0x259));_0xfaebec[_0xefdce5(0x1f6)]='';let _0x4c36f8=0x0,_0x5da5bd=0x0,_0x3bafb5=0x0;const _0x46de6e=getMonthKey(recFocusDate);state[_0xefdce5(0x234)]&&state['recurring'][_0xefdce5(0x1ae)]>0x0?state['recurring'][_0xefdce5(0x1df)](_0x31c1e8=>{const _0x2255f0=_0xefdce5,_0x37017c=_0x31c1e8[_0x2255f0(0x1f2)]&&_0x31c1e8['history'][_0x46de6e]?_0x31c1e8[_0x2255f0(0x1f2)][_0x46de6e]:_0x2255f0(0x1e4);_0x4c36f8+=_0x31c1e8[_0x2255f0(0x1c7)];if(_0x37017c===_0x2255f0(0x25c))_0x5da5bd+=_0x31c1e8[_0x2255f0(0x1c7)];else _0x3bafb5+=_0x31c1e8[_0x2255f0(0x1c7)];const _0x4eeb63=Number(_0x31c1e8[_0x2255f0(0x203)])||'-';_0xfaebec[_0x2255f0(0x1f6)]+=_0x2255f0(0x1ef)+_0x31c1e8['desc']+'</div><div\x20class=\x22small\x22>Dia\x20'+_0x4eeb63+_0x2255f0(0x21e)+_0x37017c+'\x22>'+_0x37017c+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;gap:6px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22ghost\x22\x20style=\x22font-size:12px;padding:6px\x22\x20onclick=\x22markRecPaid(\x27'+_0x31c1e8['id']+'\x27)\x22>👍</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22ghost\x22\x20style=\x22font-size:10px;padding:4px\x22\x20onclick=\x22editRec(\x27'+_0x31c1e8['id']+_0x2255f0(0x263)+_0x31c1e8['id']+'\x27)\x22>🗑️</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:right\x22><div\x20class=\x22amount\x20expense\x22>'+fmt(_0x31c1e8[_0x2255f0(0x1c7)])+'</div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>';}):_0xfaebec[_0xefdce5(0x1f6)]=_0xefdce5(0x26e),document[_0xefdce5(0x252)]('recTotal')['textContent']=fmt(_0x4c36f8),document[_0xefdce5(0x252)](_0xefdce5(0x25f))['textContent']=fmt(_0x5da5bd),document[_0xefdce5(0x252)](_0xefdce5(0x262))['textContent']=fmt(_0x3bafb5);}function openCategories(){const _0x1c0fb5=_0x1ab57b;document['querySelector'](_0x1c0fb5(0x24a))[_0x1c0fb5(0x1ac)][_0x1c0fb5(0x258)]=_0x1c0fb5(0x209),document[_0x1c0fb5(0x252)](_0x1c0fb5(0x23f))[_0x1c0fb5(0x1ac)]['display']='block',renderCatList();}function addCat(){const _0x41a938=_0x1ab57b,_0x5d93cc=document[_0x41a938(0x252)](_0x41a938(0x20e))[_0x41a938(0x21f)][_0x41a938(0x26d)]();_0x5d93cc&&!state[_0x41a938(0x222)][_0x41a938(0x236)](_0x5d93cc)&&(state[_0x41a938(0x222)][_0x41a938(0x1fe)](_0x5d93cc),document[_0x41a938(0x252)](_0x41a938(0x20e))[_0x41a938(0x21f)]='',saveState(),renderCatList());}function renderCatList(){const _0x4b3cd9=_0x1ab57b,_0x8841c=document[_0x4b3cd9(0x252)]('cat-list');_0x8841c[_0x4b3cd9(0x1f6)]='',state[_0x4b3cd9(0x222)]['forEach']((_0x17c5bb,_0x4c3af3)=>{const _0x48c2a5=_0x4b3cd9;_0x8841c[_0x48c2a5(0x1f6)]+='<div\x20class=\x22tx\x22><span>'+_0x17c5bb+'</span><button\x20class=\x22ghost\x22\x20onclick=\x22delCat('+_0x4c3af3+')\x22>X</button></div>';});}function delCat(_0x3df01c){const _0xff085c=_0x1ab57b;confirm(_0xff085c(0x225))&&(state[_0xff085c(0x222)][_0xff085c(0x1e7)](_0x3df01c,0x1),saveState(),renderCatList());}const DEMO_LIMIT=0xa;function isPro(){const _0x450f15=_0x1ab57b;return state[_0x450f15(0x1d9)]===_0x450f15(0x26c);}function _0xc402(){const _0x230006=['fillText','2782TsXqgO','Marketing','#555','replace','</div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;flex-direction:column;align-items:flex-end;gap:6px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22tag\x20','value','getMonth','btnCancelRec','categories','<option\x20value=\x22\x22>Todas</option>','reload','Apagar?','Administrador','fillStyle','licenseRow','Logado:\x20','634870TKkJIQ','income','Preencha\x20email\x20e\x20senha.','Backup\x20é\x20função\x20PRO.','body','parse','show','Deseja\x20desativar\x20a\x20licença\x20deste\x20usuário?','boxmotors_logged_user','proMenu','recurring','regName','includes','inline-block','loginUser','buyBtn','getAttribute','Erro\x20no\x20envio:','recEditId','Sucesso!\x20Faça\x20login.','updateTx','cat-page','filtroData','recValor','light','querySelector','app-content','</div><div\x20class=\x22small\x22>','editingId','Peças','saldo','2hnyhuD','main','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-top:4px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22ghost\x22\x20style=\x22font-size:10px;padding:4px\x22\x20onclick=\x22editTx(\x27','numeric','regPass','desc','login-view','regEmail','boxmotors_data_','getElementById','createObjectURL','5402288hOENdH','admin','className','toISOString','display','rec-list','categoria','Dados\x20restaurados\x20com\x20sucesso!','pago','removeItem','isArray','recPaid','block','filtroCategoria','recPending','\x27)\x22>✏️</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22ghost\x22\x20style=\x22font-size:10px;padding:4px\x22\x20onclick=\x22deleteRec(\x27','Digite\x20a\x20senha\x20do\x20Admin\x20para\x20apagar\x20todos\x20os\x20usuários\x20cadastrados:','sort','TEM\x20CERTEZA?\x20Apagará\x20todos\x20os\x20lançamentos,\x20categorias\x20e\x20recorrentes.','3aohiWm','Combustível','filter','flex','error','BOXPRO','trim','<div\x20class=\x22small\x22\x20style=\x22text-align:center;padding:10px\x22>Nenhuma\x20conta\x20fixa.</div>','email','substr','localeCompare','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22tx\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22meta\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><div\x20style=\x22font-weight:600\x22>','auth-container','login','Restaurar\x20é\x20função\x20PRO.','find','POST','setMonth','removeChild','Sem\x20dados','addEventListener','935GwaJXj','boxmotors_backup_','json','#000',',\x2070%,\x2050%)','getContext','recMonthLabel','loginPass','Preencha\x20descrição\x20e\x20valor.','onload','width','btnReg','style','cancelEdit','length','createElement','recDia','Nova\x20Recorrente','text/csv;charset=utf-8;','Outros','watermark-demo','slice','disabled','csv','Função\x20disponível\x20apenas\x20na\x20versão\x20PRO.','</option>','setItem','Isso\x20irá\x20SUBSTITUIR\x20seus\x20dados\x20atuais\x20pelos\x20do\x20backup.\x20Continuar?','#fff','long','readAsText','6918fELpCz','tipo','no-cors','Apagar\x20esta\x20regra\x20recorrente?','target','9AoJDit','3476578ecZiVJ','1570','valor','expense','Salvar\x20Regra','rec-page','77iIuFYa','btnSaveRec','backupMenu','regPhone','Regra\x20salva!','Chave\x20inválida','demoBadge','download','register-view','name','recDesc','descricao','chart','Base\x20de\x20usuários\x20resetada\x20com\x20sucesso!','licenseKey','boxmotors_users_db','catch','stringify','Limite\x20DEMO\x20atingido\x20(10\x20transações).\x20Adquira\x20a\x20versão\x20PRO.','toString','forEach','boxmotors_theme','inline-flex','random','appendChild','pendente','textContent','recFormTitle','splice','loginError','tx-list','2472ZUMPXo','height','dark','aplicarFiltro','click','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22rec-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22meta\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><div\x20style=\x22font-weight:600\x22>','setAttribute','data','history','grid','fillRect','resetAll','innerHTML','toLocaleDateString','pass','reduce','https://script.google.com/macros/s/AKfycbyBHXsDV-_E8-CjFNjL8rD0hoVqayQwzXr_Qmbi3sqoa2GB6WKqM2wWSyJxdwqN3dC_/exec','\x27)\x22>Del</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>','href','Sem\x20dados.','push','Valor\x20inválido','addTx','3554860OaCTFr','Licença\x20PRO\x20Ativada\x20com\x20Sucesso!','dia','application/json','TEM\x20CERTEZA?\x20Isso\x20excluirá\x20todos\x20os\x20logins\x20criados.','keys','\x20-\x20','getItem','none','<option\x20value=\x22','\x27)\x22>Edit</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22ghost\x22\x20style=\x22font-size:10px;padding:4px\x22\x20onclick=\x22deleteTx(\x27','data-theme','transaction','newCatName','R$\x20','\ufeffID;Tipo;Categoria;Descrição;Valor;Data\x0a','result','Função\x20PRO.','removeAttribute','Serviços','Sincronizando...','Usuário\x20já\x20existe\x20neste\x20computador.','join','1232846svaBmc'];_0xc402=function(){return _0x230006;};return _0xc402();}function checkLicense(){const _0x171486=_0x1ab57b,_0x1faff7=document['getElementById']('backupBtn');if(isPro()){document['getElementById'](_0x171486(0x1d1))[_0x171486(0x1ac)][_0x171486(0x258)]='none',document[_0x171486(0x252)](_0x171486(0x1d9))['style'][_0x171486(0x258)]='none',document[_0x171486(0x252)](_0x171486(0x239))[_0x171486(0x1ac)][_0x171486(0x258)]=_0x171486(0x209),document[_0x171486(0x252)](_0x171486(0x228))[_0x171486(0x1ac)]['display']=_0x171486(0x209),document[_0x171486(0x252)](_0x171486(0x233))['style'][_0x171486(0x258)]=_0x171486(0x26a),document[_0x171486(0x252)](_0x171486(0x1b4))[_0x171486(0x1ac)][_0x171486(0x258)]='none';if(_0x1faff7)_0x1faff7[_0x171486(0x1ac)][_0x171486(0x258)]=_0x171486(0x1e1);}else{document[_0x171486(0x252)]('demoBadge')[_0x171486(0x1ac)]['display']=_0x171486(0x237),document[_0x171486(0x252)](_0x171486(0x1d9))[_0x171486(0x1ac)][_0x171486(0x258)]=_0x171486(0x237),document[_0x171486(0x252)](_0x171486(0x239))[_0x171486(0x1ac)][_0x171486(0x258)]=_0x171486(0x237),document[_0x171486(0x252)](_0x171486(0x228))[_0x171486(0x1ac)][_0x171486(0x258)]='inline-flex',document['getElementById'](_0x171486(0x233))[_0x171486(0x1ac)]['display']=_0x171486(0x209),document[_0x171486(0x252)](_0x171486(0x1b4))[_0x171486(0x1ac)][_0x171486(0x258)]=_0x171486(0x260);if(_0x1faff7)_0x1faff7['style'][_0x171486(0x258)]=_0x171486(0x209);}}function canAdd(){const _0xa894f3=_0x1ab57b;if(isPro())return!![];if(state['tx'][_0xa894f3(0x1ae)]>=DEMO_LIMIT){if(confirm(_0xa894f3(0x1dd)))openLink();return![];}return!![];}function activateLicense(){const _0x44799d=_0x1ab57b,_0x1a694d=document[_0x44799d(0x252)]('licenseKey')['value'];if(_0x1a694d==='BOXPRO')state['licenseKey']=_0x1a694d,saveState(),alert(_0x44799d(0x202)),location[_0x44799d(0x224)]();else alert(_0x44799d(0x1d0));}function revokeLicense(){const _0x3867db=_0x1ab57b;confirm(_0x3867db(0x231))&&(state[_0x3867db(0x1d9)]=null,saveState(),location['reload']());}function openLink(){window['open']('https://linktr.ee/BoxMotors');}document[_0x1ab57b(0x252)](_0x1ab57b(0x1f5))[_0x1ab57b(0x27b)]('click',()=>{const _0x245a9f=_0x1ab57b;if(!isPro()){alert('Função\x20disponível\x20apenas\x20na\x20versão\x20PRO.');return;}if(confirm(_0x245a9f(0x266))){const _0x2f4de3=state['licenseKey'];state={'tx':[],'categories':[...DEFAULT_CATS],'recurring':[],'licenseKey':_0x2f4de3},saveState(),location[_0x245a9f(0x224)]();}});function applyTheme(){const _0x21e3d4=_0x1ab57b,_0x51e09b=localStorage[_0x21e3d4(0x208)]('boxmotors_theme');if(_0x51e09b===_0x21e3d4(0x242))document[_0x21e3d4(0x22e)][_0x21e3d4(0x1f0)](_0x21e3d4(0x20c),_0x21e3d4(0x242));else document['body'][_0x21e3d4(0x213)](_0x21e3d4(0x20c));}function toggleTheme(){const _0x447e6e=_0x1ab57b,_0xb3f6b2=localStorage['getItem'](_0x447e6e(0x1e0)),_0x4b2402=_0xb3f6b2==='light'?_0x447e6e(0x1ec):_0x447e6e(0x242);localStorage['setItem'](_0x447e6e(0x1e0),_0x4b2402),applyTheme();}(function(){const _0x4acc61=_0x1ab57b,_0x1cb144=sessionStorage[_0x4acc61(0x208)]('boxmotors_logged_user');_0x1cb144&&setUser(JSON[_0x4acc61(0x22f)](_0x1cb144));}());
(function enforceDomainLock() {
  try {
    const allowedHosts = [
      // AJUSTE AQUI PARA OS SEUS DOMÍNIOS
      'controle-box.netlify.app',
      '6snailiw-H4CK.github.io',
      'localhost',
      '127.0.0.1'
    ];

    const currentHost = window.location.hostname;

    if (!allowedHosts.includes(currentHost)) {
      // Limpa a tela e mostra mensagem genérica
      document.documentElement.innerHTML = '';
      setTimeout(() => {
        alert('Instalação não autorizada.');
      }, 300);
      throw new Error('Domain not allowed');
    }
  } catch (e) {
    // Se algo der errado aqui, não quebra o app no seu domínio.
    console.error('[THE BOX] Domain lock error:', e);
  }
})();

const LICENSE_CONFIG = (function () {
  const parts = ['RO', 'BX', 'OP']; 
  const order = [1, 2, 0]; 

  const intermediate = order.map(i => parts[i]).join(''); 

  function getKey() {
        return intermediate.replace('XO', 'OX'); 
  }

  return {
    getKey
  };
})();

if (typeof state !== 'undefined') {

  function isPro() {
    try {
      return state.licenseKey === LICENSE_CONFIG.getKey();
    } catch (e) {
      console.error('[THE BOX] isPro error:', e);
      return false;
    }
  }

 function activateLicense() {
  try {
    const input = document.getElementById('licenseKey');
    if (!input) {
      if (typeof showAlert === 'function') {
        showAlert('Campo de licença não encontrado.');
      } else {
        alert('Campo de licença não encontrado.');
      }
      return;
    }

    const key = (input.value || '').trim();
    if (!key) {
      if (typeof showAlert === 'function') {
        showAlert('Informe uma chave de licença.');
      } else {
        alert('Informe uma chave de licença.');
      }
      return;
    }

    if (key === LICENSE_CONFIG.getKey()) {
      // grava chave
      state.licenseKey = LICENSE_CONFIG.getKey();
      if (typeof saveState === 'function') {
        saveState();
      }

      if (typeof showAlert === 'function') {
        showAlert('Licença PRO ativada com sucesso!');
      } else {
        alert('Licença PRO ativada com sucesso!');
      }

      location.reload();
    } else {
      if (typeof showAlert === 'function') {
        showAlert('Chave inválida');
      } else {
        alert('Chave inválida');
      }
    }
  } catch (e) {
    console.error('[THE BOX] activateLicense error:', e);
    // fallback de segurança
    if (typeof alert === 'function') {
      alert('Erro ao ativar licença. Tente novamente.');
    }
  }
}

  function canAdd() {
    try {
      if (isPro()) return true;

      const DEMO_LIMIT = 10; // mantém seu limite de 10 lançamentos

      if (!Array.isArray(state.tx)) {
        state.tx = [];
      }

      if (state.tx.length >= DEMO_LIMIT) {
        if (typeof showConfirm === 'function' && typeof openLink === 'function') {
          showConfirm(
            'Limite DEMO atingido (10 transações). Adquira a versão PRO.',
            () => openLink()
          );
        } else if (typeof showAlert === 'function') {
          showAlert('Limite DEMO atingido (10 transações). Adquira a versão PRO.');
        }
        return false;
      }

      return true;
    } catch (e) {
      console.error('[THE BOX] canAdd error:', e);
      return false;
    }
  }

  function checkLicense() {
  try {
    const isProUser = isPro();

    const demoBadge    = document.getElementById('demoBadge');
    const licenseRow   = document.getElementById('licenseRow'); // container
    const licenseInput = document.getElementById('licenseKey'); // campo
    const buyBtn       = document.getElementById('buyBtn');
    const proMenu      = document.getElementById('proMenu');
    const backupBtn    = document.getElementById('backupBtn');
    const resetAllBtn  = document.getElementById('resetAll');

    if (isProUser) {
      if (demoBadge)    demoBadge.style.display = 'none';
      if (licenseRow)   licenseRow.style.display = 'none';
      if (buyBtn)       buyBtn.style.display = 'none';
      if (proMenu)      proMenu.style.display = 'flex';
      if (backupBtn)    backupBtn.style.display = 'inline-block';
      if (resetAllBtn)  resetAllBtn.disabled = false;
    } else {
      if (demoBadge)    demoBadge.style.display = 'inline-block';
      if (licenseRow)   licenseRow.style.display = 'inline-flex';
      if (buyBtn)       buyBtn.style.display = 'inline-block';
      if (proMenu)      proMenu.style.display = 'none';
      if (backupBtn)    backupBtn.style.display = 'inline-block';
      if (resetAllBtn)  resetAllBtn.disabled = true;
    }
  } catch (e) {
    console.error('[THE BOX] checkLicense error:', e);
  }
}
}

function __tb_simpleHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0;
  }
  return h;
}

function __tb_selfCheck() {
  try {
    if (typeof isPro !== 'function' ||
        typeof canAdd !== 'function' ||
        typeof activateLicense !== 'function') {
      return;
    }

    const snapshot =
      isPro.toString() +
      canAdd.toString() +
      activateLicense.toString();

    const currentHash = __tb_simpleHash(snapshot);

    // ATENÇÃO:
    // 1) Suba o app em ambiente de teste.
    // 2) Abra o console do navegador.
    // 3) Rode:
    //    __tb_simpleHash(isPro.toString() + canAdd.toString() + activateLicense.toString())
    // 4) Copie o número retornado e substitua NO VALOR ABAIXO.
    const EXPECTED_HASH = 867850912; // <<< SUBSTITUIR PELO VALOR REAL

    if (currentHash !== EXPECTED_HASH) {
      console.warn('[THE BOX] Código alterado / possivelmente copiado.');

      // Derruba licença PRO e salva
      if (typeof state !== 'undefined') {
        state.licenseKey = null;
        try { saveState && saveState(); } catch (e) {}
      }

      if (typeof showAlert === 'function') {
        showAlert('Instalação corrompida ou não autorizada.');
      }
    }
  } catch (e) {
    console.error('[THE BOX] selfCheck error:', e);
  }
}

setTimeout(__tb_selfCheck, 1500);
