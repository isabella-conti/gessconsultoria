const icone = document.getElementById('icone');
const conteudo = document.getElementById('conteudo');
const box = document.getElementById('box-faturamento');

const id1 = document.getElementById('1');
const id2 = document.getElementById('2');
const id3 = document.getElementById('3');
const id4 = document.getElementById('4');

function changeContent(id){
    switch (id){
        case 1:
        conteudo.innerHTML = "O diagnóstico é uma visita realizada na instituição com o objetivo de avaliar a situação da empresa naquele momento, com relação a gestão de processos, qualidade, segurança, dentre outros aspectos, de acordo com a demanda do cliente. A partir do diagnóstico é elaborado um relatório com pontos fortes, fracos e processos não implantados, além dos norteamentos necessários para implantação das ações, visando melhorias."
        icone.innerHTML = "<i class='fa-solid fa-bolt-lightning fa-4x mb-3 card-img-top text-center mt-3 i-card' style='color: rgba(97,228,167,1);'></i><h3 class='text-center font-weight-300'>Diagnóstico</h3>";
        box.style.display = 'none';
        id1.style.backgroundColor = "rgba(45, 111, 80, 0.053)"
        id2.style.backgroundColor = "white"
        id3.style.backgroundColor = "white"
        id4.style.backgroundColor = "white"
        break;
        case 2:
        conteudo.innerHTML = "A consultoria é destinada para instituições de saúde que buscam suporte no desenvolvimento e melhoria dos processos com foco na segurança do paciente e qualidade dos serviços, buscando o uso inteligente de recursos.  Todo o processo de consultoria é realizado com embasamento em metodologias científicas e ferramentas da qualidade e é focado em orientar as equipes da instituição sobre o que fazer e, principalmente, como executar as atividades propostas."
        icone.innerHTML = ' <i class="fa-solid fa-gears fa-4x mb-3 card-img-top text-center mt-3 i-card" style="color: #61E2BE;"></i><h3 class="text-center font-weight-300">Consultoria para Gestão</h3>'
        box.style.display = 'none';
        id2.style.backgroundColor = "rgba(45, 111, 80, 0.053)"
        id1.style.backgroundColor = "white"
        id3.style.backgroundColor = "white"
        id4.style.backgroundColor = "white"
        break;
        case 3:
        conteudo.innerHTML = "A consultoria é destinada para instituições de saúde que buscam otimizar os seus processos para a obtenção de certificações.  Todo o processo de consultoria é realizado com embasamento em metodologias científicas e ferramentas da qualidade e é focado em orientar as equipes da instituição sobre o que fazer e, principalmente, como executar as atividades propostas. Orientamos, apoiamos e desenvolvemos junto ao cliente todos os passos para obtenção da certificação."
        icone.innerHTML = ' <i class="fa-solid fa-certificate fa-4x mb-3 card-img-top text-center mt-3 i-card" style="color: rgba(97,224,228,1);"></i><h3 class="text-center font-weight-300">Consultoria para Certificações</h3>'
        box.style.display = 'none';
        id3.style.backgroundColor = "rgba(45, 111, 80, 0.053)"
        id1.style.backgroundColor = "white"
        id2.style.backgroundColor = "white"
        id4.style.backgroundColor = "white"
        break;
        case 4:
        conteudo.innerHTML = "Descubra como parar de receber as glosas e aumentar seu faturamento. Já pensou em fazer o ciclo da receita médica funcionar definitivamente? Receber mais rápido e perder menos das suas fontes pagadoras, a um menor custo. Nossa consultoria trabalha toda a cadeia de faturamento hospitalar e fornecemos através de nossos parceiros aplicações integradas ao seu ERP que digitizam processos-chaves do seu negócio para Médicos, Consultórios, Hospitais, Laboratórios e Clínicas. Atuamos em toda cadeia de faturamento, acompanhando o passo a passo do processo:"
        icone.innerHTML = '<i class="fa-solid fa-dollar-sign fa-4x mb-3 card-img-top text-center mt-3 i-card" style="color: rgba(97,224,228,1);"></i><h3 class="text-center font-weight-300">Faturamento Hospitalar</h3>'
        box.style.display = 'block';
        id4.style.backgroundColor = "rgba(45, 111, 80, 0.053)"
        id1.style.backgroundColor = "white"
        id3.style.backgroundColor = "white"
        id2.style.backgroundColor = "white"
        break;
    }
    if(screen.width < 575){
        window.location.href = "#icone"
    }
}

