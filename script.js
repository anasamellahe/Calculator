let num1 = 0;
let num2 = 0;
let op = null;
let result = null;
let bt =  document.querySelectorAll(".button");
let display = document.querySelector("#display")
for (let i = 0; i < bt.length; i++)
{
    bt[i].addEventListener("click", (e) =>
    {
        if (e.target.textContent == "=")
            getResult();
        else if (e.target.textContent == "AC")
            clear();
        else if (e.target.getAttribute("data-type") == "operator")
            op = e.target.textContent;
        else if (num1 != 0 && op != null)
        {
            if (num2 == 0 && e.target.textContent == "." && String(num2).includes(".") == false)
                num2 +=  e.target.textContent;
            else
                num2 = num2 == "0" ? e.target.textContent : num2 + (e.target.textContent == '.' ?  (num2.includes(".") ? '' : e.target.textContent): e.target.textContent);
            display.textContent = num2;
        }
        else
        {
            if (num1 == result && result !=  null)
            {
                result = null;
                num1 = 0;
            }
            if (num1 == 0 && e.target.textContent == "." && String(num1).includes(".") == false)
                num1 +=  e.target.textContent;
            else
                num1 = num1 == "0"? e.target.textContent : num1 + (e.target.textContent == '.' ?  (num1.includes(".") ? '' : e.target.textContent): e.target.textContent);
            display.textContent = num1;
        }
    });
}
const clear = function()
{
    num1 = 0;
    num2 = 0;
    op = null;
    result = null;
    display.textContent = 0;
}
const getResult = function()
{
    if (op == '+' || op == null)
        result =  add(num1, num2);
    if (op == '-')
        result = subtract(num1, num2);
    if (op == '*')
        result = multiply(num1, num2);
    if (op == '/')
        result = divide(num1, num2);
    num1 = isNaN(result) ? 0 : result;
    num2 = 0;
    op = null;
    display.textContent = result;
}
const add = function(num1, num2)
{

    return parseFloat(num1) + parseFloat(num2);
}
const subtract = function(num1, num2)
{
    return parseFloat(num1) - parseFloat(num2);
}
const multiply = function(num1, num2)
{
    return parseFloat(num1) * parseFloat(num2);
}
const divide = function(num1, num2)
{
    return parseFloat(num1) / parseFloat(num2);
}

