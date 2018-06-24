function generateTable(row, column, width){
	var table = '<table border="1">';
	for(var i=1;i<=row;i++){
		table += '<tr>';
		for(var j=1;j<=column;j++){
			table +='<div onmouseover="display();" onmouseout="nodisplay();"><td></td></div>';
		}
		table += '</tr>';
	}
	table += '</table>';
	document.getElementById('tbl').innerHTML = table;
	document.getElementById('tbl').style.width = width;
	document.getElementById('addkol').style.left = width+60;
}

function display(row, column){
	if(column>1){
	document.getElementById('rem_col').style.display = "block";
	document.getElementById('rem_col').style.top = Math.floor((event.clientY-52)/52)*52+52;
	}
	
	if(row>1){
	document.getElementById('rem_row').style.display = "block";
	document.getElementById('rem_row').style.left = Math.floor((event.pageX-60)/52)*52+60;
	
	
	}	
}

function nodisplay(){
	document.getElementById('rem_col').style.display = "none";
	document.getElementById('rem_row').style.display = "none";
}