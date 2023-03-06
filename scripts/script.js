// Всі можливі варіанти написання функцій//
function hello (){
}

let message = function(){
};

let sum = (a, b) => a + b;

// Виводить кількість переданих їй аргументів//
function countArguments() {
   console.log(arguments.length);
}
countArguments(1, 2, 3);

//Функція, яка приймає 2 числа і повертає: -1, якщо перше число менше, ніж друге; 1 - якщо перше число більше, ніж друге; 0 - якщо числа рівні.//

function numbers (x,y){
   if (x<y){
      return -1;
   } else if(x>y){
      return 1;
   }else{
      return 0;
   }
}

numbers(6, 7);

//Функція, яка обчислює факторіал переданого їй числа.//

function factorial(num) {
   let factorial = 1;
   for (let i = num; i >= 1; i--) {
     factorial *= i;
   }
   return factorial;
 }


console.log (factorial(5));

//Функція, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.//
function strings (x,y,z){
   return x.toString() + y.toString() + z.toString()
}

console.log(strings(1,4,9));

//ФункціЯ, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.//

function rectangle (a, b){
   if (b === undefined){
      return a**2;
   }else {
      return a*b;
   }
}

console.log (rectangle(3))