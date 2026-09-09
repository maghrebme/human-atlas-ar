import assert from 'node:assert/strict';
import {explosionTarget} from '../app/explosion-camera.ts';
const at=amount=>explosionTarget(Math.max(0,(amount-.3)/.7),10,false);
assert.ok(Math.abs(at(0).x)<1e-12 && Math.abs(at(0).y-.68)<1e-12);
assert.ok(Math.abs(at(1).x+1.2)<1e-12 && Math.abs(at(1).y-.85)<1e-12);
for(let i=1;i<=10000;i++){
 const a=at((i-1)/10000),b=at(i/10000);
 assert.ok(Math.hypot(a.x-b.x,a.y-b.y)<.001,'Camera target must not jump across slider thresholds');
}
const a=at(.369999),b=at(.370001);
assert.ok(Math.hypot(a.x-b.x,a.y-b.y)<.0001);
assert.deepEqual(explosionTarget(.1,10,true),{x:0,y:.85});
console.log('Camera target continuity across the full slider range and former 37% threshold passed.');
