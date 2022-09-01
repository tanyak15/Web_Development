const mark_weight=95;
const john_weight=85;
const mark_height=1.88;
const john_height=1.76;
// const mark_weight=78;
// const john_weight=92;
// const mark_height=1.69;
// const john_height=1.95;
const BMI_mark = mark_weight / (mark_height ** 2);
const BMI_john = john_weight / (john_height ** 2);
console.log(BMI_mark);
console.log(BMI_john);
const markHeightBMI = (BMI_mark>BMI_john);
if(BMI_mark>BMI_john){
    console.log("Mark's BMI is higher than John's BMI!");
    console.log(`Mark's BMI (${BMI_mark}) is higher than John's BMI (${BMI_john})`);
}
else{
    console.log("John's BMI is higher than Mark's BMI!");
    console.log(`John's BMI (${BMI_john}) is higher than Mark's BMI (${BMI_mark})`);
}