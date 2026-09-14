(function () {
"use strict";

/* ==========================================================================
   VDH Sistema — protótipo (dados 100% locais, sem backend)
   ========================================================================== */

var STORAGE_KEY = "vdh-sistema-db-v1";

var MODULES = [
  { key: "dashboard", label: "Dashboard", desc: "Visão geral da operação: ocupação do estoque e agenda do dia.", icon: "grid", core: true },
  { key: "estoque", label: "Estoque", desc: "Cadastro de ternos, smokings e acessórios, com status de cada peça.", icon: "box", core: false },
  { key: "reservas", label: "Reservas", desc: "Agenda de retiradas e devoluções, vinculada ao estoque.", icon: "calendar", core: false },
  { key: "clientes", label: "Clientes", desc: "Histórico de aluguéis e contato rápido por WhatsApp.", icon: "users", core: false },
  { key: "relatorios", label: "Relatórios", desc: "Ocupação, sazonalidade e peças mais alugadas.", icon: "chart", comingSoon: true },
  { key: "financeiro", label: "Financeiro", desc: "Sinal via Pix, contratos digitais e multas por atraso.", icon: "coin", comingSoon: true }
];

var ICONS = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c1-3.6 3.6-5.5 6.5-5.5s5.5 1.9 6.5 5.5"/><circle cx="17" cy="8.5" r="2.4"/><path d="M16 14.7c2.4.4 4 2 4.8 5.3"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>',
  coin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 9.5c0-1.4 1.3-2.5 3-2.5s3 .9 3 2.2-1.3 1.8-3 2.1-3 .9-3 2.2 1.3 2.2 3 2.2 3-1 3-2.3"/></svg>'
};

var OCASIOES = ["Noivo", "Padrinho", "Formatura", "Festa de 15 anos", "Evento corporativo", "Convidado"];
var TIPOS_PECA = ["Terno", "Smoking", "Colete", "Camisa", "Sapato", "Acessório"];
var CORES = ["Preto", "Cinza Aço", "Azul Indy", "Verde", "Bege Areia", "Marinho"];
var TAMANHOS = ["PP", "P", "M", "G", "GG", "38", "40", "42", "44", "46", "48", "50"];

/* ---------------- Seed ---------------- */
function seedDB() {
  var today = new Date();
  function d(offset) {
    var dt = new Date(today);
    dt.setDate(dt.getDate() + offset);
    return dt.toISOString().slice(0, 10);
  }

  var clientes = [
    { id: "c1", nome: "Leonardo Freitas", telefone: "5531988881122", aluguéis: 2 },
    { id: "c2", nome: "Fernanda Silva", telefone: "5531988883344", aluguéis: 1 },
    { id: "c3", nome: "Rafael Andrade", telefone: "5531988885566", aluguéis: 3 },
    { id: "c4", nome: "Marcos Vinícius", telefone: "5531988887788", aluguéis: 1 },
    { id: "c5", nome: "Bruno Tarso", telefone: "5531988889900", aluguéis: 1 }
  ];

  var pecas = [
    { id: "p1", codigo: "TN-014", nome: "Terno Slim Cinza Aço", tipo: "Terno", tamanho: "48", cor: "Cinza Aço", status: "disponivel" },
    { id: "p2", codigo: "TN-021", nome: "Terno Azul Indy Liso", tipo: "Terno", tamanho: "44", cor: "Azul Indy", status: "alugado" },
    { id: "p3", codigo: "SM-005", nome: "Smoking Slim Preto", tipo: "Smoking", tamanho: "46", cor: "Preto", status: "reservado" },
    { id: "p4", codigo: "TN-032", nome: "Terno Verde Garrafa", tipo: "Terno", tamanho: "42", cor: "Verde", status: "higienizacao" },
    { id: "p5", codigo: "TN-018", nome: "Terno Bege Areia", tipo: "Terno", tamanho: "50", cor: "Bege Areia", status: "disponivel" },
    { id: "p6", codigo: "CL-009", nome: "Colete Marinho", tipo: "Colete", tamanho: "M", cor: "Marinho", status: "disponivel" },
    { id: "p7", codigo: "SP-003", nome: "Sapato Social Preto", tipo: "Sapato", tamanho: "42", cor: "Preto", status: "manutencao" },
    { id: "p8", codigo: "TN-040", nome: "Terno Cinza Aço Slim", tipo: "Terno", tamanho: "40", cor: "Cinza Aço", status: "disponivel" },
    { id: "p9", codigo: "AC-011", nome: "Gravata-borboleta Preta", tipo: "Acessório", tamanho: "Único", cor: "Preto", status: "disponivel" },
    { id: "p10", codigo: "SM-006", nome: "Smoking Azul Marinho", tipo: "Smoking", tamanho: "48", cor: "Marinho", status: "baixa" }
  ];

  var reservas = [
    { id: "r1", clienteId: "c1", pecaId: "p2", ocasiao: "Padrinho", dataEvento: d(6), dataRetirada: d(5), dataDevolucao: d(8), status: "retirado", valor: 280 },
    { id: "r2", clienteId: "c2", pecaId: "p3", ocasiao: "Noivo", dataEvento: d(2), dataRetirada: d(1), dataDevolucao: d(3), status: "confirmada", valor: 420 },
    { id: "r3", clienteId: "c3", pecaId: "p4", ocasiao: "Formatura", dataEvento: d(-3), dataRetirada: d(-4), dataDevolucao: d(-1), status: "devolvido", valor: 260 },
    { id: "r4", clienteId: "c4", pecaId: "p5", ocasiao: "Evento corporativo", dataEvento: d(0), dataRetirada: d(0), dataDevolucao: d(2), status: "confirmada", valor: 240 },
    { id: "r5", clienteId: "c5", pecaId: "p1", ocasiao: "Festa de 15 anos", dataEvento: d(10), dataRetirada: d(9), dataDevolucao: d(11), status: "pre-reserva", valor: 260 },
    { id: "r6", clienteId: "c3", pecaId: "p8", ocasiao: "Convidado", dataEvento: d(-10), dataRetirada: d(-11), dataDevolucao: d(-9), status: "atrasado", valor: 220 }
  ];

  return {
    pecas: pecas,
    clientes: clientes,
    reservas: reservas,
    modulos: { dashboard: true, estoque: true, reservas: true, clientes: true, relatorios: false, financeiro: false },
    role: "admin"
  };
}

function loadDB() {
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  var fresh = seedDB();
  saveDB(fresh);
  return fresh;
}

function saveDB(db) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

var DB = loadDB();

/* ---------------- Helpers ---------------- */
function uid(prefix) { return prefix + Math.random().toString(36).slice(2, 8); }

function fmtDate(iso) {
  var p = iso.split("-");
  return p[2] + "/" + p[1];
}

function fmtMoney(v) {
  return "R$ " + v.toLocaleString("pt-BR", { minimumFractionDigits: 0 });
}

function isToday(iso) { return iso === new Date().toISOString().slice(0, 10); }

function clienteNome(id) {
  var c = DB.clientes.find(function (x) { return x.id === id; });
  return c ? c.nome : "—";
}
function pecaNome(id) {
  var p = DB.pecas.find(function (x) { return x.id === id; });
  return p ? p.nome + " (" + p.codigo + ")" : "—";
}

var PECA_STATUS = {
  disponivel: { label: "Disponível", cls: "badge-ok" },
  alugado: { label: "Alugado", cls: "badge-info" },
  reservado: { label: "Reservado", cls: "badge-info" },
  higienizacao: { label: "Higienização", cls: "badge-warn" },
  manutencao: { label: "Manutenção", cls: "badge-muted" },
  baixa: { label: "Baixa", cls: "badge-danger" }
};

var RESERVA_STATUS = {
  "pre-reserva": { label: "Pré-reserva", cls: "badge-muted" },
  "confirmada": { label: "Confirmada", cls: "badge-info" },
  "retirado": { label: "Retirado", cls: "badge-ok" },
  "devolvido": { label: "Devolvido", cls: "badge-muted" },
  "atrasado": { label: "Atrasado", cls: "badge-danger" }
};

function badge(map, key) {
  var m = map[key] || { label: key, cls: "badge-muted" };
  return '<span class="badge ' + m.cls + '">' + m.label + "</span>";
}

function toast(msg) {
  var el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(function () { el.classList.remove("show"); }, 2400);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
  });
}

