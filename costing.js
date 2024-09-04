
function monthlySavings(arr, livingCost) 
{
  if (!Array.isArray(arr) || typeof livingCost !== 'number') 
  {
      console.log("invalid input");
  }
  else
  {
      var  totalSavings = 0;

      arr.forEach(payment => 
      {
          if (payment >= 3000) 
          {
              payment = payment - (payment * 0.2);
          }
          totalSavings = totalSavings + payment;
      });

      totalSavings = totalSavings - livingCost;

      if (totalSavings >= 0) 
      {
          console.log(totalSavings);
      } 
      else 
      {
          console.log("earn more");
      }
  }
  
}
monthlySavings([1000,2000,3000],5400);
monthlySavings([1000,2000,2500],5000);
monthlySavings([900,2700,3400],10000);
monthlySavings(100,[900,2700,3400]);