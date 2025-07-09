//Here is my code
debugger;
function myIndexOf (source,searchValue,startIdx=0){
    let sent = source.slice(startIdx);
    let lenSearchValue = searchValue.length;
    for (let i = 0; i<sent.length; i++){
        let newValue = sent.slice(i, i+lenSearchValue);
            if(newValue == searchValue) {
                return i + startIdx;
            }
        }
        return -1;
    }
    
console.log(myIndexOf(sagarmatha,g,1))