/* ---------------- Modal ---------------- */
var backdrop = document.getElementById("modal-backdrop");
var modalBody = document.getElementById("modal-body");

function openModal(html) {
  modalBody.innerHTML = html;
  backdrop.classList.add("open");
}
function closeModal() {
  backdrop.classList.remove("open");
  modalBody.innerHTML = "";
}
document.getElementById("modal-close").addEventListener("click", closeModal);
backdrop.addEventListener("click", function (e) { if (e.target === backdrop) closeModal(); });

/* ---------------- Sidebar / role ---------------- */
function visibleModulesForRole() {
  return MODULES.filter(function (m) {
    if (m.comingSoon) return false;
    if (DB.role === "admin") return true;
    return DB.modulos[m.key];
  });
}

function renderSidebar() {
  var nav = document.getElementById("sidebar-nav");
  var current = (location.hash || "#dashboard").slice(1);
  var html = "";

  visibleModulesForRole().forEach(function (m) {
    var activeCls = current === m.key ? " active" : "";
    html += '<button class="nav-item' + activeCls + '" data-nav="' + m.key + '">' +
      '<span class="ico">' + ICONS[m.icon] + "</span><span>" + m.label + "</span></button>";
  });

  if (DB.role === "admin") {
    html += '<div class="nav-divider"></div><div class="nav-caption">Administração</div>';
    var actAccess = current === "modulos" ? " active" : "";
    html += '<button class="nav-item' + actAccess + '" data-nav="modulos">' +
      '<span class="ico">' + ICONS.grid + "</span><span>Módulos &amp; Acessos</span></button>";
  }

  nav.innerHTML = html;

  nav.querySelectorAll("[data-nav]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      location.hash = "#" + btn.getAttribute("data-nav");
      closeSidebarMobile();
    });
  });
}

