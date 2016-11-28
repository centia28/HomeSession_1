//For strings, return its length.
//For null or undefined return string 'no value'
//For booleans return the boolean
//For numbers return a string showing how it compares to hundred e.g. For 67 return 'less than 100' for 4034 return 'more than 100' or equal to 100 as the case may be
//#For arrays return the 3rd index, or undefined if it doesn't exist.
//#For functions call the function and pass in true as an argument and return it.

function dataTypes(arg){
	switch (typeof(arg)){
    	case "string":
    		return arg.length;
    	case "undefined":
      		return "no value";
		case "boolean":
			return arg;
		case "number":
			if (arg == 100){
		    	return 'equal to 100';
		  	} else if (arg < 100){
		    	return 'less than 100';
		  	} else {
		    	return "more than 100";
		  	}
			break;
		case "object":
			if (arg == undefined){
		    	return "no value";
		  	} else if (arg.length < 3){
		    	return 'undefined';
		  	} else {
		    	return arg[2];
			}
			break;
		case "function":
		  	return arg(true);
		default:
		return "no value";
	}
}