(function(document){

    var div = document.getElementById('iconContainer');
    var icon = document.getElementById('downIcon');
    var collapse = document.getElementById('collapsed');
    var hidden = document.getElementsByClassName('collapsible');
    var i = 0;
    var open = false;
    
    div.addEventListener('click', function(){
        if(open){
            icon.className = 'fas fa-chevron-down downIcon';
            for(i=0; i < hidden.length; i++){
                hidden[i].style.display = "none";
            }
        }else{
            icon.className = 'fas fa-chevron-down downIcon open';
            for(i=0; i < hidden.length; i++){
                hidden[i].style.display = "block";
            }
        }
        open = !open;
    });

})(document);