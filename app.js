// FIREBASE CONFIGURATION
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyArNWcgj0L3YaMC_mwbqk6s5fIYJLq1_wQ",
    authDomain: "hr-performance-system-f388a.firebaseapp.com",
    databaseURL: "https://hr-performance-system-f388a-default-rtdb.firebaseio.com",
    projectId: "hr-performance-system-f388a"
};

// Dictionary for Dynamic UI Translations
const I18N = {
    ar: {
        app_title: "منظومة تقييم الأداء المؤسسي",
        header_title: "منظومة تقييم الأداء المؤسسي",
        header_sub: "مزامنة سحابية مباشرة",
        change_password: "تغيير كلمة السر",
        logout: "خروج",
        login_title: "تسجيل الدخول",
        login_desc: "أدخل بيانات الحساب للوصول للنظام",
        username: "اسم المستخدم",
        password: "كلمة السر",
        login_btn: "دخول",
        backup_btn: "نسخة احتياطية (Backup)",
        tab_analytics: "التحليلات الإحصائية",
        tab_import: "استيراد الموظفين والتقييمات",
        tab_accounts: "إدارة الحسابات وصلاحيات التعديل",
        tab_reports: "سجل التقييمات",
        tab_kras: "صيانة البيانات والـ KRAs",
        filter_label: "تصفية:",
        reset_btn: "إعادة ضبط",
        stat_total_emp: "إجمالي الموظفين",
        stat_avg_score: "المتوسط العام (الموزون)",
        stat_completed: "المكتملين",
        stat_pending: "المتبقين",
        pending_mgr_title: "متابعة المدراء والتقييمات المعلقة",
        pending_mgr_sub: "قائمة بالمدراء لإظهار نسب الإنجاز واستخراج إيميلات المتأخرين.",
        show_pending_only: "عرض المتأخرين فقط",
        show_all_mgrs: "عرض جميع المدراء",
        copy_emails: "نسخ إيميلات المتأخرين",
        export_excel: "تصدير Excel",
        col_mgr_code: "كود المدير",
        col_mgr_name: "اسم المدير المقيم",
        col_department: "الإدارة",
        col_email: "البريد الإلكتروني",
        col_total_sub: "إجمالي المرؤوسين",
        col_evaluated: "تم تقييمهم",
        col_remaining: "المتبقي",
        col_completion_rate: "نسبة الإنجاز",
        overall_completion: "نسبة إنجاز التقييم الإجمالية:",
        level_dist_title: "توزيع مستويات التقييم",
        level_dist_sub: "تفاصيل نسب الموظفين وفق المستويات من 1 إلى 5",
        dept_rankings: "ترتيب الإدارات بالأداء",
        kras_breakdown: "تحليل محاور التقييم (المساهمة الموزونة %)",
        level_percentages: "النسب المئوية للمستويات",
        dept_averages: "متوسط درجات الإدارات",
        import_emp_title: "1. إضافة/استيراد شيت الموظفين والمدراء",
        import_emp_sub: "رفع شيت Excel لإضافة موظفين جداد للقاعدة أو تحديث البيانات الحالية.",
        emp_template: "نموذج الموظفين Excel",
        upload_emp_hint: "اضغط لرفع شيت الموظفين وإضافتهم للموجودين",
        import_eval_title: "2. استيراد شيت التقييمات المباشرة",
        import_eval_sub: "رفع شيت يحتوي على تقييمات الموظفين بالدرجات لحفظها دفعة واحدة.",
        eval_template: "نموذج التقييمات Excel",
        upload_eval_hint: "اضغط لرفع شيت التقييمات الجاهزة",
        accounts_title: "إدارة حسابات الموظفين وصلاحيات التعديل للمدراء",
        accounts_sub: "إضافة موظفين، إدارة صلاحيات الدخول، والتحكم في إغلاق/فتح التعديل لكل مدير.",
        add_emp_manual: "إضافة موظف جديد يدويًا",
        col_code: "الكود",
        col_name: "اسم الموظف",
        col_title: "الوظيفة",
        col_section: "القسم",
        col_role: "الصفة",
        col_direct_mgr: "المدير المباشر",
        col_username: "اسم المستخدم",
        col_password: "كلمة السر",
        col_edit_status: "حالة التعديل للمدير",
        col_actions: "الإجراءات",
        reports_title: "سجل التقييمات النهائي (الموزون)",
        reports_sub: "عرض النتائج الشاملة المكتملة والمتبقية مباشرة من السحابة بناءً على أوزان المعايير.",
        export_report: "تصدير التقرير Excel",
        col_evaluator: "المدير المقيم",
        col_status: "الحالة",
        col_total_score: "الدرجة الموزونة",
        col_percentage: "النسبة المئوية",
        col_level: "المستوى",
        kras_manage_title: "إدارة عناصر التقييم والـ KRAs والأوزان النسبية",
        kras_manage_sub: "إضافة وتعديل عناصر التقييم وتحديد أوزانها النسبية.",
        add_kra_btn: "إضافة عنصر جديد",
        db_maintenance_title: "النسخ الاحتياطي وصيانة القاعدة",
        db_maintenance_sub: "التحكم في حفظ وتنظيف قاعدة البيانات السحابية والمحلية.",
        backup_card_title: "النسخ الاحتياطي",
        backup_card_desc: "تنزيل نسخة احتياطية بصيغة (JSON) تحتوي على كل الموظفين والتقييمات.",
        download_backup: "تنزيل النسخة",
        clear_cache_title: "تنظيف المتصفح",
        clear_cache_desc: "يمسح الملفات المؤقتة من الجهاز الحالي دون المساس ببيانات السحابة.",
        clear_cache_btn: "مسح المؤقت",
        purge_cloud_title: "مسح السحابة",
        purge_cloud_desc: "حذف كافة الموظفين والتقييمات سحابياً (يتطلب كلمة سر الأدمن).",
        purge_cloud_btn: "مسح شامل",
        mgr_panel_title: "تقييم المرؤوسين المباشرين",
        set_as_mgr: "تعيين كـ (مدير تقييم)",
        cancel_btn: "إلغاء",
        save_emp_btn: "حفظ الموظف",
        new_password: "كلمة السر الجديدة:",
        confirm_password: "تأكيد كلمة السر الجديدة:",
        update_password: "تحديث كلمة السر",
        eval_modal_hint: "اختر الوصف السلوكي الأنسب لكل عنصر وسيتم النشر سحابياً فوراً.",
        eval_notes_label: "التوصيات والملاحظات:",
        save_eval_btn: "حفظ التقييم",
        account_settings: "إعداد الحساب وصلاحيات التعديل",
        save_btn: "حفظ التغييرات",
        save_kra_btn: "حفظ العنصر",
        footer_text: "منظومة تقييم الأداء المؤسسي © 2026 - Firebase Realtime Database",
        delete_eval_btn: "حذف التقييم",
        reset_eval_btn: "إعادة ضبط (Reset)",
        edit_eval_btn: "تعديل التقييم",
        eval_locked_msg: "مكتمل (محمي من التعديل)",
        freeze_edit_btn: "تجميد التعديل للمدير",
        unfreeze_edit_btn: "فتح التعديل للمدير",
        edit_allowed: "مسموح بالتعديل",
        edit_frozen: "مجمد بواسطة الأدمن"
    },
    en: {
        app_title: "Corporate Performance Appraisal System",
        header_title: "Performance Appraisal System",
        header_sub: "Real-time Cloud Sync",
        change_password: "Change Password",
        logout: "Logout",
        login_title: "Account Login",
        login_desc: "Enter your credentials to access system",
        username: "Username",
        password: "Password",
        login_btn: "Login",
        backup_btn: "Download Backup",
        tab_analytics: "Analytics Dashboard",
        tab_import: "Import Employees & Evals",
        tab_accounts: "Account & Edit Controls",
        tab_reports: "Evaluation Reports",
        tab_kras: "KRAs & Data Maintenance",
        filter_label: "Filter:",
        reset_btn: "Reset Filters",
        stat_total_emp: "Total Employees",
        stat_avg_score: "Overall Avg (Weighted)",
        stat_completed: "Completed",
        stat_pending: "Pending",
        pending_mgr_title: "Managers & Pending Evals Tracker",
        pending_mgr_sub: "Track progress rates and export pending managers emails easily.",
        show_pending_only: "Show Pending Only",
        show_all_mgrs: "Show All Managers",
        copy_emails: "Copy Pending Emails",
        export_excel: "Export Excel",
        col_mgr_code: "Manager Code",
        col_mgr_name: "Manager Name",
        col_department: "Department",
        col_email: "Email Address",
        col_total_sub: "Subordinates",
        col_evaluated: "Evaluated",
        col_remaining: "Remaining",
        col_completion_rate: "Progress Rate",
        overall_completion: "Overall Completion Rate:",
        level_dist_title: "Rating Levels Distribution",
        level_dist_sub: "Employee percentages across levels 1 to 5",
        dept_rankings: "Department Performance Rankings",
        kras_breakdown: "Criteria Breakdown (Weighted Contribution %)",
        level_percentages: "Level Distribution %",
        dept_averages: "Department Averages",
        import_emp_title: "1. Import Employees & Managers",
        import_emp_sub: "Upload Excel file to append or update employees without deleting existing data.",
        emp_template: "Employees Excel Template",
        upload_emp_hint: "Click to upload employees Excel sheet",
        import_eval_title: "2. Import Direct Evaluations",
        import_eval_sub: "Upload Excel sheet containing pre-rated evaluations.",
        eval_template: "Evaluations Excel Template",
        upload_eval_hint: "Click to upload evaluations Excel sheet",
        accounts_title: "Manager Accounts & Edit Control Permissions",
        accounts_sub: "Add employees, manage credentials, and toggle edit locks for each manager individually.",
        add_emp_manual: "Add New Employee",
        col_code: "Code",
        col_name: "Employee Name",
        col_title: "Job Title",
        col_section: "Section",
        col_role: "Role",
        col_direct_mgr: "Direct Manager",
        col_username: "Username",
        col_password: "Password",
        col_edit_status: "Manager Edit Permission",
        col_actions: "Actions",
        reports_title: "Final Evaluation Log (Weighted)",
        reports_sub: "View complete and pending results loaded directly from cloud database.",
        export_report: "Export Full Report",
        col_evaluator: "Evaluator",
        col_status: "Status",
        col_total_score: "Total Score",
        col_percentage: "Percentage %",
        col_level: "Level",
        kras_manage_title: "Manage KRAs & Criteria Weights",
        kras_manage_sub: "Add elements and set weights (adjustments dynamically recalculate all results).",
        add_kra_btn: "Add New Criteria",
        db_maintenance_title: "Database Backup & Maintenance",
        db_maintenance_sub: "Control cloud database backup and local cache clearing.",
        backup_card_title: "JSON Backup",
        backup_card_desc: "Download full JSON backup of employees and evaluation records.",
        download_backup: "Download Backup",
        clear_cache_title: "Browser Cache",
        clear_cache_desc: "Clear local browser cache without affecting cloud data.",
        clear_cache_btn: "Clear Local Cache",
        purge_cloud_title: "Purge Cloud DB",
        purge_cloud_desc: "Permanently delete all cloud data (Admin Password required).",
        purge_cloud_btn: "Purge Cloud DB",
        mgr_panel_title: "Direct Subordinates Appraisal",
        set_as_mgr: "Assign as Manager",
        cancel_btn: "Cancel",
        save_emp_btn: "Save Employee",
        new_password: "New Password:",
        confirm_password: "Confirm Password:",
        update_password: "Update Password",
        eval_modal_hint: "Select appropriate behavioral level for each item.",
        eval_notes_label: "Notes & Recommendations:",
        save_eval_btn: "Save Evaluation",
        account_settings: "Account & Edit Permissions",
        save_btn: "Save Changes",
        save_kra_btn: "Save Element",
        footer_text: "Corporate Performance Appraisal System © 2026 - Firebase Realtime Database",
        delete_eval_btn: "Delete Eval",
        reset_eval_btn: "Reset Eval",
        edit_eval_btn: "Edit Eval",
        eval_locked_msg: "Completed (Locked)",
        freeze_edit_btn: "Lock Manager Edits",
        unfreeze_edit_btn: "Unlock Manager Edits",
        edit_allowed: "Editing Allowed",
        edit_frozen: "Locked by Admin"
    }
};

