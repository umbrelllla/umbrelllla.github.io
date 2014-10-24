/***
|''Name''|FormElementsPlugin|
|''Description''|Define form elements|
|''Author''|François Deblon (sokushin [at] gmail [dot] com)|
|''Version''|0.2.0|
|''Date''|2011-03-15|
|''Status''|@@experimental@@|
|''Source''|<...>|
|''License:''|[[Creative Commons Attribution-ShareAlike 3.0 License|http://creativecommons.org/licenses/by-sa/3.0/]]|
|''CoreVersion''|2.5|
!Description
<...>

To be used with HiddenSectionDataPlugin

/%
!Notes
<...>
!Usage
{{{
<< ... >>
}}}
!!Parameters
<...>
!!Examples
<< ... >>
!Configuration Options
<...>
!Revision History
!!v<#.#> (<yyyy-mm-dd>)
* <...>
!To Do
<...>
%/
!Code
***/
//{{{
if(!version.extensions.FormElementsPlugin) { //# ensure that the plugin is only installed once
version.extensions.FormElementsPlugin = {
    major: 0, minor: 3, revision: 0,
    date: new Date(2011, 03, 15), 
    type: 'plugin'
};
 
if(!config.extensions) { config.extensions = {}; } //# obsolete from v2.4.2
 
config.macros.formElement = {
	handler: function(place,macroName,params,wikifier,paramString,tiddler) {
		var params = paramString.parseParams(null,null,true);
		var type = getParam(params,"type");
		var settings = getParam(params,"settings")||'';
		var title = getParam(params,"source");
		var slot = getParam(params,"slot");
		var refresh = (getParam(params,"refresh")=="true")? true : false;
		if (typeof title=="undefined" || title=="null" || store.getTiddler(title)==null) title=story.findContainingTiddler(place).getAttribute("tiddler");
		var tid=store.getTiddler(title);
		var slotvalue = tid.getHData(slot);
		this[type].call(this,place,settings,tid,slot,slotvalue,refresh);
		},
	createTiddlyInput: function(parent,text,id,onChange) {
		var inp = document.createElement("input");
		inp.setAttribute("type","text");
		inp.setAttribute("id",style);
		inp.onchange = onChange;
		parent.appendChild(inp);
		inp.value=text;
		return inp;
		},
	input: function(place,settings,tid,slot,slotvalue,refresh) {	/* settings = 1 elt : width (width:2em par exemple) */
		var etat = (!slotvalue) ? "" : slotvalue;
		var dd = this.createTiddlyInput(place, etat, settings, function(e) {
			tid.setHData(slot,(this.value=="") ? undefined : this.value); 
			if (refresh) story.refreshTiddler(tid.title,null,true);
			return false;
			});
		},
	createTiddlyTextarea: function(parent,text,cols,rows,onChange) {
		var tta = document.createElement("textarea");
		tta.setAttribute("cols",cols);
		tta.setAttribute("rows",rows);
		tta.onchange = onChange;
		parent.appendChild(tta);
		tta.value=text;
		return tta;
		},
	textArea: function(place,settings,tid,slot,slotvalue,refresh) {		/* settings = 2 élts : nombre de cols, nombre de rows */
		var etat=(!slotvalue) ? "" : slotvalue;
		var settingsarray = settings.readBracketedList();
		var dd=this.createTiddlyTextarea(place, etat, settingsarray[0]||40, settingsarray[1]||3,function(e) {
			tid.setHData(slot,(this.value=="")? undefined : this.value); 
			if (refresh) story.refreshTiddler(tid.title,null,true);
			return false
			});
		},
	select: function(place,settings,tid,slot,slotvalue,refresh) {		/* settings = 1 élt : titre du tiddler contenant la liste de choix */
		var selectOptions = [];
		selectOptions.push({name: undefined,caption:'-'});
		if (settings) {							/* this part from http://www.tiddlytools.com/#ListboxPlugin */
			var param=settings.indexOf('with:');
			var txt=(param==-1)?store.getTiddlerText(settings):'<<tiddler '+settings+'>>';
			var e=createTiddlyElement(document.body,"div");
			wikify(txt,e);
			var breaks=e.getElementsByTagName("br");
			for (var b=0; b<breaks.length; b++) breaks[b].parentNode.insertBefore(document.createTextNode("\n"),breaks[b]);
			var tids=getPlainText(e).split("\n");
			removeNode(e);
			for (i=0; i<tids.length; i++) {
				if (tids[i]!="") selectOptions.push({name: tids[i], caption: tids[i]});
			}
		}
		var etat=(!slotvalue) ? undefined : slotvalue;
		var dd=createTiddlyDropDown(place, function(e) {
			var selectedItem=selectOptions[this.selectedIndex].name;
			tid.setHData(slot,selectedItem); 
			if (refresh) story.refreshTiddler(tid.title,null,true);
//			return false;
			},
			selectOptions, etat
			);
		},
	checkBox: function(place,settings,tid,slot,slotvalue,refresh) {		/* settings = 1 élt : état */
		var settingsarray = settings.readBracketedList();
		var checked=(settingsarray[0]=="true");
		if (typeof slotvalue=="undefined") {
			tid.setHData(slot,checked); 
		}
		else {
			checked=slotvalue;
		}                    
		var dd=createTiddlyCheckbox(place, null, checked, function(e) {
			tid.setHData(slot,this.checked); 
			if (refresh) story.refreshTiddler(tid.title,null,true);
			});
		},
	createTiddlyRadio: function(parent,name,value,checked,onClick) {
		var rb = document.createElement("input");
		rb.setAttribute("type","radio");
		rb.setAttribute("name",name);
		rb.defaultChecked=checked
		rb.onclick = onClick;
		rb.value=value;
		parent.appendChild(rb);
		return rb;
		},
       radio: function(place,settings,tid,slot,slotvalue,refresh) {		/* settings = 2 élts : valeur état */
		var settingsarray = settings.readBracketedList();
		var checked=(settingsarray[1]=="true");
		var value=settingsarray[0];
		if (slotvalue==value) checked=true;
		else {
			if (checked) {
				if (!slotvalue) {
					tid.setHData(slot,value);
				}
				else checked=false;
			}
		}
		var dd=this.createTiddlyRadio(place, slot, value, checked,function(e) {
			if (this.checked==true) {
			tid.setHData(slot,this.value); 
			if (refresh) story.refreshTiddler(tid.title,null,true);
			}
			});
		}
};

} //# end of "install only once"
//}}}