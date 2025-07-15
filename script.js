const cursos = [
  // SEMESTRE I
  { nombre: "INTRODUCCIÓN A LA PROGRAMACIÓN", sigla: "IIC1103", creditos: 10, semestre: 1, tipo: "economia" },
  { nombre: "CÁLCULO I", sigla: "MAT1610", creditos: 10, semestre: 1, tipo: "administracion" },
  { nombre: "INTRODUCCIÓN A LA MACROECONOMÍA", sigla: "EAE1110", creditos: 10, semestre: 1, tipo: "economia" },
  { nombre: "CONTABILIDAD", sigla: "EAA1210", creditos: 10, semestre: 1, tipo: "administracion" },
  { nombre: "COMPORTAMIENTO ORGANIZACIONAL", sigla: "EAA1110", creditos: 10, semestre: 1, tipo: "administracion" },
  { nombre: "EXAMEN DE COMUNICACIÓN ESCRITA", sigla: "VRA100C", creditos: 0, semestre: 1, tipo: "formacion-general" },
  { nombre: "ENGLISH PLACEMENT TEST ALTE 2", sigla: "VRA3010", creditos: 0, semestre: 1, tipo: "formacion-general" },

  // SEMESTRE II
  { nombre: "PROBABILIDAD Y ESTADÍSTICA", sigla: "EAA1510", creditos: 10, semestre: 2, tipo: "administracion", corequisitos: ["MAT1620"] },
  { nombre: "INTRODUCCIÓN AL ÁLGEBRA LINEAL", sigla: "MAT1729", creditos: 10, semestre: 2, tipo: "administracion" },
  { nombre: "CÁLCULO II", sigla: "MAT1620", creditos: 10, semestre: 2, tipo: "administracion", requisitos: ["MAT1610"] },
  { nombre: "INTRODUCCIÓN A LA MACROECONOMÍA", sigla: "EAE1210", creditos: 10, semestre: 2, tipo: "economia" },
  { nombre: "FILOSOFÍA: ¿PARA QUÉ?", sigla: "FIL2001", creditos: 10, semestre: 2, tipo: "formacion-general" },
  { nombre: "ENGLISH TEST (SUFFICIENCY ALTE 3)", sigla: "VRA3010", creditos: 0, semestre: 2, tipo: "formacion-general" },

  // SEMESTRE III
  { nombre: "INFERENCIA ESTADÍSTICA", sigla: "EAA1520", creditos: 10, semestre: 3, tipo: "administracion", requisitos: ["EAA1510"] },
  { nombre: "APLIC. MAT. PARA ECONOMÍA Y NEGOCIOS", sigla: "EAF2010", creditos: 10, semestre: 3, tipo: "economia", requisitos: ["MAT1620", "MAT1729"] },
  { nombre: "ANÁLISIS ECONÓMICO: LA EXPERIENCIA CHILENA", sigla: "EAE1220", creditos: 10, semestre: 3, tipo: "economia", requisitos: ["EAE110"] },
  { nombre: "FUNDAMENTOS DE FINANZAS", sigla: "EAA1220", creditos: 10, semestre: 3, tipo: "administracion", requisitos: ["EAA1510", "EAA1210"] },
  { nombre: "TEOLÓGICO", sigla: "TTF", creditos: 10, semestre: 3, tipo: "formacion-general" },

  // SEMESTRE IV
  { nombre: "ECONOMETRÍA", sigla: "EAE2510", creditos: 10, semestre: 4, tipo: "economia", requisitos: ["IIC1103", "EAA1520", "MAT1729"] },
  { nombre: "MICROECONOMÍA I", sigla: "EAE2110", creditos: 10, semestre: 4, tipo: "economia", requisitos: ["EAF2010", "EAE1220"] },
  { nombre: "ESTRATEGIA DE LA ORGANIZACIÓN", sigla: "EAA2410", creditos: 10, semestre: 4, tipo: "administracion", requisitos: ["EAE1110", "EAA1220"] },
  { nombre: "FUNDAMENTOS DE MARKETING", sigla: "EAA2310", creditos: 10, semestre: 4, tipo: "administracion", requisitos: ["EAA1210", "EAA1110", "EAA1510"] },
  { nombre: "FORMACIÓN GENERAL", sigla: "FG4", creditos: 10, semestre: 4, tipo: "formacion-general" },

  // Los demás cursos sin requisitos por ahora
  { nombre: "MICROECONOMÍA II", sigla: "EAE2120", creditos: 10, semestre: 5, tipo: "economia" },
  { nombre: "MACROECONOMÍA I", sigla: "EAE2210", creditos: 10, semestre: 5, tipo: "economia" },
  { nombre: "TEORÍA FINANCIERA", sigla: "EAE2210T", creditos: 10, semestre: 5, tipo: "economia" },
  { nombre: "ÉTICA, ECONOMÍA Y EMPRESA", sigla: "ETI2090", creditos: 10, semestre: 5, tipo: "formacion-general" },
  { nombre: "MARKETING ANALYTICS", sigla: "EAA2320", creditos: 10, semestre: 5, tipo: "administracion" },
  { nombre: "FORMACIÓN GENERAL", sigla: "FG5", creditos: 10, semestre: 5, tipo: "formacion-general" },

  { nombre: "OPTATIVO DE PROFUNDIZACIÓN", sigla: "OPT6", creditos: 10, semestre: 6, tipo: "curso-minor" },
  { nombre: "ESTRATEGIA COMPETITIVA", sigla: "EAA2420", creditos: 10, semestre: 6, tipo: "administracion" },
  { nombre: "COMPETENCIA Y MERCADO", sigla: "EAE2130", creditos: 10, semestre: 6, tipo: "economia" },
  { nombre: "CONTABILIDAD DE COSTOS", sigla: "EAA2220", creditos: 5, semestre: 6, tipo: "administracion" },
  { nombre: "EMPRESA Y LEGISLACIÓN", sigla: "EAA2230", creditos: 5, semestre: 6, tipo: "administracion" },
  { nombre: "FORMACIÓN GENERAL", sigla: "FG6", creditos: 10, semestre: 6, tipo: "formacion-general" },

  { nombre: "OPTATIVO DE PROFUNDIZACIÓN", sigla: "OPT7", creditos: 10, semestre: 7, tipo: "curso-minor" },
  { nombre: "MACROECONOMÍA II", sigla: "EAE2220", creditos: 10, semestre: 7, tipo: "economia" },
  { nombre: "CONTABILIDAD GERENCIAL", sigla: "EAA2240", creditos: 10, semestre: 7, tipo: "administracion" },
  { nombre: "DIRECCIÓN DE PERSONAS", sigla: "EAA2110", creditos: 10, semestre: 7, tipo: "administracion" },
  { nombre: "FORMACIÓN GENERAL", sigla: "FG7", creditos: 10, semestre: 7, tipo: "formacion-general" },

  { nombre: "OPTATIVO DE PROFUNDIZACIÓN", sigla: "OPT8-1", creditos: 10, semestre: 8, tipo: "curso-minor" },
  { nombre: "OPTATIVO DE PROFUNDIZACIÓN", sigla: "OPT8-2", creditos: 10, semestre: 8, tipo: "curso-minor" },
  { nombre: "PRÁCTICA SOCIAL", sigla: "EAF2500", creditos: 10, semestre: 8, tipo: "administracion" },
  { nombre: "FORMACIÓN GENERAL", sigla: "FG8", creditos: 10, semestre: 8, tipo: "formacion-general" }
];