/* Mobile sidebar */
var sidebarEl = document.getElementById("sidebar");
var scrim = document.createElement("div");
scrim.className = "sidebar-scrim";
document.body.appendChild(scrim);

function openSidebarMobile() { sidebarEl.classList.add("open"); scrim.classList.add("show"); }
function closeSidebarMobile() { sidebarEl.classList.remove("open"); scrim.classList.remove("show"); }
document.getElementById("menu-toggle").addEventListener("click", openSidebarMobile);
scrim.addEventListener("click", closeSidebarMobile);

/* Role switch */
document.getElementById("role-admin").addEventListener("click", function () { setRole("admin"); });
document.getElementById("role-cliente").addEventListener("click", function () { setRole("cliente"); });

function setRole(role) {
  DB.role = role;
  saveDB(DB);
  document.getElementById("role-admin").classList.toggle("active", role === "admin");
  document.getElementById("role-cliente").classList.toggle("active", role === "cliente");

  var allowed = visibleModulesForRole().map(function (m) { return m.key; });
  var current = (location.hash || "#dashboard").slice(1);
  if (current !== "modulos" && allowed.indexOf(current) === -1) {
    location.hash = allowed.length ? "#" + allowed[0] : "#dashboard";
  }
  renderSidebar();
  route();
  toast(role === "admin" ? "Visão de administrador — todos os módulos visíveis." : "Visão simulada da loja — só os módulos liberados aparecem.");
}

/* ==========================================================================
   Views
   ========================================================================== */

