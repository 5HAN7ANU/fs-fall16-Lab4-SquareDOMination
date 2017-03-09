document.addEventListener('DOMContentLoaded', function(){
    var btn = document.createElement('BUTTON');
    var btnText = document.createTextNode('Add Square');
    btn.appendChild(btnText);
    document.body.appendChild(btn);
    var line = document.createElement('p');
    document.body.appendChild(line);

    var counter = 0;

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    btn.addEventListener('click', function(){
        var newDiv = document.createElement('div');
        newDiv.className = 'box';
        newDiv.id = counter;
        document.body.appendChild(newDiv);
        
        var hover = document.getElementById(counter);
        
        hover.onmouseenter = function(){
            var textToDisplay = this.id;
            hover.innerHTML = textToDisplay;
        };

        hover.onmouseleave = function(){
            hover.innerHTML = null;
        };

        hover.onclick = function(){
            hover.style.backgroundColor = getRandomColor();
        };

        counter++;

        hover.ondblclick = function(){
            if(this.id % 2 == 0){
                if(this.nextElementSibling != null){
                    this.nextElementSibling.remove();
                }else{
                    alert('No boxes on the right!');
                }
            }else{
                if((this.id % 2 != 0) && (this.previousElementSibling.className == 'box')){
                    this.previousElementSibling.remove();
                }else{
                    alert('No boxes on the left!');
                }
            }
        };
    });
});