let currentLang = 'en';

function changeLanguage(lang) {
    currentLang = lang;
    const htmlTag = document.getElementById('htmlTag');
    if (lang === 'en') {
        htmlTag.setAttribute('dir', 'ltr');
        htmlTag.setAttribute('lang', 'en');
    } else {
        htmlTag.setAttribute('dir', 'rtl');
        htmlTag.setAttribute('lang', 'ar');
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (I18N[lang] && I18N[lang][key]) {
            el.innerText = I18N[lang][key];
        }
    });

    refreshActiveViews();
}

// KRAs Default Data with Full BILINGUAL Support (AR / EN)
let KRAS = [
    {
        id: "k1",
        title: "Technical Skills & Job Competence",
        title_ar: "المهارات الفنية والقدرات الوظيفية",
        weight: 20,
        levels: {
            1: "Requires continuous intense supervision with minimal completion of basic tasks.",
            2: "Meets minimal routine requirements with occasional need for follow-up.",
            3: "Very good performance; executes most tasks independently with high efficiency.",
            4: "Advanced level; applies skills professionally and provides support to colleagues.",
            5: "Expert level; innovates quality solutions and serves as a technical reference."
        },
        levels_ar: {
            1: "مستوى يتطلب توجيه وإشراف مكثف مستمر مع إنجاز محدود للمهام الأساسية.",
            2: "مستوى يلبي الحد الأدنى من متطلبات العمل الروتينية مع الحاجة لمتابعة في المواقف المعتادة.",
            3: "مستوى جيد جداً، ينفذ معظم المهام باستقلالية وكفاءة عالية ودعم محدود.",
            4: "مستوى متقدم، يطبق المهارات الفنية باحترافية وسرعة مع تقديم الدعم والحلول للزملاء.",
            5: "مستوى خبير ومتميز، يبتكر حلولاً نوعية، ويعد مرجعاً فنياً يطور أساليب العمل."
        }
    },
    {
        id: "k2",
        title: "Communication & Collaboration",
        title_ar: "مهارات التواصل والتعاون",
        weight: 15,
        levels: {
            1: "Struggles to convey information; needs continuous guidance on communication style.",
            2: "Acceptable communication in routine situations but needs support in complex cases.",
            3: "Communicates clearly and effectively; shows positive team collaboration.",
            4: "Excellent communication; facilitates smooth info flow and impacts team results.",
            5: "Highly professional; builds strong collaborative bridges and leads with diplomacy."
        },
        levels_ar: {
            1: "يواجه صعوبة ملحوظة في إيصال المعلومات، ويحتاج توجيه مستمر لأسلوب التواصل.",
            2: "تواصل مقبول في الظروف المعتادة ولكن يحتاج دعم في مواقف التواصل المركبة.",
            3: "يتواصل بوضوح وفاعلية، ويظهر تعاوناً إيجابياً ومثمراً مع كافة أفراد الفريق.",
            4: "تواصل ممتاز يسهل تدفق المعلومات بسلاسة ويؤثر إيجاباً على نتائج الفريق.",
            5: "احترافي للغاية، يبني جسور تعاون قوية وينسق بدبلوماسية عالية لحل النزاعات."
        }
    },
    {
        id: "k3",
        title: "Problem Solving & Decision Making",
        title_ar: "حل المشكلات واتخاذ القرارات",
        weight: 20,
        levels: {
            1: "Struggles to diagnose problems or offer preliminary solution ideas.",
            2: "Handles simple issues; requires direct guidance in unfamiliar situations.",
            3: "Analyzes standard problems independently and offers practical solutions.",
            4: "Skillfully analyzes complex problems and proposes effective solution options.",
            5: "Anticipates risks, identifies root causes, and creates sustainable solutions."
        },
        levels_ar: {
            1: "يواجه صعوبة في تشخيص المشكلات أو تقديم مقترحات حلول أولية.",
            2: "يتعامل مع المشكلات البسيطة ويحتاج توجيه مباشر في المواقف غير المألوفة.",
            3: "يحقق تحليلاً مستقلاً للمشكلات الاعتيادية ويقدم حلولاً عملية وفعالة.",
            4: "يحلل المشكلات المعقدة ببراعة ويقترح خيارات حلول متعددة ومبتكرة.",
            5: "يتنبأ بالمخاطر، يحدد الأسباب الجذرية، ويضع حلولاً استراتيجية مستدامة."
        }
    },
    {
        id: "k4",
        title: "Initiative & Continuous Improvement",
        title_ar: "المبادرة والتطوير المستمر",
        weight: 15,
        levels: {
            1: "Relies entirely on direct instructions without showing extra initiative.",
            2: "Occasionally takes initiative only when explicitly requested.",
            3: "Regularly initiates simple ideas and improvements supporting work quality.",
            4: "Active and proactive; seizes opportunities to enhance output quality.",
            5: "Drives innovative development initiatives beyond daily scope."
        },
        levels_ar: {
            1: "يعتمد كلياً على التعليمات المباشرة دون إبداء أي مبادرات إضافية.",
            2: "يقدم مبادرات بسيطة في أوقات متباعدة وعند الطلب المباشر فقط.",
            3: "يقدم بانتظام أفكاراً وتحسينات عملية تدعم جودة بيئة وسرعة العمل.",
            4: "مبادر ونشط، يستغل الفرص لتحسين جودة المخرجات وتطوير الأداء.",
            5: "يقود مبادرات تطويرية مبتكرة تتجاوز نطاق عمله اليومي وتحدث فارقاً."
        }
    },
    {
        id: "k5",
        title: "Sustainability & Corporate Responsibility",
        title_ar: "الاستدامة والمسؤولية المؤسسية",
        weight: 15,
        levels: {
            1: "Weak commitment to sustainable practices; needs constant reminders.",
            2: "Moderate and inconsistent compliance with corporate policies.",
            3: "Good and consistent compliance with corporate standards and policies.",
            4: "Consistently complies and actively participates in awareness initiatives.",
            5: "Role model in practicing and promoting a culture of sustainability."
        },
        levels_ar: {
            1: "التزام ضعيف بالممارسات المستدامة، ويحتاج للتذكير المستمر بالسياسات.",
            2: "التزام متوسط بضوابط المؤسسة وسياسات ترشيد الموارد بشكل غير منتظم.",
            3: "التزام جيد ومستمر بمعايير وسياسات المؤسسة والاستخدام الأمثل للموارد.",
            4: "يلتزم دائماً ويشارك بفاعلية في مبادرات التوعية وترشيد الموارد المؤسسية.",
            5: "قدوة ونموذج يتغذى بروح المسؤولية وينشر ثقافة الاستدامة والمواطنة."
        }
    },
    {
        id: "k6",
        title: "Leadership & Accountability",
        title_ar: "القيادة وتحمل المسؤولية",
        weight: 15,
        levels: {
            1: "Avoids direct responsibility and requires follow-up to complete duties.",
            2: "Takes partial responsibility; requires periodic oversight.",
            3: "Fully accountable for all core assigned duties and tasks.",
            4: "Clearly takes ownership of results and actively supports team goals.",
            5: "Proactive leader trusted during crises and critical assignments."
        },
        levels_ar: {
            1: "يتحفظ عن تحمل المسؤولية المباشرة ويحتاج متابعة لتنفيذ واجباته.",
            2: "يتحمل المسؤولية جزئياً ويحتاج إلى إشراف ومتابعة دورية لتفادي الأخطاء.",
            3: "يتحمل المسؤولية الكاملة عن كافة مهامه وواجباته الوظيفية بكل دقة.",
            4: "يمتلك زمام المبادرة، يوجه زملائه ويدعم تحقيق أهداف الفريق بكفاءة.",
            5: "قائد ملهم وموثوق في الأزمات، يتحمل نتائج القرارات الصعبة بكل شجاعة."
        }
    }
];

let firebaseApp = null;
let firebaseDB = null;

let db = {
    admin: { username: "admin", password: "123" },
    employees: [],
    evaluations: {},
    kras: []
};

let currentUser = null;
let chartLevelsInstance = null;
let chartDeptsInstance = null;
let chartKrasInstance = null;

function initFirebase() {
    try {
        if (!firebase.apps.length) {
            firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
        } else {
            firebaseApp = firebase.app();
        }
        firebaseDB = firebase.database();

        firebaseDB.ref('.info/connected').on('value', (snap) => {
            const banner = document.getElementById('firebaseStatusBanner');
            if (snap.val() === true) {
                banner.innerText = currentLang === 'ar' ? "متصل بالسحابة (Firebase Realtime) ✓" : "Connected to Cloud (Firebase) ✓";
            } else {
                banner.innerText = currentLang === 'ar' ? "جاري الاتصال بالسحابة..." : "Connecting to Cloud...";
            }
        });

        firebaseDB.ref('hr_system').on('value', (snapshot) => {
            const cloudData = snapshot.val();
            if (cloudData) {
                db = cloudData;
                if (!db.evaluations) db.evaluations = {};
                if (!db.employees) db.employees = [];
                syncKrasFromDb();
                refreshActiveViews();
            } else {
                db.kras = KRAS;
                saveDB();
            }
        });

    } catch (err) {
        console.error("Firebase init error:", err);
    }
}

