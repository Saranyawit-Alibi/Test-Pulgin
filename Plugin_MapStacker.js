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
* @param SourceImage
* @desc Store image file
* @type file
* @dir img/parallaxes
* @require 1
*
*/

var Mapstacker_Params = PluginManager.parameters("Plugin_MapStacker");
var EnableMapStacker = (Mapstacker_Params["EnableMapStacker"] == "true");
