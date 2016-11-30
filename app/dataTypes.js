//For strings, return its length.
//For null or undefined return string 'no value'
//For booleans return the boolean
//For numbers return a string showing how it compares to hundred e.g. For 67 return 'less than 100' for 4034 return 'more than 100' or equal to 100 as the case may be
//#For arrays return the 3rd index, or undefined if it doesn't exist.
//#For functions call the function and pass in true as an paramument and return it.

function dataTypes(param){
	switch (typeof(param)){
    	case "string":
    		return param.length;
    	case "undefined":
      		return "no value";
		case "boolean":
			return param;
		case "number":
			if (param == 100){
		    	return 'equal to 100';
		  	} else if (param < 100){
		    	return 'less than 100';
		  	} else {
		    	return "more than 100";
		  	}
			break;
		case "object":
			if (param == undefined){
		    	return "no value";
		  	} else if (param.length < 3){
		    	return 'undefined';
		  	} else {
		    	return param[2];
			}
			break;
		case "function":
		  	return param(true);
		default:
		return "no value";
	}
}
module.exports = dataTypes;