# سياسة الأمان / Security policy

تُطبّق الإصلاحات الأمنية على الفرع `main`. لا تنشر مفاتيح أو بيانات شخصية أو تفاصيل ثغرة غير معالجة في القضايا العامة.

بعد إتاحة المستودع للعامة وتفعيل الإبلاغ الخاص، استخدم **Security → Report a vulnerability** لإرسال تقرير سري يتضمن خطوات إعادة المشكلة وتأثيرها. لا يتطلب التقرير نشر بريدك في الشيفرة. إذا لم يظهر الخيار، لا تضع تفاصيل الثغرة في قضية عامة؛ اطلب تفعيل الإبلاغ الخاص دون تفاصيل حساسة.

Security fixes target `main`. Once private vulnerability reporting is enabled, use **Security → Report a vulnerability**. Include reproduction steps, affected versions and impact; do not include live credentials or personal datasets. If reporting is unavailable, request its activation without disclosing exploit details publicly. No response-time guarantee is offered.

This is a static browser application with no required API keys or application login. Anything bundled into client JavaScript, including `VITE_*` environment variables, is public. Keep credentials out of the repository and build environment. The default development server binds only to loopback.

Production security headers are configured in `vercel.json`. Other hosts must apply equivalent headers. The content security policy permits inline styles required by React and the UI library, but no inline scripts or eval. Test actual HTTPS response headers and the 3D viewer after deployment. No production deployment is performed by CI.

CI uses read-only default token permissions, immutable action pins, dependency auditing and catalogue/build validation. CodeQL starts on public-repository events. Dependabot proposes updates; updates are reviewed and tested before merge.
