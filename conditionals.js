/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
  let x,y;
  if(x>y){
      document.write(x);
  } else{document.write(y);

  }


 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  let a,b,c;
  if((a*b*c)>0){
      alert("sign is +")
  }else {
      alert("sign is -")
  }


 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
let a,b,c;
if(a>b && a>c){
   if(b>c){
       document.write(a+","+b+","+c)
   }else{
       document.write(a+","+c+","+b)
   }
}else if(b>a && b>c){
    if(a>c){
        document.write(b+","+a+","+c)
    }else {
        document.write(b+","+c+","+b)
    }
}else if(c>a && c>b){
    if(a>b){
        document.write(c+","+a+","+b)
    }else{
        document.write(c+","+b+","+a)
    }
}

  
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  let a,b,c,d,e;
  if(a>b && a>c && a>d && a>e){
      alert(a+"is the largest");
  }else if(b>a && b>c && b>d && b>e){
      alert(b+"is the largest");
  }else if(c>a && c>b && c>d && c>e){
      alert(c+"is the largest");
  }else if(d>a && d>b && d>c && d>e){
      alert(d+"is the largest");
  }else{
      alert(e+"is the largest");
  }

 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  let x,y;
  if(x>y){
      document.write("Hello world");
  }else{
      alert("Goodbye");
  }
 /******* End Your Code ********* */