function renderDashboard() {
  var pecas = DB.pecas, reservas = DB.reservas;
  var disponiveis = pecas.filter(function (p) { return p.status === "disponivel"; }).length;
  var higienizacao = pecas.filter(function (p) { return p.status === "higienizacao"; }).length;
  var ativas = reservas.filter(function (r) { return r.status === "confirmada" || r.status === "retirado"; }).length;
  var atrasadas = reservas.filter(function (r) { return r.status === "atrasado"; }).length;

  var mesAtual = new Date().toISOString().slice(0, 7);
  var receita = reservas.filter(function (r) { return r.dataEvento.slice(0, 7) === mesAtual; })
    .reduce(function (sum, r) { return sum + (r.valor || 0); }, 0);

  var retiradasHoje = reservas.filter(function (r) { return isToday(r.dataRetirada); });
  var devolucoesHoje = reservas.filter(function (r) { return isToday(r.dataDevolucao); });

  var proximas = reservas.slice().sort(function (a, b) { return a.dataRetirada.localeCompare(b.dataRetirada); }).slice(0, 5);

  function listOrEmpty(items, render) {
    if (!items.length) return '<p class="panel-empty">Nada por aqui no momento.</p>';
    return '<ul class="panel-list">' + items.map(render).join("") + "</ul>";
  }

  document.getElementById("view").innerHTML =
    '<p class="view-intro">Visão geral da operação — dados de demonstração, atualizados em tempo real conforme você usa o sistema.</p>' +

    '<div class="kpi-grid">' +
      '<div class="kpi-card"><p class="kpi-label">Peças disponíveis</p><p class="kpi-value">' + disponiveis + '</p><p class="kpi-sub">de ' + pecas.length + ' no estoque</p></div>' +
      '<div class="kpi-card"><p class="kpi-label">Em higienização</p><p class="kpi-value">' + higienizacao + '</p><p class="kpi-sub">na lavanderia</p></div>' +
      '<div class="kpi-card"><p class="kpi-label">Reservas ativas</p><p class="kpi-value">' + ativas + '</p><p class="kpi-sub">' + atrasadas + ' em atraso</p></div>' +
      '<div class="kpi-card"><p class="kpi-label">Receita do mês</p><p class="kpi-value">' + fmtMoney(receita) + '</p><p class="kpi-sub">estimativa simulada</p></div>' +
    '</div>' +

    '<div class="dash-grid">' +
      '<div class="panel"><h3>Retiradas de hoje (' + retiradasHoje.length + ')</h3>' +
        listOrEmpty(retiradasHoje, function (r) {
          return '<li><span>' + escapeHtml(clienteNome(r.clienteId)) + '</span><span class="pl-meta">' + escapeHtml(pecaNome(r.pecaId)) + '</span></li>';
        }) + '</div>' +
      '<div class="panel"><h3>Devoluções de hoje (' + devolucoesHoje.length + ')</h3>' +
        listOrEmpty(devolucoesHoje, function (r) {
          return '<li><span>' + escapeHtml(clienteNome(r.clienteId)) + '</span><span class="pl-meta">' + escapeHtml(pecaNome(r.pecaId)) + '</span></li>';
        }) + '</div>' +
      '<div class="panel" style="grid-column:1/-1"><h3>Próximas movimentações</h3>' +
        listOrEmpty(proximas, function (r) {
          return '<li><span>' + fmtDate(r.dataRetirada) + ' → ' + fmtDate(r.dataDevolucao) + ' · ' + escapeHtml(clienteNome(r.clienteId)) + '</span>' + badge(RESERVA_STATUS, r.status) + '</li>';
        }) + '</div>' +
    '</div>';
}

/* ---------------- Estoque ---------------- */
function renderEstoque() {
  var state = renderEstoque._state || { q: "", status: "" };
  renderEstoque._state = state;

  var rows = DB.pecas.filter(function (p) {
    var matchQ = !state.q || (p.nome + p.codigo).toLowerCase().indexOf(state.q.toLowerCase()) !== -1;
    var matchStatus = !state.status || p.status === state.status;
    return matchQ && matchStatus;
  });

  var statusOptions = Object.keys(PECA_STATUS).map(function (k) {
    return '<option value="' + k + '"' + (state.status === k ? " selected" : "") + ">" + PECA_STATUS[k].label + "</option>";
  }).join("");

  document.getElementById("view").innerHTML =
    '<p class="view-intro">Cadastro de ternos, smokings e acessórios. Ao criar uma reserva, a peça muda de status automaticamente.</p>' +
    '<div class="toolbar">' +
      '<input type="search" id="f-q" placeholder="Buscar por nome ou código..." value="' + escapeHtml(state.q) + '">' +
      '<select id="f-status"><option value="">Todos os status</option>' + statusOptions + '</select>' +
      '<span class="spacer"></span>' +
      '<button class="btn" id="btn-nova-peca">+ Nova peça</button>' +
    '</div>' +
    renderPecasTable(rows);

  document.getElementById("f-q").addEventListener("input", function (e) { state.q = e.target.value; renderEstoque(); });
  document.getElementById("f-status").addEventListener("change", function (e) { state.status = e.target.value; renderEstoque(); });
  document.getElementById("btn-nova-peca").addEventListener("click", function () { openPecaForm(); });
  bindPecaRowActions();
}

