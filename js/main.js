function Chat()
{
	this.nombre = '';
	this.people = [];
	this.messages = [];
	this.chatAvatar = '';
}
function Person(_name, _avatar,_color)
{
	this.name = _name;
	this.avatar = _avatar;
	this.color=_color;
}
function Message(_message, _sender)
{
	this.message = _message;
	this.sender = _sender;
	this.received = false;
}
function Whatsapp()
{
	this.chats = [];
	this.selectedChat = null;
	this.searchChat		= function(_keyword){};
	};
	function searchChatFromId(evt)
	{
		arrayDivs= evt.target.parentNode.parentNode.childNodes;
		avatarDiv= arrayDivs[0];
		timeDiv= arrayDivs[1];

		arrayDivsDatos=avatarDiv.childNodes;
		var avatarImg= arrayDivsDatos[0];
		var h3= arrayDivsDatos[1];
		var p= arrayDivsDatos[2];
		timeDiv= arrayDivs[1];

		var cabeceraChatList = document.getElementById('cabecera');
		//console.log(cabeceraChatList);
		var htmlCabeceraChatList= '<img src="'+avatarImg.src+'" alt="">'+'<h4 class="w-contact-name">'+h3.textContent+'</h4>';
		cabeceraChatList.innerHTML= htmlCabeceraChatList;		
		var chatList = document.getElementById('chat');
		chatList.innerHTML='';
		console.log(p.textContent);
		var divChat = document.getElementById('chat');
		var htmlMessageIn = '<div class="w-message w-message-in"><div class="w-message-text"><h5 style="color:black">'+h3.textContent+'<h5><p>' + p.textContent + '</p><div class="time">'+timeDiv.textContent+'</div></div></div>';
		divChat.innerHTML += htmlMessageIn;
	};
	
	this.getChatFromId	= function(_chatId){
		var ulChatList = document.getElementById('chat-list');
		var arrayUlChatList= ulChatList.childNodes;
		for(var i=0; i<arrayUlChatList.length;i++)
		{
			arrayUlChatList[i].addEventListener('click',searchChatFromId);
		}
	};
	this.drawChatList	= function(_htmlTarget){
		var ulChatList = document.getElementById('chat-list');
		for (var i in this.chats) {
			//console.log(this.chats[i].messages);
			var htmlChatList = '<li><div class="avatar">' +
					'<img src="'+ this.chats[i].chatAvatar+'" alt="" class="wh-44">'+
					'<h3 class="w-contact-name">'+ this.chats[i].nombre +'</h3>' +
					'<p class="w-last-message">'+ this.chats[i].messages[this.chats[i].messages.length-1].message + '</p>' +
				'</div>' +
				'<div class="time">03/01/2016</div>' +
			'</li>';
			ulChatList.innerHTML += htmlChatList;
		}
	};
	this.drawMessageList= function(){
		var divChat = document.getElementById('chat');
		divChat.innerHTML = '';

		for (var i in this.selectedChat.messages) {
			if (object.hasOwnProperty(i)) {
				//console.log(this.selectedChat.messages[i]);
				this.sendMessage(this.selectedChat.messages[i], false);
			}
		}
	};
	this.getLastMessage = function(){
		return this.selectedChat.messages[this.selectedChat.messages.length-1];
	};
	this.sendMessage	= function(_message, _in){
		
		var divChat = document.getElementById('chat');
		var time= document.getElementById('time');
		//var time= document.createElement('time');
		var fecha= new Date();
		var hora= fecha.getHours();
		var minuto= fecha.getMinutes();
		if(minuto<10){minuto='0'+minuto}
		var horaActual= hora+":"+minuto;
	   	var htmlMessageIn = '<div class="w-message w-message-in"><div class="w-message-text"><h5 style="color:'+_in.color+'">'+_in.name+'<h5><p>' + _message.message + '</p><div class="time">'+horaActual+'</div></div></div>';
		var htmlMessageOut = '<div class="w-message w-message-out"><div class="w-message-text"><p>' + _message.message + '</p><div class="time">'+horaActual+'</div></div></div>';
		this.selectedChat.messages.push(_message);
		//console.log(_in.color);
		//console.log(_message.sender);
		if(_in.name=='Gerson')
		{
			divChat.innerHTML += htmlMessageOut;
		}else{
			divChat.innerHTML += htmlMessageIn;
		}
		divChat.scrollTop = divChat.scrollHeight;
	};
}
var wapp = new Whatsapp();

var me = new Person('me');
var x = new Person('x');
var y = new Person('y');
var z = new Person('z');

var laboratoria= new Person('Laboratoria');
x.color='red';
y.color='blue';
z.color='yellow';

var chat = new Chat();
chat.nombre = "Chat";
chat.people.push(x);
chat.chatAvatar = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/girl-512.png';
wapp.chats.push(chat);

var chat2 = new Chat();
chat2.nombre = "y";
chat2.people.push(y);
chat2.chatAvatar = 'https://s-media-cache-ak0.pinimg.com/236x/26/44/4f/26444f66c8cfe2798e892a669e4df8cf.jpg';
wapp.chats.push(chat2);

var chat3 = new Chat();
chat3.nombre = "z";
chat3.people.push(z);
chat3.chatAvatar = 'http://bgsmath.cat/wp-content/uploads/2015/07/avatar.png';
wapp.chats.push(chat3);

wapp.selectedChat = chat;
wapp.sendMessage(new Message('Hola', x),x);
wapp.sendMessage(new Message('Que tal?', me),me);
wapp.sendMessage(new Message('Yo muy bien, tu que tal?', x),x);


wapp.selectedChat = chat2;
wapp.sendMessage(new Message('Hola', me),me);
wapp.sendMessage(new Message('que tal tu día?', y),y);

wapp.selectedChat = chat3;
wapp.sendMessage(new Message('holi', me),me);
wapp.sendMessage(new Message('holi amia, que  tal?',z),z);

wapp.drawChatList();
wapp.getChatFromId();
wapp.icono();
wapp.changeImageEvent();
//console.log(wapp.getLastMessage().sender);

    var search = document.getElementById("search"),
    food = document.getElementsByTagName("h3"),
    forEach = Array.prototype.forEach;
	search.addEventListener("keyup", function(e){
    var choice = this.value;
    forEach.call(food, function(f){
        if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
            f.parentNode.parentNode.style.display = "none";        
        else
            f.parentNode.parentNode.style.display = "block";        
    });
},false);

window.onload = init;

var inputMessage;
var divChat;
var chatPanel;
var createdIcons = false;//
var showingIcons = false;//
var createdImage = false;//
var showingImage = false;//

function init()
{
	inputMessage = document.getElementById('mensajes');
	divChat = document.getElementById('chat');
	//chatPanel = document.querySelector('.w-chat-panel');
	inputMessage.addEventListener('keyup', onInputKeyUp);	
}
function onInputKeyUp(evt)
{
	if(evt.keyCode == 13)
	{
		wapp.sendMessage(new Message(evt.target.value, me),me);
		evt.target.value = '';
	}
}

