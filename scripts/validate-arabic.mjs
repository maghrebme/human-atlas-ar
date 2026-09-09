import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {normalizeArabic,arabicName,searchConcepts} from '../app/arabic.ts';
const atlas=JSON.parse(readFileSync(new URL('../public/models/atlas.json',import.meta.url)));
const original=JSON.stringify(atlas);
assert.equal(normalizeArabic(' إِلَـى  الأَوْرِدَة '),normalizeArabic('الي الاورده'));
for(const query of ['القلب','الْقَلْب','قـلب','Heart','HEART']) assert.equal(searchConcepts(atlas.concepts,query)[0]?.name,'heart',query);
assert.ok(searchConcepts(atlas.concepts,'القصبة الهوائية').some(c=>c.name==='trachea'));
assert.ok(searchConcepts(atlas.concepts,'كلية').some(c=>c.name.includes('kidney')));
assert.equal(arabicName('left femur'),'عظم الفخذ (يسار)');
assert.equal(arabicName('unknown structure'),null);
assert.equal(searchConcepts(atlas.concepts,'no-such-structure').length,0);
assert.equal(searchConcepts(atlas.concepts,'   ').length,0);
assert.equal(searchConcepts(atlas.concepts,atlas.concepts[0].id)[0].id,atlas.concepts[0].id);
assert.ok(searchConcepts(atlas.concepts,'artery').length<=80);
assert.equal(JSON.stringify(atlas),original,'Search must not mutate the canonical atlas');
const translated=atlas.concepts.filter(c=>arabicName(c.name));
console.log(`Arabic normalization, bilingual search, aliases, IDs, ranking and immutable data passed. ${translated.length}/${atlas.concepts.length} concepts have Arabic labels.`);

assert.equal(arabicName("Right serratus posterior inferior"), "العضلة المنشارية الخلفية السفلية (يمين)");
assert.equal(arabicName("Left serratus posterior inferior"), "العضلة المنشارية الخلفية السفلية (يسار)");
assert.ok(searchConcepts(atlas.concepts,"المنشارية الخلفية السفلية").some(c=>c.name.toLowerCase()==="right serratus posterior inferior"));

assert.equal(arabicName('Long head of right biceps brachii'),'الرأس الطويل للعضلة ذات الرأسين العضدية (يمين)');
assert.equal(arabicName('Short head of left biceps femoris'),'الرأس القصير للعضلة ذات الرأسين الفخذية (يسار)');
assert.equal(arabicName('clavicular part of right pectoralis major'),'الجزء الترقوي للعضلة الصدرية الكبرى (يمين)');
assert.equal(arabicName('long head of unknown muscle'),null);
assert.ok(searchConcepts(atlas.concepts,'الرأس الطويل').some(c=>c.name.toLowerCase()==='long head of right biceps brachii'));

// Check every source label, not just the curated examples above.
for(const entry of [...atlas.concepts,...atlas.parts]){
 const ar=arabicName(entry.name);
 assert.ok(ar,`Missing Arabic label: ${entry.id} ${entry.name}`);
 assert.match(ar,/[\u0621-\u064A]/,entry.name);
 assert.doesNotMatch(ar,/[a-zA-Z\u0660-\u0669\u06F0-\u06F9]/,entry.name);
 for(const n of entry.name.match(/\d+/g)??[])assert.ok(ar.includes(n),`Lost number: ${entry.name}`);
}
assert.equal(arabicName('trunk of branch of common hepatic artery'),'جذع فرع الشريان الكبدي المشترك');
assert.equal(arabicName('set of dorsal digital veins'),'مجموعة الأوردة الإصبعية الظهرية');
assert.equal(arabicName('right anterior branch of anterior interventricular branch of left coronary artery'),'الفرع الأمامي (يمين) للفرع بين البطيني الأمامي للشريان التاجي (يسار)');
assert.equal(arabicName('second lumbrical of right foot'),'العضلة الدودية رقم 2 في القدم (يمين)');
assert.equal(arabicName('wall of left ventricle'),'جدار البطين الأيسر');
assert.ok(searchConcepts(atlas.concepts,'جذع الشريان التاجي').some(c=>c.name==='trunk of coronary artery'));
console.log(`Complete Arabic coverage passed: ${atlas.concepts.length} concepts and ${atlas.parts.length} selectable parts.`);
