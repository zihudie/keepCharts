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
        /**
         * 获取移动距离
         */
        let distanceX  =  offsetLeft + ( e.clientX -  startX) 
        let distanceY = offestTop + ( e.clientY -  startY)  
        
        /**
         * 判断边界
         */
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
        /**
         * 设置位置
         */
        dragObj.style.left = distanceX+ 'px'
        dragObj.style.top = distanceY +'px'
      }  
  }
  
  document.onmouseup = function(){
    document.onmousemove = null;
  } 

  class  Dragble {
    constructor (){
      
    }
    


    
  }
}