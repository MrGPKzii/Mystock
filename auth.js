/**
 * StockApp - Authentication Logic
 */

// 1. สลับหน้าTab ระหว่าง Login และ Register
function switchTab(tab) {
    const loginForm = document.getElementById('form-login');
    const registerForm = document.getElementById('form-register');
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    
    hideAlert();

    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        
        tabLogin.className = "flex-1 py-3 text-sm font-medium border-b-2 border-emerald-500 text-emerald-400 transition-all";
        tabRegister.className = "flex-1 py-3 text-sm font-medium border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-all";
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        
        tabRegister.className = "flex-1 py-3 text-sm font-medium border-b-2 border-emerald-500 text-emerald-400 transition-all";
        tabLogin.className = "flex-1 py-3 text-sm font-medium border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-all";
    }
}

// 2. แสดง/ซ่อน ข้อความแจ้งเตือน (Alert Message)
function showAlert(message, type = 'error') {
    const alertBox = document.getElementById('alert-box');
    alertBox.classList.remove('hidden', 'bg-red-500/10', 'border-red-500/30', 'text-red-400', 'bg-emerald-500/10', 'border-emerald-500/30', 'text-emerald-400');

    if (type === 'error') {
        alertBox.classList.add('bg-red-500/10', 'border-red-500/30', 'text-red-400');
    } else {
        alertBox.classList.add('bg-emerald-500/10', 'border-emerald-500/30', 'text-emerald-400');
    }

    alertBox.innerText = message;
}

function hideAlert() {
    const alertBox = document.getElementById('alert-box');
    alertBox.classList.add('hidden');
}

// 3. จัดการการลงทะเบียน (Register)
async function handleRegister(event) {
    event.preventDefault();

    const username = document.getElementById('reg-username').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;

    // ตรวจสอบความถูกต้องเบื้องต้น
    if (password !== confirmPassword) {
        showAlert('รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน', 'error');
        return;
    }

    // โครงสร้าง Payload ที่เตรียมไว้สำหรับส่งเข้า Supabase
    const userPayload = {
        username: username,
        email: email,
        password: password,
        // ข้อกำหนดตามโจทย์
        role: 'Pending', // สถานะเริ่มต้น
        level: 1        // Level เริ่มต้น
    };

    console.log('[SUPABASE READY] ข้อมูลเตรียมสมัครสมาชิก:', userPayload);

    // ========================================================
    // TODO: จุดเชื่อมต่อ Supabase Auth ในขั้นตอนถัดไป
    // ========================================================
    /*
    try {
        // 1. สมัคร User ใน Supabase Auth
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    username: username,
                    role: 'Pending',
                    level: 1
                }
            }
        });

        if (error) throw error;

        // 2. เพิ่มข้อมูลโปรไฟล์เข้าตาราง profiles
        // ...
        
        showAlert('สมัครสมาชิกสำเร็จ! บัญชีของคุณอยู่ระหว่างรออนุมัติ (Pending)', 'success');
    } catch (err) {
        showAlert(err.message, 'error');
    }
    */

    // จำลองการสมัครสำเร็จ
    showAlert('สมัครสมาชิกสำเร็จ! บัญชีของคุณอยู่ระหว่างรออนุมัติจาก Admin (Pending)', 'success');
}

// 4. จัดการการเข้าสู่ระบบ (Login)
async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    console.log('[SUPABASE READY] ข้อมูลเตรียมเข้าสู่ระบบ:', { email, password });

    // ========================================================
    // TODO: จุดเชื่อมต่อ Supabase Auth ในขั้นตอนถัดไป
    // ========================================================
    /*
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) throw error;

        // ดึงสิทธิ์ User เพื่อเช็คสถานะ Pending / Active
        // ...

        showAlert('เข้าสู่ระบบสำเร็จ!', 'success');
    } catch (err) {
        showAlert('อีเมลหรือรหัสผ่านไม่ถูกต้อง', 'error');
    }
    */

    // จำลองการเข้าสู่ระบบ
    showAlert('กำลังเข้าสู่ระบบ...', 'success');
}
