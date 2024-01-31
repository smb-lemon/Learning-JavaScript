/*
\n	New line
\r	In Windows text files a combination of two characters \r\n represents a new break, while on non-Windows OS it’s just \n. That’s for historical reasons, most Windows software also understands \n.
\', \", \`	Quotes
\\	Backslash
\t	Tab
\b, \f, \v	Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, not used nowadays (you can forget them right now).
*/
alert("my_name".length); //print length of the string
let str = "Hello";
alert(str[0]); //print H
alert(str.at(1)); //print e
alert(str.at(-2)); //for negative indexes,only.at(position) works

//strings are immutable
let str2 = "Hi";
str = "h" + str2[1]; //replace for the change
alert(str2);

alert("Dog".toUpperCase());
alert("Dog".toLowerCase());
alert("Dog"[0].toLowerCase()); //print d

//str.indexOf uasge
let str3 = "Widget with id";
alert(str3.indexOf("Widget")); //print 0,because it is in 0th index
alert(str3.indexOf("id")); // print 1,because Widget has id in it
alert(str3.indexOf("id", 3)); //13

//includes, startsWith, endsWith
alert("Hello".includes("Hi")); //false
alert("Hello".includes("He")); //true
alert("Hello".includes("H", 0)); //true

alert("Hello".startsWith("Hel")); //true
alert("Hello".endsWith("llo")); //true

/*
method	                                 selects…	                        negatives
slice(start, end)	    from start to end (not including end)	        allows negatives
substring(start, end)	between start and end (not including end)	negative values mean 0
substr(start, length)	from start get length characters	        allows negative start
*/
let str4 = "customize";
alert(str4.slice(0, 3)); // cus
alert(str4.slice(1)); //ustomize
alert(str4.slice(-5, -1)); // omiz

alert(str4.substring(0, 4)); //cust
alert(str4.substring(4, 0)); //cust

alert(str4.substr(0, 4)); //cust
alert(str4.substr(-3, -1)); //ize

alert("Z".codePointAt(0)); //90
alert("z".codePointAt(0).toString(16)); //7a Hexadecimal

alert(String.fromCodePoint(90)); //Z
alert(String.fromCodePoint(0x5a)); // Z
