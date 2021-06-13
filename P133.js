class Note {
    constructor (key, title, body){
        this._key = key;
        this._title = title;
        this._body = body;
    }
    get key() {
        return this._key;
    }
    get title(){
        return this._title
    }
    set title(newTitle){
        return this._title = newTitle;
    }
    get body(){
        return this._body;
    }
    set body(newBody){
        return this._body = newBody;
    }
}

//export class Note{}
const aNote = new Note("key", "The rain in spain", "Falls mainly on the plain")
const key = aNote.key;
var title = aNote.title;
aNote.title = "the rain in Spain, which made me want to cry with joy";

if (anotherNote instanceof Note) {
    console.log("It runs");
}

class LoveNote extends Note {
    constructor(key, title, body, heart) {
        super(key, title, body);
        this._heart = heart;
    }
    get heart() {
        return this._heart;
    }
    get heart(newHeart) {
        return this_heart = newHeart;
    }
}