function syncKrasFromDb() {
    if (db.kras && Array.isArray(db.kras) && db.kras.length > 0) {
        KRAS = db.kras;
    } else {
        db.kras = KRAS;
    }
}

function saveDB() {
    db.kras = KRAS;
    if (firebaseDB) {
        firebaseDB.ref('hr_system').set(db);
    } else {
        localStorage.setItem('hr_system_v7_db', JSON.stringify(db));
    }
}

function downloadJSONBackup() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(db, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `Backup_HR_System_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(dlAnchorElem);
    dlAnchorElem.click();
    dlAnchorElem.remove();
}

function clearLocalOnlyData() {
    if (confirm(currentLang === 'ar' ? "هل أنت متأكد من مسح كاش المتصفح محلياً؟ لن تتأثر البيانات السحابية." : "Clear browser local cache? Cloud data won't be affected.")) {
        localStorage.removeItem('hr_system_v7_db');
        alert(currentLang === 'ar' ? "تم مسح المؤقت بنجاح." : "Local cache cleared.");
        location.reload();
    }
}

function purgeCloudDatabase() {
    const pass = prompt(currentLang === 'ar' ? "تنبيه: سيتم مسح قاعدة البيانات السحابية بالكامل! أدخل كلمة سر الأدمن للتأكيد:" : "Warning: Entire Cloud DB will be purged! Enter Admin Password:");
    if (pass === db.admin.password) {
        db.employees = [];
        db.evaluations = {};
        saveDB();
        alert(currentLang === 'ar' ? "تم مسح السحابة بنجاح." : "Cloud DB purged successfully.");
        refreshActiveViews();
    } else if (pass !== null) {
        alert(currentLang === 'ar' ? "كلمة السر غير صحيحة!" : "Incorrect password!");
    }
}

// Helpers to get translated KRA title and levels with strong fallback handling
function getKraTitle(kra) {
    if (currentLang === 'en') {
        return kra.title || kra.title_ar || "Evaluation Criteria";
    }
    return kra.title_ar || kra.title || "معيار التقييم";
}

function getKraLevelDesc(kra, lvl) {
    if (currentLang === 'en') {
        if (kra.levels && kra.levels[lvl]) return kra.levels[lvl];
        if (kra.levels_ar && kra.levels_ar[lvl]) return kra.levels_ar[lvl];
        return `Level ${lvl}`;
    } else {
        if (kra.levels_ar && kra.levels_ar[lvl]) return kra.levels_ar[lvl];
        if (kra.levels && kra.levels[lvl]) return kra.levels[lvl];
        return `مستوى ${lvl}`;
    }
}

// Calculate Scores
function calculateEmpScore(empId) {
    const evalData = db.evaluations[empId];
    if (!evalData || !evalData.scores) return null;

    const activeKras = (db.kras && db.kras.length > 0) ? db.kras : KRAS;

    let weightedPercentage = 0;
    let totalWeight = 0;
    let unweightedScoreSum = 0;

    activeKras.forEach(kra => {
        const score = Number(evalData.scores[kra.id] || 0);
        if (score > 0) {
            const w = Number(kra.weight) || (100 / activeKras.length);
            weightedPercentage += (score / 5) * w;
            totalWeight += w;
            unweightedScoreSum += score;
        }
    });

    const finalPercentage = totalWeight > 0 ? (weightedPercentage * (100 / totalWeight)) : 0;
    
    let level = 1;
    if (finalPercentage >= 85) level = 5;
    else if (finalPercentage >= 70) level = 4;
    else if (finalPercentage >= 55) level = 3;
    else if (finalPercentage >= 40) level = 2;

    return {
        totalScore: unweightedScoreSum,
        percentage: Number(finalPercentage.toFixed(1)),
        level: level
    };
}

// Reset / Delete Evaluation (Admin Only Feature)
function resetEmployeeEvaluation(empId) {
    if (currentUser.role !== 'admin') {
        alert(currentLang === 'ar' ? "عفواً، هذه الصلاحية للمسؤول (Admin) فقط!" : "Access denied: Admin only!");
        return;
    }

    const emp = db.employees.find(e => e.id === empId || String(e.id) === String(empId) || e.code === String(empId));
    const empName = emp ? emp.name : empId;

    if (confirm(currentLang === 'ar' ? `هل أنت متأكد من إعادة ضبط (مسح) تقييم الموظف (${empName})؟ سيتمكن المدير المباشر من تقييمه من جديد.` : `Are you sure you want to reset/delete evaluation for (${empName})? The direct manager will be able to re-evaluate.`)) {
        delete db.evaluations[empId];
        saveDB();
        refreshActiveViews();
        alert(currentLang === 'ar' ? `تمت إعادة ضبط تقييم (${empName}) بنجاح وإتاحته للتقييم مجدداً.` : `Evaluation reset successfully for (${empName}).`);
    }
}

// Toggle Manager Edit Freeze (Admin Control)
function toggleManagerEditFreeze(mgrEmpId) {
    if (currentUser.role !== 'admin') {
        alert(currentLang === 'ar' ? "عفواً، هذه الصلاحية للمسؤول فقط!" : "Admin only!");
        return;
    }

    const emp = db.employees.find(e => e.id === mgrEmpId || e.code === mgrEmpId || String(e.id) === String(mgrEmpId));
    if (emp) {
        emp.editFrozen = !Boolean(emp.editFrozen);
        saveDB();
        refreshActiveViews();
        const statusText = emp.editFrozen 
            ? (currentLang === 'ar' ? "تم إغلاق وتجميد التعديل لـ " : "Locked edits for ")
            : (currentLang === 'ar' ? "تم فتح وإتاحة التعديل لـ " : "Unlocked edits for ");
        alert(statusText + emp.name);
    }
}

// Dynamic Filter Helpers
function updateSectionDropdown(deptSelectId, secSelectId) {
    const deptVal = document.getElementById(deptSelectId).value;
    
    let empsToFilter = db.employees;
    if (deptVal) {
        empsToFilter = db.employees.filter(e => e.department === deptVal);
    }

    const availableSections = [...new Set(empsToFilter.map(e => e.section).filter(Boolean))];
    fillSelect(secSelectId, availableSections, currentLang === 'ar' ? 'جميع الأقسام' : 'All Sections');
}

function onAdminDeptChange() {
    updateSectionDropdown('dashFilterDept', 'dashFilterSection');
    renderAdminDashboardCharts();
}

function onAdminEmpTabDeptChange() {
    updateSectionDropdown('empFilterDept', 'empFilterSection');
    filterEmployeesTable();
}

function onAdminRptTabDeptChange() {
    filterReportsTable();
}

function populateFilterDropdowns() {
    const depts = [...new Set(db.employees.map(e => e.department).filter(Boolean))];
    const mgrs = db.employees.filter(e => e.isManager);

    fillSelect('dashFilterDept', depts, currentLang === 'ar' ? 'جميع الإدارات' : 'All Departments');
    fillSelect('empFilterDept', depts, currentLang === 'ar' ? 'كل الإدارات' : 'All Departments');
    fillSelect('rptFilterDept', depts, currentLang === 'ar' ? 'كل الإدارات' : 'All Departments');

    updateSectionDropdown('dashFilterDept', 'dashFilterSection');
    updateSectionDropdown('empFilterDept', 'empFilterSection');

    fillSelect('dashFilterManager', mgrs.map(m => m.name), currentLang === 'ar' ? 'جميع المدراء' : 'All Managers');
    fillSelect('empFilterDirectMgr', mgrs.map(m => `${m.name} (${m.code})`), currentLang === 'ar' ? 'كل المدراء المباشرين' : 'All Direct Managers');
    fillSelect('rptFilterEvaluator', mgrs.map(m => m.name), currentLang === 'ar' ? 'المدير المقيم' : 'Evaluator');

    if (currentUser && currentUser.empData) {
        const myEmps = db.employees.filter(e => e.directManagerCode === currentUser.empData.code);
        const mySecs = [...new Set(myEmps.map(e => e.section).filter(Boolean))];
        fillSelect('mgrFilterSection', mySecs, currentLang === 'ar' ? 'كل الأقسام' : 'All Sections');
    }
}

function fillSelect(elemId, items, defaultText) {
    const el = document.getElementById(elemId);
    if (!el) return;
    const currentVal = el.value;
    el.innerHTML = `<option value="">${defaultText}</option>` + 
        items.map(i => `<option value="${i}">${i}</option>`).join('');
    el.value = currentVal;
}

// Authentication
function handleLogin(e) {
    e.preventDefault();
    const uInput = document.getElementById('usernameInput').value.trim();
    const pInput = document.getElementById('passwordInput').value.trim();
    const errDiv = document.getElementById('loginError');

    errDiv.classList.add('hidden');

    if (uInput === db.admin.username && pInput === db.admin.password) {
        currentUser = { role: 'admin', name: currentLang === 'ar' ? 'مسؤول النظام (Admin)' : 'System Admin', username: 'admin' };
        showView();
        return;
    }

    const mgrEmp = db.employees.find(e => e.isManager && e.username === uInput && e.password === pInput);
    if (mgrEmp) {
        currentUser = { role: 'manager', name: mgrEmp.name, username: mgrEmp.username, empData: mgrEmp };
        showView();
        return;
    }

    errDiv.innerText = currentLang === 'ar' ? "اسم المستخدم أو كلمة السر غير صحيحة." : "Invalid username or password.";
    errDiv.classList.remove('hidden');
}

function openChangeMyPasswordModal() {
    document.getElementById('changeMyPassForm').reset();
    document.getElementById('changeMyPassModal').classList.remove('hidden');
}

function closeChangeMyPasswordModal() {
    document.getElementById('changeMyPassModal').classList.add('hidden');
}

function submitMyNewPassword(e) {
    e.preventDefault();
    const pass1 = document.getElementById('newPassInput').value.trim();
    const pass2 = document.getElementById('confirmNewPassInput').value.trim();

    if (!pass1) { alert(currentLang === 'ar' ? "يرجى إدخال كلمة السر الجديدة!" : "Enter new password!"); return; }
    if (pass1 !== pass2) { alert(currentLang === 'ar' ? "كلمتا السر غير متطابقتين!" : "Passwords do not match!"); return; }

    if (currentUser.role === 'admin') {
        db.admin.password = pass1;
    } else if (currentUser.empData) {
        const emp = db.employees.find(e => e.id === currentUser.empData.id);
        if (emp) {
            emp.password = pass1;
            currentUser.empData.password = pass1;
        }
    }

    saveDB();
    closeChangeMyPasswordModal();
    alert(currentLang === 'ar' ? "تم تغيير كلمة السر بنجاح!" : "Password updated successfully!");
}

function logout() {
    currentUser = null;
    document.getElementById('loginSection').classList.remove('hidden');
    document.getElementById('adminPanel').classList.add('hidden');
    document.getElementById('managerPanel').classList.add('hidden');
    document.getElementById('userInfoHeader').classList.add('hidden');
    document.getElementById('loginForm').reset();
}

function showView() {
    document.getElementById('loginSection').classList.add('hidden');
    document.getElementById('userInfoHeader').classList.remove('hidden');
    document.getElementById('userNameBadge').innerText = currentUser.name;
    
    document.getElementById('userRoleBadge').innerText = currentUser.role === 'admin' 
        ? (currentLang === 'ar' ? 'مسؤول النظام' : 'System Admin')
        : (currentLang === 'ar' ? `مدير تقييم (${currentUser.empData.code})` : `Manager (${currentUser.empData.code})`);

    populateFilterDropdowns();

    if (currentUser.role === 'admin') {
        document.getElementById('adminPanel').classList.remove('hidden');
        document.getElementById('managerPanel').classList.add('hidden');
        switchAdminTab('dashboard');
    } else {
        document.getElementById('adminPanel').classList.add('hidden');
        document.getElementById('managerPanel').classList.remove('hidden');
        renderManagerDashboard();
    }
}

function refreshActiveViews() {
    populateFilterDropdowns();
    if (currentUser) {
        if (currentUser.role === 'admin') {
            renderAdminDashboardCharts();
            renderAdminEmployeesTable();
            renderAdminReportsTable();
            renderManageKrasList();
        } else {
            renderManagerDashboard();
        }
    }
}

function switchAdminTab(tabName) {
    ['dashboard', 'import', 'employees', 'reports', 'management'].forEach(t => {
        document.getElementById('adminTab-' + t).classList.add('hidden');
        document.getElementById('tabBtn-' + t).classList.remove('active');
    });

    document.getElementById('adminTab-' + tabName).classList.remove('hidden');
    document.getElementById('tabBtn-' + tabName).classList.add('active');

    if (tabName === 'dashboard') renderAdminDashboardCharts();
    if (tabName === 'employees') renderAdminEmployeesTable();
    if (tabName === 'reports') renderAdminReportsTable();
    if (tabName === 'management') renderManageKrasList();
}

// Pending Managers Tracking
function getPendingManagersData() {
    const managers = db.employees.filter(e => e.isManager);
    const pendingList = [];

    managers.forEach(mgr => {
        const subordinates = db.employees.filter(e => e.directManagerCode === mgr.code);
        
        if (subordinates.length > 0) {
            const completedCount = subordinates.filter(e => !!db.evaluations[e.id]).length;
            const pendingCount = subordinates.length - completedCount;

            const email = mgr.email || (mgr.username ? `${mgr.username}@company.com` : `${mgr.code.toLowerCase()}@company.com`);
            const rate = ((completedCount / subordinates.length) * 100).toFixed(0);

            pendingList.push({
                code: mgr.code,
                name: mgr.name,
                department: mgr.department,
                email: email,
                totalSubordinates: subordinates.length,
                completedCount: completedCount,
                pendingCount: pendingCount,
                completionRate: rate
            });
        }
    });

    return pendingList.sort((a, b) => b.pendingCount - a.pendingCount);
}

function renderPendingManagersTable(showOnlyPending = true) {
    const tbody = document.getElementById('pendingManagersTableBody');
    if (!tbody) return;

    let managers = getPendingManagersData();

    if (showOnlyPending) {
        managers = managers.filter(m => m.pendingCount > 0);
    }

    if (managers.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center py-4 text-emerald-600 font-bold"><i class="fa-solid fa-circle-check"></i> ${currentLang === 'ar' ? 'جميع المدراء المعروضين أتموا التقييمات!' : 'All displayed managers completed evaluations!'}</td></tr>`;
        return;
    }

    tbody.innerHTML = managers.map(mgr => `
        <tr class="hover:bg-slate-50 transition">
            <td class="p-2.5 font-mono font-bold text-slate-600">${mgr.code}</td>
            <td class="p-2.5 font-bold text-slate-800">${mgr.name}</td>
            <td class="p-2.5 text-slate-600">${mgr.department}</td>
            <td class="p-2.5 font-mono text-blue-700 bg-blue-50/50 rounded px-2 select-all">${mgr.email}</td>
            <td class="p-2.5 text-center font-bold text-slate-700">${mgr.totalSubordinates}</td>
            <td class="p-2.5 text-center font-bold text-emerald-600">${mgr.completedCount}</td>
            <td class="p-2.5 text-center font-bold ${mgr.pendingCount > 0 ? 'text-red-600 bg-red-50' : 'text-slate-400'} rounded">${mgr.pendingCount}</td>
            <td class="p-2.5 text-center">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold ${mgr.completionRate == 100 ? 'bg-emerald-100 text-emerald-800' : (mgr.completionRate > 0 ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800')}">
                    ${mgr.completionRate}%
                </span>
            </td>
        </tr>
    `).join('');
}

