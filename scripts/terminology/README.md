# المصطلحات العربية / Arabic terminology

يغطي القاموس جميع أسماء الكتالوج الحالي، بما فيها الأسماء المركبة، مع إبقاء الاسم الإنجليزي ومعرّف المصدر دون تغيير. التغطية الكاملة لا تعني اعتمادًا طبيًا مستقلًا للمصطلحات.

- `lexicon.txt`: المصطلحات الأساسية والاستثناءات الدقيقة، بصيغة `English|العربية`.
- `modifiers.txt`: الصفات بصيغتي المذكر والمؤنث.
- `generate.mjs`: يجمع المصطلحات والعلاقات وأرقام البنى والجهات في قاموس ثابت قابل للمراجعة.
- `../../app/terminology-ar.json`: الأسماء الكاملة المستخدمة في العرض والبحث.

تُراجع الاستثناءات في القاموس الأساسي ثم يعاد التوليد والتحقق:

```sh
node scripts/terminology/generate.mjs
node scripts/validate-arabic.mjs
npm run check
npm run build
```

The catalogue combines authored base terms with compositional Arabic translations. Exact entries override composition; nested relationships preserve the scope of left/right and numbered branches. Runtime lookup uses the checked-in complete labels, with the existing limited fallback retained for names outside this catalogue. Review the generated diff whenever editing terminology. Coverage tests reject missing labels, Latin text in Arabic names, non-Latin digits, and lost numeric identifiers. They also check representative compound wording and Arabic search.

Translation coverage is distinct from specialist nomenclature validation; this catalogue has not been independently reviewed by an anatomist. English source labels remain available for comparison. Anatomy data and attribution come from [ashemag/human-atlas](https://github.com/ashemag/human-atlas); translation does not modify the source model or its IDs.
