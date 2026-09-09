# جسم الإنسان

أطلس تشريحي تفاعلي ثلاثي الأبعاد بواجهة عربية، مبني على المشروع الأصلي **[Human Atlas — ashemag/human-atlas](https://github.com/ashemag/human-atlas)** باستخدام React وThree.js وshadcn/ui. تحتفظ هذه النسخة بمحرك العرض وهندسة التشريح ومعرّفات البنى وحقوق أصحاب المشروع والبيانات الأصلية.

استكشف **2,234 جزءًا قابلًا للتحديد** ضمن **15 جهازًا ومجموعة تشريحية**، وابحث بين **3,432 مفهومًا تشريحيًا** من نموذج BodyParts3D المرجعي لذكر بالغ.

> **English overview:** Jism Al Insan is an Arabic-first adaptation of [Human Atlas by ashemag](https://github.com/ashemag/human-atlas). It preserves the original Three.js renderer, anatomy geometry, source identifiers, and attribution, while adding an RTL interface, IBM Plex Sans Arabic, Latin digits (0–9), bilingual search, introductory lessons, and quizzes. Arabic labels cover **all 3,432 current concepts**, including compound names; English source names remain available alongside Arabic.

## المزايا والاستكشاف

- تدوير النموذج وتكبيره وتحديد البنى مباشرة على الجسم.
- إظهار الأجهزة أو إخفاؤها، مع إعدادات سريعة للعظام والأعضاء.
- تفكيك التشريح تدريجيًا إلى عرض متباعد للأجزاء الظاهرة.
- البحث بالعربية والإنجليزية ومعرّفات المصدر، مع تجاهل التشكيل والتطويل وتوحيد بعض صور الحروف العربية.
- عزل البنية المحددة وعرض اسمها العربي، عند توفره، إلى جانب اسمها الإنجليزي.
- واجهة من اليمين إلى اليسار بخط **IBM Plex Sans Arabic** وأرقام **0–9**، مع أدوات متجاوبة للهاتف والحاسوب.
- **8 دروس تمهيدية** واختبار من **8 أسئلة** مع تصحيح الإجابات واحتساب النتيجة.

## المشروع الأصلي وحقوق المساهمة

هذه نسخة معدّلة من **[https://github.com/ashemag/human-atlas](https://github.com/ashemag/human-atlas)**، وليست إعادة بناء مستقلة لمحرك التشريح. يعود الفضل في الأساس البرمجي وتجهيز النموذج إلى المشروع الأصلي ومساهميه؛ وتضيف هذه النسخة التعريب وميزات التعلّم والاختبار وتحسينات الواجهة.

[العرض التجريبي للمشروع الأصلي باللغة الإنجليزية](https://human-atlas-seven.vercel.app) — هذا الرابط يعرض المشروع الأصلي، وليس النسخة العربية الحالية.

## التشغيل محليًا

يتطلب المشروع **Node.js 22.13 أو أحدث**. لا يلزم حساب أو مفتاح API لتشغيل التطبيق محليًا.

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

افتح [المعاينة المحلية](http://127.0.0.1:3016/). لإنشاء نسخة الإنتاج:

```sh
npm run build
```

تُحفظ ملفات البناء في `dist/`. يتوفر المزيد عن الإعداد والتغطية والقيود في [دليل النسخة العربية](ARABIC-EDITION.md).

## التحقق والاختبارات

```sh
npm run check
node scripts/validate-atlas.mjs
node scripts/validate-interactions.mjs
node scripts/validate-arabic.mjs
node scripts/validate-explosion-camera.mjs
npm run build
```

تشمل الفحوص سلامة ملفات الهندسة وربط الأجزاء بالمفاهيم، وعدم تداخل الأجزاء في تخطيط التفكيك، والبحث والتحديد والتمييز بين النقر والسحب. تتحقق الفحوص الإضافية من تطبيع البحث العربي، والمصطلحات، واستمرارية حركة مركز الكاميرا أثناء التفكيك.

شملت المراجعة في المتصفح التحديد والبحث والعزل وأوضاع التعلّم والاختبار وعرض الهاتف. لم يُختبر الأداء على أجهزة هاتف فعلية أو اللمس المتعدد باستخدام عتاد حقيقي.

## بيانات التشريح وتغطية الترجمة

يستخدم العارض **BodyParts3D 4.0**، وهو نموذج تشريحي مرجعي لذكر بالغ مرخّص بموجب **CC BY 4.0**. لا يمثل كل البنى البشرية أو الاختلافات التشريحية. قد يضم المفهوم المسمى عدة أجزاء هندسية منفصلة، وتميز الأوصاف بين شرح العضو ونبذة عامة عن الجهاز.

تغطي المصطلحات العربية **جميع المفاهيم الحالية وعددها 3,432**، بما فيها الأسماء المركبة وأجزاء العضلات وفروع الأوعية والبنى المرقّمة. تبقى أسماء المصدر الإنجليزية متاحة إلى جانب العربية. يوجد القاموس الكامل في `app/terminology-ar.json`، وتتحقق الاختبارات من تغطية كل مفهوم وكل جزء قابل للاختيار دون تغيير معرّفات التشريح أو ملفات النموذج. انظر `scripts/terminology/README.md` لمراجعة المصطلحات وتحديثها.

تضم الهندسة المرفقة **2,288,268 مثلثًا**، ويبلغ حجم تنزيل الهندسة المضغوطة نحو **33 MB**. جرى تبسيطها للعرض في المتصفح مع الاحتفاظ بكل جزء مصدري. راجع [حقوق البيانات ومصادرها](public/ATTRIBUTION.md) للاطلاع على الإسناد وتفاصيل التعديلات.

التطبيق أداة استكشاف تعليمية، وليس أداة للتشخيص أو الجراحة.

## آلية العمل

تُجمع الهندسة في دفعات للرسم. تتحكم بيانات تُرسل إلى معالج الرسوم في إزاحة كل بنية وظهورها وتحديدها، مع الاحتفاظ بهندسة الأجزاء لاختيارها بدقة. يشمل تخطيط التفكيك الأجزاء الظاهرة فقط، ويتجدد الرسم عند تغير المشهد لتقليل عدد عمليات الرسم المنفصلة.

تتيح أدوات **WebMCP** الاختيارية البحث والتحديد في المتصفحات المتوافقة. تعمل الواجهة المرئية من دونها.

## إعادة تجهيز الهندسة

يتضمن المستودع هندسة جاهزة للمتصفح؛ وإعادة تجهيزها اختيارية. تتطلب هذه العملية أرشيف OBJ الرسمي من BodyParts3D وجداول البيانات الإنجليزية، ثم إعداد ربط المفاهيم ومجموعات العرض وتشغيل `scripts/convert-anatomy.py`، وبعده `scripts/optimize-anatomy.mjs` و`scripts/compress-models.mjs`. يستخدم التبسيط حد خطأ نسبيًا قدره **0.2%** لكل بنية.

## النشر

يمكن استيراد المستودع إلى Vercel بوصفه مشروع Vite. يحدد الملف `vercel.json` تثبيت الاعتماديات باستخدام `npm ci`، والبناء باستخدام `npm run build`، ومجلد الإخراج `dist`. يمكن أيضًا تقديم ملفات البناء عبر استضافة ملفات ثابتة.

## الترخيص والمساهمة

الشيفرة الأصلية متاحة بموجب [ترخيص MIT](LICENSE). **لبيانات التشريح ترخيص منفصل هو CC BY 4.0**؛ يجب الحفاظ على الإسناد عند إعادة توزيعها. تحتفظ المكتبات الخارجية بتراخيصها الخاصة، وخط IBM Plex Sans Arabic مرخّص بموجب SIL Open Font License.

نرحب بتقارير المشكلات وطلبات الدمج. عند الإبلاغ عن مشكلة في التفاعل، أرفق خطوات إعادة إنتاجها واسم المتصفح والجهاز.

## For English readers

This repository contains the Arabic edition of **Jism Al Insan**, derived from [ashemag/human-atlas](https://github.com/ashemag/human-atlas). The original project and BodyParts3D retain their respective credits and licenses. The linked upstream demo is the original English application, not a deployment of this Arabic edition.

To run locally, install **Node.js 22.13+**, run `npm ci`, then `npm run dev -- --host 127.0.0.1`, and open [http://127.0.0.1:3016](http://127.0.0.1:3016). Run `npm run build` to generate the static site in `dist/`. No API keys are required. See [ARABIC-EDITION.md](ARABIC-EDITION.md) for implementation details, validation, and known limitations.

English anatomical names remain available alongside translated Arabic names. Translation coverage is incomplete, and the model is an adult male reference rather than a complete representation of human anatomical variation. The application is intended for education, not diagnosis or surgical planning. Code is MIT-licensed; anatomy data is separately licensed under **CC BY 4.0**, with full attribution in [public/ATTRIBUTION.md](public/ATTRIBUTION.md).