function renderPecasTable(rows) {
  if (!rows.length) {
    return '<div class="table-wrap"><div class="empty-state"><strong>Nenhuma peça encontrada</strong>Ajuste os filtros ou cadastre uma nova peça.</div></div>';
  }
  var body = rows.map(function (p) {
    return "<tr>" +
      "<td>" + p.codigo + "</td>" +
      "<td>" + escapeHtml(p.nome) + "</td>" +
      "<td>" + p.tipo + "</td>" +
      "<td>" + p.tamanho + "</td>" +
      "<td>" + p.cor + "</td>" +
      "<td>" + badge(PECA_STATUS, p.status) + "</td>" +
      '<td><div class="row-actions">' +
        '<button class="btn btn-outline btn-sm" data-edit="' + p.id + '">Editar</button>' +
        '<button class="btn btn-danger btn-sm" data-del="' + p.id + '">Excluir</button>' +
      "</div></td>" +
    "</tr>";
  }).join("");

  return '<div class="table-wrap"><table><thead><tr>' +
    "<th>Código</th><th>Peça</th><th>Tipo</th><th>Tam.</th><th>Cor</th><th>Status</th><th></th>" +
    "</tr></thead><tbody>" + body + "</tbody></table></div>";
}

function bindPecaRowActions() {
  document.querySelectorAll("[data-edit]").forEach(function (btn) {
    btn.addEventListener("click", function () { openPecaForm(btn.getAttribute("data-edit")); });
  });
  document.querySelectorAll("[data-del]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-del");
      if (!confirm("Excluir esta peça do estoque?")) return;
      DB.pecas = DB.pecas.filter(function (p) { return p.id !== id; });
      saveDB(DB);
      toast("Peça removida.");
      renderEstoque();
    });
  });
}

function openPecaForm(id) {
  var p = id ? DB.pecas.find(function (x) { return x.id === id; }) : null;

  function opts(list, val) {
    return list.map(function (v) { return '<option' + (v === val ? " selected" : "") + ">" + v + "</option>"; }).join("");
  }
  function statusOpts(val) {
    return Object.keys(PECA_STATUS).map(function (k) {
      return '<option value="' + k + '"' + (k === val ? " selected" : "") + ">" + PECA_STATUS[k].label + "</option>";
    }).join("");
  }

  openModal(
    "<h2>" + (p ? "Editar peça" : "Nova peça") + "</h2>" +
    '<form id="peca-form">' +
      '<div class="form-row">' +
        '<div class="form-field"><label>Código</label><input name="codigo" required value="' + (p ? p.codigo : "") + '" placeholder="TN-000"></div>' +
        '<div class="form-field"><label>Tipo</label><select name="tipo">' + opts(TIPOS_PECA, p ? p.tipo : TIPOS_PECA[0]) + "</select></div>" +
      "</div>" +
      '<div class="form-field"><label>Nome da peça</label><input name="nome" required value="' + (p ? escapeHtml(p.nome) : "") + '" placeholder="Ex: Terno Slim Cinza Aço"></div>' +
      '<div class="form-row">' +
        '<div class="form-field"><label>Tamanho</label><select name="tamanho">' + opts(TAMANHOS, p ? p.tamanho : TAMANHOS[0]) + "</select></div>" +
        '<div class="form-field"><label>Cor</label><select name="cor">' + opts(CORES, p ? p.cor : CORES[0]) + "</select></div>" +
      "</div>" +
      '<div class="form-field"><label>Status</label><select name="status">' + statusOpts(p ? p.status : "disponivel") + "</select></div>" +
      '<div class="form-actions">' +
        '<button type="button" class="btn btn-outline" id="cancel-peca">Cancelar</button>' +
        '<button type="submit" class="btn">' + (p ? "Salvar alterações" : "Cadastrar peça") + "</button>" +
      "</div>" +
    "</form>"
  );

  document.getElementById("cancel-peca").addEventListener("click", closeModal);
  document.getElementById("peca-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var fd = new FormData(e.target);
    var data = {
      codigo: fd.get("codigo").trim(),
      tipo: fd.get("tipo"),
      nome: fd.get("nome").trim(),
      tamanho: fd.get("tamanho"),
      cor: fd.get("cor"),
      status: fd.get("status")
    };
    if (p) {
      Object.assign(p, data);
      toast("Peça atualizada.");
    } else {
      data.id = uid("p");
      DB.pecas.push(data);
      toast("Peça cadastrada.");
    }
    saveDB(DB);
    closeModal();
    renderEstoque();
  });
}

