function sison(val)
{
		document.getElementById("ram").value=val;
	}
		function v(val)
	{
		document.getElementById("ram").value+=val;
	}
		function k() 
	{ 
try 
	{ 
	  sison(eval(document.getElementById("ram").value)) 
	} 

catch(k) 
	{
	  sison('Error') 
	} 
}