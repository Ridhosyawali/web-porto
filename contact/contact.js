function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let gender = document.getElementById("gender").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("description").value;

  let emailReceiver = "depressedprince73@gmail.com"; // email tujuan

  let a = document.createElement("a"); //createElement digunakan untuk membuat elemen html <a> baru
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=${message}`; //format kirim email
  a.terget = "_blank";
  a.click(); //menjalankan fungsinya
}
