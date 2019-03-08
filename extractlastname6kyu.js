
const extract =(input)=>{
    const myMatch = input.match(/Michael\s*\w+/g).toString().match(/\w+/g)
    return myMatch.filter(element => {
        if(element != 'Michael' && element.length > 2){
           return(element)
        }
    });
}


const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";



console.log(extract(inputText))