/* ---------------- Reservas ---------------- */
function renderReservas() {
  var state = renderReservas._state || { status: "" };
  renderReservas._state = state;

  var rows = DB.reservas.filter(function (r) { return !state.status || r.status === state.status; })
    .slice().sort(function (a, b) { return a.dataRetirada.localeCompare(b.dataRetirada); });

  var statusOptions = Object.keys(RESERVA_STATUS).map(function (k) {
    return '<option value="' + k + '"' + (state.status === k ? " selected" : "") + ">" + RESERVA_STATUS[k].label + "</option>";
  }).join("");

  document.getElementById("view").innerHTML =
    '<p class="view-intro">Agenda de retiradas e devoluções. Ao confirmar ou devolver, o estoque é atualizado automaticamente.</p>' +
    '<div class="toolbar">' +
      '<select id="f-status"><option value="">Todos os status</option>' + statusOptions + '</select>' +
      '<span class="spacer"></span>' +
      '<button class="btn" id="btn-nova-reserva">+ Nova reserva</button>' +
    '</div>' +
    renderReservasTable(rows);

  document.getElementById("f-status").addEventListener("change", function (e) { state.status = e.target.value; renderReservas(); });
  document.getElementById("btn-nova-reserva").addEventListener("click", function () { openReservaForm(); });
  bindReservaRowActions();
}

function renderReservasTable(rows) {
  if (!rows.length) {
    return '<div class="table-wrap"><div class="empty-state"><strong>Nenhuma reserva encontrada</strong>Crie uma nova reserva para começar.</div></div>';
  }
  var body = rows.map(function (r) {
    return "<tr>" +
      "<td>" + escapeHtml(clienteNome(r.clienteId)) + "</td>" +
      "<td>" + escapeHtml(pecaNome(r.pecaId)) + "</td>" +
      "<td>" + r.ocasiao + "</td>" +
      "<td>" + fmtDate(r.dataRetirada) + "</td>" +
      "<td>" + fmtDate(r.dataDevolucao) + "</td>" +
      "<td>" + badge(RESERVA_STATUS, r.status) + "</td>" +
      '<td><div class="row-actions">' + reservaNextActionBtn(r) +
        '<button class="btn btn-danger btn-sm" data-del-reserva="' + r.id + '">Excluir</button>' +
      "</div></td>" +
    "</tr>";
  }).join("");

  return '<div class="table-wrap"><table><thead><tr>' +
    "<th>Cliente</th><th>Peça</th><th>Ocasião</th><th>Retirada</th><th>Devolução</th><th>Status</th><th></th>" +
    "</tr></thead><tbody>" + body + "</tbody></table></div>";
}

function reservaNextActionBtn(r) {
  var flow = { "pre-reserva": "confirmada", "confirmada": "retirado", "retirado": "devolvido" };
  var next = flow[r.status];
  if (!next) return "";
  var label = { confirmada: "Confirmar", retirado: "Marcar retirado", devolvido: "Marcar devolvido" }[next];
  return '<button class="btn btn-outline btn-sm" data-advance="' + r.id + '">' + label + "</button>";
}

function bindReservaRowActions() {
  document.querySelectorAll("[data-advance]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var r = DB.reservas.find(function (x) { return x.id === btn.getAttribute("data-advance"); });
      var flow = { "pre-reserva": "confirmada", "confirmada": "retirado", "retirado": "devolvido" };
      r.status = flow[r.status];
      var peca = DB.pecas.find(function (p) { return p.id === r.pecaId; });
      if (peca) {
        if (r.status === "confirmada") peca.status = "reservado";
        if (r.status === "retirado") peca.status = "alugado";
        if (r.status === "devolvido") peca.status = "higienizacao";
      }
      saveDB(DB);
      toast("Reserva atualizada — estoque sincronizado.");
      renderReservas();
    });
  });
  document.querySelectorAll("[data-del-reserva]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!confirm("Excluir esta reserva?")) return;
      DB.reservas = DB.reservas.filter(function (x) { return x.id !== btn.getAttribute("data-del-reserva"); });
      saveDB(DB);
      toast("Reserva excluída.");
      renderReservas();
    });
  });
}

