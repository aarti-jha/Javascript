/*Primitive dataType uses stack memory (call by value)
And it provides copy of that element.
So when we change something (through assigned variable) 
it gets changed in copy of element  not in original.


 Non primitive dataType uses HEAP memory.(call by refernce) 
And it gives reference value to assigned elements. 
So when assigned variable makes changes it changes 
the both values(original and assigned one.) */

//stack memory example 
  let firstnumber = 45;
  let secondnumber = firstnumber;
  secondnumber=89
  console.log(firstnumber);//45
  console.log(secondnumber);//89
  

  //heap memory example 
  let obj ={
    Name : "sarita",
    email : "sarita@gmail.com", 
  }

  let obj2 =obj;

  obj2.Name="Hema"

  console.log(obj.Name);//Hema
  console.log(obj2.Name);//Hema
