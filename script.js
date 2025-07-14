fetch('cursos_completo.json')
  .then(response => response.json())
  .then(cursos => {
    const container = document.getElementById("malla-container");

    cursos.forEach(curso => {
      const div = document.createElement("div");
      div.classList.add("curso", curso.tipo);

      if (curso.requisitos) div.classList.add("requisito");
      if (curso.prerequisitos) div.classList.add("prerequisito");

      div.innerHTML = `<strong>${curso.sigla}</strong><br>${curso.nombre}<br><span>${curso.creditos}CR</span>`;
      div.style.gridColumn = curso.semestre;

      container.appendChild(div);
    });
  });

