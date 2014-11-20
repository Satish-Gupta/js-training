// JavaScript Document
var dom = [{
		tag: 'div',
		content: '123',
		children: [
			{	tag: 'div',
				content: 'abc',
			},
			{	tag: 'form',
				content: '',
				children: [ 
					{ 	tag: 'input',
						content : 'EnterName',
					},
					{ 	tag: 'button',
						content : 'Submit',
					}]
					
			},
			{	tag: 'p',
				content: 'This is a paragraph',
			}
		]
}];	

var body = document.getElementById('body');
console.log(body);
jsonToHtml(dom[0],body);

function jsonToHtml(dom,parent) {
	var tag = dom.tag;
	var content = dom.content;
	var children = dom.children;
	console.log(dom);
	console.log( tag + " "+  content + " " + children);
var child =	document.createElement(tag);
child.innerHTML = content;
	parent.appendChild(child);
			dom = dom.children;
	if(dom != undefined) {
		for(var i = 0;i < dom.length;i++) {
	
			jsonToHtml(dom[i],child);
		}
	} 
/*	if(dom) {
		dom[0].appendChild(child);
	}*/
}