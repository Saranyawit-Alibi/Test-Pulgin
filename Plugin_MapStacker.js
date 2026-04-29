/*:
* @plugindesc Mapstacker plugin 
* @author Silk
*
* @param settings
* @desc plugin setting
*
*
* @param EnableMapStacker
* @desc make MapTop picture appear
* @type boolean
* @default false
* @on Enable
* @off Disable
* @parent settings
*
* @param SourceImages
* @desc Store image file
* @type file
* @dir img/parallaxes
* @require 1
*
* @param Default Image
* @desc The Image returned when an invalid value is used in the GetImage plugin command
* @type file
* @default img/system/GameOver
* @parent SourceImage
*
*/

var test_MapStackerParams = PluginManager.parameters("Plugin_MapStacker");
var EnableMapStacker = (test_MapStackerParams["EnableMapStacker"] == "true");
var SourceImages = test_MapStackerParams["SourceImages"]

/*Plugin commands*/
var testMapStackerGameInterpreter_pluginCommand = Game_interpreter.prototype.pluginCommand;
Game_interpreter.prototype.pluginCommand = function(command, args){
    if(command === "Enable.MapStacker"){
        for(let arg of args){
            command += " " + arg ;
        }
       
        let matches =[];
        if (command.match(/Enable.MapStacker[ ]EnableMapStacker[ ](?:(\w+)|(\d+))/)){
            matches =((/Enable.MapStacker[ ]EnableMapStacker[ ](?:(\w+)|(\d+))/).exec(command) || [])
            if (matches.length > 1){
                
            }
        }

    } else {
        testMapstackerGameInterpreter_pluginCommand.call(this,command,args);
    }
}
/* game system */
Game_System.prototype.toggleMapStacker = function(){
    this.EnableMapStacker
}


