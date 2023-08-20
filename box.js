AFRAME.registerComponent("move-box",{
    schema:{
        moveX:{type:"number", default:1},
    },
     tick:function(){
        this.data.moveX=this.data.moveX+ 0.25;
       var pos=this.el.getAttribute("position");
        var rotate=this.el.getAttribute("rotation");
        rotate.x=this.data.moveX;
        rotate.y=this.data.moveX;

        pos.x=this.data.moveX;

        this.el.setAttribute("position",{x:pos.x ,y:pos.y, z:pos.z})
        this.el.setAttribute("rotation",{x:rotate.x ,y:rotate.y})
    
     },
     
})