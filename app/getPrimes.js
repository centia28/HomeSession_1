function getPrimes(n) {

    //Function to verify if the number is a prime number
    function isPrime(num) {
        if (num === null || num === undefined || typeof(num) != 'number') {
            return "no prime number";
        } else {
            if ( num < 0 || num === 0 || num === 1) {
                return false;
            }
            for ( var i = 2; i < num; i++ ) {
                if ( num % i === 0 ) {
                    return false;
                }
            }
            return true;
        }
    }

    var arr = [];
    if (n >= 2){
        arr.push(2);
        for ( var i = 3; i <= n; i+=2 ) {
            if ( isPrime(i) ) {
                arr.push(i);
            }
        }
        return arr;
    } else {
        return isPrime(n);
    }
}