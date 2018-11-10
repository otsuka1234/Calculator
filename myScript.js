/*
Gameplan

HTML:
(*) Calculator Window for operations to be shown along with results
() Number buttons for the calculator
() Operator Buttons (+,->* etc)
()' ='Button
() Resets or clear button
() Optional: Backspace Button

javaScript:
() Function tha captures what typed in  the calcWindow
() Separate functions that add numbers,subtract numbers, etc     LLLOOOOOPPPPPSSS
 */


function calculate (expression) //ex. expression is 2 +5 ot 9*6 or 10/5
{
    var firstNum = Number(expression.substr(0, 1));//first is where do you start
// second is how many characters is captured
    var operator = expression.substr(1, 1);
    var secondNum = Number(expression.substr(2, 1));

    if (operator.substr(2,1)=='+')
    {
        firstNum
    }



    if (operator === '+')
    {
        return addNums(firstNum, secondNum);
    }
    else if (operator === '-')
    {
        return subtractNums(firstNum, secondNum);
    }
    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum);
    }
    else if (operator === '*')
    {
        return multiplyNums(firstNum, secondNum);
    }
    else if (operator === '^')
    {
        return powNums(firstNum, secondNum);
    }

        }

function addNums(p1,p2)//addNums expects 2 parameters...p1 and p2
{

    return p1+p2;
}
function subtractNums(p1,p2)
{
    return p1-p2;
}
function divideNums(p1,p2)
{
    return p1/p2;
}
function multiplyNums(p1,p2)
{
    return p1*p2;
}
function powNums(p1,p2)
{
    var Power = Math.pow(p1,p2);
    return Power;
}
function squareroot (p1)
{
    var Square= Math.sqrt(p1);
    return Square;
}

function Clear (expression)
{
   expression="";
    return expression;
}
function backSpace ()
{
   return document.calc.calcWindow.value.slice (0,-1);

}



function equals ()
{
    var exp=document.calc.calcWindow.value;
    if (exp)
    {
        document.calc.calcWindow.value=eval(exp)
    }


}




