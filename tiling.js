 function createTiles(keyLayout){
        
        
        var tileArray = [];
        var numKeys = keyLayout.length;
        
        //soz i dont define the starting x coordinate up here, this is messy AF
        var posX = 70;
        var posXOrigin = posX;
        
        //165 is the starting y coordinate for each row of the keyboard
        var posY = 165;
        
        //offsets determine the spacing between tiles
        var horOffset = 45;
        var verOffset = 45;
        
        //this boolean is flipped each time the end of the row on the keyboard is reached
        var newRow = true;
        
        
        for (var i = 0; i<numKeys; i++){
            
            if (newRow){
                //80 is the starting x coordinate for each row of the keyboard
                posX = posXOrigin + 10;
                posXOrigin = posXOrigin + 10;
                posY = posY + verOffset;
                newRow = false;
            }
            
            if (i<10){
                
                if (i==9){
                    newRow = true;
                }
            }
            else if (i < 20){
                
                if (i==19){
                    newRow = true;
                }
            }
            else if (i < 29) {
                
                if (i==28){
                    newRow = true;
                }
            }
            else {
                               
            }
            
            
            var newTile = new tile(keyLayout[i], posX, posY);
            
            posX = posX + horOffset;
            
            tileArray.push(newTile);            
        }
        
       
        return tileArray;
    }

function tile(_keycode, posX, posY){        
            //assign keycode and label to each game tile.
            this.keycode = _keycode;
            this.keylabel = String.fromCharCode(this.keycode);
        
            //rendering properties
            this.gfxWidth=40;
            this.gfxHeight=40;
            this.gfxPosX = posX;
            this.gfxPosY = posY;
        
            //logical properties
            this.active = false;
            this.tileState = "normal";
            this.activeTime = 0;        
            this.colorVal = 16777215;
            
            
    }