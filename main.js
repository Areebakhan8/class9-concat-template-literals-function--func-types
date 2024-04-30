import chalk from "chalk";
console.log(chalk.bgMagenta.bold("\t*****CONCATINATION*****\t"));
console.log(chalk.green.underline.italic("Defination"));
console.log(chalk.grey.bold.italic("Cocatination method adds two or more strings and return a new single string.Concatination is a version of (ECMAscript5)."));
console.log(chalk.grey.bold.italic("eg:consolelog(1+123+345)=1123345"));
console.log(chalk.cyan.underline.italic("Example:"));
let firstName = "Areeba";
let lastName = "Khan";
console.log(chalk.yellow.bold(firstName + lastName));
console.log(chalk.bgMagenta.bold("\t*****TEMPLATE LITERALS*****\t"));
console.log(chalk.green.underline.italic("Defination"));
console.log(chalk.grey.bold.italic("Template literals are a new feature that was introduced in (ECMAscript6).It provide an easy way to create multiline strings and perform string interpolation."));
console.log(chalk.grey.bold.italic("eg:consolelog(`${112} ${3345}`)=1123345"));
console.log(chalk.cyan.underline.italic("Example:"));
let myName = "Areeba";
let fatherName = "Jawaid";
console.log(chalk.yellow.bold(`${myName} ${fatherName}`));
console.log(chalk.bgMagenta.bold("\t*****FUNCTIONS*****\t"));
console.log(chalk.green.underline.italic("Defination"));
console.log(chalk.grey.bold.italic("Functions are the fundamental buildig block of any applications in Javascript it makes the code readable, maintainable and reuseable."));
console.log(chalk.grey.bold.italic("* we can call function several times without writing the same block of code"));
console.log(chalk.grey.bold.italic("* Functions makes program compact,So we dont need to write many lines of code each time to perform a common task"));
console.log(chalk.cyan.underline.italic("Types of Functions"));
console.log(chalk.grey.bold.italic("There are two types of function i read today"));
console.log(chalk.grey.bold.italic("1.Static functions"));
console.log(chalk.grey.bold.italic("2.Dynamic functions"));
console.log(chalk.cyan.underline.italic("**Static function**"));
console.log(chalk.green.underline.italic("Defination"));
console.log(chalk.grey.bold.italic("In a static fuction we simply console by giving the function syntax.syntax of function is like this:"));
console.log(chalk.cyan.underline.italic("Example:"));
//function syntax:
function name() {
    console.log(chalk.yellow.bold("Areeba Khan"));
} //{}==>calls the block scope inside the function and does not invoke the function inside the block scope
name();
console.log(chalk.cyan.underline.italic("**Dynamic function**"));
console.log(chalk.green.underline.italic("Defination"));
console.log(chalk.grey.bold.italic("In a dynamic function we give parameter and arguments"));
console.log(chalk.grey.bold.italic("* Any expression we write in the parentheses in the function is called parameter "));
console.log(chalk.grey.bold.italic("* When we invoke the function what we write in these parenthesis are called arguments "));
console.log(chalk.grey.bold.italic("we also have a default parameter now we can give value alon wih names like this(name:string=areeba)this is default parameter and if we put another value in arguments it will replace the default one with arguments"));
console.log(chalk.cyan.underline.italic("Example:"));
//what this parenthesis() has is a parameter
function myStudents(name, fees, marks) {
    console.log(chalk.yellow.bold(`Students name is ${name} fees ${fees} And his marks is ${marks}`));
}
//what this prrenthesis () has is a arguments
myStudents("Areeba", 2000, 98);
myStudents("khadija", 1500, 99);
myStudents("Aqsa", 2000, 89);
console.log(chalk.cyan.underline.italic("**In Function Return Value**"));
console.log(chalk.green.underline.italic("Defination"));
console.log(chalk.grey.bold.italic("In return value where ever we call the function. it will call outside the function or inside the function it will send the value.if we console the return value ,it will show undefine "));
// if any value is decleared or not initialize it will show undefine
console.log(chalk.cyan.underline.italic("Example:"));
function twoValue(num1, num2) {
    let add = num1 + num2;
    console.log("this is total marks ==>", 10 + 30);
    return add;
}
let total = twoValue(67, 90);
console.log(total);
