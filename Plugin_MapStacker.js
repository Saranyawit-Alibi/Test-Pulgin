/*:
* @plugindesc Mapstacker plugin 
* @author Silk
*
* @param settings
* @desc plugin setting
*
*
* @param EnableMapStacker
* @desc Turn on MapStacker
* @type boolean
* @default false
* @parent settings
*
*
*/
 
/* Plugin  */
    var theObj = theObj || {} ;
    theObj.cmd = theObj.cmd || {} ;
    theObj.things =theObj.things || {} ;
    var test_MapStackerParams = PluginManager.parameters("Plugin_MapStacker");
    var EnableMapStacker = (test_MapStackerParams["EnableMapStacker"] == "true");

/* Plugin commands */
(function() {
    ImageManager.GetMapSource = function(filename, hue) {
        return this.loadBitmap('img/maps/', filename, hue, true);
    };

    var testMapStackerGameInterpreter_pluginCommand = Game_interpreter.prototype.pluginCommand;
    Game_interpreter.prototype.pluginCommand = function(command, args){
        if (theObj.cmd[command]){
            theObj.cmd[command](args);
            return;
        }
    }
    testMapstackerGameInterpreter_pluginCommand.call(this,command,args);


/* Game System Function */
Game_System.prototype.toggleMapStacker = function(){


}



})();
