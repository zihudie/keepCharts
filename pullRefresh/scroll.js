const getId = (()=>{
  let index  = 0
  return ()=>{
    return  index++
  }
 })()

 let objEventType = {
  start: "onmousedown",
  move: "onmousemove",
  end: "onmouseup"
 }
 if( "ontouchstart" in  document){
    objEventType = {
        start: 'ontouchstart',
        move: 'ontouchmove',
        end: 'ontouchend'
    };
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
  
     init(){
      const _this  = this
      this.dragObj[objEventType.start] = function(ev){
        // 移动端
        if (ev.touches && ev.touches.length) {
            ev = ev.touches[0];
        }
        const startX= ev.clientX
        const startY= ev.clientY
        const offsetLeft = this.offsetLeft //  元素距离左边的位置
        const offestTop = this.offsetTop // 元素距离顶部的位置
        _this.dragObj.style.zIndex = getId()

        document[objEventType.move] = function(e){  
          if (e.touches && e.touches.length) {
              e = e.touches[0];
          }
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
      document[objEventType.end]= ()=>{
        document[objEventType.move] = null;
      }   
    }
}