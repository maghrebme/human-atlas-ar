/** Smooth camera centering as the assembled body becomes the parts inventory. */
export function explosionTarget(extent:number, packingWidth:number, mobile:boolean){
 const t=Math.min(1,Math.max(0,extent/.3));
 const blend=t*t*(3-2*t);
 return {x:mobile?0:-packingWidth*.12*blend,y:mobile?.85:.68+.17*blend};
}
