async function load(){
	const checkChatInfoRes = await fetch('/count-new-message-chat-room');
	let checkChatInfo = await checkChatInfoRes.json();
	if(checkChatInfo > 0){
		document.querySelector('#chatAlertCnt').style.display = 'block';
	}else{
		document.querySelector('#chatAlertCnt').style.display = 'none';
	}
	if(document.querySelector('#chatAlertCnt') !== undefined){
		if(checkChatInfo<100){
			document.querySelector('#chatAlertCnt').innerHTML = checkChatInfo;
		}else{
			document.querySelector('#chatAlertCnt').innerHTML = '99';
		}
	}
}
window.addEventListener('load', async function(){
	await load();
})