const questions = [
  "Apakah kamu sering merasa orang lain mengawasi kamu?",
  "Apakah kamu kadang merasa dunia ini terasa tidak nyata?",
  "Apakah kamu sulit membedakan mana yang nyata dan mana yang tidak?",
  "Apakah kamu pernah merasa suara di kepalamu bukan berasal dari dirimu?",
  "Apakah kamu merasa sulit percaya pada orang lain?",
  "Apakah kamu sering merasa orang lain bicara soal kamu di belakang?",
  "Apakah kamu sering menarik diri dari teman dan keluarga?",
  "Apakah kamu lebih nyaman menyendiri daripada bersosialisasi?",
  "Apakah kamu merasa orang lain ingin menyakitimu padahal tidak ada bukti?",
  "Apakah kamu sulit berkonsentrasi pada hal-hal sederhana?",
  "Apakah kamu sering merasa bingung atau pikiranmu kacau?",
  "Apakah kamu pernah merasa seperti ada yang mengontrol pikiranmu?",
  "Apakah kamu sulit mengekspresikan perasaan ke orang lain?",
  "Apakah kamu sering merasa emosi kamu tiba-tiba berubah drastis?",
  "Apakah kamu sulit merasa senang walau ada hal baik terjadi?",
  "Apakah kamu lebih sering merasa datar atau kosong dalam hati?",
  "Apakah kamu sering tidak peduli terhadap penampilan diri sendiri?",
  "Apakah kamu pernah kehilangan minat pada hobi yang dulu kamu suka?",
  "Apakah kamu merasa susah untuk memulai aktivitas sehari-hari?",
  "Apakah kamu sering merasa bahwa hidup ini terasa berat tanpa alasan jelas?",
  "Apakah kamu merasa sulit menjalin hubungan yang dekat dengan orang lain?",
  "Apakah kamu pernah merasa tidak ada yang mengerti kamu?",
  "Apakah kamu pernah merasa seperti dunia ini bukan tempatmu?",
  "Apakah kamu pernah merasa bahwa kamu bukan dirimu yang sebenarnya?",
  "Apakah kamu lebih suka diam karena takut salah bicara?"
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
  if (percentage >= 70) message = "Tingkat risiko tinggi. Pertimbangkan untuk bicara dengan profesional.";
  else if (percentage >= 40) message = "Ada beberapa tanda. Mungkin baik untuk mulai memperhatikan kondisi mental kamu.";
  else message = "Risiko rendah. Tapi tetap jaga kesehatan mental kamu.";

  result.innerHTML = `
    <p>Kemungkinan kamu mengalami gejala skizofrenia: <strong>${percentage}%</strong></p>
    <p>${message}</p>
  `;
});
