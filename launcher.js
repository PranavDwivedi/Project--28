class launcher {

   constructor (bodyA, pointB)

   {

     var options = {

    bodyA:bodyA,
    pointB:pointB,
    stiffness: 0.4,
    length:10

     }

this.pointB = pointB;
this.launcher = Constraint.create(options);

World.add(world, this.launcher);

   }

display()
{

var pointA = this.bodyA.position;
var pointB = this.pointB;
line (pointA.x, pointA.y, pointB.x, pointB.y);

}


}