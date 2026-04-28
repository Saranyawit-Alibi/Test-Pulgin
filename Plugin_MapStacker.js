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
*
*
*/

var Mapstacker_Params = PluginManager.parameters("Plugin_MapStacker");
var EnableMapStacker = (Mapstacker_Params["EnableMapStacker"] == "true");

