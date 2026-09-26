// FIREBASE CONFIGURATION
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyArNWcgj0L3YaMC_mwbqk6s5fIYJLq1_wQ",
    authDomain: "hr-performance-system-f388a.firebaseapp.com",
    databaseURL: "https://hr-performance-system-f388a-default-rtdb.firebaseio.com",
    projectId: "hr-performance-system-f388a"
};

// Default English Evaluation Criteria (KRAs)
let KRAS = [
    {
        id: "k1",
        title: "Technical Skills & Job Competence",
        weight: 20,
        levels: {
            1: "Requires continuous intense supervision with minimal completion of basic tasks.",
            2: "Meets minimal routine requirements with occasional need for follow-up.",
            3: "Very good performance; executes most tasks independently with high efficiency.",
            4: "Advanced level; applies skills professionally and provides support to colleagues.",
            5: "Expert level; innovates quality solutions and serves as a technical reference."
        }
    },
    {
        id: "k2",
        title: "Communication & Collaboration",
        weight: 15,
        levels: {
            1: "Struggles to convey information; needs continuous guidance on communication style.",
            2: "Acceptable communication in routine situations but needs support in complex cases.",
            3: "Communicates clearly and effectively; shows positive team collaboration.",
            4: "Excellent communication; facilitates smooth info flow and impacts team results.",
            5: "Highly professional; builds strong collaborative bridges and leads with diplomacy."
        }
    },
    {
        id: "k3",
        title: "Problem Solving & Decision Making",
        weight: 20,
        levels: {
            1: "Struggles to diagnose problems or offer preliminary solution ideas.",
            2: "Handles simple issues; requires direct guidance in unfamiliar situations.",
            3: "Analyzes standard problems independently and offers practical solutions.",
            4: "Skillfully analyzes complex problems and proposes effective solution options.",
            5: "Anticipates risks, identifies root causes, and creates sustainable solutions."
        }
    },
    {
        id: "k4",
        title: "Initiative & Continuous Improvement",
        weight: 15,
        levels: {
            1: "Relies entirely on direct instructions without showing extra initiative.",
            2: "Occasionally takes initiative only when explicitly requested.",
            3: "Regularly initiates simple ideas and improvements supporting work quality.",
            4: "Active and proactive; seizes opportunities to enhance output quality.",
            5: "Drives innovative development initiatives beyond daily scope."
        }
    },
    {
        id: "k5",
        title: "Sustainability & Corporate Responsibility",
        weight: 15,
        levels: {
            1: "Weak commitment to sustainable practices; needs constant reminders.",
            2: "Moderate and inconsistent compliance with corporate policies.",
            3: "Good and consistent compliance with corporate standards and policies.",
            4: "Consistently complies and actively participates in awareness initiatives.",
            5: "Role model in practicing and promoting a culture of sustainability."
        }
    },
    {
        id: "k6",
        title: "Leadership & Accountability",
        weight: 15,
        levels: {
            1: "Avoids direct responsibility and requires follow-up to complete duties.",
            2: "Takes partial responsibility; requires periodic oversight.",
            3: "Fully accountable for all core assigned duties and tasks.",
            4: "Clearly takes ownership of results and actively supports team goals.",
            5: "Proactive leader trusted during crises and critical assignments."
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
                banner.innerText = "Connected to Cloud (Firebase Realtime) ✓";
            } else {
                banner.innerText = "Connecting to Cloud...";
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
    if (confirm("Are you sure you want to clear browser local cache? Cloud data will remain safe.")) {
        localStorage.removeItem('hr_system_v7_db');
        alert("Local cache cleared successfully.");
        location.reload();
    }
}

function purgeCloudDatabase() {
    const pass = prompt("WARNING: This will permanently delete ALL cloud data! Enter Admin Password:");
    if (pass === db.admin.password) {
        db.employees = [];
        db.evaluations = {};
        saveDB();
        alert("Cloud database purged successfully.");
        refreshActiveViews();
    } else if (pass !== null) {
        alert("Incorrect password!");
    }
}

// Weighted Score & Level Calculation
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

// Delete Evaluation (Admin Only)
function deleteEmployeeEvaluation(empId) {
    if (currentUser.role !== 'admin') {
        alert("Access denied: Admin only!");
        return;
    }

    const emp = db.employees.find(e => e.id === empId || e.id === String(empId));
    const empName = emp ? emp.name : empId;

    if (confirm(`Are you sure you want to delete evaluation for (${empName})?\nThe status will immediately revert to Pending for the manager.`)) {
        delete db.evaluations[empId];
        saveDB();
        refreshActiveViews();
        alert("Evaluation deleted successfully.");
    }
}

// Dynamic Filter Controls
function updateSectionDropdown(deptSelectId, secSelectId) {
    const deptVal = document.getElementById(deptSelectId).value;
    
    let empsToFilter = db.employees;
    if (deptVal) {
        empsToFilter = db.employees.filter(e => e.department === deptVal);
    }

    const availableSections = [...new Set(empsToFilter.map(e => e.section).filter(Boolean))];
    fillSelect(secSelectId, availableSections, 'All Sections');
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

    fillSelect('dashFilterDept', depts, 'All Departments');
    fillSelect('empFilterDept', depts, 'All Departments');
    fillSelect('rptFilterDept', depts, 'All Departments');

    updateSectionDropdown('dashFilterDept', 'dashFilterSection');
    updateSectionDropdown('empFilterDept', 'empFilterSection');

    fillSelect('dashFilterManager', mgrs.map(m => m.name), 'All Managers');
    fillSelect('empFilterDirectMgr', mgrs.map(m => `${m.name} (${m.code})`), 'All Direct Managers');
    fillSelect('rptFilterEvaluator', mgrs.map(m => m.name), 'All Evaluators');

    if (currentUser && currentUser.empData) {
        const myEmps = db.employees.filter(e => e.directManagerCode === currentUser.empData.code);
        const mySecs = [...new Set(myEmps.map(e => e.section).filter(Boolean))];
        fillSelect('mgrFilterSection', mySecs, 'All Sections');
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

// Authentication & Password Management
function handleLogin(e) {
    e.preventDefault();
    const uInput = document.getElementById('usernameInput').value.trim();
    const pInput = document.getElementById('passwordInput').value.trim();
    const errDiv = document.getElementById('loginError');

    errDiv.classList.add('hidden');

    if (uInput === db.admin.username && pInput === db.admin.password) {
        currentUser = { role: 'admin', name: 'System Administrator', username: 'admin' };
        showView();
        return;
    }

    const mgrEmp = db.employees.find(e => e.isManager && e.username === uInput && e.password === pInput);
    if (mgrEmp) {
        currentUser = { role: 'manager', name: mgrEmp.name, username: mgrEmp.username, empData: mgrEmp };
        showView();
        return;
    }

    errDiv.innerText = "Invalid username or password.";
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

    if (!pass1) { alert("Please enter a new password!"); return; }
    if (pass1 !== pass2) { alert("Passwords do not match!"); return; }

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
    alert("Password updated successfully!");
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
        ? 'System Admin'
        : `Manager (${currentUser.empData.code})`;

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

// Manager Progress Tracking & Email Exports
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
        tbody.innerHTML = `<tr><td colspan="8" class="text-center py-4 text-emerald-600 font-bold"><i class="fa-solid fa-circle-check"></i> All displayed managers have completed their evaluations!</td></tr>`;
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
        alert("No pending managers found!");
        return;
    }

    const emailsString = pending.map(m => m.email).join('; ');
    navigator.clipboard.writeText(emailsString).then(() => {
        alert(`Successfully copied emails of ${pending.length} pending manager(s) to clipboard!`);
    }).catch(err => {
        alert("Copy error: " + err);
    });
}

function exportPendingManagersExcel() {
    const managers = getPendingManagersData();
    if (managers.length === 0) {
        alert("No data available to export!");
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
    XLSX.writeFile(wb, `Managers_Progress_Report_${new Date().toISOString().slice(0,10)}.xlsx`);
}

// Add New Employee
function openAddEmployeeModal() {
    document.getElementById('addEmployeeForm').reset();
    document.getElementById('newEmpAccountFields').classList.add('hidden');
    
    const mgrs = db.employees.filter(e => e.isManager);
    const select = document.getElementById('newEmpDirectMgr');
    select.innerHTML = `<option value="">-- No Direct Manager --</option>` + 
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
        alert("Employee code already exists!");
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
        directManagerCode: directMgr || '',
        username: isMgr ? (uName || (name.split(' ')[0] + '.' + code).toLowerCase()) : '',
        password: isMgr ? (pWord || '123456') : ''
    };

    db.employees.push(newEmpObj);
    saveDB();
    closeAddEmployeeModal();
    refreshActiveViews();

    alert(`Employee (${name}) added successfully!`);
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
                        const val = row[kra.id] || row[kra.title];
                        if (val !== undefined) {
                            scores[kra.id] = parseInt(val) || 1;
                        }
                    });

                    db.evaluations[emp.id] = {
                        scores: scores,
                        notes: row["Notes"] || row["ملاحظات التقييم"] || "",
                        evaluatedBy: row["Evaluator Name"] || row["Evaluator"] || "Imported from Excel",
                        evaluatedAt: new Date().toLocaleDateString('en-US')
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

// Account Management
function deleteEmployee(empId) {
    const emp = db.employees.find(e => e.id === empId || e.id === String(empId) || e.code === String(empId));
    if (!emp) { alert("Employee not found!"); return; }

    if (confirm(`Are you sure you want to permanently delete (${emp.name})?`)) {
        db.employees = db.employees.filter(e => e.id !== emp.id);
        delete db.evaluations[emp.id];

        db.employees.forEach(e => {
            if (e.directManagerCode === emp.code) e.directManagerCode = "";
        });

        saveDB();
        refreshActiveViews();
        alert("Employee deleted successfully!");
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

        return `
            <tr class="hover:bg-slate-50 transition">
                <td class="p-3 font-mono font-bold text-slate-600">${emp.code}</td>
                <td class="p-3 font-bold text-slate-800">${emp.name}</td>
                <td class="p-3 text-slate-600">${emp.title}</td>
                <td class="p-3 font-semibold text-blue-900">${emp.department}</td>
                <td class="p-3 font-semibold text-slate-600">${emp.section || '-'}</td>
                <td class="p-3">
                    ${emp.isManager 
                        ? `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800"><i class="fa-solid fa-user-tie"></i> Manager</span>` 
                        : `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">Employee</span>`}
                </td>
                <td class="p-3 text-slate-700 font-semibold">${mgrNameText}</td>
                <td class="p-3 font-mono text-blue-700 bg-blue-50/50 rounded px-2">${emp.isManager ? (emp.username || '-') : '-'}</td>
                <td class="p-3 font-mono text-emerald-700 bg-emerald-50/50 font-bold rounded px-2">${emp.isManager ? (emp.password || '-') : '-'}</td>
                <td class="p-3 text-center flex justify-center gap-1">
                    <button onclick="openPromoteModal('${safeId}')" title="Edit Settings" class="bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold px-2.5 py-1.5 rounded-lg border border-blue-300 transition text-[11px]">
                        <i class="fa-solid fa-user-gear"></i> Edit
                    </button>
                    <button onclick="deleteEmployee('${safeId}')" title="Delete" class="bg-red-50 hover:bg-red-100 text-red-600 font-bold px-2.5 py-1.5 rounded-lg border border-red-300 transition text-[11px]">
                        <i class="fa-solid fa-trash-can"></i> Delete
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

    const allManagers = db.employees.filter(e => e.isManager && e.id !== emp.id);
    const selectObj = document.getElementById('promoteDirectManagerSelect');
    selectObj.innerHTML = `<option value="">-- No Direct Manager --</option>` + 
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
        alert(`Account settings updated for (${emp.name}).`);
    }
}

// Manage KRAs & Weights
function renderManageKrasList() {
    const container = document.getElementById('dynamicKrasContainer');
    if (!container) return;

    const activeKras = (db.kras && db.kras.length > 0) ? db.kras : KRAS;

    let totalWeight = 0;
    container.innerHTML = activeKras.map((kra, idx) => {
        const w = Number(kra.weight) || 0;
        totalWeight += w;
        return `
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-2">
                <div class="flex-grow">
                    <span class="font-bold text-slate-800">${idx + 1}. ${kra.title}</span>
                    <span class="block text-[10px] text-slate-400">ID: ${kra.id}</span>
                </div>
                <div class="flex items-center gap-2">
                    <div class="flex items-center gap-1 bg-white border border-slate-300 rounded-lg px-2 py-1">
                        <span class="text-[11px] text-slate-500 font-bold">Weight:</span>
                        <input type="number" value="${w}" min="1" max="100" step="0.5" onchange="updateKraWeight('${kra.id}', this.value)" class="w-14 text-center font-bold text-blue-700 outline-none text-xs">
                        <span class="text-[11px] font-bold text-slate-500">%</span>
                    </div>
                    <button onclick="editKraElement('${kra.id}')" class="px-2.5 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg border border-blue-200 font-bold text-[11px]">
                        <i class="fa-solid fa-pen"></i> Edit
                    </button>
                    <button onclick="deleteKraElement('${kra.id}')" class="px-2.5 py-1 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg border border-red-200 font-bold text-[11px]">
                        <i class="fa-solid fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `;
    }).join('');

    const badge = document.getElementById('totalWeightsBadge');
    if (badge) {
        badge.innerText = `Total Weight: ${totalWeight.toFixed(1)}%`;
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
    document.getElementById('kraModalTitle').innerText = "Add New Evaluation Criteria";
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
    document.getElementById('kraModalTitle').innerText = `Edit Element: ${kra.title}`;
    document.getElementById('kraFormTitle').value = kra.title;
    document.getElementById('kraFormWeight').value = kra.weight || 15;

    document.getElementById('kraFormLvl1').value = kra.levels[1] || "";
    document.getElementById('kraFormLvl2').value = kra.levels[2] || "";
    document.getElementById('kraFormLvl3').value = kra.levels[3] || "";
    document.getElementById('kraFormLvl4').value = kra.levels[4] || "";
    document.getElementById('kraFormLvl5').value = kra.levels[5] || "";

    document.getElementById('kraModal').classList.remove('hidden');
}

function saveKraElement(e) {
    e.preventDefault();
    const editId = document.getElementById('kraFormEditId').value;
    const title = document.getElementById('kraFormTitle').value.trim();
    const weight = parseFloat(document.getElementById('kraFormWeight').value) || 0;

    const levels = {
        1: document.getElementById('kraFormLvl1').value.trim(),
        2: document.getElementById('kraFormLvl2').value.trim(),
        3: document.getElementById('kraFormLvl3').value.trim(),
        4: document.getElementById('kraFormLvl4').value.trim(),
        5: document.getElementById('kraFormLvl5').value.trim()
    };

    if (!db.kras) db.kras = KRAS;

    if (editId) {
        let kra = KRAS.find(k => k.id === editId);
        if (kra) { kra.title = title; kra.weight = weight; kra.levels = levels; }

        let dbKra = db.kras.find(k => k.id === editId);
        if (dbKra) { dbKra.title = title; dbKra.weight = weight; dbKra.levels = levels; }
    } else {
        const newId = 'k' + (Date.now() % 100000);
        const newObj = { id: newId, title: title, weight: weight, levels: levels };
        KRAS.push(newObj);
        db.kras.push(newObj);
    }

    saveDB();
    closeKraModal();
    refreshActiveViews();
    alert("Evaluation criteria saved and all results recalculated!");
}

function deleteKraElement(kraId) {
    const activeKras = (db.kras && db.kras.length > 0) ? db.kras : KRAS;
    if (activeKras.length <= 1) {
        alert("Cannot delete all elements! At least one criteria must remain.");
        return;
    }

    if (confirm("Are you sure you want to delete this element? Scores will be recalculated based on remaining weights.")) {
        KRAS = KRAS.filter(k => k.id !== kraId);
        db.kras = db.kras.filter(k => k.id !== kraId);
        saveDB();
        refreshActiveViews();
        alert("Element deleted successfully.");
    }
}

function resetDashFilters() {
    document.getElementById('dashFilterDept').value = "";
    updateSectionDropdown('dashFilterDept', 'dashFilterSection');
    document.getElementById('dashFilterManager').value = "";
    renderAdminDashboardCharts();
}

// Analytics Dashboard Rendering
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
        1: "Level 1 (Weak)",
        2: "Level 2 (Acceptable)",
        3: "Level 3 (Very Good)",
        4: "Level 4 (Advanced)",
        5: "Level 5 (Outstanding)"
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
                <h4 class="text-xl font-black">${count} <span class="text-xs font-normal">Emp</span></h4>
                <div class="pt-1 border-t border-slate-200/50 text-[11px] font-semibold flex justify-between">
                    <span>Evaluated %:</span>
                    <strong>${pctOfEvaluated}%</strong>
                </div>
                <div class="text-[10px] opacity-80 flex justify-between">
                    <span>Of Total:</span>
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
        topBottomContainer.innerHTML = `<p class="text-slate-400 text-center py-4">No data available</p>`;
    } else {
        topBottomContainer.innerHTML = deptStats.map((d, i) => `
            <div class="flex items-center justify-between p-2 rounded-lg ${i === 0 ? 'bg-amber-50 border border-amber-200 font-bold' : 'bg-slate-50 border border-slate-100'}">
                <div class="flex items-center gap-2">
                    <span class="w-5 h-5 rounded-full ${i === 0 ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-700'} flex items-center justify-center text-[10px] font-black">${i + 1}</span>
                    <span class="text-slate-800">${d.name}</span>
                </div>
                <div class="text-right">
                    <span class="text-blue-700 font-bold">${d.avg.toFixed(1)}%</span>
                    <span class="block text-[9px] text-slate-400">${d.count}/${d.totalEmps} completed</span>
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
            labels: activeKras.map(k => `${k.title} (${k.weight || 0}%)`),
            datasets: [{
                label: 'Weighted Contribution (%)',
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
                    title: { display: true, text: 'Weighted Contribution (%)' }
                } 
            }
        }
    });

    const ctxLevels = document.getElementById('chartLevels').getContext('2d');
    if (chartLevelsInstance) chartLevelsInstance.destroy();

    chartLevelsInstance = new Chart(ctxLevels, {
        type: 'pie',
        data: {
            labels: [1, 2, 3, 4, 5].map(l => `Level ${l}`),
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
                label: 'Weighted Performance Avg %',
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
    const mgr = currentUser.empData;
    document.getElementById('mgrAssignedDeptBadge').innerText = `Direct Subordinates for: ${mgr.name} (${mgr.code})`;

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

        return `
            <tr class="hover:bg-slate-50 transition">
                <td class="p-3 font-mono font-bold text-slate-600">${emp.code}</td>
                <td class="p-3 font-bold text-slate-800">${emp.name}</td>
                <td class="p-3 text-slate-600">${emp.title}</td>
                <td class="p-3 font-semibold text-blue-900">${emp.department}</td>
                <td class="p-3 text-slate-600">${emp.section || '-'}</td>
                <td class="p-3 text-center font-bold text-blue-700">
                    ${res ? `${res.percentage}%` : '-'}
                </td>
                <td class="p-3 text-center">
                    ${isEvaluated 
                        ? `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800"><i class="fa-solid fa-check"></i> Completed (Locked)</span>` 
                        : `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800"><i class="fa-solid fa-clock"></i> Pending</span>`}
                </td>
                <td class="p-3 text-center">
                    ${isEvaluated 
                        ? `<span class="text-xs text-slate-400 font-bold italic flex items-center justify-center gap-1"><i class="fa-solid fa-lock text-slate-400"></i> Locked</span>`
                        : `<button onclick="openEvalModal('${safeId}')" class="px-3 py-1.5 rounded-lg font-bold text-xs transition flex items-center gap-1 mx-auto bg-blue-600 text-white hover:bg-blue-700 shadow-md">
                            <i class="fa-solid fa-clipboard-check"></i> Evaluate
                           </button>`
                    }
                </td>
            </tr>
        `;
    }).join('');
}

function openEvalModal(empId) {
    const emp = db.employees.find(e => e.id === empId || e.id === String(empId) || e.code === String(empId));
    if (!emp) { alert("Employee not found!"); return; }

    const isAlreadyEvaluated = !!db.evaluations[emp.id];
    if (currentUser.role !== 'admin' && isAlreadyEvaluated) {
        alert("Evaluation is locked for direct manager! Please contact System Administrator to make changes.");
        return;
    }

    const activeKras = (db.kras && db.kras.length > 0) ? db.kras : KRAS;

    document.getElementById('evalTargetEmpId').value = emp.id;
    document.getElementById('evalModalEmpName').innerText = `Evaluating: ${emp.name}`;
    document.getElementById('evalModalEmpDetails').innerText = `${emp.title} | Code: ${emp.code} | Dept: ${emp.department}`;

    const existingEval = db.evaluations[emp.id] || { scores: {}, notes: "" };
    document.getElementById('evalNotesInput').value = existingEval.notes || "";

    const container = document.getElementById('evalCriteriaList');
    container.innerHTML = activeKras.map((kra, idx) => {
        const selectedVal = existingEval.scores[kra.id] || 0;
        return `
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                <div class="font-bold text-slate-800 text-xs border-b pb-1 flex justify-between items-center">
                    <span>${idx + 1}. ${kra.title}</span>
                    <span class="text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Weight: ${kra.weight || 0}%</span>
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
        evaluatedAt: new Date().toLocaleDateString('en-US')
    };

    saveDB();
    closeEvalModal();
    refreshActiveViews();

    alert("Evaluation saved successfully!");
}

// Evaluation Reports
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
                        ? `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800"><i class="fa-solid fa-check"></i> Evaluated</span>` 
                        : `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">Pending</span>`}
                </td>
                <td class="p-3 text-center font-bold text-blue-900">${res ? `${res.totalScore}` : '-'}</td>
                <td class="p-3 text-center font-bold text-purple-700">${res ? `${res.percentage}%` : '-'}</td>
                <td class="p-3 text-center font-bold text-emerald-700">${res ? `Level ${res.level}` : '-'}</td>
                <td class="p-3 text-center flex justify-center gap-1">
                    ${isEval ? `
                        <button onclick="openEvalModal('${safeId}')" title="Admin Edit" class="px-2 py-1 bg-amber-50 text-amber-700 hover:bg-amber-100 rounded border border-amber-300 font-bold text-[11px] flex items-center gap-1">
                            <i class="fa-solid fa-pen-to-square"></i> Edit
                        </button>
                        <button onclick="deleteEmployeeEvaluation('${safeId}')" title="Delete Evaluation" class="px-2 py-1 bg-red-50 text-red-600 hover:bg-red-100 rounded border border-red-300 font-bold text-[11px] flex items-center gap-1">
                            <i class="fa-solid fa-trash"></i> Delete
                        </button>
                    ` : `
                        <button onclick="openEvalModal('${safeId}')" class="px-2.5 py-1 bg-blue-600 text-white hover:bg-blue-700 rounded font-bold text-[11px] flex items-center gap-1">
                            <i class="fa-solid fa-clipboard-check"></i> Evaluate
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
            if (evalData && evalData.scores[kra.id]) {
                const lvl = evalData.scores[kra.id];
                row[`${kra.title} (${kra.weight || 0}%)`] = `${lvl} - ${kra.levels[lvl]}`;
            } else {
                row[`${kra.title} (${kra.weight || 0}%)`] = "Not Evaluated";
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
};
