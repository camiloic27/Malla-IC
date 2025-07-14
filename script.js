console.log("🎯 script.js cargado");
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
  { nombre: "PROBABILIDAD Y ESTADÍSTICA", sigla: "EAA1510", creditos: 10, semestre: 2, tipo: "administracion" },
  { nombre: "INTRODUCCIÓN AL ÁLGEBRA LINEAL", sigla: "MAT1729", creditos: 10, semestre: 2, tipo: "administracion" },
  { nombre: "CÁLCULO II", sigla: "MAT1620", creditos: 10, semestre: 2, tipo: "administracion" },
  { nombre: "INTRODUCCIÓN A LA MACROECONOMÍA", sigla: "EAE1210", creditos: 10, semestre: 2, tipo: "economia" },
  { nombre: "FILOSOFÍA: ¿PARA QUÉ?", sigla: "FIL2001", creditos: 10, semestre: 2, tipo: "formacion-general" },
  { nombre: "ENGLISH TEST (SUFFICIENCY ALTE 3)", sigla: "VRA3010", creditos: 0, semestre: 2, tipo: "formacion-general" },

  // SEMESTRE III
  { nombre: "INFERENCIA ESTADÍSTICA", sigla: "EAA1520", creditos: 10, semestre: 3, tipo: "administracion" },
  { nombre: "APLIC. MAT. PARA ECONOMÍA Y NEGOCIOS", sigla: "EAF2010", creditos: 10, semestre: 3, tipo: "economia" },
  { nombre: "ANÁLISIS ECONÓMICO: LA EXPERIENCIA CHILENA", sigla: "EAE1220", creditos: 10, semestre: 3, tipo: "economia" },
  { nombre: "FUNDAMENTOS DE FINANZAS", sigla: "EAA1220", creditos: 10, semestre: 3, tipo: "administracion" },
  { nombre: "TEOLÓGICO", sigla: "TTF", creditos: 10, semestre: 3, tipo: "formacion-general" },

  // SEMESTRE IV
  { nombre: "ECONOMETRÍA", sigla: "EAE2510", creditos: 10, semestre: 4, tipo: "economia" },
  { nombre: "MICROECONOMÍA I", sigla: "EAE2110", creditos: 10, semestre: 4, tipo: "economia" },
  { nombre: "ESTRATEGIA DE LA ORGANIZACIÓN", sigla: "EAA2410", creditos: 10, semestre: 4, tipo: "administracion" },
  { nombre: "FUNDAMENTOS DE MARKETING", sigla: "EAA2310", creditos: 10, semestre: 4, tipo: "administracion" },
  { nombre: "FORMACIÓN GENERAL", sigla: "FG4", creditos: 10, semestre: 4, tipo: "formacion-general" },

  // SEMESTRE V
  { nombre: "MICROECONOMÍA II", sigla: "EAE2120", creditos: 10, semestre: 5, tipo: "economia" },
  { nombre: "MACROECONOMÍA I", sigla: "EAE2210", creditos: 10, semestre: 5, tipo: "economia" },
  { nombre: "TEORÍA FINANCIERA", sigla: "EAE2210T", creditos: 10, semestre: 5, tipo: "economia" },
  { nombre: "ÉTICA, ECONOMÍA Y EMPRESA", sigla: "ETI2090", creditos: 10, semestre: 5, tipo: "formacion-general" },
  { nombre: "MARKETING ANALYTICS", sigla: "EAA2320", creditos: 10, semestre: 5, tipo: "administracion" },
  { nombre: "FORMACIÓN GENERAL", sigla: "FG5", creditos: 10, semestre: 5, tipo: "formacion-general" },

  // SEMESTRE VI
  { nombre: "OPTATIVO DE PROFUNDIZACIÓN", sigla: "OPT6", creditos: 10, semestre: 6, tipo: "curso-minor" },
  { nombre: "ESTRATEGIA COMPETITIVA", sigla: "EAA2420", creditos: 10, semestre: 6, tipo: "administracion" },
  { nombre: "COMPETENCIA Y MERCADO", sigla: "EAE2130", creditos: 10, semestre: 6, tipo: "economia" },
  { nombre: "CONTABILIDAD DE COSTOS", sigla: "EAA2220", creditos: 5, semestre: 6, tipo: "administracion" },
  { nombre: "EMPRESA Y LEGISLACIÓN", sigla: "EAA2230", creditos: 5, semestre: 6, tipo: "administracion" },
  { nombre: "FORMACIÓN GENERAL", sigla: "FG6", creditos: 10, semestre: 6, tipo: "formacion-general" },

  // SEMESTRE VII
  { nombre: "OPTATIVO DE PROFUNDIZACIÓN", sigla: "OPT7", creditos: 10, semestre: 7, tipo: "curso-minor" },
  { nombre: "MACROECONOMÍA II", sigla: "EAE2220", creditos: 10, semestre: 7, tipo: "economia" },
  { nombre: "CONTABILIDAD GERENCIAL", sigla: "EAA2240", creditos: 10, semestre: 7, tipo: "administracion" },
  { nombre: "DIRECCIÓN DE PERSONAS", sigla: "EAA2110", creditos: 10, semestre: 7, tipo: "administracion" },
  { nombre: "FORMACIÓN GENERAL", sigla: "FG7", creditos: 10, semestre: 7, tipo: "formacion-general" },

  // SEMESTRE VIII
  { nombre: "OPTATIVO DE PROFUNDIZACIÓN", sigla: "OPT8-1", creditos: 10, semestre: 8, tipo: "curso-minor" },
  { nombre: "OPTATIVO DE PROFUNDIZACIÓN", sigla: "OPT8-2", creditos: 10, semestre: 8, tipo: "curso-minor" },
  { nombre: "PRÁCTICA SOCIAL", sigla: "EAF2500", creditos: 10, semestre: 8, tipo: "administracion" },
  { nombre: "FORMACIÓN GENERAL", sigla: "FG8", creditos: 10, semestre: 8, tipo: "formacion-general" }
];

const container = document.getElementById("malla-container");

cursos.forEach(curso => {
  const div = document.createElement("div");
  div.classList.add("curso", curso.tipo);
  div.innerHTML = `<strong>${curso.sigla}</strong><br>${curso.nombre}<br><span>${curso.creditos}CR</span>`;
  div.style.gridColumn = curso.semestre;
  container.appendChild(div);
});
