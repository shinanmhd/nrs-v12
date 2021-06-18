/*
 * Page to Unicode Thaana - PUT 1.0
 * Converts all text with non-Unicode Thaana fonts on a web page to Unicode
 *
 * Copyright (c) 2011 Jawish Hameed (jawish.org)
 * Licensed under the MIT license.
 */

var put = function ()
{	
	// Configs
	var fontsFrom = 'a_faseyha|a_waheed|a_randhoo|a_reethi|a_utheem|a_raadhavalhi';
	var fontsTo = "'mv eamaan xp',faruma,'mv iyyu normal','mv iyyu nala','mv elaaf normal'";
    var transformFrom = 'qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>?()';
    var transformTo = 'ޤަެރތޔުިޮޕ][\\އސދފގހޖކލ؛\'ޒޝްވބނމ،./ﷲާޭޜޓޠޫީޯޕ}{|ޢށޑޟޣޙޛޚޅ:\"ޡޘޗޥޞޏމ><؟)(';
	
	// Prepare mapping data
	for (transformFrom = transformFrom.split(''), c = 0; c < transformFrom.length; c++) transformFrom[c] = transformFrom[c].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	var transformTo = transformTo.split('');
	
	// Define function to convert a given block of Ascii Thaana text to Utf8
	var convertAsciiToUtf8 = function (text)
	{
		// Loop through characters to transform from
		for (c = 0; c < transformFrom.length; c++)
		{
			// Set all the transform from characters to the converted characters
			text = text.replace(new RegExp(transformFrom[c], 'g'), transformTo[c]);
		}
		return text;
	}
	
	// Loop through all elements in the document
    var elemList = document.getElementsByTagName('*');
    for (e = 0; e < elemList.length; e++)
	{
		// Check if current element has an Ascii Thaana font as per config, skip element if not
		if (!new RegExp(fontsFrom, 'i').test(((elemList[e].currentStyle) ? elemList[e].currentStyle['fontFamily'] : document.defaultView.getComputedStyle(elemList[e], null).getPropertyValue('font-family')))) continue;

		// Check current element's text direction settings
		if (((elemList[e].currentStyle) ? elemList[e].currentStyle['direction'] : document.defaultView.getComputedStyle(elemList[e], null).getPropertyValue('direction')) == 'ltr')
		{
			// RTL not set in element, hence text is most likely reversed
			// Update BiDi to fix render
			elemList[e].style.unicodeBidi = 'bidi-override';
		}
		
		// Set element font to new font
		elemList[e].style.fontFamily = fontsTo;
		
		// Get element text
		var text = elemList[e].innerText || elemList[e].textContent;
		
		if (text)
		{
			// Apply transformation individually to each word to preserve HTML formatting as best as possible
			text.replace(/\w+/g, function (word) { elemList[e].innerHTML = elemList[e].innerHTML.replace(word, convertAsciiToUtf8); return; });
		}
		
    }
}

// Run the conversion as soon as the page is loaded
var old = (window.onload) ? window.onload : function () {};
window.onload = function(){old(); put();};