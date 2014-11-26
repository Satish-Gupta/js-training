/**
 * Created by sg_2 on 26-11-2014.
 */
var rootchildren = document.body.children;
var jsonDom = [];

htmlToJson(rootchildren, jsonDom);
console.log(JSON.stringify(jsonDom));

function htmlToJson(currNode, currDom) {
    for (var i = 0; i < currNode.length; i++) {
        var obj = {}
        var currElement = currNode[i];

        var tag = currElement.tagName;
        if (tag) {
            obj.tag = tag;
        }

        var className = currElement.className;  //bodyChildren[i].classList
        if (className) {
            obj.class = className
        }

//        var content = currElement.text;
        var content = currElement.innerText;

        if (content) {
            obj.content = content;
        }

        for (var j = 0; j < currElement.attributes.length; j++) {
            var currAttribute = currElement.attributes[j];
            obj[currAttribute.name] = currAttribute.value;
        }

        if (currElement.hasChildNodes()) {

            obj.children = [];
            currDom.push(obj);
            // recurrse with new node and new array to fill with the dom structure the corresponding node
            htmlToJson(currElement.children, obj.children);
        }
        else {
            currDom.push(obj);
        }

    }
}