function atualizar() {
  let mensagem = document.getElementById('mensagem');
  document.getElementById("link").setAttribute("href", "mailto:contato@gessconsultoria.com.br?subject=" + encodeURIComponent("Contato via site") + "&body=" + encodeURIComponent(mensagem.value));
}

function showMenu(menu) {
  const x = document.getElementById(menu);
      if (x.style.display === "none") {
        x.style.display = "inline-block";
      } else {
        x.style.display = "none";
  }
    
}

const curso1 = document.getElementById('curso1');
const curso2 = document.getElementById('curso2');
const curso3 = document.getElementById('curso3');

let listas = [
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - APRESENTAÇÃO E OBJETIVOS</li>
  <li class="list-group-item">MÓDULO 2   - FATURAMENTO HOSPITALAR</li>
  <li class="list-group-item">MÓDULO 3   - LEGISLAÇÕES</li>
  <li class="list-group-item">MÓDULO 4   - CONTRATUAIZAÇÃO</li>
  <li class="list-group-item">MÓDULO 5   - CONTRATOS</li>
  <li class="list-group-item">MÓDULO 6   - MODELOS DE REMUNERAÇÃO</li>
  <li class="list-group-item">MÓDULO 7   - TABELAS DE FATURAMENTO</li>
  <li class="list-group-item">MÓDULO 8   - SAÚDE SUPLEMENTAR – TISS</li>
  <li class="list-group-item">MÓDULO 9   - SAÚDE SUPLEMENTAR - TUSS</li>
  <li class="list-group-item">MÓDULO 10 - PRONTUÁRIO</li>
  <li class="list-group-item">MÓDULO 11 - PRODUZINDO A CONTA HOSPITALAR</li>
  <li class="list-group-item">MÓDULO 12 - AUDITORIA EM SAÚDE</li>
  </ul>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - APRESENTAÇÃO E OBJETIVOS</li>
  <li class="list-group-item">MÓDULO 2   - CONCEITOS IMPORTANTES</li>
  <li class="list-group-item">MÓDULO 3   - CICLO DA RECEITA HOSPITALAR</li>
  <li class="list-group-item">MÓDULO 4   - CONTRATOS E MODELOS REMUNERATÓRIOS</li>
  <li class="list-group-item">MÓDULO 5   - TABELAS </li>
  <li class="list-group-item">MÓDULO 6   - RECONHECENDO AS GLOSAS</li>
  <li class="list-group-item">MÓDULO 7   - REALIZANDO O RECURSO</li>
  <li class="list-group-item">MÓDULO 8   - COMUNICAÇÃO COM A OPERADORA</li>
  <li class="list-group-item">MÓDULO 9   - NOTIFICAÇÕES DE GLOSAS</li>
  <li class="list-group-item">MÓDULO 10 - LEGISLAÇÃO</li>
  <li class="list-group-item">MÓDULO 11 - PRONTUÁRIO</li>
  <li class="list-group-item">MÓDULO 12 - INDICADORES FINANCEIROS</li>
  </ul>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1 – CONCEITO, HISTÓRICO, CRITÉRIOS DE REMUNERAÇÃO</li>
  <li class="list-group-item">MÓDULO 2 – PROCEDIMENTOS GERAIS E CLÍNICOS</li>
  <li class="list-group-item">MÓDULO 3 – PROCEDIMENTOS CIRÚRGICOS INVASIVOS</li>
  <li class="list-group-item">MÓDULO 4 - PROCEDIMENTOS DIAGNÓSTICO E TERAPÊUTICOS</li>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - CONTEXTUALIZAÇÃO SOBRE AS TABELAS DE MATERIAIS E MEDICAMENTOS</li>
  <li class="list-group-item">MÓDULO 2   - CÂMARA DE REGULAÇÃO DO MERCADO DE MEDICAMENTOS (CMED)</li>
  <li class="list-group-item">MÓDULO 3   - INFORMAÇÕES GERAIS SOBRE A REVISTA BRASÍNDICE</li>
  <li class="list-group-item">MÓDULO 4   - LISTA POSITIVA, LISTA NEGATIVA E LISTA NEUTRA</li>
  <li class="list-group-item">MÓDULO 5   - CÁLCULO DO PREÇO MÁXIMO AO CONSUMIDOR </li>
  <li class="list-group-item">MÓDULO 6   - CUIDADOS NO CADASTRO DOS ITENS</li>
  <li class="list-group-item">MÓDULO 7   - INFORMAÇÕES GERAIS SOBRE A REVISTA SIMPRO</li>
  <li class="list-group-item">MÓDULO 8   - COMO FATURAR SEM BRASÍNDICE OU SIMPRO?</li>
  <li class="list-group-item">MÓDULO 9   - CALCULANDO A TRANSPOSIÇÃO DE VALORES</li>
  <li class="list-group-item">MÓDULO 10 - EXERCÍCIOS PRÁTICOS</li>
  </ul>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - TABELAS AMB 1990 E 1992</li>
  <li class="list-group-item">MÓDULO 2   - TABELAS LPM 1996 E 1999</li>
  <li class="list-group-item">MÓDULO 3   - IDENTIFICANDO ESPECIALIDADES E SUBGRUPOS NAS CODIFICAÇÕES</li>
  <li class="list-group-item">MÓDULO 4   - INSTRUÇÕES GERAIS</li>
  <li class="list-group-item">MÓDULO 5   - VALORAÇÃO DE COBRANÇA POR VIA DE ACESSO</li>
  <li class="list-group-item">MÓDULO 6   - TABELAS CBHPM</li>
  <li class="list-group-item">MÓDULO 7   - INSTRUÇÕES GERAIS</li>
  <li class="list-group-item">MÓDULO 8   - VALORAÇÃO DE COBRANÇA</li>
  <li class="list-group-item">MÓDULO 9   - UNIDADE DE CUSTO OPERACIONAL – UCO</li>
  <li class="list-group-item">MÓDULO 10 - PORTE ANESTÉSICO</li>
  <li class="list-group-item">MÓDULO 11 - TABELAS REMUNERATÓRIAS SIMPRO E BRASINDICE</li>
  <li class="list-group-item">MÓDULO 12 - EXEMPLO DE TABELAS REMUNERATÓRIAS (PRÓPRIAS)</li>
  </ul>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - O QUE É TISS</li>
  <li class="list-group-item">MÓDULO 2   - O QUE É TUSS</li>
  <li class="list-group-item">MÓDULO 3   - CONHECENDO GUIAS DE ATENDIMENTO</li>
  <li class="list-group-item">MÓDULO 4   - PORTAL DE ENVIO ARQUIVOS XML</li>
  <li class="list-group-item">MÓDULO 5   - ESTRUTURA DO ARQUIVO XML</li>
  <li class="list-group-item">MÓDULO 6   - DADOS CONTÁBEIS POR OPERADORA – ANS</li>
  <li class="list-group-item">MÓDULO 7   - PESQUISA NO PORTAL TUSS (MATERIAL, MEDICAMENTO, TAXAS E DIÁRIAS)</li>
  </ul>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - RELAÇÕES COMERCIAIS</li>
  <li class="list-group-item">MÓDULO 2   - CONTRATOS</li>
  <li class="list-group-item">MÓDULO 3   - ROL ANS – TUSS – TRR</li>
  <li class="list-group-item">MÓDULO 4   - MODELOS DE REMUNERAÇÃO</li>
  <li class="list-group-item">MÓDULO 5   - EXEMPLOS DE PACOTES</li>
  <li class="list-group-item">MÓDULO 6   - LEGISLAÇÕES</li>
  <li class="list-group-item">MÓDULO 7   - RESOLUÇÕES NORMATIVAS</li>
  <li class="list-group-item">MÓDULO 6   - AUDITORIAS</li>
  <li class="list-group-item">MÓDULO 7   - FLUXO DE FATURAMENTO</li>
  </ul>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - APRESENTAÇÃO E OBJETIVOS</li>
  <li class="list-group-item">MÓDULO 2   - FATURAMENTO HOSPITALAR</li>
  <li class="list-group-item">MÓDULO 3   - LEGISLAÇÕES</li>
  <li class="list-group-item">MÓDULO 4   - CONTRATUAIZAÇÃO</li>
  <li class="list-group-item">MÓDULO 5   - CONTRATOS</li>
  <li class="list-group-item">MÓDULO 6   - MODELOS DE REMUNERAÇÃO</li>
  <li class="list-group-item">MÓDULO 7   - TABELAS DE FATURAMENTO</li>
  <li class="list-group-item">MÓDULO 8   - SAÚDE SUPLEMENTAR – TISS</li>
  <li class="list-group-item">MÓDULO 9   - SAÚDE SUPLEMENTAR - TUSS</li>
  <li class="list-group-item">MÓDULO 10 - PRONTUÁRIO</li>
  <li class="list-group-item">MÓDULO 11 - PRODUZINDO A CONTA HOSPITALAR</li>
  <li class="list-group-item">MÓDULO 12 - AUDITORIA EM SAÚDE</li>
  </ul>
  <button class="btn btn-success mt-3" style="margin-left: auto;margin-right: auto;display: block;"><a href="https://hotmart.com/pt-br/marketplace/produtos/gestao-de-faturamento-de-contas-medicas/B75630260L" style="color: white !important; font-weight: 300;">COMPRAR AGORA</a></button>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - APRESENTAÇÃO E OBJETIVOS</li>
  <li class="list-group-item">MÓDULO 2   - CONCEITOS IMPORTANTES</li>
  <li class="list-group-item">MÓDULO 3   - CICLO DA RECEITA HOSPITALAR</li>
  <li class="list-group-item">MÓDULO 4   - CONTRATUALIZAÇÃO</li>
  <li class="list-group-item">MÓDULO 5   - CONTRATOS</li>
  <li class="list-group-item">MÓDULO 6   - MODELOS DE REMUNERAÇÃO</li>
  <li class="list-group-item">MÓDULO 7   - TABELAS DE FATURAMENTO</li>
  <li class="list-group-item">MÓDULO 8   - SAÚDE SUPLEMENTAR – TISS</li>
  <li class="list-group-item">MÓDULO 9   - SAÚDE SUPLEMENTAR - TUSS</li>
  <li class="list-group-item">MÓDULO 10 - PRONTUÁRIO</li>
  <li class="list-group-item">MÓDULO 11 - PRODUZINDO A CONTA HOSPITALAR</li>
  <li class="list-group-item">MÓDULO 12 - AUDITORIA EM SAÚDE</li>
  </ul>
  <button class="btn btn-success mt-3" style="margin-left: auto;margin-right: auto;display: block;"><a href="https://go.hotmart.com/W76867763R" style="color: white !important; font-weight: 300;">COMPRAR AGORA</a></button>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - CONCEITOS E CLASSIFICAÇÕES DE OPME/DMI</li>
  <li class="list-group-item">MÓDULO 2   - CENÁRIOS E TENDÊNCIAS RELACIONADAS A OPME/DMI NO BRASIL E NO MUNDO</li>
  <li class="list-group-item">MÓDULO 3   - DIRETRIZES E LEGISLAÇÕES EM OPME/DMI</li>
  <li class="list-group-item">MÓDULO 4   - FLUXOS OPERACIONAIS DE OPME/DMI DENTRO DE OPERADORAS E HOSPITAIS (NÚCLEOS TÉCNICOS)</li>
  <li class="list-group-item">MÓDULO 5   - AGÊNCIAS REGULADORAS (ANVISA E ANS)</li>
  <li class="list-group-item">MÓDULO 6   - TABELAS DE OPME/DMI DE DOMÍNIO PÚBLICO (TUSS, SUS, ETC)</li>
  <li class="list-group-item">MÓDULO 7   - RASTREABILIDADE PARA AUDITORIA PÓS CIRÚRGICA E FATURAMENTO DE OPME/DMI</li>
  </ul>
  <button class="btn btn-success mt-3" style="margin-left: auto;margin-right: auto;display: block;"><a href="https://go.hotmart.com/F76925606B" style="color: white !important; font-weight: 300;">COMPRAR AGORA</a></button>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - HISTÓRICO, CENÁRIOS E CONCEITOS DAS DIVERGÊNCIAS TÉCNICO-ASSISTENCIAIS</li>
  <li class="list-group-item">MÓDULO 2   - JUNTA MÉDICA NOS PROCESSOS DE AUTORIZAÇÃO DE PROCEDIMENTOS OU EVENTOS EM SAÚDE</li>
  <li class="list-group-item">MÓDULO 3   - COMPOSIÇÃO DA JUNTA MÉDICA</li>
  <li class="list-group-item">MÓDULO 4   - TIPOS DE JUNTA MÉDICA</li>
  <li class="list-group-item">MÓDULO 5   - O PROFISSIONAL ASSISTENTE E SUAS OBRIGAÇÕES NO PROCESSO DE SOLICITAÇÃO DOS PROCEDIMENTOS</li>
  <li class="list-group-item">MÓDULO 6   - PAPEL DO MÉDICO AUDITOR NO PROCESSO DA JUNTA MÉDICA</li>
  <li class="list-group-item">MÓDULO 7   - POSSIBILIDADES DE CONSENSO</li>
  </ul>
  <button class="btn btn-success mt-3" style="margin-left: auto;margin-right: auto;display: block;"><a href="https://go.hotmart.com/B76925608S" style="color: white !important; font-weight: 300;">COMPRAR AGORA</a></button>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - REVISÃO DA ANATOMIA E FISIOLOGIA ENDOVASCULAR</li>
  <li class="list-group-item">MÓDULO 2   - ACESSO: PUNÇÃO ARTERIAL, INTRODUTORES (CURTOS, BAINHAS LONGAS E ARAMADAS), ACESSÓRIOS, GUIAS (FLEXÍVES E EXTRA SUPORTE) E CATÉTERES (CONVENCIONAIS E CENTIMETRADOS)</li>
  <li class="list-group-item">MÓDULO 3   - DIAGNÓSTICO: ARTERIOGRAFIAS E AORTOGRAFIAS (SISTEMAS INJETORES E TIPOS DE CONTRASTES)</li>
  <li class="list-group-item">MÓDULO 4   - TRATAMENTOS: ABERTOS (ENXERTOS) E PERCUTÂNEOS, ESTENOSES E ANEURISMAS (TÉCNICAS POR BALÕES, STENTS E ENDOPRÓTESES)</li>
  <li class="list-group-item">MÓDULO 5   - ESTENOSES: CAROTÍDEAS (SISTEMA DE PROTEÇÃO DISTAL, BALÃO E STENT AUTOEXPANSÍVEL), ARTÉRIAS RENAIS E PERIFÉRICAS (BALÕES E STENTS EXPANSÍVEIS POR BALÃO E AUTO EXPANSÍVEIS), E MUITO MAIS!</li>
  </ul><button class="btn btn-success mt-3" style="margin-left: auto;margin-right: auto;display: block;"><a href="https://go.hotmart.com/E76925609M" style="color: white !important; font-weight: 300;">COMPRAR AGORA</a></button>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - INTRODUÇÃO - CONSIDERAÇÕES SOBRE COLUNA VERTEBRAL / PROBLEMAS DE COLUNA</li>
  <li class="list-group-item">MÓDULO 2   - COLUNA CERVICAL</li>
  <li class="list-group-item">MÓDULO 3   - COLUNA LOMBAR</li>
  <li class="list-group-item">MÓDULO 4   - COLUNA TORÁCICA</li>
  <li class="list-group-item">MÓDULO 5   - COLUNA SACRO-ILÍACA</li>
  </ul><button class="btn btn-success mt-3" style="margin-left: auto;margin-right: auto;display: block;"><a href="https://go.hotmart.com/Q76925610I" style="color: white !important; font-weight: 300;">COMPRAR AGORA</a></button>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - AUDITORIA DE OPME NO TRAUMA / EMERGÊNCIA NA BMF – MICROPLACAS, MICROPARAFUSOS, MICROTELAS, ENXERTOS, PROTOTIPADOS (BIOLÓGICOS E SINTÉTICOS), NOVAS TECNOLOGIAS</li>
  <li class="list-group-item">MÓDULO 2   - AUDITORIA DE OPME EM PROCEDIMENTOS CORRETIVOS NA BMF (CIRURGIAS ORTOGNÁTICAS), PRINCIPAIS PATOLOGIAS E PROCEDIMENTOS (PROGNATISMOS, MORDIDA ABERTA, ETC), OPME’S: MICROPLACAS, MICROPARAFUSOS, MICROTELAS, PARAFUSO DE FIXAÇÃO / BLOQUEIO INTERMAXILAR - IMF, MICRODISSECTORES, MICROSSERRAS, ENXERTOS (ORGÂNICOS, SINTÉTICOS - PÓ, GRÂNULOS, BLOCOS E PASTA / MEMBRANAS), DISTRATORES PALATAIS, PRÓTESES ATM (DE PRATELEIRA E CUSTOMIZADAS), ARTROSCOPIA DE ATM, PROTOTIPADOS (BIOLÓGICOS E SINTÉTICOS), NOVAS TECNOLOGIAS</li>
  <li class="list-group-item">MÓDULO 3   - CMF (TRAUMA E CRANIO ESTENOSE): MINIPLACAS, MINIPARAFUSOS, CIMENTO TERMOPLÁSTICO, BIOABSORVÍVEIS</li>
  <li class="list-group-item">MÓDULO 4   - LEGISLAÇÕES, MBE E ATS RELACIONADAS ÀS ESPECIALIDADES DE BMF E CMF </li>
  </ul><button class="btn btn-success mt-3" style="margin-left: auto;margin-right: auto;display: block;"><a href="https://go.hotmart.com/L76925607S" style="color: white !important; font-weight: 300;">COMPRAR AGORA</a></button>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - CONCEITO, HISTÓRICO, CRITÉRIOS DE REMUNERAÇÃO</li>
  <li class="list-group-item">MÓDULO 2   - PROCEDIMENTOS GERAIS E CLÍNICOS</li>
  <li class="list-group-item">MÓDULO 3   - PROCEDIMENTOS CIRÚRGICOS INVASIVOS</li>
  <li class="list-group-item">MÓDULO 4 - PROCEDIMENTOS DIAGNÓSTICO E TERAPÊUTICOS</li>
  </ul><button class="btn btn-success mt-3" style="margin-left: auto;margin-right: auto;display: block;"><a href="https://go.hotmart.com/Q78875304D?dp=1" style="color: white !important; font-weight: 300;">COMPRAR AGORA</a></button>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - APRESENTAÇÃO E OBJETIVOS</li>
  <li class="list-group-item">MÓDULO 2   - PASSO A PASSO PARA FATURAR E AUDITAR AS CONTAS DE PACIENTES ATENDIDOS NO PRONTO SOCORRO</li>
  </ul>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - APRESENTAÇÃO E OBJETIVOS</li>
  <li class="list-group-item">MÓDULO 2   - PASSO A PASSO PARA FATURAR E AUDITAR AS CONTAS DE PACIENTES INTERNADOS - CONSUMO NAS UNIDADES DE INTERNAÇÃO (UI E UTI)</li>
  <li class="list-group-item">MÓDULO 3   - PASSO A PASSO PARA FATURAR E AUDITAR AS CONTAS DE PACIENTES CIRÚRGICOS - CONSUMO DO PACIENTE NAS CIRURGIAS</li>
  </ul>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - APRESENTAÇÃO E OBJETIVOS</li>
  <li class="list-group-item">MÓDULO 2   - PASSO A PASSO PARA FATURAR E AUDITAR AS CONTAS DE PACIENTES ATENDIDOS NO PRONTO SOCORRO</li>
  </ul>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - APRESENTAÇÃO E OBJETIVOS</li>
  <li class="list-group-item">MÓDULO 2   - PASSO A PASSO PARA FATURAR E AUDITAR AS CONTAS DE PACIENTES INTERNADOS - CONSUMO NAS UNIDADES DE INTERNAÇÃO (UI E UTI)</li>
  <li class="list-group-item">MÓDULO 3   - PASSO A PASSO PARA FATURAR E AUDITAR AS CONTAS DE PACIENTES CIRÚRGICOS - CONSUMO DO PACIENTE NAS CIRURGIAS</li>
  </ul>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - APRESENTAÇÃO E OBJETIVOS</li>
  <li class="list-group-item">MÓDULO 2   - FATURAMENTO HOSPITALAR</li>
  <li class="list-group-item">MÓDULO 3   - LEGISLAÇÕES</li>
  <li class="list-group-item">MÓDULO 4   - CONTRATUAIZAÇÃO</li>
  <li class="list-group-item">MÓDULO 5   - CONTRATOS</li>
  <li class="list-group-item">MÓDULO 6   - MODELOS DE REMUNERAÇÃO</li>
  <li class="list-group-item">MÓDULO 7   - TABELAS DE FATURAMENTO</li>
  <li class="list-group-item">MÓDULO 8   - SAÚDE SUPLEMENTAR – TISS</li>
  <li class="list-group-item">MÓDULO 9   - SAÚDE SUPLEMENTAR - TUSS</li>
  <li class="list-group-item">MÓDULO 10 - PRONTUÁRIO</li>
  <li class="list-group-item">MÓDULO 11 - PRODUZINDO A CONTA HOSPITALAR</li>
  <li class="list-group-item">MÓDULO 12 - AUDITORIA EM SAÚDE</li>
  </ul>
  <button class="btn btn-success mt-3" style="margin-left: auto;margin-right: auto;display: block;"><a href="https://hotmart.com/pt-br/marketplace/produtos/gestao-de-faturamento-de-contas-medicas/B75630260L" style="color: white !important; font-weight: 300;">COMPRAR AGORA</a></button>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - APRESENTAÇÃO E OBJETIVOS</li>
  <li class="list-group-item">MÓDULO 2   - CONCEITOS IMPORTANTES</li>
  <li class="list-group-item">MÓDULO 3   - CICLO DA RECEITA HOSPITALAR</li>
  <li class="list-group-item">MÓDULO 4   - CONTRATUALIZAÇÃO</li>
  <li class="list-group-item">MÓDULO 5   - CONTRATOS</li>
  <li class="list-group-item">MÓDULO 6   - MODELOS DE REMUNERAÇÃO</li>
  <li class="list-group-item">MÓDULO 7   - TABELAS DE FATURAMENTO</li>
  <li class="list-group-item">MÓDULO 8   - SAÚDE SUPLEMENTAR – TISS</li>
  <li class="list-group-item">MÓDULO 9   - SAÚDE SUPLEMENTAR - TUSS</li>
  <li class="list-group-item">MÓDULO 10 - PRONTUÁRIO</li>
  <li class="list-group-item">MÓDULO 11 - PRODUZINDO A CONTA HOSPITALAR</li>
  <li class="list-group-item">MÓDULO 12 - AUDITORIA EM SAÚDE</li>
  </ul>
  <button class="btn btn-success mt-3" style="margin-left: auto;margin-right: auto;display: block;"><a href="https://go.hotmart.com/W76867763R" style="color: white !important; font-weight: 300;">COMPRAR AGORA</a></button>`,
  `<ul class="list-group mt-3">
  <li class="list-group-item">MÓDULO 1   - CONCEITO, HISTÓRICO, CRITÉRIOS DE REMUNERAÇÃO</li>
  <li class="list-group-item">MÓDULO 2   - PROCEDIMENTOS GERAIS E CLÍNICOS</li>
  <li class="list-group-item">MÓDULO 3   - PROCEDIMENTOS CIRÚRGICOS INVASIVOS</li>
  <li class="list-group-item">MÓDULO 4 - PROCEDIMENTOS DIAGNÓSTICO E TERAPÊUTICOS</li>
  </ul><button class="btn btn-success mt-3" style="margin-left: auto;margin-right: auto;display: block;"><a href="https://go.hotmart.com/Q78875304D?dp=1" style="color: white !important; font-weight: 300;">COMPRAR AGORA</a></button>`
]

function saibaMais(id){
  let about = document.getElementById("about"+id)
  let button = document.getElementById(id)
  if(button.classList.contains('btn')){
    if(button.classList.contains('auditz')) {
      about.innerHTML = `
      <h3 class='col-white mt-3'>CONTEÚDO DO CURSO:</h3>
      ${listas[id-1]}
      `
    }else{
      about.innerHTML = `
        <h3 class='col-white mt-3'>CONTEÚDO DO CURSO:</h3>
        ${listas[id-1]}
        <button class="btn btn-success w-100 mt-3"><a href="https://wa.me/5521995033429" style="color: white !important;">SOLICITE UM ORÇAMENTO <i class="fas fa-long-arrow-alt-right color-ghostwhite"></i></a></button>
      `
    }
    button.innerHTML = ''
    button.classList.remove('btn')
    button.classList.add('btn-close','btn-close-white')
  }else{
    about.innerHTML = ''
    button.innerHTML = 'SAIBA MAIS <i class="fas fa-long-arrow-alt-right color-ghostwhite"></i>'
    button.classList.remove('btn-close', 'btn-close-white')
    button.classList.add('btn')
  }
}