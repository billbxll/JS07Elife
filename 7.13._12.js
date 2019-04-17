// function PlantEater() {
//     this.energy = 20;
//   }
// PlantEater.prototype.act = function(view) {
//     var space = view.find(" ");
//     if (this.energy > 60 && space)
//         return {type: "reproduce", direction: space};
//     var plant = view.find("*");
//     if (plant)
//         return {type: "eat", direction: plant};
//     if (space)
//         return {type: "move", direction: space};
// };



function PlantEaterNew() {
    PlantEater.call(this);
    this.lastEat = -1;           // 表示上一次吃植物是什么时候
    this.lastProduct = -1;      // 表示上一次繁殖是什么时候哦
}
PlantEaterNew.prototype = Object.create(PlantEater.prototype);
PlantEaterNew.prototype.act = function(view) {
    var space = view.find(" ");
    if(this.lastProduct >= 0) {
        this.lastProduct++;
        if(this.lastProduct >= 6) this.lastProduct = -1;
                //距离上次繁殖有五天了，那么重置繁殖天数
                //距离上次五天，实际是第六天，下同
    }
    if(this.lastEat >= 0) {
        this.lastEat++;
        if(this.lastEat >= 2) this.lastEat = -1;
            //距离上次吃植物有一天了，那么重置吃的天数
    }
    if (this.lastProduct < 0 && this.energy > 60 && space){
        this.lastProduct = 0;
        return {type: "reproduce", direction: space};
    }
    
    var plant = view.find("*");
    if (this.energy <= 30 && plant) {   
            //能量低于30了，那么不管上次是什么时候吃的，都要吃植物
        this.lastEat = 0;
        return {type: "eat", direction: plant};
    }
    if(this.lastEat < 0 && plant) {
        this.lastEat = 0;
        return {type: "eat", direction: plant};
    }
    
    // if (plant)
    //     return {type: ""}
    var spaces = view.findAll(" ");
    // if(this.energy < )
    if (space)
        return {type: "move", direction: space};
}

function Tiger() {
    this.energy = 50;
    this.lastEat = -1;
    this.lastProduct = -1;
}

Tiger.prototype.act = function(view) {
    var space = view.find(" ");
    if(this.lastProduct >= 0) {
        this.lastProduct++;
        if(this.lastProduct >= 10) this.lastProduct = -1;
    }
    if(this.lastEat >= 0) {
        this.lastEat++;
        if(this.lastEat >= 4) this.lastEat = -1;
    }
    if (this.lastProduct < 0 && this.energy > 70 && space){
        this.lastProduct = 0;
        return {type: "reproduce", direction: space};
    }
    
    var animal = view.find("O");
    if (this.energy <= 20 && animal) {
        this.lastEat = 0;
        return {type: "eat", direction: animal};
    }
    if(this.lastEat < 0 && animal) {
        this.lastEat = 0;
        return {type: "eat", direction: animal};
    }
    if (space)
        return {type: "move", direction: space};
}