function copyPendingManagersEmails() {
    const pending = getPendingManagersData().filter(m => m.pendingCount > 0);
    if (pending.length === 0) {
        alert(currentLang === 'ar' ? "لا يوجد مدراء متأخرين حالياً!" : "No pending managers found!");
        return;
    }

    const emailsString = pending.map(m => m.email).join('; ');
    navigator.clipboard.writeText(emailsString).then(() => {
        alert(currentLang === 'ar' ? `تم نسخ بريد ${pending.length} مدير بنجاح!` : `Copied emails of ${pending.length} pending managers!`);
    }).catch(err => {
        alert("Copy error: " + err);
    });
}

function exportPendingManagersExcel() {
    const managers = getPendingManagersData();
    if (managers.length === 0) {
        alert(currentLang === 'ar' ? "لا يوجد بيانات للتصدير!" : "No data to export!");
        return;
    }

    const rows = managers.map(m => ({
        "Manager Code": m.code,
        "Manager Name": m.name,
        "Department": m.department,
        "Email Address": m.email,
        "Total Subordinates": m.totalSubordinates,
        "Completed Evaluations": m.completedCount,
        "Pending Evaluations": m.pendingCount,
        "Completion Rate %": `${m.completionRate}%`
    }));

    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Pending Managers Track");
    XLSX.writeFile(wb, `Managers_Progress_${new Date().toISOString().slice(0,10)}.xlsx`);
}

// Employee Accounts & Manual Creation
function openAddEmployeeModal() {
    document.getElementById('addEmployeeForm').reset();
    document.getElementById('newEmpAccountFields').classList.add('hidden');
    
    const mgrs = db.employees.filter(e => e.isManager);
    const select = document.getElementById('newEmpDirectMgr');
    select.innerHTML = `<option value="">-- ${currentLang === 'ar' ? 'بدون مدير مباشر' : 'No Direct Manager'} --</option>` + 
        mgrs.map(m => `<option value="${m.code}">${m.name} (${m.code}) - ${m.department}</option>`).join('');

    document.getElementById('addEmployeeModal').classList.remove('hidden');
}

function closeAddEmployeeModal() {
    document.getElementById('addEmployeeModal').classList.add('hidden');
}

function toggleNewEmpManagerFields() {
    const isMgr = document.getElementById('newEmpIsManager').checked;
    const accountFields = document.getElementById('newEmpAccountFields');
    if (isMgr) {
        accountFields.classList.remove('hidden');
    } else {
        accountFields.classList.add('hidden');
    }
}

function saveNewEmployeeManual(e) {
    e.preventDefault();
    
    const code = document.getElementById('newEmpCode').value.trim();
    const name = document.getElementById('newEmpName').value.trim();
    const title = document.getElementById('newEmpTitle').value.trim();
    const dept = document.getElementById('newEmpDept').value.trim();
    const sec = document.getElementById('newEmpSection').value.trim();
    const isMgr = document.getElementById('newEmpIsManager').checked;
    const directMgr = document.getElementById('newEmpDirectMgr').value;
    const uName = document.getElementById('newEmpUsername').value.trim();
    const pWord = document.getElementById('newEmpPassword').value.trim();

    const exists = db.employees.find(emp => emp.code === code);
    if (exists) {
        alert(currentLang === 'ar' ? "كود الموظف مكرر وموجود بالفعل!" : "Employee code already exists!");
        return;
    }

    const newEmpObj = {
        id: 'E_' + Date.now() + '_' + Math.floor(Math.random() * 10000),
        code: code,
        name: name,
        title: title,
        department: dept,
        section: sec || 'General',
        isManager: isMgr,
        editFrozen: false,
        directManagerCode: directMgr || '',
        username: isMgr ? (uName || (name.split(' ')[0] + '.' + code).toLowerCase()) : '',
        password: isMgr ? (pWord || '123456') : ''
    };

    db.employees.push(newEmpObj);
    saveDB();
    closeAddEmployeeModal();
    refreshActiveViews();

    alert(currentLang === 'ar' ? `تمت إضافة الموظف (${name}) بنجاح!` : `Employee (${name}) added successfully!`);
}

function downloadEmployeesTemplate() {
    const templateData = [
        { "Employee Code": "EMP101", "Employee Name": "John Smith", "Job Title": "General Manager", "Department": "Procurement", "Section": "Contracts", "Is Manager": "Yes", "Direct Manager Code": "", "Username": "j.smith", "Password": "pass2026" },
        { "Employee Code": "EMP102", "Employee Name": "Sarah Connor", "Job Title": "Senior Accountant", "Department": "Finance", "Section": "Treasury", "Is Manager": "No", "Direct Manager Code": "EMP101", "Username": "", "Password": "" }
    ];

    const ws = XLSX.utils.json_to_sheet(templateData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Employees");
    XLSX.writeFile(wb, "Employees_Template.xlsx");
}

function handleEmployeesUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        try {
            const data = new Uint8Array(evt.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.SheetNames[0];
            const rows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);

            if (rows.length === 0) { alert("Excel file is empty!"); return; }

            let addedCount = 0;
            let updatedCount = 0;

            rows.forEach((row, idx) => {
                const code = (row["Employee Code"] || row["Code"] || row["كود الموظف"] || ("EMP-" + (idx + 100))).toString().trim();
                const name = row["Employee Name"] || row["Name"] || row["اسم الموظف"];
                const title = row["Job Title"] || row["Title"] || row["الوظيفة"] || "Employee";
                const dept = row["Department"] || row["الإدارة"] || "General";
                const sec = row["Section"] || row["القسم"] || "General";
                const isMgrVal = (row["Is Manager"] || row["IsManager"] || row["مدير"] || "").toString().trim().toLowerCase();
                const isMgr = isMgrVal === 'yes' || isMgrVal === 'true' || isMgrVal === 'نعم';
                const mgrCode = (row["Direct Manager Code"] || row["ManagerCode"] || row["كود المدير المباشر"] || "").toString().trim();
                const uName = (row["Username"] || row["اسم المستخدم"] || "").toString().trim();
                const pWord = (row["Password"] || row["كلمة السر"] || "").toString().trim();

                if (name) {
                    let existing = db.employees.find(emp => emp.code === code || emp.name === name);
                    if (!existing) {
                        db.employees.push({
                            id: 'E_' + Date.now() + '_' + Math.floor(Math.random()*10000),
                            code: code,
                            name: name,
                            title: title,
                            department: dept,
                            section: sec,
                            isManager: isMgr,
                            editFrozen: false,
                            directManagerCode: mgrCode,
                            username: uName || (isMgr ? (name.split(' ')[0] + '.' + code).toLowerCase() : ""),
                            password: pWord || (isMgr ? "123456" : "")
                        });
                        addedCount++;
                    } else {
                        existing.title = title;
                        existing.department = dept;
                        existing.section = sec;
                        existing.directManagerCode = mgrCode;
                        if (isMgr) {
                            existing.isManager = true;
                            if (uName) existing.username = uName;
                            if (pWord) existing.password = pWord;
                        }
                        updatedCount++;
                    }
                }
            });

            saveDB();
            refreshActiveViews();

            const msg = document.getElementById('importSuccessMsg');
            msg.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-600"></i> Added <strong>${addedCount}</strong> new employees and updated <strong>${updatedCount}</strong> existing records.`;
            msg.classList.remove('hidden');

        } catch (err) {
            alert("Error reading Excel file: " + err.message);
        }
    };
    reader.readAsArrayBuffer(file);
}

