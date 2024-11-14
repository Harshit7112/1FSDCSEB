// console.log("Hello World");
// const a=12;
// console.log(a);
// if(a>10)
// {
//    let b=23;
//    a=40;
//     console.log("a inside condition:"+a);
// }
// console.log("a outside condition:"+a);

// let a=12;
// let b="12";
// console.log(typeof b);
// let today=Date();
// console.log(today);

// let a=12;
// let b="12";
// if(a==b){
//     console.log("welcome");
// }
// else{
//     console.log("hello");
// }
// let myname "Amit";
// let college="abes ec";
// let result =`hi my name is ${myname} and  i am doing engineering from ${college}`;
// console.log(result);
// let key="sname";
////////////////////////////////////////////////
// const students=[
//     {
//     sname:"amit",
// course:"btech",
// college:"abes"
// },
// {
//     sname:"bro",
// course:"ba",
// college:"abesit"
// }
// ]
// // console.log("name "+students.sname+" course:"+students.course);
// // const {sname}=students;
// // console.log(sname);
// // students[key]="rahul";
// // console.log(students);
// console.log(students);
// console.log(students[0]);
// console.log(students[1]);\



/////////////////////////////////////////////function//////////////////////////////////////

// function greet(msg="welcome")
// {
//     console.log("good"+msg);

// }
// greet("greetings");


// ////////////////////////////////////
// function sums(a,b,c=23)
// {
//     return a+b+c;
// }
// let data=sums(12,22);
// console.log(data);

// function cComplier()
// {
//  return "CComplier selected";
// }
// function javaComplier()
// {
//  return "JAVA COMPLILER  SELECTED";
// }
// function selectLanguage(language)
// {
//     let data;
//     if(language=="c")
//     {
//         function cComplier(){
//             return "ccomplier selected";
//         }
//         data=cComplier();
//     }
//     if(language=="java")
//         {
//             function javaComplier(){
//                 return "java complier selected";
//             }
//             data=javaComplier();
//         }
//         return data;

    
// // console.log("YOUHAVE :" +clbk());
// }
// // selectLanguage(javaComplier);
// let data1=selectLanguage("java");
// console.log(data1);

/////////////////////////////////////////////////////////////////////////////////////////////
///dom//////////////////
// console.log("hi");
// let parent=document.getElementsByClassName("parent");
// // console.log(document);
// console.log(parent);
// parent[0].innerText="data has changed";
// parent[0].innerHTML="<h2 style=color:red>data has changed</h2>";

/////////////////////////////////////////////////////////////////////////////////////////////////////
// const h1=document.createElement("h1");
// console.log(h1);
// h1.innerText="abes ec";
// console.log(h1);
// parent[0].appendChild(h1);
// h1.style.backgroundColor="cyan";
// h1.style.color="red";
// h1.style.padding="20px";
// h1.style.marginLeft="300px";
// const img=document.createElement("img")
// img.src="./wp6992126.jpg";
// parent[0].appendChild(img);
// img.setAttribute("height","300");
// img.setAttribute("width","300");


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getdata()
// {
//     console.log("hi,inside get data function");
//      parent[0].innerHTML="<h2 style=color:red>hello bruther</h2>";
// }
////////////////////////////////////////////////////////////////////////////////////////////

// function getdata()
// {
//     console.log("hi,inside get data function");
//      parent[0].innerHTML="<h2 style=color:red>hello bruther</h2>";
// }
// const button =document.getElementsByClassName("btn");
// console.log(button);
// button[0].addEventListener("click",getdata);

//////////////////////////////////////////////////////////////////////////////////////////////////

// const promise =new Promise((resolve,reject)=>{
//     let a=1;
//     if(a>10)
//     {
//         resolve("Accepted");
//     }
//     else
//     {
//         reject("Not accepted");
//     }
// })
// promise.then((msg)=>{console.log(msg)})
// .catch((error)=>{console.log(error)})
// .finally(()=>console.log("all resources hace closed"));


//////////////////////////////////////////////////////////////////////////////////////////////////////

// const promise2=new Promise((resolve,reject)=>{
//     resolve({name:"harhsot",Stack:"Mern stack"})
// });
// promise2.then((data)=>{console.log("hi"+data.name)})
// .catch(x=>{console.log(x)})

///////////////////////////////////////////////////////////////////////////////////////////////////////


const response=fetch("https://dummyjson.com/products")

response.then((data)=>{
    console.log(data);
    data.json().then((res)=>
    {
        console.log(data);
    })
    }
)