// a list of levels each level i a list of the directions user should take to draw the shape.
var directionsList= [
                        [   
                            "u","u","ur","ur","dr","dr","d","d","l","l","l","l"
                        ],

                        [
                            "u","u","ur","ur","r","r","dr","dr","d","d","dl","dl","l","l","ul","ul","u","u","ul","ul","u","u","ur","ur",
                            "r","r","dr","dr","d","d"
                            
                        ],
                        [
                            "u","u","u","r","d","l","u","ur","ur","r","r","dr","dr","d","l","u","r","d","d","d","dl",
                            "dl","l","l","ul","ul","r","r","r","r","r","r","dl","dl","d","d","d","d","ur","ur","ur","d","d","dl","dl","dl","d",
                            "d","l","l","u","u","ul","ul","ul","u","u","dr","dr","dr","u","u","u","u"
                        ],
                        [
                            
                            "ur","ur","ur","dr","dr","dr","l","l","l","l","l","l","u","ur","ur","ur","dr","dr","dr",
                            "l","l","l","l","l","l","u","ur","ur","ur","dr","dr","dr","l","l","l","l","l","l","u","ur","ur","ur","dr","dr","dr",
                            "l","l","l","l","l","l","u","ur","ur","ur","dr","dr","dr","l","l","l","l","l","l"
                             

                        ],
                        [
                            "u","u","u","ur","ur","ur","ur","ur","dr","dr","dr","dr","dr","d","d","d","l","l",
                            "l","l","l","l","u","u","u","r","r","d","d","d","l","l","l","l","l","l","u","u","u","u","ur","ur",
                            "ur","ur","ur","dr","dr","dr","dr","dr","d","d","d","d","r","r","r","ur","dr","r","r","ur","dr","r","r","ur"
                            ,"dr","r","r","ur","dr","r","r"                
                        ],
                        [
                            "u","ur","dr","d","dl","ul","u","ul","u","ur","dr","d","dl","ul","dl","d","dr","ur","dr",
                            "d","dl","ul","u","ul","dl","d","dr","ur","u","ul","u","ul","dl","d","dr","ur","u","ul","u","ur","dr"
                        ],
                       
                        [
                            "ur","ur","r","r","dr","dr","d","d","dl","dl","l","l","ul","ul","u","u","u","ur","ur","r","r",
                            "dr","dr","d","l","d","r","d","dl","dl","l","l","ul","ul","u","u","r","d","l","u","r","r","r","r","r","d","l",
                            "l","l","l","d","r","r","r","r","u","u","ul","ul","dl","dl","d","d","d","r","r","r","r","u"
                        ],
                       
                        [
                            "u","u","u","u","ur","ur","ur","ur","r","r","r","r","dr","dr","dr","dr","d","d","d","d","dl",
                            "dl","dl","dl","l","l","l","l","ul","ul","ul","ul","r","u","u","u","u","ur","ur","ur","r","r","r","r",
                            "dr","dr","dr","d","d","d","d","dl","dl","dl","l","l","l","l","ul","ul","ul","u","u","u","u","r","ur",
                            "ur","r","r","r","r","dr","dr","d","d","d","d","dl",
                            "dl","l","l","l","l","ul","ul","u","u","u","u","ur","ur","d","r","r","r","r","dr","d","d","d","d","dl",
                            "l","l","l","l","ul","u","u","u","u","ur","d","r","r","r","r","d","d","d","d",
                            ,"l","l","l","l","u","u","u","u","r","r","r","r","dl","dl","dl","dl","u","u","u","u","dr",
                            "dr","dr","dr"
                        ],
                        
                      
                    ]
// function that takes a path,level num, and a number to scale the drawing with and adds the level points to the path. 
export function addLevelPoints(path,lst,num,scaleFactor) {

    var pointsList = createPointsList(lst,num,scaleFactor);
    pointsList.forEach(function(point){
        path.add(point[0],point[1]);
    });

};
 //function that creates a list of points each point is a list of x and y positions.             
export function  createPointsList(startingPoint,levelNum,scaleFactor){
        var pointsList= [];
        var x = startingPoint[0];
        var y = startingPoint[1];
        // goes through the directions of the level and changes the value 
        // of x and y from the starting points accordingly and add it to the list to return.
        directionsList[parseInt(levelNum,10)-1].forEach(function(direction) { 
            switch(direction){
                case "u":
                    y = y -10;
                    pointsList.push([x*scaleFactor,y*scaleFactor]);
                    break;
                case"d":
                    y = y +10;
                    pointsList.push([x*scaleFactor,y*scaleFactor]);
                    break;
                case"r":
                    x = x +10;
                    pointsList.push([x*scaleFactor,y*scaleFactor]);                    
                    break;
                case"l":
                    x = x -10;
                    pointsList.push([x*scaleFactor,y*scaleFactor]);
                    break;
                case"ur":
                    x = x+ 10;
                    y = y -10;
                    pointsList.push([x*scaleFactor,y*scaleFactor]);
                    break;
                case"ul":
                    x = x -10;
                    y = y -10;
                    pointsList.push([x*scaleFactor,y*scaleFactor]);
                    break;
                case"dr":
                    x = x +10;
                    y = y +10;
                    pointsList.push([x*scaleFactor,y*scaleFactor]);
                    break;
                case"dl":
                    x = x -10;
                    y = y +10;
                    pointsList.push([x*scaleFactor,y*scaleFactor]);
                    break;

            }
        
        });
        return pointsList
    }


