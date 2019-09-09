// const date = new Date();
// const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',];

// const formattedDate = {
//     hours: date.getHours(),
//     hoursDec: '',
//     minutes: date.getMinutes(),
//     seconds: date.getSeconds()
// }

// if(formattedDate.hours>12) {
//     formattedDate.hours -= 12;
//     formattedDate.hoursDec = 'PM';
// }
// else {
//     formattedDate.hoursDec = 'AM';
// }



// const output = 
// `
// Today is: ${days[date.getDay()]}.
// Current time is: ${formattedDate.hours} ${formattedDate.hoursDec} : ${formattedDate.minutes} : ${formattedDate.seconds}
// `;

// console.log(output);




// const t = {
//     a:5,
//     b:6,
//     c:7
// };

// const triangleArea = (Math.sqrt((t.a+t.b+t.c)*(t.a+t.b-t.c)*(t.b+t.c-t.a)*(t.c+t.a-t.b)))/4;

// console.log(triangleArea);


// let string='w3resource';

// setInterval(() => {
//     string = rotateString(string);

//     console.log(string);
// }, 500);


// function rotateString(string) {
//     const beginOfWord = string.substring(0, string.length-1);
//     const lastChar = string.substring(string.length-1, string.length);

//     return lastChar+beginOfWord;
// }



// let year = (new Date()).getFullYear();
// let today = (new Date());

// if(today.getMonth()==11 && today.getDate()>=24) {
//     year++;
// }


// today = today.getTime();

// const nextChristmas = (new Date(year, 11, 24)).getTime()+60*60*1000;
// const timeDiff = (nextChristmas-today)/1000/60/60/24;

// // console.log(Math.floor(timeDiff)+1);



// // const numberOne = 1;
// // const numberTwo = 37;

// // console.log(checkForFifty(numberOne, numberTwo));


// // function checkForFifty(no1, no2) {
// //     if (no1==50)
// //         return true;

// //     else if(no2==50)
// //         return true;

// //     else if ((no1+no2)==50)
// //         return true;

// //     else
// //         return false;
// // }



// // const string = 'PyWorld';

// // console.log(addPy(string));

// // function addPy(string) {
// //     if(string.substring(0,2)=='Py')
// //         return string;

// //     else 
// //         return 'Py'+string;
// // }


// // const sampleNumbers=[3, -3, 2];

// // console.log(displayProductSign(sampleNumbers));

// // function displayProductSign(array) {
// //     let sum = 0;
    
// //     array.forEach(element => {
// //         sum+=element;
// //     });

// //     if(sum<0)
// //         return '-';

// //     else 
// //         return '+';
// // }


// // const sampleNumbers=[3, -3, 2];

// // console.log(orderArray(sampleNumbers));

// // function orderArray(arr) {
// //     return arr.sort().reverse();
// // }


// // console.log(iteratedNumbers());

// // function iteratedNumbers() {
// //     arr = [];
    
// //     for(let i=0; i<16; i++) {
// //         let arrEntry=i;

// //         if(i%2==0)
// //             arrEntry+=' is even';

// //         else 
// //             arrEntry+=' is odd'

// //         arr.push(arrEntry);
// //     }
    
// //     return arr;
// // }


// // const students = {
// //     David: 80,
// //     Vinoth: 77,
// //     Divya: 88,
// //     Ishitha: 95,
// //     Thomas: 68,
// // };

// // const gradeKey = {
// //     F: 60,
// //     D: 70,
// //     C: 80,
// //     B: 90,
// //     A: 100
// // }

// // Object.keys(students).forEach(student => {
// //     let grade = 'F';

// //     if(students[student]>60)
// //         grade='D';
           
// //     if(students[student]>70)
// //         grade='C';
          
// //     if(students[student]>80)
// //         grade='B';
          
// //     if(students[student]>90)
// //         grade='A'; 
        
// //         students[student]=grade;
// // });

// // console.log(students);


// // let student = {
// //     name : "David Rayy",
// //     sclass : "VI",
// //     rollno : 12 
// // };
// // console.log(student);

// // delete student['rollno'];


// // console.log(student);

// // setInterval(() => {
// //     console.log(getActualTime());
    
// // }, 1000);

// // function getActualTime() {
// //     const time = [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()];

// //     return appendZero(time[0])+':'+appendZero(time[1])+':'+appendZero(time[2]);
// // }

// // function appendZero(number) {
// //     if(number.toString().length==1)
// //         return '0'+number;
    
// //     else
// //         return ''+number;
// // }


// // const year = 2019;
// // const year2= 2020; 









// // alert(isLeapYear(year));
// // // console.log(isLeapYear(year2));


// // function isLeapYear(inputYear) {
// //     if(inputYear%4==0)
// //         return true;

// //     else
// //         return false;
// // }





let app = new Vue({
    el: '#app',

    data: {
        primes: [0],
    },

    computed: {
        vueGetNextPrime: function() {
            for(let i=0; i<1000; i++) {
                this.primes.push(getNextPrime(this.primes[this.primes.length-1]));
            }
        }
    },

    template: `
    <div class="container" v-on:click="vueGetNextPrime">
        <div class="row">
            <div class="col-1 text-center" v-for="prime in primes">{{prime}}</div>
        </div>
    </div>
    `,
});


function getNextPrime(lastPrime) {
    let i=lastPrime;
    let primeCalc = undefined;

    while (primeCalc==undefined) {
        i++;
        primeCalc = isPrimeNumberBruteForce(checkIfOdd(i));
    }
    
    return primeCalc;
}








// const start = new Date().getTime();

// let arrWithPrimes=[];
// let arrWithPrimesBrute=[];
// let arrWithBruteForceVictims=[];



// for(let i=0; i<10000; i++) {
//     arrWithPrimes.push(checkIfOdd(i));
// }



// arrWithPrimes = arrWithPrimes.filter(value => value != undefined);


// arrWithPrimes.forEach(el => {
//     let bar = isPrimeNumberBruteForce(el);
//     if(bar!=undefined) arrWithPrimesBrute.push(bar);
// });



// //find victims of the brute force algo
// arrWithBruteForceVictims = arrWithPrimes.filter(x => !arrWithPrimesBrute.includes(x));


// console.log('Elapsed Time: '+(new Date().getTime()-start)/1000+' sec');

// console.log('All the Primes Found:');
// console.log(arrWithPrimesBrute);

// console.log('Victims of the Brute Bebi Force:');
// console.log(arrWithBruteForceVictims);





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
        return lastThreeDigitsDividableByEight(inputNumber);
    }
    else {
        const lastDigit = inputNumber.toString().substr(-1);
        
        if(+lastDigit != 5 && +lastDigit != 0) {
            return lastThreeDigitsDividableByEight(inputNumber);
        }
    }
}


function lastThreeDigitsDividableByEight(inputNumber) {
    const inputNumberString=inputNumber.toString();
    const inputNumberStringLength=inputNumber.toString().length;
    
    //at least three digits
    if(inputNumberStringLength>=3) {
        //check if last three digits dividable by eight 
        const lastThreeDigits=inputNumberString.substring(inputNumberStringLength-3, inputNumberStringLength);

        if(lastThreeDigits%8!=0) {
            return lastDigitsDividable(inputNumber)//possible Prime
        }
    }
    else {
        return lastDigitsDividable(inputNumber)
    }
}


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