function downloadEvaluationsTemplate() {
    const templateData = [{
        "Employee Code": "EMP102",
        "Employee Name": "Sarah Connor",
        "k1": 4,
        "k2": 5,
        "k3": 3,
        "k4": 4,
        "k5": 5,
        "k6": 4,
        "Evaluator Name": "John Smith",
        "Notes": "Outstanding performance and proactive attitude"
    }];

    const ws = XLSX.utils.json_to_sheet(templateData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Evaluations");
    XLSX.writeFile(wb, "Evaluations_Template.xlsx");
}

function handleEvaluationsUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const activeKras = (db.kras && db.kras.length > 0) ? db.kras : KRAS;

    const reader = new FileReader();
    reader.onload = function(evt) {
        try {
            const data = new Uint8Array(evt.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.SheetNames[0];
            const rows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);

            if (rows.length === 0) { alert("Excel file is empty!"); return; }

            let importedCount = 0;
            rows.forEach(row => {
                const code = (row["Employee Code"] || row["Code"] || row["كود الموظف"] || "").toString().trim();
                const emp = db.employees.find(e => e.code === code || e.name === row["Employee Name"] || e.name === row["اسم الموظف"]);

                if (emp) {
                    const scores = {};
                    activeKras.forEach(kra => {
                        const val = row[kra.id] || row[kra.title] || row[kra.title_ar];
                        if (val !== undefined) {
                            scores[kra.id] = parseInt(val) || 1;
                        }
                    });

                    db.evaluations[emp.id] = {
                        scores: scores,
                        notes: row["Notes"] || row["ملاحظات التقييم"] || "",
                        evaluatedBy: row["Evaluator Name"] || row["Evaluator"] || "Excel Import",
                        evaluatedAt: new Date().toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US')
                    };
                    importedCount++;
                }
            });

            saveDB();
            refreshActiveViews();

            const msg = document.getElementById('importEvalSuccessMsg');
            msg.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-600"></i> Successfully imported <strong>${importedCount}</strong> evaluation records.`;
            msg.classList.remove('hidden');

        } catch (err) {
            alert("Error importing evaluations: " + err.message);
        }
    };
    reader.readAsArrayBuffer(file);
}

// Account Table & Actions
function deleteEmployee(empId) {
    const emp = db.employees.find(e => e.id === empId || e.id === String(empId) || e.code === String(empId));
    if (!emp) { alert("Employee not found!"); return; }

    if (confirm(currentLang === 'ar' ? `هل أنت متأكد من حذف (${emp.name}) نهائياً؟` : `Permanently delete employee (${emp.name})?`)) {
        db.employees = db.employees.filter(e => e.id !== emp.id);
        delete db.evaluations[emp.id];

        db.employees.forEach(e => {
            if (e.directManagerCode === emp.code) e.directManagerCode = "";
        });

        saveDB();
        refreshActiveViews();
        alert(currentLang === 'ar' ? "تم الحذف بنجاح!" : "Deleted successfully!");
    }
}

function renderAdminEmployeesTable() {
    filterEmployeesTable();
}

