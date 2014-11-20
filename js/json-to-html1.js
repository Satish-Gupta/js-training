// To read the dom structure defined in json form and create 
// the equivalent html document

// json that holds the document structure
var dom = [
    {
        tag: 'div',
        content: '1',
        children: [
            {    tag: 'div',
                content: '1A',
            },
            {    tag: 'form',
                content: '1B',
                children: [
                    {    tag: 'input',
                        content: '1B I',
                    },
                    {    tag: 'button',
                        content: '1B II',
                    }
                ]

            },
            {    tag: 'p',
                content: '1C',
            }
        ]},
    {        tag: 'div',
        content: '2',
        children: [
            {    tag: 'div',
                content: '2A',
            },
            {    tag: 'form',
                content: '2B',
                children: [
                    {    tag: 'input',
                        content: '2B IEnter Something',
                    },
                    {    tag: 'button',
                        content: '2B IISubmit',
                    }
                ]

            },
            {    tag: 'p',
                content: '2C This is a paragraph',
            }
        ]
    }
];

var body = document.getElementsByTagName('body');


jsonToHtml(dom, body[0]);

// converts the dom structure defined in json form to html
function jsonToHtml(dom, parent) {
    for (var j = 0; j < dom.length; j++) {
        var tag = dom[j].tag;
        var content = dom[j].content;

        var child = document.createElement(tag);

        child.innerHTML = content;
        parent.appendChild(child);

        var newParent = child;
        var newDom = dom[j].children;

        if (newDom != undefined) {
            jsonToHtml(newDom, newParent);
        }
    }
}