// FIREBASE CREDENTIALS HARDCODED IN SYSTEM
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyArNWcgj0L3YaMC_mwbqk6s5fIYJLq1_wQ",
    authDomain: "hr-performance-system-f388a.firebaseapp.com",
    databaseURL: "https://hr-performance-system-f388a-default-rtdb.firebaseio.com",
    projectId: "hr-performance-system-f388a"
};

const KRAS = [
    {
        id: "k1",
        title: "المهارات الفنية والقدرات الوظيفية",
        levels: {
            1: "مستوى يتطلب توجيه وإشراف مكثف مستمر مع إنجاز محدود للمهام الأساسية.",
            2: "مستوى يلبي الحد الأدنى من متطلبات العمل الروتينية مع الحاجة لمتابعة في المواقف المعتادة.",
            3: "مستوى جيد جداً، ينفذ معظم المهام باستقلالية وكفاءة عالية ودعم محدود.",
            4: "مستوى متقدم، يطبق المهارات الفنية باحترافية وسرعة مع تقديم الدعم والحلول للزملاء.",
            5: "مستوى خبير ومتميز، يبتكر حلولاً نوعية، ويعد مرجعاً فنياً يطور أساليب العمل."
        }
    },
    {
        id: "k2",
        title: "مهارات التواصل والتعاون",
        levels: {
            1: "يواجه صعوبة ملحوظة في إيصال المعلومات، ويحتاج توجيه مستمر لأسلوب التواصل.",
            2: "تواصل مقبول في الظروف المعتادة ولكن يحتاج دعم في مواقف التواصل المركبة.",
            3: "يتواصل بوضوح وفعالية في بيئة العمل مع إبداء روح تعاون إيجابية مع الجميع.",
            4: "تواصل ممتاز، يسهل تدفق المعلومات بسلاسة ويؤثر إيجابياً في نتائج الفريق.",
            5: "احترافي للغاية، يبني جسور تعاون متينة ويقود بيئة العمل بنجاح ودبلوماسية."
        }
    },
    {
        id: "k3",
        title: "تحليل المشاكل واتخاذ الحلول",
        levels: {
            1: "يواجه صعوبة في تشخيص المشكلات أو تقديم اقتراحات أولية للحل.",
            2: "يتعامل مع المشكلات البسيطة ويحتاج توجيه مباشر في المواقف غير المألوفة.",
            3: "يحلل المشاكل المعتادة بشكل مستقل ويقدم حلولاً عملية وسريعة.",
            4: "يحلل المشكلات المركبة بمهارة ويقترح خيارات حلول فعالة وناجحة.",
            5: "يتنبأ بالمخاطر، يحدد الأسباب الجذرية بسرعة، ويبتكر حلولاً مستدامة طويلة الأمد."
        }
    },
    {
        id: "k4",
        title: "المبادرة والتطوير المستمر",
        levels: {
            1: "يعتمد بالكامل على التعليمات المباشرة دون إبداء أي مبادرة إضافية.",
            2: "يبادر أحياناً عندما يطلب منه ذلك بشكل صريح.",
            3: "يبادر بانتظام بأفكار وتحسينات بسيطة تدعم جودة وكفاءة العمل.",
            4: "نشط ومبادر بطبيعة عمله، يقتني الفرص لتحسين جودة المخرجات وتطوير الأداء.",
            5: "قائد للمبادرات التطويرية المبتكرة التي تتجاوز نطاق مهامه اليومية."
        }
    },
    {
        id: "k5",
        title: "الاستدامة والمسؤولية المجتمعية والمؤسسية",
        levels: {
            1: "التزام ضعيف بمعايير الممارسات المستدامة ويحتاج تذكير دائم.",
            2: "التزام متوسط وغير منتظم بالسياسات والتوجيهات المؤسسية.",
            3: "يلتزم بالمعايير والسياسات المؤسسية بشكل جيد ومستمر.",
            4: "يلتزم بانتظام ويشارك بفعالية في مبادرات وأنشطة التوعية والممارسة المستدامة.",
            5: "نموذج يحتذى به في تطبيق ونشر ثقافة الاستدامة والمسؤولية بين زملائه."
        }
    },
    {
        id: "k6",
        title: "القيادة وتحمل المسؤولية",
        levels: {
            1: "يتجنب تحمل المسؤولية المباشرة ويحتاج متابعة لتنفيذ الواجبات.",
            2: "يتحمل جزءاً من المسؤولية ويحتاج إلى متابعة دورية.",
            3: "يتحمل كامل مسؤولية مهامه الأساسية الموكلة إليه باقتدار.",
            4: "يتحمل مسؤولية النتائج بوضوح ويدعم زملائه بفعالية للوصول للأهداف.",
            5: "قيادي استباقي يعتمد عليه في أوقات الأزمات والمهام الحرجة بثقة مطلقة."
        }
    }
];

