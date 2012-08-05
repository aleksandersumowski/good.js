// enrich with method
Function.prototype.method = function (name, func) {
    if(!this.prototype[name]){
        this.prototype[name] = func;
        return this;
    }
};
//create object with prototype
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return F();
    };
};



//closure

var myObject = function () {
    var value = 0;

    return {
        inc : function(inc){
            value += typeof(inc) === 'number' ? inc : 1;
        },
        getValue : function(){
            return value;
        }
    };
}();

//curry
Function.method('curry', function () {
    var slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;
    return function () {
        return that.apply(null, args.concat(splice.apply(arguments)));
    };
});

//module
// function enclosing state returning another function or object making use of that
// private state

String.method('costam', function (){
    var local_state = '!', 
        that = this;
    
    return function () {
        return that + local_state;
    }
}

var maker = function (){
    var local_state = '!',
        that = this;
    return {
        get_local_state : function () { return local_state; },
        exclamate : function (input) { return input + local_state; }
    };
}();


//function application
// method invocation
// this points to object

var myObject = {
    value : 0,
    test : return this.value
}
// function invocation
// not object property
// this bound to global object from within inner function
//apply
//this in inner function points to global scope, that's why 'that' is used
slice.apply(value_to_be_treated_as_this, arguments)


//iterate properties
for (name in object){
    if(object.hasOwnProperty(name)){
    }
}


// new and this
// new changes the meaning of this to newly created object when used in
// hopefully constructor, otherwise this has global 


// always use single global variable for your app


var contructor = function (spec, my){
    var that, other private instance variables;
    my = my | {};

    add shared variables and functions to my

    that = {} | that = Object.create(prototype)

    methods accesing enclosed variables

    return that;
};
