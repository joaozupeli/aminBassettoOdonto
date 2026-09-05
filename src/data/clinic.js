/**
 * ============================================================
 * DADOS DA CLÍNICA — Amin Bassetto Odontologia
 * Demo personalizado a partir de odontoproto (molde intacto)
 * ============================================================
 */

export const clinic = {
  name: 'Amin Bassetto Odontologia',
  shortName: 'Amin Bassetto',
  discipline: 'Odontologia',
  established: 2018,

  tagline: 'Odontologia moderna, acolhedora e feita sob medida',
  shortDescription:
    'Clínica boutique em Capão Raso, Curitiba — cuidado familiar, ambiente moderno e atendimento próximo pelo WhatsApp.',

  hero: {
    kicker: 'Capão Raso · Curitiba',
    lines: ['Sorrisos com', 'cuidado de'],
    lineAccent: 'boutique.',
    lead:
      'Ambiente moderno e acolhedor, planejamento claro e um time que acompanha cada etapa. Avaliação e agendamento direto pelo WhatsApp.',
  },

  whatsapp: '5541995748092',
  whatsappDisplay: '(41) 99574-8092',
  whatsappDefaultMessage: 'Olá! Gostaria de agendar uma avaliação na Amin Bassetto Odontologia.',

  phone: '(41) 99574-8092',
  email: 'contato@aminbassetto.com.br',

  address: {
    street: 'R. Cap. Argemiro Monteiro Wanderley, 289',
    neighborhood: 'Capão Raso',
    city: 'Curitiba',
    state: 'PR',
    zip: '81130-160',
    full: 'R. Cap. Argemiro Monteiro Wanderley, 289 — Capão Raso, Curitiba — PR, 81130-160',
  },

  hours: [
    { days: 'Segunda a sexta', time: '08:00 — 18:00' },
    { days: 'Sábado', time: 'Sob agendamento' },
    { days: 'Domingo', time: 'Fechado' },
  ],

  social: {
    instagram: 'https://www.instagram.com/amin.bassetto.odontologia/',
    facebook: null,
    youtube: null,
  },

  stats: [
    { value: 5.0, suffix: '', label: 'Avaliação no Google' },
    { value: 3200, suffix: '+', label: 'Seguidores no Instagram' },
    { value: 98, suffix: '%', label: 'Indicariam a clínica' },
    { value: 1, suffix: '', label: 'Canal direto no WhatsApp' },
  ],

  manifesto:
    'Uma clínica linda, moderna e acolhedora — com o cuidado de quem trata cada paciente como família. Diagnóstico claro, plano aprovado por você e acompanhamento próximo.',

  principles: [
    {
      title: 'Acolhimento de verdade',
      text: 'Ambiente pensado para reduzir ansiedade. Quem chega se sente em casa — não em uma esteira de atendimento.',
    },
    {
      title: 'Plano transparente',
      text: 'Você entende o porquê de cada etapa, o prazo e o investimento antes de começar. Sem surpresas na conta.',
    },
    {
      title: 'Estética com naturalidade',
      text: 'Lentes, clareamento e reabilitação pensados para o seu rosto — resultado bonito e funcional.',
    },
    {
      title: 'WhatsApp sempre perto',
      text: 'Dúvidas, agendamentos e retornos com resposta humana, no canal que você já usa.',
    },
  ],
}

export const services = [
  {
    id: 'clinica-geral',
    title: 'Clínica Geral',
    description: 'Avaliação completa, prevenção e o reparo do que já deu problema.',
    detail:
      'Consulta cuidadosa de entrada, exame clínico e plano preventivo. Você sai com o mapa da sua boca e a ordem ideal de tratamento.',
    topics: ['Avaliação', 'Prevenção', 'Restaurações', 'Limpeza'],
    icon: 'tooth',
  },
  {
    id: 'estetica',
    title: 'Estética do sorriso',
    description: 'Lentes e facetas desenhadas a partir do seu rosto.',
    detail:
      'Ensaio e mock-up: você testa o sorriso novo antes de qualquer desgaste. Naturalidade em primeiro lugar.',
    topics: ['Facetas', 'Lentes', 'Mock-up'],
    icon: 'smile',
  },
  {
    id: 'clareamento',
    title: 'Clareamento',
    description: 'Protocolo dosado para clarear sem sensibilidade excessiva.',
    detail:
      'Medimos a cor inicial, tratamos sensibilidade e ajustamos a concentração por sessão.',
    topics: ['Consultório', 'Caseiro', 'Manutenção'],
    icon: 'sparkle',
  },
  {
    id: 'implantes',
    title: 'Implantes',
    description: 'Reabilitação guiada, do planejamento à coroa definitiva.',
    detail:
      'Planejamento cuidadoso, prótese provisória quando o caso permite e acompanhamento no pós.',
    topics: ['Cirurgia', 'Prótese', 'Reabilitação'],
    icon: 'implant',
  },
  {
    id: 'ortodontia',
    title: 'Ortodontia',
    description: 'Alinhamento com planejamento digital quando indicado.',
    detail:
      'Aparelho ou alinhadores conforme o caso. Você vê o caminho antes de começar.',
    topics: ['Alinhadores', 'Aparelho fixo', 'Planejamento'],
    icon: 'braces',
  },
  {
    id: 'familia',
    title: 'Atendimento em família',
    description: 'Cuidado para adultos e crianças no mesmo endereço.',
    detail:
      'Clínica acolhedora para toda a família, com linguagem clara e ritmo respeitoso.',
    topics: ['Adultos', 'Crianças', 'Prevenção'],
    icon: 'child',
  },
]

export const ticker = [
  'Ambiente moderno',
  'Capão Raso · Curitiba',
  'WhatsApp direto',
  'Estética natural',
  'Plano transparente',
  'Avaliação 5.0',
]

export const team = [
  {
    id: 'mainara',
    name: 'Dra. Mainara',
    role: 'Cirurgiã-dentista',
    tag: 'Condução clínica',
    category: 'clinical',
    photo: null,
    bio: 'Responsável pelo atendimento e pelo cuidado próximo que os pacientes destacam nas avaliações — clínica linda, moderna e acolhedora.',
    formation: 'CRO-PR · Odontologia',
    specialties: ['Clínica Geral', 'Estética', 'Prevenção'],
    funFact: 'A família está no centro da clínica.',
    showWhatsApp: true,
  },
  {
    id: 'recepcao',
    name: 'Recepção',
    role: 'Atendimento',
    tag: 'Primeiro contato',
    category: 'admin',
    photo: null,
    bio: 'Organiza agenda e responde o WhatsApp com carinho — o mesmo tom acolhedor da clínica.',
    formation: 'Atendimento ao paciente',
    specialties: ['Agendamento', 'Acolhimento'],
    funFact: 'Quase sempre responde antes de você sair de casa.',
    showWhatsApp: true,
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Paciente Google',
    rating: 5,
    text: 'Clínica linda, moderna e acolhedora. Atendimento impecável — me senti em casa desde a primeira consulta.',
    treatment: 'Avaliação',
    year: '2025',
  },
  {
    id: 2,
    name: 'Paciente Instagram',
    rating: 5,
    text: 'Explicaram tudo com calma e o resultado ficou natural. Recomendo de olhos fechados.',
    treatment: 'Estética',
    year: '2025',
  },
  {
    id: 3,
    name: 'Família Capão Raso',
    rating: 5,
    text: 'Levamos a família toda. Ambiente limpo, equipe atenciosa e WhatsApp que realmente responde.',
    treatment: 'Clínica Geral',
    year: '2024',
  },
]
