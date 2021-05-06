class Helper {
    constructor() { }

    // ***** Functions to add Event Listeners *****

    // Adds keyUp eventlistener to tag.  
    static keyUp(tag, action) {
        document.getElementById(tag).addEventListener("keyup", action);
    };

    // Adds onChange eventlistener to tag.
    static onChange(tag, action) {
        document.getElementById(tag).addEventListener("onChange", action);
    };

    // Adds click eventlistener to tag.
    static onClick(tag, action) {
        //alert('onClick\ntag:' + tag + '\naction: ' + action);
        document.getElementById(tag).addEventListener("click", action);
    };

    // Adds click eventlistener to all elements with class class_name.
    static onClassClick(class_name, action) {
        var classes = document.getElementsByClassName(class_name);
        for (var i = 0; i < classes.length; ++i) {
            classes[i].addEventListener("click", action);
        }
    };
    // ***** END *****

    // ***** Functions to manipulate HTML code and display *****

    // Returns the display status of element with id tag.
    static getDisplay(tag) {
        return document.getElementById(tag).style.display;
    };

    // Sets the display status of element with id tag to either "block" or "none", bool bolean.
    static setDisplay(tag, bool) {
        if (bool) {
            document.getElementById(tag).style.display = "block";
        } else {
            document.getElementById(tag).style.display = "none";
        }
    };

    // Sets the focus to element with id tag.
    static focus(tag) {
        document.getElementById(tag).focus();
    };

    // Returns the innerHTML of element with id tag.
    static getHtml(tag) {
        return document.getElementById(tag).innerHTML;
    };

    // Sets the innerHTML of element with id tag.
    static setHtml(tag, val) {
        document.getElementById(tag).innerHTML = val;
    };

    // ***** END *****

    // ***** Functions to manipulate values in dropdown and other lists *****

    // Returns the value of element with value properties and id = tag.
    static getValue(tag) {
        return document.getElementById(tag).value;
    };

    // Sets the value of element with value properties and id = tag.
    static setValue(tag, val) {
        document.getElementById(tag).value = val;
    };

    // ***** END *****
}