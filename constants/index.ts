export const navLinks = [
  {
    label: 'Home',
    route: '/',
    icon: '/assets/icons/home.svg',
  },
  {
    label: 'Restaurar Imagem',
    route: '/transformations/add/restore',
    icon: '/assets/icons/image.svg',
  },
  {
    label: 'Preenchimento Generativo',
    route: '/transformations/add/fill',
    icon: '/assets/icons/stars.svg',
  },
  {
    label: 'Remover Objeto',
    route: '/transformations/add/remove',
    icon: '/assets/icons/scan.svg',
  },
  {
    label: 'Recolorir Objeto',
    route: '/transformations/add/recolor',
    icon: '/assets/icons/filter.svg',
  },
  {
    label: 'Remover Fundo',
    route: '/transformations/add/removeBackground',
    icon: '/assets/icons/camera.svg',
  },
  {
    label: 'Perfil',
    route: '/profile',
    icon: '/assets/icons/profile.svg',
  },
  {
    label: 'Comprar Créditos',
    route: '/credits',
    icon: '/assets/icons/bag.svg',
  },
]

export const plans = [
  {
    _id: 1,
    name: 'Grátis',
    icon: '/assets/icons/free-plan.svg',
    price: 0,
    credits: 20,
    inclusions: [
      {
        label: '20 Créditos Grátis',
        isIncluded: true,
      },
      {
        label: 'Acesso Básico aos Serviços',
        isIncluded: true,
      },
      {
        label: 'Suporte ao Cliente Prioritário',
        isIncluded: false,
      },
      {
        label: 'Atualizações Prioritárias',
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: 'Pacote Pro',
    icon: '/assets/icons/free-plan.svg',
    price: 15,
    credits: 120,
    inclusions: [
      {
        label: '120 Créditos',
        isIncluded: true,
      },
      {
        label: 'Acesso Completo aos Serviços',
        isIncluded: true,
      },
      {
        label: 'Suporte ao Cliente Prioritário',
        isIncluded: true,
      },
      {
        label: 'Atualizações Prioritárias',
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: 'Pacote Premium',
    icon: '/assets/icons/free-plan.svg',
    price: 100,
    credits: 2000,
    inclusions: [
      {
        label: '2000 Créditos',
        isIncluded: true,
      },
      {
        label: 'Acesso Completo aos Serviços',
        isIncluded: true,
      },
      {
        label: 'Suporte ao Cliente Prioritário',
        isIncluded: true,
      },
      {
        label: 'Atualizações Prioritárias',
        isIncluded: true,
      },
    ],
  },
]

export const transformationTypes = {
  restore: {
    type: 'restore',
    title: 'Restaurar Imagem',
    subTitle: 'Refine imagens removendo ruídos e imperfeições',
    config: { restore: true },
    icon: 'image.svg',
  },
  removeBackground: {
    type: 'removeBackground',
    title: 'Remover Fundo',
    subTitle: 'Remove o fundo da imagem usando IA',
    config: { removeBackground: true },
    icon: 'camera.svg',
  },
  fill: {
    type: 'fill',
    title: 'Preenchimento Generativo',
    subTitle:
      'Aprimore as dimensões de uma imagem usando IA de pintura externa',
    config: { fillBackground: true },
    icon: 'stars.svg',
  },
  remove: {
    type: 'remove',
    title: 'Remover Objeto',
    subTitle: 'Identifique e elimine objetos das imagens',
    config: {
      remove: { prompt: '', removeShadow: true, multiple: true },
    },
    icon: 'scan.svg',
  },
  recolor: {
    type: 'recolor',
    title: 'Recolorir Objeto',
    subTitle: 'Identifique e recolora objetos da imagem',
    config: {
      recolor: { prompt: '', to: '', multiple: true },
    },
    icon: 'filter.svg',
  },
}

export const aspectRatioOptions = {
  '1:1': {
    aspectRatio: '1:1',
    label: 'Quadrado (1:1)',
    width: 1000,
    height: 1000,
  },
  '3:4': {
    aspectRatio: '3:4',
    label: 'Retrato Padrão (3:4)',
    width: 1000,
    height: 1334,
  },
  '9:16': {
    aspectRatio: '9:16',
    label: 'Retrato de Celular (9:16)',
    width: 1000,
    height: 1778,
  },
}

export const defaultValues = {
  title: '',
  aspectRatio: '',
  color: '',
  prompt: '',
  publicId: '',
}

export const creditFee = -1
