// Lógica de la demo: todo en memoria, se reinicia al recargar.
const $ = (id) => document.getElementById(id);

ASIGNATURAS.forEach((a) => $("asignatura").add(new Option(a, a)));

function pintar() {
  $("lista").innerHTML = "";
  TAREAS.forEach((t, i) => {
    const li = document.createElement("li");
    li.className = t.hecha ? "hecha" : "";
    li.innerHTML = `<label><input type="checkbox" ${t.hecha ? "checked" : ""}> ${t.texto}</label><span class="chip">${t.asignatura}</span>`;
    li.querySelector("input").onchange = () => { t.hecha = !t.hecha; pintar(); };
    $("lista").append(li);
  });

  const hechas = TAREAS.filter((t) => t.hecha).length;
  $("kpi-hechas").textContent = hechas;
  $("kpi-pendientes").textContent = TAREAS.length - hechas;
  $("kpi-pct").textContent = Math.round((hechas / TAREAS.length) * 100) + "%";

  $("barras").innerHTML = ASIGNATURAS.map((a) => {
    const de = TAREAS.filter((t) => t.asignatura === a);
    const pct = de.length ? Math.round((de.filter((t) => t.hecha).length / de.length) * 100) : 0;
    return `<div class="barra"><span>${a}</span><div><i style="width:${pct}%"></i></div><b>${pct}%</b></div>`;
  }).join("");
}

$("nueva").onsubmit = (e) => {
  e.preventDefault();
  TAREAS.push({ texto: $("texto").value, asignatura: $("asignatura").value, hecha: false });
  $("texto").value = "";
  pintar();
};

document.querySelectorAll(".tab").forEach((b) => {
  b.onclick = () => {
    document.querySelectorAll(".tab").forEach((x) => x.classList.toggle("active", x === b));
    document.querySelectorAll(".view").forEach((v) => (v.hidden = v.id !== b.dataset.view));
  };
});

pintar();
