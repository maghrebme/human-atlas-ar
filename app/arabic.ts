import type {Concept, SystemId} from './anatomy';

/** Translation layer only: canonical labels, concept IDs and model data stay intact. */
export const systemArabic: Record<SystemId, [string, string]> = {
 skeletal:['الهيكل العظمي','تدعم العظام الجسم وتحمي الأعضاء وتوفر مواضع اتصال العضلات. وتخزن المعادن وتنتج خلايا الدم.'],
 muscular:['الجهاز العضلي','تحرك العضلات الهيكلية المفاصل وتساعد في تثبيت وضعية الجسم وإنتاج الحرارة.'],
 cardiac:['القلب','القلب مضخة عضلية ذات أربع حجرات. توجه صماماته الدم عبر الدوران الرئوي والجهازي.'],
 sensory:['أعضاء الحس','تسهم هذه الأعضاء في البصر والسمع والتوازن وتنقل المعلومات عبر الجهاز العصبي.'],
 arterial:['الشرايين','تنقل الشرايين الدم بعيدًا عن القلب نحو أنسجة الجسم أو الرئتين.'],
 venous:['الأوردة','تعيد الأوردة الدم نحو القلب؛ وتحمل الأوردة الرئوية الدم المؤكسج من الرئتين.'],
 nervous:['الجهاز العصبي','يعالج الدماغ والحبل الشوكي والأعصاب الإشارات لدعم الإحساس والحركة والتنسيق وتنظيم وظائف الجسم.'],
 respiratory:['الجهاز التنفسي','تنقل الممرات الهوائية الهواء إلى الرئتين حيث يجري تبادل الأكسجين وثاني أكسيد الكربون مع الدم.'],
 digestive:['الجهاز الهضمي','يفكك الطعام ويمتص المغذيات والماء وينقل الفضلات. وتساهم الأعضاء الملحقة بالصفراء والإنزيمات.'],
 urinary:['الجهاز البولي','ترشح الكليتان الدم وتنظمان توازن السوائل والشوارد والحموضة. ينتقل البول عبر الحالبين إلى المثانة ثم الإحليل.'],
 lymphatic:['الجهاز اللمفي','تعيد الأوعية اللمفية فائض سائل الأنسجة إلى الدورة الدموية وتدعم الأعضاء اللمفية الاستجابة المناعية.'],
 endocrine:['الغدد الصماء','تفرز الغدد هرمونات في الدم لتنظيم الاستقلاب والنمو والاستجابة للإجهاد والتكاثر.'],
 reproductive:['الجهاز التناسلي','تمثل هذه البنى الجهاز التناسلي الذكري وتسهم في إنتاج النطاف ونضجها ونقلها وإنتاج الهرمونات الجنسية.'],
 integumentary:['سطح الجسم','يشكل الجلد حاجزًا واقيًا ويسهم في الإحساس وتنظيم حرارة الجسم.'],
 connective:['الأنسجة الضامة','تدعم الغضاريف والأربطة والأنسجة الضامة البنى وتربط بينها وتساعد على تثبيت المفاصل وتوزيع الأحمال.'],
};
export const terms: Record<string,string> = {
 heart:'القلب',brain:'الدماغ',liver:'الكبد',stomach:'المعدة',spleen:'الطحال',pancreas:'البنكرياس',
 'urinary bladder':'المثانة البولية',trachea:'الرغامى',diaphragm:'الحجاب الحاجز',kidney:'الكلية',lung:'الرئة',
 esophagus:'المريء',duodenum:'الاثنا عشر',jejunum:'الصائم',ileum:'اللفائفي',colon:'القولون',rectum:'المستقيم',
 'small intestine':'الأمعاء الدقيقة','large intestine':'الأمعاء الغليظة',gallbladder:'المرارة','gall bladder':'المرارة',
 appendix:'الزائدة الدودية',cecum:'الأعور',tongue:'اللسان',pharynx:'البلعوم',larynx:'الحنجرة',
 ureter:'الحالب',urethra:'الإحليل',testis:'الخصية',prostate:'البروستاتا',penis:'القضيب',
 'thyroid gland':'الغدة الدرقية','adrenal gland':'الغدة الكظرية','pituitary gland':'الغدة النخامية',thymus:'الغدة الزعترية',
 skull:'الجمجمة',mandible:'الفك السفلي',maxilla:'الفك العلوي',clavicle:'الترقوة',scapula:'لوح الكتف',sternum:'القص',
 humerus:'عظم العضد',radius:'الكعبرة',ulna:'الزند',femur:'عظم الفخذ',patella:'الرضفة',tibia:'الظنبوب',fibula:'الشظية',
 sacrum:'العجز',coccyx:'العصعص',rib:'الضلع',pelvis:'الحوض',vertebra:'فقرة','vertebral column':'العمود الفقري',
 'spinal cord':'الحبل الشوكي',cerebellum:'المخيخ',cerebrum:'المخ',pons:'الجسر','medulla oblongata':'النخاع المستطيل',
 'optic nerve':'العصب البصري','vagus nerve':'العصب المبهم','sciatic nerve':'العصب الوركي','facial nerve':'العصب الوجهي',
 'median nerve':'العصب المتوسط','ulnar nerve':'العصب الزندي','radial nerve':'العصب الكعبري','cranial nerve':'عصب قحفي',
 aorta:'الأبهر','ascending aorta':'الأبهر الصاعد','descending aorta':'الأبهر النازل','abdominal aorta':'الأبهر البطني','arch of aorta':'قوس الأبهر',
 'common carotid artery':'الشريان السباتي المشترك','internal carotid artery':'الشريان السباتي الباطن',
 'external carotid artery':'الشريان السباتي الظاهر','subclavian artery':'الشريان تحت الترقوة','vertebral artery':'الشريان الفقري',
 'pulmonary artery':'الشريان الرئوي','femoral artery':'الشريان الفخذي','renal artery':'الشريان الكلوي',
 'superior vena cava':'الوريد الأجوف العلوي','inferior vena cava':'الوريد الأجوف السفلي','portal vein':'الوريد البابي',
 'internal jugular vein':'الوريد الوداجي الباطن','subclavian vein':'الوريد تحت الترقوة','femoral vein':'الوريد الفخذي',
 'coronary sinus':'الجيب التاجي','right atrium':'الأذين الأيمن','left atrium':'الأذين الأيسر','right ventricle':'البطين الأيمن','left ventricle':'البطين الأيسر',
 'biceps brachii':'العضلة ذات الرأسين العضدية','triceps brachii':'العضلة ثلاثية الرؤوس العضدية',
 deltoid:'العضلة الدالية',trapezius:'العضلة شبه المنحرفة','rectus abdominis':'العضلة المستقيمة البطنية',
 'gluteus maximus':'العضلة الألوية الكبرى',sartorius:'العضلة الخياطية',masseter:'العضلة الماضغة',
 "serratus posterior inferior":"العضلة المنشارية الخلفية السفلية",
 "serratus posterior superior":"العضلة المنشارية الخلفية العلوية",
 "serratus anterior":"العضلة المنشارية الأمامية",
 "latissimus dorsi":"العضلة الظهرية العريضة",
 "rhomboid major":"العضلة المعينية الكبرى",
 "rhomboid minor":"العضلة المعينية الصغرى",
 "supraspinatus":"العضلة فوق الشوكة",
 "infraspinatus muscle":"العضلة تحت الشوكة",
 "subscapularis":"العضلة تحت الكتف",
 "teres major":"العضلة المدورة الكبرى",
 "teres minor":"العضلة المدورة الصغرى",
 "pectoralis major":"العضلة الصدرية الكبرى",
 "pectoralis minor":"العضلة الصدرية الصغرى",
 "subclavius":"العضلة تحت الترقوة",
 "brachialis":"العضلة العضدية",
 "brachioradialis":"العضلة العضدية الكعبرية",
 "coracobrachialis":"العضلة الغرابية العضدية",
 "anconeus":"العضلة المرفقية",
 "sternocleidomastoid":"العضلة القصية الترقوية الخشائية",
 "splenius capitis":"العضلة الطحالية للرأس",
 "splenius cervicis":"العضلة الطحالية للعنق",
 "scalenus anterior":"العضلة الأخمعية الأمامية",
 "scalenus medius":"العضلة الأخمعية الوسطى",
 "scalenus posterior":"العضلة الأخمعية الخلفية",
 "external oblique":"العضلة المائلة الخارجية للبطن",
 "internal oblique":"العضلة المائلة الداخلية للبطن",
 "transversus abdominis":"العضلة المستعرضة البطنية",
 "external intercostal muscle":"العضلة الوربية الخارجية",
 "internal intercostal muscle":"العضلة الوربية الداخلية",
 "innermost intercostal muscle":"العضلة الوربية الأعمق",
 "transversus thoracis":"العضلة المستعرضة الصدرية",
 "iliacus":"العضلة الحرقفية",
 "psoas major":"العضلة القطنية الكبرى",
 "gluteus medius":"العضلة الألوية الوسطى",
 "gluteus minimus":"العضلة الألوية الصغرى",
 "piriformis":"العضلة الكمثرية",
 "obturator externus":"العضلة السدادية الخارجية",
 "obturator internus":"العضلة السدادية الداخلية",
 "gemellus superior":"العضلة التوأمية العلوية",
 "gemellus inferior":"العضلة التوأمية السفلية",
 "quadratus femoris":"العضلة المربعة الفخذية",
 "pectineus":"العضلة المشطية",
 "gracilis":"العضلة الرشيقة",
 "adductor brevis":"العضلة المقربة القصيرة",
 "adductor longus":"العضلة المقربة الطويلة",
 "adductor magnus":"العضلة المقربة الكبيرة",
 "adductor minimus":"العضلة المقربة الصغرى",
 "rectus femoris":"العضلة المستقيمة الفخذية",
 "vastus intermedius":"العضلة المتسعة الوسطى",
 "vastus lateralis":"العضلة المتسعة الوحشية",
 "vastus medialis":"العضلة المتسعة الإنسية",
 "biceps femoris":"العضلة ذات الرأسين الفخذية",
 "semimembranosus":"العضلة نصف الغشائية",
 "semitendinosus":"العضلة نصف الوترية",
 "gastrocnemius":"العضلة التوأمية الساقية",
 "soleus":"العضلة النعلية",
 "plantaris":"العضلة الأخمصية",
 "popliteus":"العضلة المأبضية",
 "tibialis anterior":"العضلة الظنبوبية الأمامية",
 "tibialis posterior":"العضلة الظنبوبية الخلفية",
 "supinator":"العضلة الاستلقائية",
 "pronator teres":"العضلة الكابة المدورة",
 "pronator quadratus":"العضلة الكابة المربعة",
 "palmaris longus":"العضلة الراحية الطويلة",
 "flexor carpi radialis":"العضلة المثنية الكعبرية للرسغ",
 "flexor carpi ulnaris":"العضلة المثنية الزندية للرسغ",
 "extensor carpi radialis brevis":"العضلة الباسطة الكعبرية القصيرة للرسغ",
 "extensor carpi radialis longus":"العضلة الباسطة الكعبرية الطويلة للرسغ",
 "extensor carpi ulnaris":"العضلة الباسطة الزندية للرسغ",
 "flexor digitorum profundus":"العضلة المثنية العميقة للأصابع",
 "flexor digitorum superficialis":"العضلة المثنية السطحية للأصابع",
 "flexor digitorum longus":"العضلة المثنية الطويلة للأصابع",
 "flexor digitorum brevis":"العضلة المثنية القصيرة للأصابع",
 "extensor digitorum":"العضلة الباسطة للأصابع",
 "extensor digitorum longus":"العضلة الباسطة الطويلة للأصابع",
 "extensor digiti minimi":"العضلة الباسطة للخنصر",
 "extensor indicis":"العضلة الباسطة للسبابة",
 "abductor pollicis brevis":"العضلة المبعدة القصيرة للإبهام",
 "abductor pollicis longus":"العضلة المبعدة الطويلة للإبهام",
 "flexor pollicis brevis":"العضلة المثنية القصيرة للإبهام",
 "flexor pollicis longus":"العضلة المثنية الطويلة للإبهام",
 "extensor pollicis brevis":"العضلة الباسطة القصيرة للإبهام",
 "extensor pollicis longus":"العضلة الباسطة الطويلة للإبهام",
 "adductor pollicis":"العضلة المقربة للإبهام",
 "opponens pollicis":"العضلة المقابلة للإبهام",
 "abductor hallucis":"العضلة المبعدة لإبهام القدم",
 "adductor hallucis":"العضلة المقربة لإبهام القدم",
 "flexor hallucis brevis":"العضلة المثنية القصيرة لإبهام القدم",
 "flexor hallucis longus":"العضلة المثنية الطويلة لإبهام القدم",
 "extensor hallucis brevis":"العضلة الباسطة القصيرة لإبهام القدم",
 "extensor hallucis longus":"العضلة الباسطة الطويلة لإبهام القدم",
 eye:'العين',eyeball:'مقلة العين',retina:'الشبكية',cornea:'القرنية',lens:'العدسة',skin:'الجلد',
};
export function normalizeArabic(value:string):string {
 return value.normalize('NFKD').replace(/[\u0300-\u036f\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06ed\u0640]/g,'').replace(/[أإآٱ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').toLowerCase().trim().replace(/\s+/g,' ');
}
const muscleParts:Record<string,string>={
 'long head':'الرأس الطويل','short head':'الرأس القصير',
 'lateral head':'الرأس الوحشي','medial head':'الرأس الإنسي',
 'superficial head':'الرأس السطحي','deep head':'الرأس العميق',
 'humeral head':'الرأس العضدي','ulnar head':'الرأس الزندي',
 'oblique head':'الرأس المائل','transverse head':'الرأس المستعرض',
 'clavicular part':'الجزء الترقوي','sternocostal part':'الجزء القصي الضلعي',
 'abdominal part':'الجزء البطني','acromial part':'الجزء الأخرمي',
 'spinal part':'الجزء الشوكي','ascending part':'الجزء الصاعد',
 'descending part':'الجزء النازل','transverse part':'الجزء المستعرض',
 'oblique part':'الجزء المائل','straight part':'الجزء المستقيم',
};
export function arabicName(name:string):string|null {
 const key=name.toLowerCase().trim();
 if(terms[key]) return terms[key];
 const compound=key.match(/^(.+?) of (.+)$/);
 if(compound && muscleParts[compound[1]]){
  const muscle=arabicName(compound[2]);
  if(muscle) return `${muscleParts[compound[1]]} ل${muscle.startsWith('ال')?muscle.slice(1):muscle}`;
 }

 const side=key.match(/^(right|left) (.+)$/);
 if(side){const base=arabicName(side[2]);if(base)return `${base} (${side[1]==='right'?'يمين':'يسار'})`;}
 return null;
}
export function bilingualName(name:string):string {const ar=arabicName(name);return ar?`${ar} · ${name}`:name;}
const aliases:Record<string,string>={'قصبة هوائية':'trachea','القصبة الهوائية':'trachea','مخ':'brain','كليه':'kidney','رئه':'lung','اورطي':'aorta'};
export function searchConcepts(concepts:Concept[],query:string):Concept[]{
 const q=normalizeArabic(query);if(!q)return [];
 const alias=Object.entries(aliases).find(([a])=>normalizeArabic(a)===q)?.[1];
 return concepts.map(c=>{const en=normalizeArabic(c.name),ar=normalizeArabic(arabicName(c.name)??'');const id=normalizeArabic(c.id);return {c,score:en===q||ar===q||id===q?0:en.startsWith(q)||ar.startsWith(q)?1:2,en,ar,id};})
 .filter(x=>q.split(' ').every(t=>`${x.en} ${x.ar} ${x.id}`.includes(t))||(alias&&x.en.includes(alias)))
 .sort((a,b)=>a.score-b.score||a.c.name.length-b.c.name.length).slice(0,80).map(x=>x.c);
}
