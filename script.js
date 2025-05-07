const questions = [
  "Apakah kamu sering merasa diawasi padahal tidak ada orang di sekitarmu?",
  "Apakah kamu pernah merasa bahwa TV atau radio sedang mengirim pesan untukmu?",
  "Apakah kamu merasa pikiranmu bukan milikmu sendiri?",
  "Apakah kamu mendengar suara yang tidak didengar orang lain?",
  "Apakah kamu merasa ada yang menaruh pikiran ke dalam kepalamu?",
  "Apakah kamu merasa orang-orang bisa membaca pikiranmu?",
  "Apakah kamu merasa ada yang berusaha menyakitimu tanpa alasan?",
  "Apakah kamu sering curiga berlebihan terhadap orang terdekat?",
  "Apakah kamu merasa orang lain memperhatikan atau membicarakanmu secara diam-diam?",
  "Apakah kamu sulit mengekspresikan emosi ke orang lain?",
  "Apakah kamu merasa kosong atau hampa dalam waktu lama?",
  "Apakah kamu merasa tidak punya motivasi untuk melakukan apa pun?",
  "Apakah kamu kehilangan minat terhadap hal-hal yang dulu kamu sukai?",
  "Apakah kamu sering menarik diri dari lingkungan sosial?",
  "Apakah kamu merasa sulit menjaga hubungan dengan orang lain?",
  "Apakah kamu sering sulit fokus atau bingung saat berpikir?",
  "Apakah kamu pernah ngomong sendiri walau tidak sadar?",
  "Apakah kamu merasa dunia ini tidak nyata atau seperti mimpi?",
  "Apakah kamu merasa emosimu datar, tidak senang atau sedih secara normal?",
  "Apakah kamu mengalami perubahan pola tidur yang ekstrem tanpa alasan?",
  "Apakah kamu merasa sangat gelisah tanpa penyebab jelas?",
  "Apakah kamu merasa bahwa hidupmu dikendalikan oleh kekuatan luar?",
  "Apakah kamu merasa takut berbicara karena takut pikiranmu diambil orang?",
  "Apakah kamu merasa tubuhmu tidak terasa seperti milikmu?",
  "Apakah kamu merasa kamu bukan bagian dari dunia ini?"
];

const form = document.getElementById("quizForm");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submitBtn");

questions.forEach((q, i) => {
  const div = document.createElement("div");
  div.classList.add("question");
  div.innerHTML = `
    <p>${i + 1}. ${q}</p>
    <label><input type="radio" name="q${i}" value="yes" required> Yes</label>
    <label><input type="radio" name="q${i}" value="maybe"> Maybe</label>
    <label><input type="radio" name="q${i}" value="no"> No</label>
  `;
  form.appendChild(div);
});

submitBtn.addEventListener("click", () => {
  const formData = new FormData(form);
  let score = 0;
  questions.forEach((_, i) => {
    const answer = formData.get(`q${i}`);
    if (answer === "yes") score += 2;
    else if (answer === "maybe") score += 1;
  });

  const maxScore = questions.length * 2;
  const percentage = Math.round((score / maxScore) * 100);

  let message = "";
  if (percentage >= 70) message = "Tingkat kemungkinan tinggi. Disarankan konsultasi ke profesional.";
  else if (percentage >= 40) message = "Kemungkinan sedang. Perlu lebih memperhatikan kondisi mental kamu.";
  else message = "Kemungkinan rendah. Tapi tetap jaga kesehatan mental kamu ya.";

  result.innerHTML = `
    <p>Kemungkinan mengalami gejala skizofrenia: <strong>${percentage}%</strong></p>
    <p>${message}</p>
  `;
});