function openReservaForm() {
  var disponiveis = DB.pecas.filter(function (p) { return p.status === "disponivel"; });
  var clienteOpts = DB.clientes.map(function (c) { return '<option value="' + c.id + '">' + escapeHtml(c.nome) + "</option>"; }).join("");
  var pecaOpts = disponiveis.map(function (p) { return '<option value="' + p.id + '">' + escapeHtml(p.nome) + " (" + p.codigo + ")</option>"; }).join("");
  var ocasiaoOpts = OCASIOES.map(function (o) { return "<option>" + o + "</option>"; }).join("");
  var today = new Date().toISOString().slice(0, 10);

  if (!DB.clientes.length || !disponiveis.length) {
    openModal("<h2>Nova reserva</h2><p class=\"panel-empty\">" +
      (!disponiveis.length ? "Não há peças disponíveis no estoque no momento." : "Cadastre um cliente antes de criar uma reserva.") +
      "</p><div class=\"form-actions\"><button class=\"btn\" id=\"ok-empty\">Entendi</button></div>");
    document.getElementById("ok-empty").addEventListener("click", closeModal);
    return;
  }

  openModal(
    "<h2>Nova reserva</h2>" +
    '<form id="reserva-form">' +
      '<div class="form-field"><label>Cliente</label><select name="clienteId">' + clienteOpts + "</select></div>" +
      '<div class="form-field"><label>Peça (somente disponíveis)</label><select name="pecaId">' + pecaOpts + "</select></div>" +
      '<div class="form-field"><label>Ocasião</label><select name="ocasiao">' + ocasiaoOpts + "</select></div>" +
      '<div class="form-row">' +
        '<div class="form-field"><label>Retirada</label><input type="date" name="dataRetirada" value="' + today + '" required></div>' +
        '<div class="form-field"><label>Devolução</label><input type="date" name="dataDevolucao" value="' + today + '" required></div>' +
      "</div>" +
      '<div class="form-field"><label>Valor (R$)</label><input type="number" name="valor" value="250" min="0" step="10"></div>' +
      '<div class="form-actions">' +
        '<button type="button" class="btn btn-outline" id="cancel-reserva">Cancelar</button>' +
        '<button type="submit" class="btn">Criar pré-reserva</button>' +
      "</div>" +
    "</form>"
  );

  document.getElementById("cancel-reserva").addEventListener("click", closeModal);
  document.getElementById("reserva-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var fd = new FormData(e.target);
    var r = {
      id: uid("r"),
      clienteId: fd.get("clienteId"),
      pecaId: fd.get("pecaId"),
      ocasiao: fd.get("ocasiao"),
      dataRetirada: fd.get("dataRetirada"),
      dataDevolucao: fd.get("dataDevolucao"),
      dataEvento: fd.get("dataDevolucao"),
      status: "pre-reserva",
      valor: Number(fd.get("valor")) || 0
    };
    DB.reservas.push(r);
    var peca = DB.pecas.find(function (p) { return p.id === r.pecaId; });
    if (peca) peca.status = "reservado";
    saveDB(DB);
    toast("Pré-reserva criada.");
    closeModal();
    renderReservas();
  });
}

/* ---------------- Clientes ---------------- */
function renderClientes() {
  var rows = DB.clientes.map(function (c) {
    var totalReservas = DB.reservas.filter(function (r) { return r.clienteId === c.id; }).length;
    return "<tr>" +
      "<td>" + escapeHtml(c.nome) + "</td>" +
      '<td><a class="btn btn-outline btn-sm" target="_blank" rel="noopener" href="https://wa.me/' + c.telefone + '">WhatsApp</a></td>' +
      "<td>" + totalReservas + "</td>" +
      '<td><div class="row-actions"><button class="btn btn-danger btn-sm" data-del-cliente="' + c.id + '">Excluir</button></div></td>' +
    "</tr>";
  }).join("");

  document.getElementById("view").innerHTML =
    '<p class="view-intro">Clientes cadastrados e histórico de aluguéis.</p>' +
    '<div class="toolbar"><span class="spacer"></span><button class="btn" id="btn-novo-cliente">+ Novo cliente</button></div>' +
    '<div class="table-wrap"><table><thead><tr><th>Nome</th><th>Contato</th><th>Aluguéis</th><th></th></tr></thead><tbody>' + rows + "</tbody></table></div>";

  document.getElementById("btn-novo-cliente").addEventListener("click", openClienteForm);
  document.querySelectorAll("[data-del-cliente]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!confirm("Excluir este cliente?")) return;
      DB.clientes = DB.clientes.filter(function (x) { return x.id !== btn.getAttribute("data-del-cliente"); });
      saveDB(DB);
      toast("Cliente removido.");
      renderClientes();
    });
  });
}

