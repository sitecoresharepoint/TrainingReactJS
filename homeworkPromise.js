const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

let sortWords = (objList) => {
    return(objList.sort())    
}

const makeAllCaps = function(arrayParam) {
    return new Promise((resolve, reject) => {
        result = []
        arrayParam.map((e, index) => {
            try {
                if (e.typeof == "string"){
                    result.push(e.toUpperCase())    
                }
                else {
                    result.push(e)
                }
            } catch (error) {
                reject(`${e} is not a string`)
            }
            
        })
        resolve(result)
    })
}

makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))

makeAllCaps(complicatedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))