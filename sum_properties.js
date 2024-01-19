//code to sum all salaries and store in the variable sum. Should be 390 
let salaries = {
    John: 100,
    Pete: 160,
    Ann: 130
};
let sum = 0;
for(let key in salaries){
   // sum = John + Pete + Ann;
   sum += salaries[key];
   
}
 alert(sum);