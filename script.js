function getFormvalue() {
    //Write your code here
	let elements=document.getElementsByTagName("input");
	let firstName=elements[0];
	let lastName=elements[1];
	alert(firstName.value+" "+lastName.value);

}
