window.onload = function(){
  const containerObj =  document.getElementById("container")
  const dragObj =  document.getElementById("drag")
  const maxHeight = containerObj.clientHeight
  const maxWidth = containerObj.clientWidth
  const dragHeight = dragObj.clientHeight
  const dragWidth = dragObj.clientWidth
  dragObj.onmousedown = function(ev){
      const startX= ev.clientX
      const startY= ev.clientY
      const offsetLeft =  this.offsetLeft
      const offestTop =  this.offsetTop
      document.onmousemove = function(e){
        let distanceX  =  offsetLeft + ( e.clientX -  startX) 
        let distanceY = offestTop + ( e.clientY -  startY)  
        
        if(distanceX<0){
          distanceX =0
        }
        if(distanceX + dragWidth > maxWidth) {
          distanceX = maxWidth - dragWidth
        }
       

        if(distanceY<0){
          distanceY =0
        }

        if( distanceY + dragHeight > maxHeight) {
           distanceY = maxHeight - dragHeight
        }
       
        dragObj.style.left = distanceX+ 'px'
        dragObj.style.top = distanceY +'px'
      }  
  }
  
  document.onmouseup = function(){
    document.onmousemove = null;
  } 
}