class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(){

        this.sling.bodyA = polygon.body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

display(){
    if(this.sling.bodyA){
        stroke("white")
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
    }


}

}