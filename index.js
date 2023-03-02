

(()=>{
  let index  = 0
  function getId(){
    return ()=>{
      return  index++
    }
  }
  class  Dragble {
      constructor (objSelector,containierSelector){
        let containerObj =  document.querySelector(containierSelector)
        this.dragObj =  document.querySelector(objSelector)
        
        this.maxHeight = containerObj.clientHeight
        this.maxWidth = containerObj.clientWidth
        
        this.dragHeight = this.dragObj.clientHeight
        this.dragWidth = this.dragObj.clientWidth
        
        this.init()
      }
     getIndex(){
      return getId()()
     }
     init(){
      const _this  = this
      this.dragObj.onmousedown = function(ev){
        const startX= ev.clientX
        const startY= ev.clientY
        const offsetLeft = this.offsetLeft
        const offestTop = this.offsetTop
        _this.dragObj.style.zIndex = _this.getIndex()
  
        document.onmousemove = function(e){
          /**
           * 获取移动距离
           */
          let distanceX  =  offsetLeft + ( e.clientX -  startX) 
          let distanceY = offestTop + ( e.clientY -  startY)  
          
          /**
           * 判断边界
           */
          if(distanceX < 0){
            distanceX = 0
          }
          if(distanceX + _this.dragWidth > _this.maxWidth) {
            distanceX = _this.maxWidth - _this.dragWidth
          }
         
          if(distanceY < 0){
            distanceY = 0
          }
  
          if( distanceY + _this.dragHeight > _this.maxHeight) {
             distanceY = _this.maxHeight - _this.dragHeight
          }
          /**
           * 设置位置
           */
          _this.dragObj.style.left = distanceX+ 'px'
          _this.dragObj.style.top = distanceY +'px'
        }  
  
      }
      document.onmouseup = function(){
        document.onmousemove = null;
      } 
     }
  
  }
})()