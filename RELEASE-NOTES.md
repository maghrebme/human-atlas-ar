# جسم الإنسان — الإصدار الأول v1.0.0

أول إصدار للنسخة العربية من [Human Atlas](https://github.com/ashemag/human-atlas).

- واجهة عربية من اليمين إلى اليسار بخط IBM Plex Sans Arabic وأرقام 0–9.
- أسماء عربية لجميع المفاهيم الحالية البالغ عددها 3,432، مع الأسماء الإنجليزية والبحث باللغتين.
- عرض 2,234 جزءًا تشريحيًا، مع الفحص والعزل والتفكيك التدريجي.
- واجهة متجاوبة، ودروس واختبارات تمهيدية، وإخفاء الجهاز التناسلي افتراضيًا.
- الحفاظ على محرك Three.js والهندسة ومعرّفات المصدر وحقوق MIT وCC BY 4.0.

## التنزيل والتشغيل

نزّل `human-atlas-ar-v1.0.0-web.zip`، ثم فك الضغط وانشر محتوياته على استضافة ثابتة عبر HTTP/HTTPS. لا يُشغّل بفتح `index.html` مباشرة عبر `file://`. يحتوي الملف على `vercel.json` لترويسات الأمان عند استخدام Vercel، وملفات الترخيص والنسب. طبّق ترويسات مكافئة عند استخدام مضيف آخر.

للبناء من المصدر: `npm ci --ignore-scripts` ثم `npm run build`. المخرجات في `dist/`. استخدم `npm run dev` للتطوير المحلي. لا يحتاج التطبيق إلى حساب أو مفاتيح API.

## English overview

First release of the Arabic-first Human Atlas adaptation: complete Arabic labels for the current 3,432-concept catalogue, bilingual search, responsive RTL UI, 2,234 selectable anatomy parts, inspection/isolation/explosion controls, and introductory Learn/Quiz modes. The reproductive system starts hidden.

Download the web ZIP for static hosting over HTTP/HTTPS. Verify it with `SHA256SUMS.txt`. Source installation uses `npm ci --ignore-scripts`, followed by `npm run build`; Node.js 22.13+ is required. Security headers are included for Vercel; other hosts need equivalent configuration.

## Validation and limitations / التحقق والحدود

TypeScript, anatomy data, Arabic coverage/search, interaction, camera-continuity tests, and the production build are checked locally. Automated dependency auditing and secret scanning are run during preparation. GitHub CI workflow upload remains pending authorization; this release does not claim GitHub CI verification. Desktop/mobile visual verification has not been repeated for this release.

The model represents adult male reference anatomy. Terminology has not been independently reviewed by an anatomist; descriptions and learning content are introductory. This is an educational atlas, not a clinical tool.

## Attribution / الحقوق

Based on [ashemag/human-atlas](https://github.com/ashemag/human-atlas), MIT. BodyParts3D © The Database Center for Life Science, CC BY 4.0. See `LICENSE` and `ATTRIBUTION.md` in the download. Source geometry, identifiers and required credits are preserved.
