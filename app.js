let app = new Vue({
    el: '#app',

    data: {
        primes: [0],
        timeSinceLastPrime:0,
        maxTimeForPrime:0,
    },

    created() {
        let getNextPrimeArr=[];

        setInterval(() => {
            getNextPrimeArr=getNextPrime(this.primes[this.primes.length-1]);

            this.primes.push(getNextPrimeArr[0]);
            this.timeSinceLastPrime=getNextPrimeArr[1];
            
            if(this.maxTimeForPrime<this.timeSinceLastPrime) {
                this.maxTimeForPrime=this.timeSinceLastPrime;
            }
        }, 0);
    },

    template: `
    <div>
        <nav class="navbar fixed-top navbar-dark bg-dark">
            <div class="navbar-brand text-center" href="#">Prime Number Calculator</div>
        </nav>
    
        <div class="container">
            <div class="row mainRow">
                <div class="col-1 text-center" v-for="prime in primes">{{prime}}</div>
            </div>
        </div>

        <footer id="fixed-footer" class="fixed-bottom py-4 bg-dark text-white-50">
            <div class="container text-center">
                <div class="row">
                    <div class="col-6 text-right">
                        <small>time since last prime:</small>
                    </div>
                    <div class="col-6 text-left">
                        <small>{{timeSinceLastPrime}} ms</small>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 text-right">
                        <small>longest calculation time:</small>
                    </div>
                    <div class="col-6 text-left">
                        <small>{{maxTimeForPrime}} ms</small>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    `,
});


function getNextPrime(lastPrime) {
    const start = new Date().getTime();

    let i=lastPrime;
    let primeCalc = undefined;

    while (primeCalc==undefined) {
        i++;
        primeCalc = isPrimeNumberBruteForce(checkIfOdd(i));
    }

    window.scroll({
        top: document.documentElement.scrollHeight,
    });

    const end= new Date().getTime();

    return [primeCalc,(end-start)];
}





//checks if Number is odd and passes it on
function checkIfOdd(inputNumber) {
    if(inputNumber%2==0) {  //is even
        if(inputNumber==0 || inputNumber==2) {
            return digitSumThreeNine(inputNumber);
        }
    }
    else {                  //is odd
        return digitSumThreeNine(inputNumber);
    }
}

//checks if inputNumber digitSum is not divisible by 3 or Nine
function digitSumThreeNine(inputNumber) { 
    if(inputNumber==0 ||inputNumber==3) {
        return checkIfLastDigitIsFive(inputNumber);
    }
    else {
        const digitArray = inputNumber.toString().split('');
        let digitSum = 0;


        digitArray.forEach(digit => {
            digitSum+= (+digit);
        });

        if(digitSum%3 != 0 && digitSum%9!=0) {
            return checkIfLastDigitIsFive(inputNumber);
        }
    }
}

//checks is last digit is five
function checkIfLastDigitIsFive(inputNumber) {
    if(inputNumber == 0 ||inputNumber == 5) {
        return lastDigitsDividable(inputNumber);
    }
    else {
        const lastDigit = findLastDigits(inputNumber, 1);
        
        if(lastDigit != 5 && lastDigit != 0) {
            return lastDigitsDividable(inputNumber);
        }
    }
}

//checks if the last two digits are dividable by 4 and last three digits dividable by 8 
function lastDigitsDividable(inputNumber) {
    if(inputNumber>9) {
        // if dividable by four no prime number
        if(findLastDigits(inputNumber, 2)%4 != 0) {
            if(inputNumber>99) {
                if(findLastDigits(inputNumber, 3)%8!=0) {
                    return inputNumber; //possible prime
                }
            }
            else {
                return inputNumber; // possible prime
            }
        }
    }
    else {
        return inputNumber; //possible prime
    }



}




//checks if number is a prime by trying it to divide it by each number below
function isPrimeNumberBruteForce(inputNumber) {
    let isDivisable=false;


    for(let i=inputNumber-1; i>1; i--) {
        if(inputNumber%i==0) {
            isDivisable=true;
        }          
    }

    if(isDivisable==false) {
        return inputNumber;
    }
}





function findLastDigits(inputNumber, digits) {   
    let multiplicator='1';
    
    for(let i=0; i<digits; i++) {
        multiplicator+='0';
    }

    return Math.floor(((inputNumber/+multiplicator)%1)*+multiplicator);
}