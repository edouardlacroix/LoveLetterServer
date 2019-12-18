class Utils{
public static shuffleArray(array:Array<any>){

	for(var j, x, i = array.length; i; j = Math.random() * i, x = array[--i], array[i] = array[j], array[j] = x);
	return array;
}
}

export default Utils;