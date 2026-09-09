import {useEffect,useMemo,useState} from 'react';
import {X} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {EXPLANATIONS,SYSTEMS,type Atlas,type Concept} from './anatomy';
import {arabicName} from './arabic';

export const lessons = [
 {name:'heart',system:'cardiac',question:'أي عضو يضخ الدم عبر الدوران الرئوي والجهازي؟'},
 {name:'brain',system:'nervous',question:'أي عضو يعالج المعلومات ويدعم الذاكرة والحركة واللغة؟'},
 {name:'liver',system:'digestive',question:'أي عضو يعالج المغذيات وينتج الصفراء؟'},
 {name:'stomach',system:'digestive',question:'أي عضو يخزن الطعام ويمزجه بالحمض والإنزيمات؟'},
 {name:'spleen',system:'lymphatic',question:'أي عضو يرشح الدم ويسهم في الاستجابة المناعية؟'},
 {name:'pancreas',system:'endocrine',question:'أي عضو ينتج إنزيمات هضمية وهرمونات منها الإنسولين؟'},
 {name:'urinary bladder',system:'urinary',question:'أي عضو يخزن البول القادم من الكليتين؟'},
 {name:'trachea',system:'respiratory',question:'أي ممر هوائي يصل الحنجرة بالشعب الهوائية؟'},
] as const;
export default function LearningPanel({mode,atlas,onSelect,onClose,onReset}:{mode:'learn'|'quiz';atlas:Atlas;onSelect:(c:Concept)=>void;onClose:()=>void;onReset:()=>void}){
 const available=useMemo(()=>lessons.flatMap(l=>{const concept=atlas.concepts.find(c=>c.name.toLowerCase()===l.name);return concept?[{...l,concept}]:[];}),[atlas]);
 const [index,setIndex]=useState(0),[answer,setAnswer]=useState<string|null>(null),[score,setScore]=useState(0),[finished,setFinished]=useState(false);
 useEffect(()=>{setIndex(0);setAnswer(null);setScore(0);setFinished(false);},[mode]);
 const lesson=available[index];
 const options=useMemo(()=>{if(!lesson)return [];const distractors=available.filter(l=>l.name!==lesson.name).slice(0,3);const choices=[...distractors];choices.splice(index%4,0,lesson);return choices;},[available,index,lesson]);
 if(!lesson)return <aside className="learning-panel glass">الدروس غير متاحة في هذا النموذج.<Button onClick={onClose}>إغلاق</Button></aside>;
 const next=()=>{onReset();if(index+1===available.length){setFinished(true);return;}setIndex(i=>i+1);setAnswer(null);};
 return <aside className="learning-panel glass" aria-label={mode==='learn'?'تعلّم التشريح':'اختبار التشريح'}>
 <div className="panel-heading"><span>{mode==='learn'?'تعلّم خطوة بخطوة':'اختبر معلوماتك'}</span><Button variant="ghost" className="icon-button" aria-label="إغلاق التعلم" onClick={onClose}><X size={18}/></Button></div>
 <p className="lesson-progress">{finished?'اكتملت الجولة':`${index+1} / ${available.length}`} · أعضاء أساسية</p>
 {finished?<><h2>{mode==='quiz'?`نتيجتك: ${score} من ${available.length}`:'أحسنت، أكملت الدروس'}</h2><p>عد إلى الاستكشاف لتتعرف إلى مواضع الأعضاء وبناها.</p><Button onClick={()=>{onReset();setIndex(0);setAnswer(null);setScore(0);setFinished(false);}}>ابدأ من جديد</Button></>:<>
 <h2>{mode==='learn'?arabicName(lesson.name):lesson.question}</h2>
 {mode==='learn'?<><p className="english-term" lang="en" dir="ltr">{lesson.name}</p><p>{EXPLANATIONS[lesson.name]??SYSTEMS.find(s=>s.id===lesson.system)?.description}</p><Button className="lesson-show" onClick={()=>onSelect(lesson.concept)}>اعرض العضو في النموذج</Button></>:<div className="quiz-options">{options.map(o=><Button variant="outline" key={o.name} disabled={answer!==null} className={answer!==null&&o.name===lesson.name?'correct':answer===o.name?'incorrect':''} onClick={()=>{setAnswer(o.name);if(o.name===lesson.name)setScore(s=>s+1);onSelect(lesson.concept);}}>{arabicName(o.name)}</Button>)}</div>}
 <div aria-live="polite">{answer!==null&&<p className="answer-feedback">{answer===lesson.name?'إجابة صحيحة.':'الإجابة الصحيحة: '+arabicName(lesson.name)} <span lang="en" dir="ltr">{lesson.name}</span></p>}</div>
 <Button variant="outline" className="lesson-next" disabled={mode==='quiz'&&answer===null} onClick={next}>{index+1===available.length?'إنهاء الجولة':'التالي'}</Button>
 </>}
 </aside>;
}
