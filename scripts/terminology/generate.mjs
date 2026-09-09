import fs from 'node:fs';
import {terms} from '../../app/arabic.ts';
const lex={...terms};for(const line of fs.readFileSync(new URL('./lexicon.txt',import.meta.url),'utf8').trim().split('\n')){const [en,ar]=line.split('|');lex[en]=ar;}
const mods=fs.readFileSync(new URL('./modifiers.txt',import.meta.url),'utf8').trim().split('\n').map(l=>l.split('|')).sort((a,b)=>b[0].length-a[0].length);
const ords='first second third fourth fifth sixth seventh eighth ninth tenth eleventh twelfth'.split(' ');
const feminine=s=>/^(الأوردة|الشرايين|الفروع|العضلات|الفقرات|الأعضاء|العظام|الأعصاب|الأربطة|العضلة|القطعة|المنطقة|الطبقة|الشجرة|القناة|المادة|الحجرة|الصفيحة|القوس|السلامية|السن|القاطعة|الضاحكة|الرحى|العقدة|المحفظة|الشرفة|الوريقة|الأكيمة|السويقة|المفاغرة|بنية|اللفافة|الغدة|القصبة|الرافعة)/.test(s);
const missing=new Set();const cache=new Map();
function tr(s){s=s.trim().replace(/\s+/g,' ').replace('subdivisionof ','subdivision of ');if(cache.has(s))return cache.get(s);const result=translate(s);cache.set(s,result);return result;}
function translate(s){
 if(lex[s])return lex[s];
 if(s.endsWith(' (in vivo)')||s.endsWith(' (in-vivo)')){const base=tr(s.replace(/ \(in[- ]vivo\)$/,''));return base?base+' (في الجسم الحي)':null;}
 const side=s.match(/^(right|left) (.+)$/);if(side){const label=side[1]==='right'?'يمين':'يسار';const i=side[2].indexOf(' of ');if(i>=0){const a=tr(side[2].slice(0,i)),b=tr(side[2].slice(i+4));if(a&&b)return join(a+' ('+label+')',b);}const base=tr(side[2]);return base?base+' ('+label+')':null;}
 const numbered=s.match(/^(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth) (.+)$/);if(numbered){const of=numbered[2].indexOf(' of ');if(of>=0){const a=tr(numbered[2].slice(0,of)),b=tr(numbered[2].slice(of+4));if(a&&b)return join(a+' رقم '+(ords.indexOf(numbered[1])+1),b);}
 const base=tr(numbered[2]);return base?base+' رقم '+(ords.indexOf(numbered[1])+1):null;}
 for(const [sep,ar] of [[' to ',' إلى '],[' with ',' مع ']]){const i=s.indexOf(sep);if(i>=0){const a=tr(s.slice(0,i)),b=tr(s.slice(i+sep.length));return a&&b?a+ar+b:null;}}
 const i=s.indexOf(' of ');if(i>=0){const a=tr(s.slice(0,i)),b=tr(s.slice(i+4));return a&&b?join(a,b):null;}
 const num=s.match(/^(.+) (\d+|ii|iii|iv|ix|v|vi|vii|viii)$/);if(num){const b=tr(num[1]);const roman={ii:2,iii:3,iv:4,v:5,vi:6,vii:7,viii:8,ix:9};return b?b+' رقم '+(roman[num[2]]??num[2]):null;}
 if(s.endsWith(' proper')){const b=tr(s.slice(0,-7));if(b)return b+(feminine(b)?' الخاصة':' الخاص');}
 for(const [m,ar,arf] of mods){if(s.startsWith(m+' ')){const b=tr(s.slice(m.length+1));if(b)return b.replace(/ (\((?:يمين|يسار)\))$/, '')+' '+(feminine(b)?arf:ar)+(b.match(/ \((?:يمين|يسار)\)$/)?.[0]??'');}}
 missing.add(s);return null;
}
function join(a,b){
 const construct={'العضلة':'عضلة','الرأس':'رأس','الوتر':'وتر','الرافد':'رافد','المنطقة':'منطقة','الجذع':'جذع','الفرع':'فرع','الجدار':'جدار','الشرفة':'شرفة','السلامية':'سلامية','القشرة':'قشرة','الجوف':'جوف','مجموعة':'مجموعة','محتويات':'محتويات','القطاع':'قطاع','السطح':'سطح','العنق':'عنق','القاعدة':'قاعدة','القمة':'قمة'};
 if(construct[a])return construct[a]+' '+b;
 if(a.startsWith('العضلة ')&&/^(القدم|اليد)( |$)/.test(b))return a+' في '+b;
 return a+' ل'+(b.startsWith('ال')?b.slice(1):b);
}
const atlas=JSON.parse(fs.readFileSync(new URL('../../public/models/atlas.json',import.meta.url)));
const names=[...new Set([...atlas.parts,...atlas.concepts].map(x=>x.name.toLowerCase()))];const translated={};const untranslated=[];
for(const n of names){const ar=tr(n);if(ar)translated[n]=ar;else untranslated.push(n);}
if(untranslated.length)throw new Error('Missing Arabic terms: '+untranslated.join(', '));
fs.writeFileSync(new URL('../../app/terminology-ar.json',import.meta.url),JSON.stringify(translated,null,2));
console.log(`Generated ${Object.keys(translated).length} Arabic catalogue labels.`);
