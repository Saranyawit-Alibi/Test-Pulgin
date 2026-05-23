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
* @param SourceImages
* @desc Store image file
* @type file
* @dir img/extraImage
* 
*
*/
 
/* Plugin  */
    var theObj = theObj || {} ;
    theObj.cmd = theObj.cmd || {} ;
    theObj.things =theObj.things || {} ;
    var test_MapStackerParams = PluginManager.parameters("Plugin_MapStacker");
    var EnableMapStacker = (test_MapStackerParams["EnableMapStacker"] == "true");
    var SourceImages = (test_MapStackerParams["SourceImages"]);


    
(function() {

    /* Plugin commands */
    ImageManager.GetMapSource = function(filename, hue) {
        return this.loadBitmap('img/extraImage/', filename, hue, true);
    };

    var testMapStackerGameInterpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args){
        if (theObj.cmd[command]){
            theObj.cmd[command](args);
            return;
        }
        testMapStackerGameInterpreter_pluginCommand.call(this,command,args);
    };



theObj.cmd.SetImage = function(arguments){
    theObj.things.SettingImage(arguments);
};



/* Game System Function */
Game_System.prototype.toggleMapStacker = function(EnableMapStacker){
    this.bEnableMapStacker = EnableMapStacker;
};

theObj.things.num = function(txt) {
	if (txt[0] === "v") {
		var varId = Number(txt.replace("v",""));
		return $gameVariables.value(varId);
	} else {
		return Number(txt);
	}
};

theObj.things.SettingImage = function(set){
    var pictureId = theObj.things.num(set[0]);
    var pictureName = set[1];
    var pictureOrigin = theObj.things.num(set[2]);
    var pictureX = theObj.things.num(set[3]);
    var pictureY = theObj.things.num(set[4]);
    var pictureScaleX = theObj.things.num(set[5]);
    var pictureScaleY = theObj.things.num(set[6]);
    var pictureOpacity = theObj.things.num(set[7]);
    var pictureMode = theObj.things.num(set[8]);

    $gameScreen.showPicture(pictureId, pictureName, pictureOrigin,pictureX, pictureY, pictureScaleX, pictureScaleY,
         pictureOpacity,pictureMode);
};



})();