const MAX_POSSIBLE_SCORE = KRAS.length * 5; // 30

let firebaseApp = null;
let firebaseDB = null;

let db = {
    admin: { username: "admin", password: "123" },
    employees: [],
    evaluations: {}
};

let currentUser = null;
let chartLevelsInstance = null;
let chartDeptsInstance = null;

function initFirebase() {
    try {
        if (!firebase.apps.length) {
            firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
        } else {
            firebaseApp = firebase.app();
        }
        firebaseDB = firebase.database();

        // Monitor Connection
        firebaseDB.ref('.info/connected').on('value', (snap) => {
            const banner = document.getElementById('firebaseStatusBanner');
            if (snap.val() === true) {
                banner.innerText = "السيستم متصل مباشرة بقاعدة البيانات السحابية (Firebase Realtime) ✓";
            } else {
                banner.innerText = "جاري الاتصال بالسحابة...";
            }
        });

        // Realtime Sync Listener
        firebaseDB.ref('hr_system').on('value', (snapshot) => {
            const cloudData = snapshot.val();
            if (cloudData) {
                db = cloudData;
                if (!db.evaluations) db.evaluations = {};
                if (!db.employees) db.employees = [];
                refreshActiveViews();
            } else {
                saveDB();
            }
        });

    } catch (err) {
        console.error("Firebase init error:", err);
    }
}

