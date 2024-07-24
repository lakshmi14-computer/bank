// Navigation functions
function register() {
    window.location = './register.html';
}

function login() {
    window.location.href = './login.html';
}

// Register function
function add() {
    var reg = {
        username: document.getElementById('uname').value,
        accno: document.getElementById('raccno').value,
        psd: document.getElementById('upsd').value,
        balance: 0
    };
    if (reg.username == "" || reg.accno == "" || reg.psd == "") {
        alert("Please fill inputs");
    } else {
        if (reg.accno in localStorage) {
            alert("Already exists");
        } else {
            localStorage.setItem(reg.accno, JSON.stringify(reg));
            console.log(reg);
            alert("Successfully Registered");
        }
    }
}

// Login function
function userlogin() {
    let acno = document.getElementById('laccno').value;
    let lpsd = document.getElementById('pwd').value;
    if (acno == "" || lpsd == "") {
        alert("Enter inputs");
    } else {
        if (acno in localStorage) {
            let a = JSON.parse(localStorage.getItem(acno));
            console.log(a);
            if (a.psd == lpsd) {
                window.location = './amount.html';
            } else {
                alert("Password mismatch");
            }
        } else {
            alert("Wrong input");
        }
    }
}

// Deposit function
function deposit() {
    let amnt = parseFloat(document.getElementById('damnt').value);
    let acno = document.getElementById('dacc').value;

    if (acno in localStorage) {
        let a = JSON.parse(localStorage.getItem(acno));
        if (amnt <= 0) {
            alert("Enter valid amount");
        } else {
            a.balance += amnt;
            localStorage.setItem(acno, JSON.stringify(a));
            alert("Amount deposited");
            document.getElementById('res').innerHTML = `<div style="color:red">Current Amount of your account is ${a.balance}</div>`;
        }
    } else {
        alert("Wrong input");
    }
}

// Withdraw function
function withdraw() {
    let wamnt = parseFloat(document.getElementById('wamn').value);
    let acno = document.getElementById('wacc').value;

    if (acno in localStorage) {
        let b = JSON.parse(localStorage.getItem(acno));
        if (b.balance <= 0 || wamnt > b.balance) {
            alert("Insufficient balance");
        } else {
            b.balance -= wamnt;
            localStorage.setItem(acno, JSON.stringify(b));
            alert("Amount withdrawn");
            document.getElementById("resw").innerHTML = `<div style="color:blue">Your Current Account Balance is ${b.balance}</div>`;
        }
    } else {
        alert("Wrong input");
    }
}
