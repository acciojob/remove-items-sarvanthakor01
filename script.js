//your JS code here. If required.
//add eventlistner to input
//then find the selected option using selectedindex
//remove it.

document.querySelector("input[type='button']").addEventListener("click", function () {
    const select = document.getElementById("colorSelect");
    const selectedIndex = select.selectedIndex; 

    if (selectedIndex !== -1) {
        select.remove(selectedIndex); 
    }
});
