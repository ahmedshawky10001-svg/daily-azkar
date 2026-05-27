document.querySelectorAll(".counter_0").forEach((box) => {
  const counter = box.querySelector(".counter");
  const btn = box.querySelector(".btn");
  const resetBtn = box.querySelector(".reset");

  const total = counter.textContent.split("|")[1].trim();
  let current = parseInt(counter.textContent.split("|")[0].trim());

  btn.addEventListener("click", () => {
    if (current > 0) {
      current--;
      counter.textContent = `${current} | ${total}`;
    }

    if (current === 0) {
      counter.innerHTML = `<i class="fa-solid fa-check-circle"></i> تم`;
      counter.classList.add("done");
      btn.disabled = true;
    }
  });

  resetBtn.addEventListener("click", () => {
    current = parseInt(total);
    counter.textContent = `${total} | ${total}`;
    counter.classList.remove("done");
    btn.disabled = false;
  });
});
