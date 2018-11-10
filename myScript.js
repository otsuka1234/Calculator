






function tenToSmall (num,base)//convert a base- 10 number to a smaller base
{
// this function is expecting a number (num) in base 10
    //it will convert the number (num) to value of 'base'
    num= Number (document.toBinary.num1.value);//number to convert
    base=Number (document.toBinary.num2.value);//destination base
    smallNum=""; //store remainders here

    while (num > 0)//continue looping while num isn't zero
    {
        smallNum = num%base + smallNum;// 3 %5 =2///% returns remainders
        //setup num for the next iteration of the loop
        num= Math.floor (num/base);//Floor rounds remainder down
        alert (smallNum);
        alert(num);
    }
    return smallNum;
}
function smallToTen
 (num,base)//convert a small- base number to base-10\
{
    num= Number (document.toBase10.num1.value);
    base=Number (document.toBase10.num2.value);

    tenNum = 0; //stores number to be outputed
    numLength = num.toString().length; //convert num to a STRING, then counts the number of characters in the string
    // in this case, length of '1101' is 4
    while (numLength > 0)
    {
        var denominator = Math.pow(10,(numLength - 1)); //gets denominator of fraction
        // for 1101, denominators will be 1000,100,10,1

        var currentDigit = Math.floor(num / denominator); //captures a 1 or 0 to multiply by 2^ numLength
        //above means 10101/100 =1... 101/100 =1.... 01/10=0... 1/1=1...
        tenNum = tenNum + currentDigit * Math.pow(base,numLength - 1);
        //currentDigit*2^3 ... currentDigit *2^2....currentDigit*2^1... etc
        num = num % denominator; //reduce num for the next iteration
        //1101 -> 101 -> 01-> 1
        numLength--; //decrease the numLength value by 1... otherwise will loop infintely
    }
   return tenNum;


}

function xtoY (num1,base,num2)
{
    alert (num1);
    alert (num2);
    alert (num3);
       var temp1=smallToTen(num1,num2);
       var temp2=tenToSmall(temp1,num3);
   return temp2;
}