function saveDB() {
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
    dlAnchorElem.setAttribute("download", `نسخة_احتياطية_المنظومة_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(dlAnchorElem);
    dlAnchorElem.click();
    dlAnchorElem.remove();
}

function clearLocalOnlyData() {
    if (confirm("هل أنت متأكد من مسح كاش الأداة محلياً؟ لن تؤثر هذه العملية على البيانات السحابية المسجلة على Firebase.")) {
        localStorage.removeItem('hr_system_v7_db');
        alert("تم مسح كاش الأداة بنجاح مع الاحتفاظ بنسختك السحابية.");
        location.reload();
    }
}

function purgeCloudDatabase() {
    const pass = prompt("تنبيه أمني هام: أنت على وشك حذف كامل قاعدة البيانات السحابية من Firebase! يرجى إدخال كلمة سر الأدمن للتأكيد:");
    if (pass === db.admin.password) {
        db.employees = [];
        db.evaluations = {};
        saveDB();
        alert("تم مسح قاعدة البيانات السحابية بنجاح.");
        refreshActiveViews();
    } else if (pass !== null) {
        alert("كلمة السر غير صحيحة! تم إلغاء العملية.");
    }
}

function calculateEmpScore(empId) {
    const evalData = db.evaluations[empId];
    if (!evalData || !evalData.scores) return null;

    let total = 0;
    let count = 0;
    Object.values(evalData.scores).forEach(score => {
        total += Number(score);
        count++;
    });

    const percentage = ((total / MAX_POSSIBLE_SCORE) * 100).toFixed(1);
    const level = Math.round(total / (count || 1));

    return {
        totalScore: total,
        maxScore: MAX_POSSIBLE_SCORE,
        percentage: Number(percentage),
        level: level || 1
    };
}

function populateFilterDropdowns() {
    const depts = [...new Set(db.employees.map(e => e.department).filter(Boolean))];
    const secs = [...new Set(db.employees.map(e => e.section).filter(Boolean))];
    const mgrs = db.employees.filter(e => e.isManager);

    fillSelect('dashFilterDept', depts, 'جميع الإدارات');
    fillSelect('dashFilterSection', secs, 'جميع الأقسام');
    fillSelect('dashFilterManager', mgrs.map(m => m.name), 'جميع المدراء المقيمين');

    fillSelect('empFilterDept', depts, 'كل الإدارات');
    fillSelect('empFilterSection', secs, 'كل الأقسام');
    fillSelect('empFilterDirectMgr', mgrs.map(m => `${m.name} (${m.code})`), 'كل المدراء المباشرين');

    fillSelect('rptFilterDept', depts, 'كل الإدارات');
    fillSelect('rptFilterEvaluator', mgrs.map(m => m.name), 'كل المدراء المقيمين');

    if (currentUser && currentUser.empData) {
        const myEmps = db.employees.filter(e => e.directManagerCode === currentUser.empData.code);
        const mySecs = [...new Set(myEmps.map(e => e.section).filter(Boolean))];
        fillSelect('mgrFilterSection', mySecs, 'كل الأقسام');
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

function handleLogin(e) {
    e.preventDefault();
    const uInput = document.getElementById('usernameInput').value.trim();
    const pInput = document.getElementById('passwordInput').value.trim();
    const errDiv = document.getElementById('loginError');

    errDiv.classList.add('hidden');

    if (uInput === db.admin.username && pInput === db.admin.password) {
        currentUser = { role: 'admin', name: 'مسؤول النظام (Admin)', username: 'admin' };
        showView();
        return;
    }

    const mgrEmp = db.employees.find(e => e.isManager && e.username === uInput && e.password === pInput);
    if (mgrEmp) {
        currentUser = { role: 'manager', name: mgrEmp.name, username: mgrEmp.username, empData: mgrEmp };
        showView();
        return;
    }

    errDiv.innerText = "اسم المستخدم أو كلمة السر غير صحيحة. يرجى التأكد من المزامنة من حساب الأدمن أولاً.";
    errDiv.classList.remove('hidden');
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
        ? 'صلاحية مسؤول النظام' 
        : `مدير تقييم (الكود: ${currentUser.empData.code})`;

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
}

function deleteEmployee(empId) {
    const emp = db.employees.find(e => e.id === empId);
    if (!emp) return;

    if (confirm(`هل أنت متأكد من حذف (${emp.name})؟ سيتم الحذف من Firebase تماماً.`)) {
        db.employees = db.employees.filter(e => e.id !== empId);
        delete db.evaluations[empId];

        db.employees.forEach(e => {
            if (e.directManagerCode === emp.code) e.directManagerCode = "";
        });

        saveDB();
        refreshActiveViews();
        alert("تم الحذف بنجاح!");
    }
}

function downloadEmployeesTemplate() {
    const templateData = [
        { "كود الموظف": "EMP101", "اسم الموظف": "د. أحمد سلامة", "الوظيفة": "مدير عام", "الإدارة": "المشتريات", "القسم": "العقود", "مدير": "نعم", "كود المدير المباشر": "", "اسم المستخدم": "a.salama", "كلمة السر": "pass2026" },
        { "كود الموظف": "EMP102", "اسم الموظف": "علي حسن عبد الله", "الوظيفة": "محاسب أول", "الإدارة": "الشؤون المالية", "القسم": "الخزينة", "مدير": "لا", "كود المدير المباشر": "EMP101", "اسم المستخدم": "", "كلمة السر": "" }
    ];

    const ws = XLSX.utils.json_to_sheet(templateData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "قائمة الموظفين والمدراء");
    XLSX.writeFile(wb, "نموذج_ربط_المدير_المباشر.xlsx");
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

            if (rows.length === 0) { alert("الشيت فارغ!"); return; }

            let addedCount = 0;
            rows.forEach((row, idx) => {
                const code = (row["كود الموظف"] || row["Code"] || ("EMP-" + (idx + 100))).toString().trim();
                const name = row["اسم الموظف"] || row["Name"];
                const title = row["الوظيفة"] || row["Title"] || "موظف";
                const dept = row["الإدارة"] || row["Department"] || "عام";
                const sec = row["القسم"] || row["Section"] || "عام";
                const isMgrVal = (row["مدير"] || row["IsManager"] || "").toString().trim().toLowerCase();
                const isMgr = isMgrVal === 'نعم' || isMgrVal === 'مدير' || isMgrVal === 'yes' || isMgrVal === 'true';
                const mgrCode = (row["كود المدير المباشر"] || row["ManagerCode"] || "").toString().trim();
                const uName = (row["اسم المستخدم"] || row["Username"] || "").toString().trim();
                const pWord = (row["كلمة السر"] || row["Password"] || "").toString().trim();

                if (name) {
                    let existing = db.employees.find(emp => emp.code === code || emp.name === name);
                    if (!existing) {
                        db.employees.push({
                            id: 'E_' + Date.now() + '_' + Math.floor(Math.random()*1000),
                            code: code,
                            name: name,
                            title: title,
                            department: dept,
                            section: sec,
                            isManager: isMgr,
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
                    }
                }
            });

            saveDB();
            refreshActiveViews();

            const msg = document.getElementById('importSuccessMsg');
            msg.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-600"></i> تم التحديث والمزامنة مع السحابة! تم استيراد وتحديث <strong>${addedCount}</strong> موظف ومدير.`;
            msg.classList.remove('hidden');

        } catch (err) {
            alert("حدث خطأ أثناء قراءة ملف الإكسيل: " + err.message);
        }
    };
    reader.readAsArrayBuffer(file);
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

        return `
            <tr class="hover:bg-slate-50 transition">
                <td class="p-3 font-mono font-bold text-slate-600">${emp.code}</td>
                <td class="p-3 font-bold text-slate-800">${emp.name}</td>
                <td class="p-3 text-slate-600">${emp.title}</td>
                <td class="p-3 font-semibold text-blue-900">${emp.department}</td>
                <td class="p-3 font-semibold text-slate-600">${emp.section || '-'}</td>
                <td class="p-3">
                    ${emp.isManager 
                        ? `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800"><i class="fa-solid fa-user-tie"></i> مدير تقييم</span>` 
                        : `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">موظف</span>`}
                </td>
                <td class="p-3 text-slate-700 font-semibold">${mgrNameText}</td>
                <td class="p-3 font-mono text-blue-700 bg-blue-50/50 rounded px-2">${emp.isManager ? (emp.username || '-') : '-'}</td>
                <td class="p-3 font-mono text-emerald-700 bg-emerald-50/50 font-bold rounded px-2">${emp.isManager ? (emp.password || '-') : '-'}</td>
                <td class="p-3 text-center flex justify-center gap-1">
                    <button onclick="openPromoteModal('${emp.id}')" title="تعديل البيانات" class="bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold px-2.5 py-1.5 rounded-lg border border-blue-300 transition text-[11px]">
                        <i class="fa-solid fa-user-gear"></i> تعديل
                    </button>
                    <button onclick="deleteEmployee('${emp.id}')" title="حذف الموظف" class="bg-red-50 hover:bg-red-100 text-red-600 font-bold px-2.5 py-1.5 rounded-lg border border-red-300 transition text-[11px]">
                        <i class="fa-solid fa-trash-can"></i> حذف
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function openPromoteModal(empId) {
    const emp = db.employees.find(e => e.id === empId);
    if (!emp) return;

    document.getElementById('promoteEmpId').value = emp.id;
    document.getElementById('promoteEmpName').value = emp.name;
    document.getElementById('promoteIsManagerCheckbox').checked = !!emp.isManager;

    const allManagers = db.employees.filter(e => e.isManager && e.id !== emp.id);
    const selectObj = document.getElementById('promoteDirectManagerSelect');
    selectObj.innerHTML = `<option value="">-- بدون مدير مباشر --</option>` + 
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
        emp.directManagerCode = document.getElementById('promoteDirectManagerSelect').value;
        emp.username = document.getElementById('promoteUsername').value.trim();
        emp.password = document.getElementById('promotePassword').value.trim();

        saveDB();
        closePromoteModal();
        refreshActiveViews();
        alert(`تم تحديث بيانات (${emp.name}) بنجاح.`);
    }
}

