let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// here is my code

function attendanceCheck (day){
    let finalArray = []

    for( let i = 0; i < classRoom.length ; i++){

        let  studentObject= classRoom[i]

        let  studentName = Object.keys(studentObject)[0]

        let attendanceObjects = studentObject[studentName]

        for (let j = 0; j < attendanceObjects.length ; j++){

            let attendanceObject = attendanceObjects[j]

            let dayName = Object.keys(attendanceObject)[0]

            if(day === dayName && attendanceObject[dayName]){

                finalArray.push(studentName)
            }

        }      
    }

    return finalArray
}
