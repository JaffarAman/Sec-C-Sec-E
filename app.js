// alert("HELLO CLASS...")


// var arr = ["Jaffar" , "Raza" , "ahmed" ]

// console.log( "Arr=>" ,arr)
// arr.splice(1 , 2 , 20 , 50 , true , undefined , null)



// console.log( "update" ,arr)



    /////FOR LOOP////


// document.write(1 + "<br>")    
// document.write(2 + "<br>")    
// document.write(3 + "<br>")    
// document.write(4 + "<br>")    
// document.write(5 + "<br>")    
// document.write(6 + "<br>")    
// document.write(7 + "<br>")    

// for( intialization , condition , incre/drcr    ){
//         //statements///
// }


// for(var i = 1 ; i <= 5 ; i++ ){

//         // document.write( i + "<br>")
//         console.log(i)

// }


// for(var i = 0 ; i <= 10 ;i = i +2){
//     document.write(i + "<br>")
// }


// for(var i = 2 ; i <=20 ; i = i +2 ){
//     document.write(i + "<br>")
// }


// for(var i = 10 ; i >= 1 ; i--){

//         document.write("jaffar" + "<br>")

// }




    /////PRINT TABLE////



// document.write("2 x 1 = " + 2*1)
// document.write("2 x 2 = " + 2*2)
// document.write("2 x 3 = " + 2*3)
// document.write("2 x 4 = " + 2*4)
// document.write("2 x 5 = " + 2*5)
// document.write("2 x 6 = " + 2*6)
// document.write("2 x 7 = " + 2*7)



// var tableNum = +prompt("Enter Table Number")
// var tableLength = +prompt("Enter Table Length")

// for(var i = 1 ; i <=tableLength ; i++){

//         document.write( tableNum +" x " + i + "=" 
//                          + tableNum*i + "<br>")

// }



// var namesArr = ["Jaffar" , "Ali" , "Yousuf" , "Raza" , "umair" , "umer" , "bilal"];

// console.log(arr)
// document.write(arr[0])
// document.write(arr[1])
// document.write(arr[2])
// document.write(arr[3])
 

// for(var  i = 0 ; i < namesArr.length ; i++   ){
//     document.write(namesArr[ i  ] + "<br>")
// }






// var userCity = prompt("Enter City Name:")
var cities = ["islamabad" , "lahore" , "karachi" , "multan"];

// for(var i =  0 ; i < cities.length ; i++){
//         if(cities[i] === "karachi"){
//                 alert("city of  light")
//         }
// }


// var isMatch = "no"
// for(var i = 0 ; i  < cities.length ; i++){
    
//     if(userCity === cities[i]){
//         alert("WELCOME")
//         isMatch = "yes"
//         break
        
        
//     }

// }

// if(isMatch == "no"){
//     alert("your city is not found")
// }


// var name = "jaffar"
// name = "jaffar aman"


    ////NESTED LOOP///


// for(var i = 1; i <= 5 ; i++){

//         document.write("OUTER LOOP" + i + "<br>")

//        for(var j = 1 ; j<=5 ;j++){
//             document.write("INNER LOOP " + j + "<br>")
//        } 


// }


for(var i = 1 ; i <=5 ; i++){

    for(var j = 1 ; j <=i ; j++){
        document.write("*" )
    }

    document.write("<br>")

}