function resetDashFilters() {
    document.getElementById('dashFilterDept').value = "";
    document.getElementById('dashFilterSection').value = "";
    document.getElementById('dashFilterManager').value = "";
    renderAdminDashboardCharts();
}

function renderAdminDashboardCharts() {
    const selDept = document.getElementById('dashFilterDept').value;
    const selSec = document.getElementById('dashFilterSection').value;
    const selMgr = document.getElementById('dashFilterManager').value;

    const filteredEmps = db.employees.filter(emp => {
        const matchDept = !selDept || emp.department === selDept;
        const matchSec = !selSec || emp.section === selSec;
        
        const evalData = db.evaluations[emp.id];
        const matchMgr = !selMgr || (evalData && evalData.evaluatedBy === selMgr);

        return matchDept && matchSec && matchMgr;
    });

    const totalEmps = filteredEmps.length;
    const depts = [...new Set(filteredEmps.map(e => e.department))];
    
    let evaluatedCount = 0;
    let levelCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    let grandTotalPct = 0;

    filteredEmps.forEach(emp => {
        const res = calculateEmpScore(emp.id);
        if (res) {
            evaluatedCount++;
            levelCounts[res.level] = (levelCounts[res.level] || 0) + 1;
            grandTotalPct += res.percentage;
        }
    });

    const pendingCount = totalEmps - evaluatedCount;
    const avgPct = evaluatedCount > 0 ? (grandTotalPct / evaluatedCount).toFixed(1) : 0;

    document.getElementById('statTotalEmployees').innerText = totalEmps;
    document.getElementById('statAvgScore').innerText = `${avgPct}%`;
    document.getElementById('statEvaluatedCount').innerText = evaluatedCount;
    document.getElementById('statPendingCount').innerText = pendingCount > 0 ? pendingCount : 0;

    const levelTitles = {
        1: "المستوى 1 (ضعيف)",
        2: "المستوى 2 (مقبول)",
        3: "المستوى 3 (جيد جداً)",
        4: "المستوى 4 (متقدم)",
        5: "المستوى 5 (متميز/خبير)"
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
                <h4 class="text-xl font-black">${count} <span class="text-xs font-normal">موظف</span></h4>
                <div class="pt-1 border-t border-slate-200/50 text-[11px] font-semibold flex justify-between">
                    <span>النسبة للمُقيّمين:</span>
                    <strong>${pctOfEvaluated}%</strong>
                </div>
                <div class="text-[10px] opacity-80 flex justify-between">
                    <span>من المجموع المفلتر:</span>
                    <span>${pctOfTotal}%</span>
                </div>
            </div>
        `;
    }).join('');

    const ctxLevels = document.getElementById('chartLevels').getContext('2d');
    if (chartLevelsInstance) chartLevelsInstance.destroy();

    chartLevelsInstance = new Chart(ctxLevels, {
        type: 'pie',
        data: {
            labels: ['المستوى 1', 'المستوى 2', 'المستوى 3', 'المستوى 4', 'المستوى 5'],
            datasets: [{
                data: [levelCounts[1], levelCounts[2], levelCounts[3], levelCounts[4], levelCounts[5]],
                backgroundColor: ['#ef4444', '#f59e0b', '#3b82f6', '#6366f1', '#10b981']
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });

    const ctxDepts = document.getElementById('chartDeptsProgress').getContext('2d');
    if (chartDeptsInstance) chartDeptsInstance.destroy();

    const deptsAvgScores = depts.map(d => {
        const empsInDept = filteredEmps.filter(e => e.department === d);
        let deptTotal = 0;
        let deptCount = 0;
        empsInDept.forEach(e => {
            const res = calculateEmpScore(e.id);
            if (res) { deptTotal += res.percentage; deptCount++; }
        });
        return deptCount > 0 ? (deptTotal / deptCount).toFixed(1) : 0;
    });

    chartDeptsInstance = new Chart(ctxDepts, {
        type: 'bar',
        data: {
            labels: depts,
            datasets: [{
                label: 'متوسط الأداء %',
                data: deptsAvgScores,
                backgroundColor: '#8b5cf6'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, max: 100 } }
        }
    });
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
            "المستوى": `مستوى ${lvl}`,
            "عدد الموظفين": count,
            "النسبة من المقيّمين %": evaluatedCount > 0 ? `${((count / evaluatedCount) * 100).toFixed(1)}%` : "0%",
            "النسبة من إجمالي الموظفين %": totalEmps > 0 ? `${((count / totalEmps) * 100).toFixed(1)}%` : "0%"
        };
    });

    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "نسب المستويات");
    XLSX.writeFile(wb, `نسب_مستويات_التقييم_${new Date().toISOString().slice(0,10)}.xlsx`);
}

function renderManagerDashboard() {
    filterManagerEmpTable();
}

function filterManagerEmpTable() {
    const mgr = currentUser.empData;
    document.getElementById('mgrAssignedDeptBadge').innerText = `المرؤوسين المباشرين للمدير: ${mgr.name} (الكود: ${mgr.code})`;

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

        return `
            <tr class="hover:bg-slate-50 transition">
                <td class="p-3 font-mono font-bold text-slate-600">${emp.code}</td>
                <td class="p-3 font-bold text-slate-800">${emp.name}</td>
                <td class="p-3 text-slate-600">${emp.title}</td>
                <td class="p-3 font-semibold text-blue-900">${emp.department}</td>
                <td class="p-3 text-slate-600">${emp.section || '-'}</td>
                <td class="p-3 text-center font-bold text-blue-700">
                    ${res ? `${res.totalScore} / ${res.maxScore} (${res.percentage}%)` : '-'}
                </td>
                <td class="p-3 text-center">
                    ${isEvaluated 
                        ? `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800"><i class="fa-solid fa-check"></i> تم التقييم</span>` 
                        : `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800"><i class="fa-solid fa-clock"></i> لم يكتمل</span>`}
                </td>
                <td class="p-3 text-center">
                    <button onclick="openEvalModal('${emp.id}')" class="px-3 py-1.5 rounded-lg font-bold text-xs transition flex items-center gap-1 mx-auto ${isEvaluated ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'}">
                        <i class="fa-solid ${isEvaluated ? 'fa-pen-to-square' : 'fa-clipboard-check'}"></i> ${isEvaluated ? 'تعديل التقييم' : 'بدء التقييم'}
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function openEvalModal(empId) {
    const emp = db.employees.find(e => e.id === empId);
    if (!emp) return;

    document.getElementById('evalTargetEmpId').value = emp.id;
    document.getElementById('evalModalEmpName').innerText = `تقييم الموظف: ${emp.name}`;
    document.getElementById('evalModalEmpDetails').innerText = `${emp.title} | الكود: ${emp.code} | الإدارة: ${emp.department}`;

    const existingEval = db.evaluations[emp.id] || { scores: {}, notes: "" };
    document.getElementById('evalNotesInput').value = existingEval.notes || "";

    const container = document.getElementById('evalCriteriaList');
    container.innerHTML = KRAS.map((kra, idx) => {
        const selectedVal = existingEval.scores[kra.id] || 0;
        return `
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                <div class="font-bold text-slate-800 text-xs border-b pb-1">
                    ${idx + 1}. ${kra.title}
                </div>
                <div class="space-y-2">
                    ${[1,2,3,4,5].map(lvl => `
                        <label class="flex items-start gap-2.5 p-2 rounded-lg border border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/30 transition cursor-pointer text-xs">
                            <input type="radio" name="kra_${kra.id}" value="${lvl}" ${selectedVal == lvl ? 'checked' : ''} required class="mt-0.5 text-blue-600 focus:ring-blue-500">
                            <span class="text-slate-700 leading-relaxed">${kra.levels[lvl]}</span>
                        </label>
                    `).join('')}
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

    KRAS.forEach(kra => {
        const val = formData.get(`kra_${kra.id}`);
        if (val) scores[kra.id] = parseInt(val);
    });

    const notes = document.getElementById('evalNotesInput').value;

    db.evaluations[empId] = {
        scores: scores,
        notes: notes,
        evaluatedBy: currentUser.name,
        evaluatedAt: new Date().toLocaleDateString('ar-EG')
    };

    saveDB();
    closeEvalModal();
    refreshActiveViews();

    alert("تم حفظ ونشر التقييم للسحابة بنجاح!");
}

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

        return `
            <tr class="hover:bg-slate-50 transition">
                <td class="p-3 font-mono font-bold text-slate-600">${emp.code}</td>
                <td class="p-3 font-bold text-slate-800">${emp.name}</td>
                <td class="p-3 font-semibold text-slate-600">${emp.department}</td>
                <td class="p-3 font-semibold text-blue-800">${isEval ? evalData.evaluatedBy : '-'}</td>
                <td class="p-3 text-center">
                    ${isEval 
                        ? `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800"><i class="fa-solid fa-check"></i> تم التقييم</span>` 
                        : `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">قيد الانتظار</span>`}
                </td>
                <td class="p-3 text-center font-bold text-blue-900">${res ? `${res.totalScore} / ${res.maxScore}` : '-'}</td>
                <td class="p-3 text-center font-bold text-purple-700">${res ? `${res.percentage}%` : '-'}</td>
                <td class="p-3 text-center font-bold text-emerald-700">${res ? `مستوى ${res.level}` : '-'}</td>
                <td class="p-3 text-center">
                    <button onclick="openEvalModal('${emp.id}')" class="px-3 py-1 rounded font-bold text-[11px] transition flex items-center gap-1 mx-auto ${isEval ? 'bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-300' : 'bg-blue-600 text-white hover:bg-blue-700'}">
                        <i class="fa-solid ${isEval ? 'fa-pen-to-square' : 'fa-clipboard-check'}"></i> ${isEval ? 'تعديل التقييم' : 'تقييم الآن'}
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function exportEvaluationsToExcel() {
    const exportRows = db.employees.map(emp => {
        const evalData = db.evaluations[emp.id];
        const mgrObj = db.employees.find(m => m.code === emp.directManagerCode);
        const res = calculateEmpScore(emp.id);

        const row = {
            "كود الموظف": emp.code,
            "اسم الموظف": emp.name,
            "الوظيفة": emp.title,
            "الإدارة": emp.department,
            "القسم": emp.section,
            "المدير المباشر": mgrObj ? mgrObj.name : emp.directManagerCode,
            "حالة التقييم": evalData ? "تم التقييم" : "قيد الانتظار",
            "المجموع الإجمالي (Total Score)": res ? res.totalScore : "-",
            "الحد الأقصى للمجموع": res ? res.maxScore : "-",
            "النسبة المئوية %": res ? `${res.percentage}%` : "-",
            "المستوى النهائى": res ? `مستوى ${res.level}` : "-",
            "تاريخ التقييم": evalData ? evalData.evaluatedAt : "-",
            "المقيم": evalData ? evalData.evaluatedBy : "-"
        };

        KRAS.forEach(kra => {
            if (evalData && evalData.scores[kra.id]) {
                const lvl = evalData.scores[kra.id];
                row[kra.title] = `${lvl} - ${kra.levels[lvl]}`;
            } else {
                row[kra.title] = "غير مقيم";
            }
        });

        row["ملاحظات وتوصيات المدير"] = evalData ? (evalData.notes || "") : "";
        return row;
    });

    const ws = XLSX.utils.json_to_sheet(exportRows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "تقرير التقييمات السحابي");
    XLSX.writeFile(wb, `تقرير_تقييمات_الأداء_Firebase_${new Date().toISOString().slice(0,10)}.xlsx`);
}

window.onload = function() {
    initFirebase();
};