// Agrupar cursos por semestre
const cursosPorSemestre = {};
for (let i = 1; i <= 8; i++) {
  cursosPorSemestre[i] = [];
}
cursos.forEach(curso => {
  cursosPorSemestre[curso.semestre].push(curso);
});

// Calcular máximo cursos en un semestre para definir filas
const maxCursos = Math.max(...Object.values(cursosPorSemestre).map(arr => arr.length));

const container = document.getElementById("malla-container");

// Definir filas del grid: 1 fila para títulos + maxCursos filas para cursos
container.style.gridTemplateRows = `auto repeat(${maxCursos}, minmax(70px, auto))`;

// Crear títulos semestre
for (let i = 1; i <= 8; i++) {
  const titulo = document.createElement("div");
  titulo.classList.add("semestre-titulo");
  titulo.style.gridColumn = i;
  titulo.style.gridRow = 1;
  titulo.textContent = `${i}° Semestre`;
  container.appendChild(titulo);
}

// Crear cursos debajo de cada título
for (let semestre = 1; semestre <= 8; semestre++) {
  cursosPorSemestre[semestre].forEach((curso, index) => {
    const div = document.createElement("div");
    div.classList.add("curso", curso.tipo);
    div.innerHTML = `<strong>${curso.sigla}</strong><br>${curso.nombre}<br><span>${curso.creditos} CR</span>`;
    div.style.gridColumn = semestre;
    div.style.gridRow = index + 2;
    container.appendChild(div);
  });
}

// --- Popup para mostrar requisitos y corequisitos ---

// Crear caja info y agregar id para estilos
const infoBox = document.createElement("div");
infoBox.id = "infoBox";
document.body.appendChild(infoBox);

// Función para obtener nombre completo de curso por sigla
function nombreCursoPorSigla(sigla) {
  const curso = cursos.find(c => c.sigla === sigla);
  return curso ? `${curso.sigla} - ${curso.nombre}` : sigla;
}

// Añadir eventos click a cada curso
container.querySelectorAll(".curso").forEach(div => {
  div.addEventListener("click", e => {
    e.stopPropagation(); // evitar cerrar popup inmediatamente

    const sigla = div.querySelector("strong").textContent;
    const curso = cursos.find(c => c.sigla === sigla);
    if (!curso) return;

    let contenido = `<strong>${curso.sigla} - ${curso.nombre}</strong><br><br>`;

    if (curso.requisitos && curso.requisitos.length) {
      contenido += `<u>Requisitos:</u><br>${curso.requisitos.map(r => nombreCursoPorSigla(r)).join("<br>")}<br><br>`;
    } else {
      contenido += `<u>Requisitos:</u><br>— Ninguno —<br><br>`;
    }

    if (curso.corequisitos && curso.corequisitos.length) {
      contenido += `<u>Co-requisitos:</u><br>${curso.corequisitos.map(r => nombreCursoPorSigla(r)).join("<br>")}`;
    } else {
      contenido += `<u>Co-requisitos:</u><br>— Ninguno —`;
    }

    infoBox.innerHTML = contenido;

    // Posicionar popup cerca del curso clickeado
    const rect = div.getBoundingClientRect();
    let top = rect.bottom + window.scrollY + 5;
    let left = rect.left + window.scrollX;

    // Ajustar si se sale de la pantalla
    if (left + 320 > window.innerWidth) left = window.innerWidth - 330;
    if (top + 180 > window.innerHeight + window.scrollY) top = rect.top + window.scrollY - 190;

    infoBox.style.top = top + "px";
    infoBox.style.left = left + "px";
    infoBox.style.display = "block";
  });
});

// Cerrar popup al hacer click fuera
document.addEventListener("click", () => {
  infoBox.style.display = "none";
});

