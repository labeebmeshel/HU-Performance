# نظام تقييم الأداء — قاعدة بيانات Live

تطبيق React (Vite) + Firebase (Firestore) لتقييم أداء الموظفين، مع صلاحيات لكل مدير (كل مدير يشوف فريقه بس) وداشبورد تفاعلية.

---

## 1) إعداد Firebase (خطوة لازم تعملها الأول)

1. روح على https://console.firebase.google.com وسجّل دخول بحساب Google
2. **إنشاء مشروع جديد** (Add project) → اديله اسم زي `appraisal-system` → كمّل الخطوات (تقدر تعطّل Google Analytics، مش لازم)
3. من الصفحة الرئيسية للمشروع، دوس على أيقونة **Web (</>)** عشان تسجّل تطبيق ويب جديد → اديله اسم (Nickname) أي حاجة → **مش محتاج Firebase Hosting** (سيبها من غير تفعيل)
4. هيديك كائن `firebaseConfig` فيه `apiKey`, `authDomain`, `projectId`... — **انسخهم**
5. افتح ملف `src/firebase.js` في المشروع، واستبدل القيم اللي فيها `REPLACE_ME` بالقيم اللي نسختها

### تفعيل Firestore
1. من القائمة الجانبية في Firebase Console: **Build → Firestore Database → Create database**
2. اختر **Start in production mode** (هنظبط الصلاحيات بنفسنا تحت)
3. اختر أقرب Location (مثلاً `eur3` أو `me-west1` لو متاحة)

### تفعيل تسجيل الدخول المجهول (Anonymous Auth)
1. من القائمة الجانبية: **Build → Authentication → Get started**
2. من تبويب **Sign-in method**، فعّل **Anonymous**

### ضبط صلاحيات Firestore (مهم جدًا لأمان البيانات)
من **Firestore Database → Rules**، استبدل المحتوى بده:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /appraisal/{docId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

ده بيمنع أي حد بره التطبيق من قراءة أو تعديل البيانات، ويسمح بس لأي مستخدم داخل التطبيق (حتى لو مجهول الهوية عبر Anonymous Auth) بالتعامل مع بيانات التقييم.

> ⚠️ ملاحظة أمان: النظام ده يعتمد على "اختيار اسم" بدل تسجيل دخول حقيقي بكلمة مرور — مناسب لفريق داخلي محدود وموثوق. أي حد يعرف رابط الموقع يقدر يدخل ويختار أي اسم. لو محتاج حماية أقوى (تسجيل دخول فعلي بالإيميل لكل مدير)، ده تطوير إضافي منفصل.

---

## 2) التشغيل محليًا (اختياري، للتجربة قبل النشر)

```bash
npm install
npm run dev
```

هيفتح على `http://localhost:5173`

---

## 3) الرفع على GitHub والنشر التلقائي

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

بعد الرفع:
1. روح لصفحة الـ Repository على GitHub → **Settings → Pages**
2. من **Build and deployment → Source**، اختر **GitHub Actions**
3. الـ Workflow الموجود في `.github/workflows/deploy.yml` هيشتغل تلقائيًا مع كل `push` على `main`، ويبني المشروع وينشره
4. بعد أول تشغيل ناجح (تقدر تتابعه من تبويب **Actions**)، هتلاقي رابط الموقع في نفس صفحة **Settings → Pages**

---

## 4) أول استخدام للموقع بعد النشر

1. افتح الرابط → دوس **"دخول كمسؤول نظام (HR)"**
2. الرقم السري الافتراضي: `1234` — **غيّره فورًا من تبويب "الإعدادات"**
3. روح لـ **"قاعدة بيانات الموظفين"** وارفع الأسماء (نسخ ولصق أو يدوي):
   `الاسم, القسم, اسم المدير المباشر, المسار (individual/supervisor)`
4. كل مدير يفتح نفس الرابط ويختار اسمه — هيشوف فريقه تلقائيًا في تبويب **"فريقي"**

---

## الفرق عن نسخة Claude Artifact

- البيانات دلوقتي متخزنة على Firebase Firestore (قاعدة بيانات Live حقيقية) بدل تخزين Claude الداخلي
- أي تحديث (تقييم جديد، إضافة موظف) بيظهر **لحظيًا** لكل الناس المفتوحين على الموقع في نفس الوقت (Realtime)
- هوية المستخدم (مين هو) بتتحفظ على المتصفح بتاعه بس (`localStorage`)، مش على قاعدة البيانات المشتركة