function openClienteForm() {
  openModal(
    "<h2>Novo cliente</h2>" +
    '<form id="cliente-form">' +
      '<div class="form-field"><label>Nome completo</label><input name="nome" required placeholder="Ex: João Pedro"></div>' +
      '<div class="form-field"><label>WhatsApp (DDI+DDD+número)</label><input name="telefone" required placeholder="5531988887777"></div>' +
      '<div class="form-actions">' +
        '<button type="button" class="btn btn-outline" id="cancel-cliente">Cancelar</button>' +
        '<button type="submit" class="btn">Cadastrar</button>' +
      "</div>" +
    "</form>"
  );
  document.getElementById("cancel-cliente").addEventListener("click", closeModal);
  document.getElementById("cliente-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var fd = new FormData(e.target);
    DB.clientes.push({ id: uid("c"), nome: fd.get("nome").trim(), telefone: fd.get("telefone").replace(/\D/g, "") });
    saveDB(DB);
    toast("Cliente cadastrado.");
    closeModal();
    renderClientes();
  });
}

/* ---------------- Módulos & Acessos ---------------- */
function renderModulos() {
  var rows = MODULES.map(function (m) {
    var checked = DB.modulos[m.key] ? "checked" : "";
    var disabled = m.core || m.comingSoon ? "disabled" : "";
    return '<div class="module-row">' +
      '<div class="mi">' + ICONS[m.icon] + "</div>" +
      '<div class="module-info"><strong>' + m.label +
        (m.comingSoon ? '<span class="module-tag" style="margin-left:8px">Em breve</span>' : "") +
        (m.core ? '<span class="module-tag" style="margin-left:8px">Sempre ativo</span>' : "") +
      "</strong><span>" + m.desc + "</span></div>" +
      '<label class="switch"><input type="checkbox" data-mod="' + m.key + '" ' + checked + " " + disabled + '><span class="track"></span></label>' +
    "</div>";
  }).join("");

  document.getElementById("view").innerHTML =
    '<p class="view-intro">Como administrador do sistema, você decide quais módulos ficam visíveis para a loja. ' +
    'Desative um módulo para ocultá-lo imediatamente da visão do cliente — use o seletor "Visão" no topo para simular.</p>' +
    '<div class="module-list">' + rows + "</div>";

  document.querySelectorAll("[data-mod]").forEach(function (input) {
    input.addEventListener("change", function () {
      DB.modulos[input.getAttribute("data-mod")] = input.checked;
      saveDB(DB);
      renderSidebar();
      toast("Acesso ao módulo atualizado.");
    });
  });
}

/* ==========================================================================
   Router
   ========================================================================== */
var VIEWS = {
  dashboard: { title: "Dashboard", render: renderDashboard },
  estoque: { title: "Estoque", render: renderEstoque },
  reservas: { title: "Reservas", render: renderReservas },
  clientes: { title: "Clientes", render: renderClientes },
  modulos: { title: "Módulos & Acessos", render: renderModulos }
};

function route() {
  var key = (location.hash || "#dashboard").slice(1);
  var allowedKeys = visibleModulesForRole().map(function (m) { return m.key; });
  if (DB.role === "admin") allowedKeys.push("modulos");

  if (!VIEWS[key] || allowedKeys.indexOf(key) === -1) {
    key = allowedKeys[0] || "dashboard";
    location.hash = "#" + key;
    return;
  }

  document.getElementById("view-title").textContent = VIEWS[key].title;
  VIEWS[key].render();
  renderSidebar();
}

window.addEventListener("hashchange", route);

/* ---------------- Init ---------------- */
document.getElementById("role-admin").classList.toggle("active", DB.role === "admin");
document.getElementById("role-cliente").classList.toggle("active", DB.role === "cliente");
renderSidebar();
route();

})();
