import { Expand, Languages, Moon, Search, UserRound } from 'lucide-angular';

export const MENU_CONFIG = [
  { 
    icon: { 
      icon: UserRound, 
      strokeW: 1.5,
      color: 'var(--color-icon)', 
      size: 21
    },
    text: 'Profile', 
    route: '/dashboard/administration/home' ,
  },
  { 
    icon: { 
      icon: Search, 
      strokeW: 1.5,
      color: 'var(--color-icon)', 
      size: 21
    },
    text: 'Search', 
    route: '/dashboard/administration/home' ,
  },
  { 
    icon: { 
      icon: Expand, 
      strokeW: 1.5,
      color: 'var(--color-icon)', 
      size: 21
    },
    text: 'Fullscreen', 
    route: '/dashboard/administration/home' ,
  },
  { 
    icon: { 
      icon: Languages, 
      strokeW: 1.5,
      color: 'var(--color-icon)', 
      size: 21
    },
    text: 'Language', 
    route: '/dashboard/administration/home' ,
  },
  { 
    icon: { 
      icon: Moon, 
      strokeW: 1.5,
      color: 'var(--color-icon)', 
      size: 21
    },
    text: 'Theme', 
    route: '/dashboard/administration/home' ,
  },
]