function filterEmployeesTable() {
    const q = (document.getElementById('empFilterSearch').value || '').toLowerCase();
    const dept = document.getElementById('empFilterDept').value;
    const sec = document.getElementById('empFilterSection').value;
    const role = document.getElementById('empFilterRole').value;
    const directMgr = document.getElementById('empFilterDirectMgr').value;

    const filtered = db.employees.filter(emp => {
        const matchQ = !q || emp.name.toLowerCase().includes(q) || emp.code.toLowerCase().includes(q);
        const matchDept = !dept || emp.department === dept;
        const matchSec = !sec || emp.section === sec;
        const matchRole = !role || (role === 'mgr' ? emp.isManager : !emp.isManager);

        const mgrObj = db.employees.find(m => m.code === emp.directManagerCode);
        const mgrNameText = mgrObj ? `${mgrObj.name} (${mgrObj.code})` : (emp.directManagerCode || '');
        const matchMgr = !directMgr || mgrNameText.includes(directMgr.split(' ')[0]);

        return matchQ && matchDept && matchSec && matchRole && matchMgr;
    });

    const tbody = document.getElementById('adminEmployeesTableBody');
    tbody.innerHTML = filtered.map(emp => {
        const mgrObj = db.employees.find(m => m.code === emp.directManagerCode);
        const mgrNameText = mgrObj ? `${mgrObj.name} (${mgrObj.code})` : (emp.directManagerCode || '-');
        const safeId = String(emp.id).replace(/'/g, "\\'");
        const isFrozen = Boolean(emp.editFrozen);

        return `
            <tr class="hover:bg-slate-50 transition">
                <td class="p-3 font-mono font-bold text-slate-600">${emp.code}</td>
                <td class="p-3 font-bold text-slate-800">${emp.name}</td>
                <td class="p-3 text-slate-600">${emp.title}</td>
                <td class="p-3 font-semibold text-blue-900">${emp.department}</td>
                <td class="p-3 font-semibold text-slate-600">${emp.section || '-'}</td>
                <td class="p-3">
                    ${emp.isManager 
                        ? `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800"><i class="fa-solid fa-user-tie"></i> ${I18N[currentLang].set_as_mgr}</span>` 
                        : `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">${currentLang === 'ar' ? 'موظف' : 'Employee'}</span>`}
                </td>
                <td class="p-3 text-slate-700 font-semibold">${mgrNameText}</td>
                <td class="p-3 font-mono text-blue-700 bg-blue-50/50 rounded px-2">${emp.isManager ? (emp.username || '-') : '-'}</td>
                <td class="p-3 font-mono text-emerald-700 bg-emerald-50/50 font-bold rounded px-2">${emp.isManager ? (emp.password || '-') : '-'}</td>
                <td class="p-3 text-center">
                    ${emp.isManager ? (
                        isFrozen 
                        ? `<button onclick="toggleManagerEditFreeze('${safeId}')" class="px-2 py-1 rounded-lg text-[10px] font-bold bg-red-100 text-red-700 border border-red-300 hover:bg-red-200"><i class="fa-solid fa-lock"></i> ${I18N[currentLang].edit_frozen}</button>`
                        : `<button onclick="toggleManagerEditFreeze('${safeId}')" class="px-2 py-1 rounded-lg text-[10px] font-bold bg-emerald-100 text-emerald-700 border border-emerald-300 hover:bg-emerald-200"><i class="fa-solid fa-lock-open"></i> ${I18N[currentLang].edit_allowed}</button>`
                    ) : '-'}
                </td>
                <td class="p-3 text-center flex justify-center gap-1">
                    <button onclick="openPromoteModal('${safeId}')" title="تعديل الحساب" class="bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded-lg border border-blue-300 transition text-[11px]">
                        <i class="fa-solid fa-user-gear"></i>
                    </button>
                    <button onclick="deleteEmployee('${safeId}')" title="حذف الموظف" class="bg-red-50 hover:bg-red-100 text-red-600 font-bold px-2 py-1 rounded-lg border border-red-300 transition text-[11px]">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function openPromoteModal(empId) {
    const emp = db.employees.find(e => e.id === empId || e.id === String(empId) || e.code === String(empId));
    if (!emp) { alert("Employee not found!"); return; }

    document.getElementById('promoteEmpId').value = emp.id;
    document.getElementById('promoteEmpName').value = emp.name;
    document.getElementById('promoteIsManagerCheckbox').checked = !!emp.isManager;
    document.getElementById('promoteFreezeEditCheckbox').checked = Boolean(emp.editFrozen);

    const allManagers = db.employees.filter(e => e.isManager && e.id !== emp.id);
    const selectObj = document.getElementById('promoteDirectManagerSelect');
    selectObj.innerHTML = `<option value="">-- ${currentLang === 'ar' ? 'بدون مدير مباشر' : 'No Direct Manager'} --</option>` + 
        allManagers.map(m => `<option value="${m.code}" ${emp.directManagerCode === m.code ? 'selected' : ''}>${m.name} (${m.code}) - ${m.department}</option>`).join('');

    document.getElementById('promoteUsername').value = emp.username || (emp.name.split(' ')[0] + '.' + emp.code).toLowerCase();
    document.getElementById('promotePassword').value = emp.password || '123456';

    document.getElementById('promoteModal').classList.remove('hidden');
}

function closePromoteModal() {
    document.getElementById('promoteModal').classList.add('hidden');
}

function saveManagerRole(e) {
    e.preventDefault();
    const empId = document.getElementById('promoteEmpId').value;
    const emp = db.employees.find(e => e.id === empId);

    if (emp) {
        emp.isManager = document.getElementById('promoteIsManagerCheckbox').checked;
        emp.editFrozen = Boolean(document.getElementById('promoteFreezeEditCheckbox').checked);
        emp.directManagerCode = document.getElementById('promoteDirectManagerSelect').value;
        emp.username = document.getElementById('promoteUsername').value.trim();
        emp.password = document.getElementById('promotePassword').value.trim();

        saveDB();
        closePromoteModal();
        refreshActiveViews();
        alert(currentLang === 'ar' ? `تم تحديث بيانات وحساب (${emp.name}) بنجاح.` : `Account updated for (${emp.name}).`);
    }
}

// KRAs Management
function renderManageKrasList() {
    const container = document.getElementById('dynamicKrasContainer');
    if (!container) return;

    const activeKras = (db.kras && db.kras.length > 0) ? db.kras : KRAS;

    let totalWeight = 0;
    container.innerHTML = activeKras.map((kra, idx) => {
        const w = Number(kra.weight) || 0;
        totalWeight += w;
        const titleText = getKraTitle(kra);

        return `
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-2">
                <div class="flex-grow">
                    <span class="font-bold text-slate-800">${idx + 1}. ${titleText}</span>
                    <span class="block text-[10px] text-slate-400">ID: ${kra.id}</span>
                </div>
                <div class="flex items-center gap-2">
                    <div class="flex items-center gap-1 bg-white border border-slate-300 rounded-lg px-2 py-1">
                        <span class="text-[11px] text-slate-500 font-bold">${currentLang === 'ar' ? 'الوزن:' : 'Weight:'}</span>
                        <input type="number" value="${w}" min="1" max="100" step="0.5" onchange="updateKraWeight('${kra.id}', this.value)" class="w-14 text-center font-bold text-blue-700 outline-none text-xs">
                        <span class="text-[11px] font-bold text-slate-500">%</span>
                    </div>
                    <button onclick="editKraElement('${kra.id}')" class="px-2.5 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg border border-blue-200 font-bold text-[11px]">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button onclick="deleteKraElement('${kra.id}')" class="px-2.5 py-1 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg border border-red-200 font-bold text-[11px]">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    const badge = document.getElementById('totalWeightsBadge');
    if (badge) {
        badge.innerText = `${currentLang === 'ar' ? 'إجمالي الأوزان:' : 'Total Weight:'} ${totalWeight.toFixed(1)}%`;
        if (Math.abs(totalWeight - 100) < 0.1) {
            badge.className = "px-3 py-1.5 rounded-lg text-xs font-bold border bg-emerald-50 text-emerald-700 border-emerald-200";
        } else {
            badge.className = "px-3 py-1.5 rounded-lg text-xs font-bold border bg-red-50 text-red-700 border-red-200";
        }
    }
}

function updateKraWeight(kraId, newWeight) {
    const val = parseFloat(newWeight) || 0;
    
    const kra1 = KRAS.find(k => k.id === kraId);
    if (kra1) kra1.weight = val;

    if (!db.kras) db.kras = KRAS;
    const kra2 = db.kras.find(k => k.id === kraId);
    if (kra2) kra2.weight = val;

    saveDB();
    refreshActiveViews();
}

function openKraModal() {
    document.getElementById('kraFormEditId').value = "";
    document.getElementById('kraModalTitle').innerText = currentLang === 'ar' ? "إضافة عنصر تقييم جديد" : "Add New Evaluation Criteria";
    document.getElementById('kraForm').reset();
    document.getElementById('kraModal').classList.remove('hidden');
}

function closeKraModal() {
    document.getElementById('kraModal').classList.add('hidden');
}

function editKraElement(kraId) {
    const activeKras = (db.kras && db.kras.length > 0) ? db.kras : KRAS;
    const kra = activeKras.find(k => k.id === kraId);
    if (!kra) return;

    document.getElementById('kraFormEditId').value = kra.id;
    document.getElementById('kraModalTitle').innerText = `${currentLang === 'ar' ? 'تعديل عنصر:' : 'Edit Element:'} ${getKraTitle(kra)}`;
    document.getElementById('kraFormTitle').value = getKraTitle(kra);
    document.getElementById('kraFormWeight').value = kra.weight || 15;

    document.getElementById('kraFormLvl1').value = getKraLevelDesc(kra, 1);
    document.getElementById('kraFormLvl2').value = getKraLevelDesc(kra, 2);
    document.getElementById('kraFormLvl3').value = getKraLevelDesc(kra, 3);
    document.getElementById('kraFormLvl4').value = getKraLevelDesc(kra, 4);
    document.getElementById('kraFormLvl5').value = getKraLevelDesc(kra, 5);

    document.getElementById('kraModal').classList.remove('hidden');
}

function saveKraElement(e) {
    e.preventDefault();
    const editId = document.getElementById('kraFormEditId').value;
    const title = document.getElementById('kraFormTitle').value.trim();
    const weight = parseFloat(document.getElementById('kraFormWeight').value) || 0;

    const lvl1 = document.getElementById('kraFormLvl1').value.trim();
    const lvl2 = document.getElementById('kraFormLvl2').value.trim();
    const lvl3 = document.getElementById('kraFormLvl3').value.trim();
    const lvl4 = document.getElementById('kraFormLvl4').value.trim();
    const lvl5 = document.getElementById('kraFormLvl5').value.trim();

    if (!db.kras) db.kras = KRAS;

    if (editId) {
        let kra = KRAS.find(k => k.id === editId);
        if (kra) { 
            if (currentLang === 'ar') { kra.title_ar = title; kra.levels_ar = {1: lvl1, 2: lvl2, 3: lvl3, 4: lvl4, 5: lvl5}; }
            else { kra.title = title; kra.levels = {1: lvl1, 2: lvl2, 3: lvl3, 4: lvl4, 5: lvl5}; }
            kra.weight = weight;
        }

        let dbKra = db.kras.find(k => k.id === editId);
        if (dbKra) { 
            if (currentLang === 'ar') { dbKra.title_ar = title; dbKra.levels_ar = {1: lvl1, 2: lvl2, 3: lvl3, 4: lvl4, 5: lvl5}; }
            else { dbKra.title = title; dbKra.levels = {1: lvl1, 2: lvl2, 3: lvl3, 4: lvl4, 5: lvl5}; }
            dbKra.weight = weight;
        }
    } else {
        const newId = 'k' + (Date.now() % 100000);
        const newObj = { 
            id: newId, 
            title: title, 
            title_ar: title,
            weight: weight, 
            levels: { 1: lvl1, 2: lvl2, 3: lvl3, 4: lvl4, 5: lvl5 },
            levels_ar: { 1: lvl1, 2: lvl2, 3: lvl3, 4: lvl4, 5: lvl5 }
        };
        KRAS.push(newObj);
        db.kras.push(newObj);
    }

    saveDB();
    closeKraModal();
    refreshActiveViews();
    alert(currentLang === 'ar' ? "تم حفظ المعيار وتحديث كافة النتائج فوراً!" : "Criteria saved!");
}

function deleteKraElement(kraId) {
    const activeKras = (db.kras && db.kras.length > 0) ? db.kras : KRAS;
    if (activeKras.length <= 1) {
        alert(currentLang === 'ar' ? "لا يمكن حذف كل العناصر! يجب أن يحتفظ النظام بعنصر واحد على الأقل." : "Cannot delete all criteria!");
        return;
    }

    if (confirm(currentLang === 'ar' ? "هل أنت متأكد من حذف هذا العنصر؟" : "Delete this criteria?")) {
        KRAS = KRAS.filter(k => k.id !== kraId);
        db.kras = db.kras.filter(k => k.id !== kraId);
        saveDB();
        refreshActiveViews();
        alert(currentLang === 'ar' ? "تم حذف العنصر بنجاح." : "Criteria deleted.");
    }
}

function resetDashFilters() {
    document.getElementById('dashFilterDept').value = "";
    updateSectionDropdown('dashFilterDept', 'dashFilterSection');
    document.getElementById('dashFilterManager').value = "";
    renderAdminDashboardCharts();
}

// Analytics Dashboard
function renderAdminDashboardCharts() {
    const selDept = document.getElementById('dashFilterDept').value;
    const selSec = document.getElementById('dashFilterSection').value;
    const selMgr = document.getElementById('dashFilterManager').value;

    const activeKras = (db.kras && db.kras.length > 0) ? db.kras : KRAS;

    const filteredEmps = db.employees.filter(emp => {
        const matchDept = !selDept || emp.department === selDept;
        const matchSec = !selSec || emp.section === selSec;
        
        const evalData = db.evaluations[emp.id];
        const matchMgr = !selMgr || (evalData && evalData.evaluatedBy === selMgr);

        return matchDept && matchSec && matchMgr;
    });

    const totalEmps = filteredEmps.length;
    const depts = [...new Set(filteredEmps.map(e => e.department).filter(Boolean))];
    
    let evaluatedCount = 0;
    let levelCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    let grandTotalPct = 0;

    let kraTotals = {};
    activeKras.forEach(k => kraTotals[k.id] = 0);

    filteredEmps.forEach(emp => {
        const res = calculateEmpScore(emp.id);
        if (res) {
            evaluatedCount++;
            levelCounts[res.level] = (levelCounts[res.level] || 0) + 1;
            grandTotalPct += res.percentage;

            const evalData = db.evaluations[emp.id];
            if (evalData && evalData.scores) {
                activeKras.forEach(k => {
                    kraTotals[k.id] += Number(evalData.scores[k.id] || 0);
                });
            }
        }
    });

    const pendingCount = totalEmps - evaluatedCount;
    const avgPct = evaluatedCount > 0 ? (grandTotalPct / evaluatedCount).toFixed(1) : 0;
    const completionPct = totalEmps > 0 ? ((evaluatedCount / totalEmps) * 100).toFixed(1) : 0;

    document.getElementById('statTotalEmployees').innerText = totalEmps;
    document.getElementById('statAvgScore').innerText = `${avgPct}%`;
    document.getElementById('statEvaluatedCount').innerText = evaluatedCount;
    document.getElementById('statPendingCount').innerText = pendingCount > 0 ? pendingCount : 0;

    document.getElementById('completionRateBadge').innerText = `${completionPct}%`;
    document.getElementById('completionProgressBar').style.width = `${completionPct}%`;

    const levelTitles = {
        1: currentLang === 'ar' ? "مستوى 1 (ضعيف)" : "Level 1 (Weak)",
        2: currentLang === 'ar' ? "مستوى 2 (مقبول)" : "Level 2 (Acceptable)",
        3: currentLang === 'ar' ? "مستوى 3 (جيد جداً)" : "Level 3 (Very Good)",
        4: currentLang === 'ar' ? "مستوى 4 (متقدم)" : "Level 4 (Advanced)",
        5: currentLang === 'ar' ? "مستوى 5 (متميز)" : "Level 5 (Outstanding)"
    };

    const levelColors = {
        1: "bg-red-50 border-red-200 text-red-800",
        2: "bg-amber-50 border-amber-200 text-amber-800",
        3: "bg-blue-50 border-blue-200 text-blue-800",
        4: "bg-indigo-50 border-indigo-200 text-indigo-800",
        5: "bg-emerald-50 border-emerald-200 text-emerald-800"
    };

    const levelsContainer = document.getElementById('levelsCardsContainer');
    levelsContainer.innerHTML = [1, 2, 3, 4, 5].map(lvl => {
        const count = levelCounts[lvl] || 0;
        const pctOfEvaluated = evaluatedCount > 0 ? ((count / evaluatedCount) * 100).toFixed(1) : 0;
        const pctOfTotal = totalEmps > 0 ? ((count / totalEmps) * 100).toFixed(1) : 0;

        return `
            <div class="p-3.5 rounded-xl border ${levelColors[lvl]} space-y-1">
                <p class="font-bold text-xs opacity-90">${levelTitles[lvl]}</p>
                <h4 class="text-xl font-black">${count} <span class="text-xs font-normal">${currentLang === 'ar' ? 'موظف' : 'Emp'}</span></h4>
                <div class="pt-1 border-t border-slate-200/50 text-[11px] font-semibold flex justify-between">
                    <span>${currentLang === 'ar' ? 'نسبة المقيّمين:' : 'Evaluated %:'}</span>
                    <strong>${pctOfEvaluated}%</strong>
                </div>
                <div class="text-[10px] opacity-80 flex justify-between">
                    <span>${currentLang === 'ar' ? 'من المجموع:' : 'Of Total:'}</span>
                    <span>${pctOfTotal}%</span>
                </div>
            </div>
        `;
    }).join('');

    const deptStats = depts.map(d => {
        const empsInDept = filteredEmps.filter(e => e.department === d);
        let total = 0;
        let count = 0;
        empsInDept.forEach(e => {
            const res = calculateEmpScore(e.id);
            if (res) { total += res.percentage; count++; }
        });
        const deptAvg = count > 0 ? (total / count) : 0;
        return { name: d, avg: deptAvg, count: count, totalEmps: empsInDept.length };
    }).sort((a, b) => b.avg - a.avg);

    const topBottomContainer = document.getElementById('topBottomDeptsContainer');
    if (deptStats.length === 0) {
        topBottomContainer.innerHTML = `<p class="text-slate-400 text-center py-4">${currentLang === 'ar' ? 'لا توجد بيانات متاحة' : 'No data available'}</p>`;
    } else {
        topBottomContainer.innerHTML = deptStats.map((d, i) => `
            <div class="flex items-center justify-between p-2 rounded-lg ${i === 0 ? 'bg-amber-50 border border-amber-200 font-bold' : 'bg-slate-50 border border-slate-100'}">
                <div class="flex items-center gap-2">
                    <span class="w-5 h-5 rounded-full ${i === 0 ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-700'} flex items-center justify-center text-[10px] font-black">${i + 1}</span>
                    <span class="text-slate-800">${d.name}</span>
                </div>
                <div class="text-right">
                    <span class="text-blue-700 font-bold">${d.avg.toFixed(1)}%</span>
                    <span class="block text-[9px] text-slate-400">${d.count}/${d.totalEmps} ${currentLang === 'ar' ? 'مكتمل' : 'completed'}</span>
                </div>
            </div>
        `).join('');
    }

    const kraWeightedAverages = activeKras.map(k => {
        if (evaluatedCount === 0) return 0;
        const rawAvg = kraTotals[k.id] / evaluatedCount;
        const w = Number(k.weight) || (100 / activeKras.length);
        return ((rawAvg / 5) * w).toFixed(2);
    });

    const ctxKras = document.getElementById('chartKrasBreakdown').getContext('2d');
    if (chartKrasInstance) chartKrasInstance.destroy();

    chartKrasInstance = new Chart(ctxKras, {
        type: 'bar',
        data: {
            labels: activeKras.map(k => `${getKraTitle(k)} (${k.weight || 0}%)`),
            datasets: [{
                label: currentLang === 'ar' ? 'مساهمة المعيار الموزونة (%)' : 'Weighted Contribution (%)',
                data: kraWeightedAverages,
                backgroundColor: '#3b82f6',
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { 
                y: { 
                    beginAtZero: true,
                    title: { display: true, text: currentLang === 'ar' ? 'النسبة الموزونة للمعيار (%)' : 'Weighted Contribution (%)' }
                } 
            }
        }
    });

    const ctxLevels = document.getElementById('chartLevels').getContext('2d');
    if (chartLevelsInstance) chartLevelsInstance.destroy();

    chartLevelsInstance = new Chart(ctxLevels, {
        type: 'pie',
        data: {
            labels: [1, 2, 3, 4, 5].map(l => `${currentLang === 'ar' ? 'مستوى' : 'Level'} ${l}`),
            datasets: [{
                data: [levelCounts[1], levelCounts[2], levelCounts[3], levelCounts[4], levelCounts[5]],
                backgroundColor: ['#ef4444', '#f59e0b', '#3b82f6', '#6366f1', '#10b981']
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });

    const ctxDepts = document.getElementById('chartDeptsProgress').getContext('2d');
    if (chartDeptsInstance) chartDeptsInstance.destroy();

    chartDeptsInstance = new Chart(ctxDepts, {
        type: 'bar',
        data: {
            labels: deptStats.map(d => d.name),
            datasets: [{
                label: currentLang === 'ar' ? 'متوسط الأداء الموزون %' : 'Weighted Performance Avg %',
                data: deptStats.map(d => d.avg.toFixed(1)),
                backgroundColor: '#8b5cf6',
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, max: 100 } }
        }
    });

    const showOnlyPending = (document.getElementById('pendingManagerViewFilter')?.value || 'pending') === 'pending';
    renderPendingManagersTable(showOnlyPending);
}

function exportLevelPercentagesToExcel() {
    const totalEmps = db.employees.length;
    const evalKeys = Object.keys(db.evaluations);
    const evaluatedCount = evalKeys.length;

    let levelCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    db.employees.forEach(emp => {
        const res = calculateEmpScore(emp.id);
        if (res) levelCounts[res.level] = (levelCounts[res.level] || 0) + 1;
    });

    const rows = [1, 2, 3, 4, 5].map(lvl => {
        const count = levelCounts[lvl] || 0;
        return {
            "Rating Level": `Level ${lvl}`,
            "Employee Count": count,
            "Evaluated %": evaluatedCount > 0 ? `${((count / evaluatedCount) * 100).toFixed(1)}%` : "0%",
            "Total Employees %": totalEmps > 0 ? `${((count / totalEmps) * 100).toFixed(1)}%` : "0%"
        };
    });

    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Levels Percentage");
    XLSX.writeFile(wb, `Levels_Distribution_${new Date().toISOString().slice(0,10)}.xlsx`);
}

// Manager Appraisal Dashboard
function renderManagerDashboard() {
    filterManagerEmpTable();
}

function filterManagerEmpTable() {
    const currentMgrInDb = db.employees.find(e => String(e.id) === String(currentUser.empData.id) || e.code === currentUser.empData.code);
    const mgr = currentMgrInDb || currentUser.empData;
    
    document.getElementById('mgrAssignedDeptBadge').innerText = `${currentLang === 'ar' ? 'المرؤوسين المباشرين للمدير:' : 'Subordinates for:'} ${mgr.name} (${mgr.code})`;

    const isManagerFrozenByAdmin = Boolean(mgr.editFrozen);

    const mySubordinates = db.employees.filter(e => e.directManagerCode === mgr.code);
    const evalCount = mySubordinates.filter(e => db.evaluations[e.id]).length;
    const pendingCount = mySubordinates.length - evalCount;

    document.getElementById('mgrCompletedCount').innerText = evalCount;
    document.getElementById('mgrPendingCount').innerText = pendingCount;

    const q = (document.getElementById('mgrFilterSearch').value || '').toLowerCase();
    const sec = document.getElementById('mgrFilterSection').value;
    const status = document.getElementById('mgrFilterStatus').value;

    const filtered = mySubordinates.filter(emp => {
        const isEval = !!db.evaluations[emp.id];
        const matchQ = !q || emp.name.toLowerCase().includes(q) || emp.code.toLowerCase().includes(q);
        const matchSec = !sec || emp.section === sec;
        const matchStatus = !status || (status === 'done' ? isEval : !isEval);

        return matchQ && matchSec && matchStatus;
    });

    const tbody = document.getElementById('mgrEmpTableBody');
    tbody.innerHTML = filtered.map(emp => {
        const isEvaluated = !!db.evaluations[emp.id];
        const res = calculateEmpScore(emp.id);
        const safeId = String(emp.id).replace(/'/g, "\\'");

        if (isManagerFrozenByAdmin) {
            return `
                <tr class="hover:bg-slate-50 transition opacity-80">
                    <td class="p-3 font-mono font-bold text-slate-600">${emp.code}</td>
                    <td class="p-3 font-bold text-slate-800">${emp.name}</td>
                    <td class="p-3 text-slate-600">${emp.title}</td>
                    <td class="p-3 font-semibold text-blue-900">${emp.department}</td>
                    <td class="p-3 text-slate-600">${emp.section || '-'}</td>
                    <td class="p-3 text-center font-bold text-blue-700">${res ? `${res.percentage}%` : '-'}</td>
                    <td class="p-3 text-center">
                        <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-red-100 text-red-800"><i class="fa-solid fa-lock"></i> ${I18N[currentLang].edit_frozen}</span>
                    </td>
                    <td class="p-3 text-center">
                        <span class="text-xs text-red-600 font-bold flex items-center justify-center gap-1"><i class="fa-solid fa-ban"></i> ${currentLang === 'ar' ? 'التعديل مغلق' : 'Edit Locked'}</span>
                    </td>
                </tr>
            `;
        }

        return `
            <tr class="hover:bg-slate-50 transition">
                <td class="p-3 font-mono font-bold text-slate-600">${emp.code}</td>
                <td class="p-3 font-bold text-slate-800">${emp.name}</td>
                <td class="p-3 text-slate-600">${emp.title}</td>
                <td class="p-3 font-semibold text-blue-900">${emp.department}</td>
                <td class="p-3 text-slate-600">${emp.section || '-'}</td>
                <td class="p-3 text-center font-bold text-blue-700">${res ? `${res.percentage}%` : '-'}</td>
                <td class="p-3 text-center">
                    ${isEvaluated 
                        ? `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800"><i class="fa-solid fa-check"></i> ${I18N[currentLang].eval_locked_msg}</span>` 
                        : `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800"><i class="fa-solid fa-clock"></i> ${currentLang === 'ar' ? 'غير مكتمل' : 'Pending'}</span>`}
                </td>
                <td class="p-3 text-center">
                    ${isEvaluated 
                        ? `<span class="text-xs text-slate-400 font-bold italic flex items-center justify-center gap-1"><i class="fa-solid fa-lock text-slate-400"></i> ${currentLang === 'ar' ? 'مكتمل' : 'Completed'}</span>`
                        : `<button onclick="openEvalModal('${safeId}')" class="px-3 py-1.5 rounded-lg font-bold text-xs transition flex items-center gap-1 mx-auto bg-blue-600 text-white hover:bg-blue-700 shadow-md">
                            <i class="fa-solid fa-clipboard-check"></i> ${currentLang === 'ar' ? 'تقييم' : 'Evaluate'}
                           </button>`
                    }
                </td>
            </tr>
        `;
    }).join('');
}

// Updated Open Modal with Strict Translation Logic
function openEvalModal(empId) {
    const emp = db.employees.find(e => e.id === empId || e.id === String(empId) || e.code === String(empId));
    if (!emp) { alert("Employee not found!"); return; }

    if (currentUser.role !== 'admin') {
        const currentMgrInDb = db.employees.find(e => String(e.id) === String(currentUser.empData.id) || e.code === currentUser.empData.code);
        if (currentMgrInDb && Boolean(currentMgrInDb.editFrozen)) {
            alert(currentLang === 'ar' ? "عفواً، تم تجميد وإغلاق صلاحية التعديل والتقييم لك بواسطة المسؤول (Admin)!" : "Your edit permissions have been locked by Admin!");
            return;
        }

        const isAlreadyEvaluated = !!db.evaluations[emp.id];
        if (isAlreadyEvaluated) {
            alert(currentLang === 'ar' ? "عفواً، التقييم مكتمل ومغلق لدى المدير المباشر!" : "Evaluation is locked!");
            return;
        }
    }

    const activeKras = (db.kras && db.kras.length > 0) ? db.kras : KRAS;

    document.getElementById('evalTargetEmpId').value = emp.id;
    document.getElementById('evalModalEmpName').innerText = `${currentLang === 'ar' ? 'تقييم الموظف:' : 'Evaluating:'} ${emp.name}`;
    document.getElementById('evalModalEmpDetails').innerText = `${emp.title} | ${currentLang === 'ar' ? 'الكود:' : 'Code:'} ${emp.code} | ${currentLang === 'ar' ? 'الإدارة:' : 'Dept:'} ${emp.department}`;

    const existingEval = db.evaluations[emp.id] || { scores: {}, notes: "" };
    document.getElementById('evalNotesInput').value = existingEval.notes || "";

    const container = document.getElementById('evalCriteriaList');
    container.innerHTML = activeKras.map((kra, idx) => {
        const selectedVal = existingEval.scores[kra.id] || 0;
        
        // جلب عنوان المعيار باللغة الحالية مباشرة
        const kraTitle = (currentLang === 'en') 
            ? (kra.title || kra.title_ar) 
            : (kra.title_ar || kra.title);

        return `
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                <div class="font-bold text-slate-800 text-xs border-b pb-1 flex justify-between items-center">
                    <span>${idx + 1}. ${kraTitle}</span>
                    <span class="text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">${currentLang === 'ar' ? 'الوزن النسبي:' : 'Weight:'} ${kra.weight || 0}%</span>
                </div>
                <div class="space-y-2">
                    ${[1,2,3,4,5].map(lvl => {
                        // جلب الوصف السلوكي للمستوى باللغة الحالية مباشرة
                        let lvlDesc = "";
                        if (currentLang === 'en') {
                            lvlDesc = (kra.levels && kra.levels[lvl]) ? kra.levels[lvl] : (kra.levels_ar ? kra.levels_ar[lvl] : `Level ${lvl}`);
                        } else {
                            lvlDesc = (kra.levels_ar && kra.levels_ar[lvl]) ? kra.levels_ar[lvl] : (kra.levels ? kra.levels[lvl] : `مستوى ${lvl}`);
                        }

                        return `
                            <label class="flex items-start gap-2.5 p-2 rounded-lg border border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/30 transition cursor-pointer text-xs">
                                <input type="radio" name="kra_${kra.id}" value="${lvl}" ${selectedVal == lvl ? 'checked' : ''} required class="mt-0.5 text-blue-600 focus:ring-blue-500">
                                <span class="text-slate-700 leading-relaxed">${lvlDesc}</span>
                            </label>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('evalModal').classList.remove('hidden');
}

function closeEvalModal() {
    document.getElementById('evalModal').classList.add('hidden');
}

function submitEmployeeEval(e) {
    e.preventDefault();
    const empId = document.getElementById('evalTargetEmpId').value;
    const formData = new FormData(e.target);
    const scores = {};

    const activeKras = (db.kras && db.kras.length > 0) ? db.kras : KRAS;

    activeKras.forEach(kra => {
        const val = formData.get(`kra_${kra.id}`);
        if (val) scores[kra.id] = parseInt(val);
    });

    const notes = document.getElementById('evalNotesInput').value;

    db.evaluations[empId] = {
        scores: scores,
        notes: notes,
        evaluatedBy: currentUser.name,
        evaluatedAt: new Date().toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US')
    };

    saveDB();
    closeEvalModal();
    refreshActiveViews();

    alert(currentLang === 'ar' ? "تم حفظ التقييم بنجاح!" : "Evaluation saved successfully!");
}

// Reports Log Table Renderer
function renderAdminReportsTable() {
    filterReportsTable();
}

function filterReportsTable() {
    const q = (document.getElementById('rptFilterSearch').value || '').toLowerCase();
    const dept = document.getElementById('rptFilterDept').value;
    const status = document.getElementById('rptFilterStatus').value;
    const level = document.getElementById('rptFilterLevel').value;
    const evaluator = document.getElementById('rptFilterEvaluator').value;

    const filtered = db.employees.filter(emp => {
        const evalData = db.evaluations[emp.id];
        const isEval = !!evalData;
        const res = calculateEmpScore(emp.id);

        const matchQ = !q || emp.name.toLowerCase().includes(q) || emp.code.toLowerCase().includes(q);
        const matchDept = !dept || emp.department === dept;
        const matchStatus = !status || (status === 'done' ? isEval : !isEval);
        const matchLevel = !level || (res && res.level == level);
        const matchEvaluator = !evaluator || (evalData && evalData.evaluatedBy === evaluator);

        return matchQ && matchDept && matchStatus && matchLevel && matchEvaluator;
    });

    const tbody = document.getElementById('adminReportsTableBody');
    tbody.innerHTML = filtered.map(emp => {
        const evalData = db.evaluations[emp.id];
        const isEval = !!evalData;
        const res = calculateEmpScore(emp.id);
        const safeId = String(emp.id).replace(/'/g, "\\'");

        return `
            <tr class="hover:bg-slate-50 transition">
                <td class="p-3 font-mono font-bold text-slate-600">${emp.code}</td>
                <td class="p-3 font-bold text-slate-800">${emp.name}</td>
                <td class="p-3 font-semibold text-slate-600">${emp.department}</td>
                <td class="p-3 font-semibold text-blue-800">${isEval ? evalData.evaluatedBy : '-'}</td>
                <td class="p-3 text-center">
                    ${isEval 
                        ? `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800"><i class="fa-solid fa-check"></i> ${currentLang === 'ar' ? 'تم التقييم' : 'Evaluated'}</span>` 
                        : `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">${currentLang === 'ar' ? 'قيد الانتظار' : 'Pending'}</span>`}
                </td>
                <td class="p-3 text-center font-bold text-blue-900">${res ? `${res.totalScore}` : '-'}</td>
                <td class="p-3 text-center font-bold text-purple-700">${res ? `${res.percentage}%` : '-'}</td>
                <td class="p-3 text-center font-bold text-emerald-700">${res ? `${currentLang === 'ar' ? 'مستوى' : 'Level'} ${res.level}` : '-'}</td>
                <td class="p-3 text-center flex justify-center gap-1">
                    ${isEval ? `
                        <button onclick="openEvalModal('${safeId}')" title="تعديل الأدمن" class="px-2 py-1 bg-amber-50 text-amber-700 hover:bg-amber-100 rounded border border-amber-300 font-bold text-[11px] flex items-center gap-1">
                            <i class="fa-solid fa-pen-to-square"></i> ${I18N[currentLang].edit_eval_btn}
                        </button>
                        <button onclick="resetEmployeeEvaluation('${safeId}')" title="إعادة ضبط التقييم" class="px-2 py-1 bg-red-50 text-red-600 hover:bg-red-100 rounded border border-red-300 font-bold text-[11px] flex items-center gap-1">
                            <i class="fa-solid fa-rotate-left"></i> ${I18N[currentLang].reset_eval_btn}
                        </button>
                    ` : `
                        <button onclick="openEvalModal('${safeId}')" class="px-2.5 py-1 bg-blue-600 text-white hover:bg-blue-700 rounded font-bold text-[11px] flex items-center gap-1">
                            <i class="fa-solid fa-clipboard-check"></i> ${currentLang === 'ar' ? 'تقييم' : 'Evaluate'}
                        </button>
                    `}
                </td>
            </tr>
        `;
    }).join('');
}

function exportEvaluationsToExcel() {
    const activeKras = (db.kras && db.kras.length > 0) ? db.kras : KRAS;

    const exportRows = db.employees.map(emp => {
        const evalData = db.evaluations[emp.id];
        const mgrObj = db.employees.find(m => m.code === emp.directManagerCode);
        const res = calculateEmpScore(emp.id);

        const row = {
            "Employee Code": emp.code,
            "Employee Name": emp.name,
            "Job Title": emp.title,
            "Department": emp.department,
            "Section": emp.section,
            "Direct Manager": mgrObj ? mgrObj.name : emp.directManagerCode,
            "Evaluation Status": evalData ? "Evaluated" : "Pending",
            "Raw Score Sum": res ? res.totalScore : "-",
            "Weighted Score %": res ? `${res.percentage}%` : "-",
            "Final Rating Level": res ? `Level ${res.level}` : "-",
            "Evaluation Date": evalData ? evalData.evaluatedAt : "-",
            "Evaluator Name": evalData ? evalData.evaluatedBy : "-"
        };

        activeKras.forEach(kra => {
            const titleText = getKraTitle(kra);
            if (evalData && evalData.scores[kra.id]) {
                const lvl = evalData.scores[kra.id];
                row[`${titleText} (${kra.weight || 0}%)`] = `${lvl} - ${getKraLevelDesc(kra, lvl)}`;
            } else {
                row[`${titleText} (${kra.weight || 0}%)`] = "Not Evaluated";
            }
        });

        row["Notes & Recommendations"] = evalData ? (evalData.notes || "") : "";
        return row;
    });

    const ws = XLSX.utils.json_to_sheet(exportRows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Evaluations Report");
    XLSX.writeFile(wb, `Evaluations_Report_${new Date().toISOString().slice(0,10)}.xlsx`);
}

window.onload = function() {
    initFirebase();
    changeLanguage('ar'); // الافتراضي للغة العربية
};
