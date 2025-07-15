const cursos = [
  // SEMESTRE I
  { nombre: "INTRODUCCIÓN A LA PROGRAMACIÓN", sigla: "IIC1103", creditos: 10, semestre: 1, tipo: "economia" },
  { nombre: "CÁLCULO I", sigla: "MAT1610", creditos: 10, semestre: 1, tipo: "administracion" },
  { nombre: "INTRODUCCIÓN A LA MACROECONOMÍA", sigla: "EAE1110", creditos: 10, semestre: 1, tipo: "economia" },
  { nombre: "CONTABILIDAD", sigla: "EAA1210", creditos: 10, semestre: 1, tipo: "administracion" },
  { nombre: "COMPORTAMIENTO ORGANIZACIONAL", sigla: "EAA1110", creditos: 10, semestre: 1, tipo: "administracion" },

  // SEMESTRE II
  { nombre: "PROBABILIDAD Y ESTADÍSTICA", sigla: "EAA1510", creditos: 10, semestre: 2, tipo: "administracion", corequisitos: ["MAT1620"] },
  { nombre: "INTRODUCCIÓN AL ÁLGEBRA LINEAL", sigla: "MAT1729", creditos: 10, semestre: 2, tipo: "administracion" },
  { nombre: "CÁLCULO II", sigla: "MAT1620", creditos: 10, semestre: 2, tipo: "administracion", requisitos: ["MAT1610"] },
  { nombre: "INTRODUCCIÓN A LA MACROECONOMÍA", sigla: "EAE1210", creditos: 10, semestre: 2, tipo: "economia" },
  { nombre: "FILOSOFÍA: ¿PARA QUÉ?", sigla: "FIL2001", creditos: 10, semestre: 2, tipo: "formacion-general" },

  // SEMESTRE III
  { nombre: "INFERENCIA ESTADÍSTICA", sigla: "EAA1520", creditos: 10, semestre: 3, tipo: "administracion", requisitos: ["EAA1510"] },
  { nombre: "APLIC. MAT. PARA ECONOMÍA Y NEGOCIOS", sigla: "EAF2010", creditos: 10, semestre: 3, tipo: "economia", requisitos: ["MAT1620", "MAT1729"] },
  { nombre: "ANÁLISIS ECONÓMICO: LA EXPERIENCIA CHILENA", sigla: "EAE1220", creditos: 10, semestre: 3, tipo: "economia", requisitos: ["EAE110"] },
  { nombre: "FUNDAMENTOS DE FINANZAS", sigla: "EAA1220", creditos: 10, semestre: 3, tipo: "administracion", requisitos: ["EAA1510", "EAA1210"] },

  // SEMESTRE IV
  { nombre: "ECONOMETRÍA", sigla: "EAE2510", creditos: 10, semestre: 4, tipo: "economia", requisitos: ["IIC1103", "EAA1520", "MAT1729"] },
  { nombre: "MICROECONOMÍA I", sigla: "EAE2110", creditos: 10, semestre: 4, tipo: "economia", requisitos: ["EAF2010", "EAE1220"] },
  { nombre: "ESTRATEGIA DE LA ORGANIZACIÓN", sigla: "EAA2410", creditos: 10, semestre: 4, tipo: "administracion", requisitos: ["EAE1110", "EAA1220"] },
  { nombre: "FUNDAMENTOS DE MARKETING", sigla: "EAA2310", creditos: 10, semestre: 4, tipo: "administracion", requisitos: ["EAA1210", "EAA1110", "EAA1510"] },
];

const estadoCursos = {};
cursos.forEach(c => {
  estadoCursos[c.sigla] = { aprobado: false, habilitado: false };
});

// Esta función habilita los cursos sin requisitos al principio
function habilitarInicial() {
  cursos.forEach(c => {
    const tieneReqs = c.requisitos && c.requisitos.length > 0;
    const tieneCoreqs = c.corequisitos && c.corequisitos.length > 0;
    if (!tieneReqs && !tieneCoreqs) {
      estadoCursos[c.sigla].habilitado = true;
    }
  });
}

habilitarInicial();

const cursosPorSemestre = {};
for (let i = 1; i <= 8; i++) cursosPorSemestre[i] = [];
cursos.forEach(c => cursosPorSemestre[c.semestre].push(c));

const container = document.getElementById("malla-container");
const maxCursos = Math.max(...Object.values(cursosPorSemestre).map(arr => arr.length));
container.style.gridTemplateRows = `auto repeat(${maxCursos}, minmax(70px, auto))`;

for (let i = 1; i <= 8; i++) {
  const titulo = document.createElement("div");
  titulo.classList.add("semestre-titulo");
  titulo.style.gridColumn = i;
  titulo.style.gridRow = 1;
  titulo.textContent = `${i}° Semestre`;
  container.appendChild(titulo);
}

function actualizarVisualizacion() {
  container.querySelectorAll(".curso").forEach(div => container.removeChild(div));
  for (let semestre = 1; semestre <= 8; semestre++) {
    cursosPorSemestre[semestre].forEach((curso, index) => {
      const div = document.createElement("div");
      div.classList.add("curso", curso.tipo);
      div.style.gridColumn = semestre;
      div.style.gridRow = index + 2;
      div.dataset.sigla = curso.sigla;
      div.innerHTML = `<strong>${curso.sigla}</strong><br>${curso.nombre}<br><span>${curso.creditos} CR</span>`;

      const estado = estadoCursos[curso.sigla];
      if (estado.aprobado) {
        div.classList.add("aprobado");
        div.classList.remove("habilitado");
      } else if (estado.habilitado) {
        div.classList.add("habilitado");
      } else {
        div.classList.remove("habilitado");
        div.classList.remove("aprobado");
      }

      container.appendChild(div);
    });
  }
}

function habilitarCursosDependientes(siglaAprobado) {
  cursos.forEach(curso => {
    if (estadoCursos[curso.sigla].aprobado) return;

    const requisitos = curso.requisitos || [];
    const cumpleReqs = requisitos.every(r => estadoCursos[r] && estadoCursos[r].aprobado);

    if (cumpleReqs) {
      estadoCursos[curso.sigla].habilitado = true;
    }
  });
}

actualizarVisualizacion();

container.addEventListener("click", e => {
  const cursoDiv = e.target.closest(".curso");
  if (!cursoDiv) return;
  const sigla = cursoDiv.dataset.sigla;
  if (!sigla) return;

  const estado = estadoCursos[sigla];
  if (!estado.habilitado) return;

  if (!estado.aprobado) {
    estado.aprobado = true;
    habilitarCursosDependientes(sigla);
    actualizarVisualizacion();
  }
});


