//for each loop 
const lang = ["java", "js", "cpp", "python", "html", "css"]

//1st way
lang.forEach( function(val){
    // console.log(val)
})
//2nd way
lang.forEach( (val)=>{
    // console.log(val)
})
//3rd way
function item(val){
    // console.log(val)
}
lang.forEach(item)

//the function in for each can have other parameters
lang.forEach( (val,index,lang)=>{
    // console.log(val,index,lang)
})

//we can also use for each loops in objects
const coding = [
    {
        langName: "JavaScript",
        extension: "js"
    },
    {
        langName: "Java",
        extension: "java"
    },
    {
        langName: "html",
        extension: "html"
    },
    {
        langName: "Python",
        extension: "py"
    },
]
coding.forEach( (item)=>{
    console.log(`${item.langName} --> ${item.extension}`)
})