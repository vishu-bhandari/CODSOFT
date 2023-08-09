let string="";
let buttons=document.querySelectorAll('.button');
// query selector all jin jin ki class button hai vo , vo selec
// select kr legga 


// in button se ek array bnao  
// for each matlab sarre button 

Array.from(buttons).forEach((button)=>{
   button.addEventListener('click', (e)=>{
    if(e.target.innerHTML== '='){
        string=eval(string);
        document.querySelector('input').value=string;
    }
    else if (e.target.innerHTML=='C'){
        string="";
        document.querySelector('input').value=string;
    }
    else{
    console.log(e.target)
    string = string+e.target.innerHTML;
    document.querySelector('input').value=string;
}
}) 
})