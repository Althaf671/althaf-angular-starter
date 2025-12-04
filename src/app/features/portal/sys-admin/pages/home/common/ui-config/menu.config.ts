import { Expand, Languages, Moon, Search, UserRound } from 'lucide-angular';

export const MENU_CONFIG = [
  { 
    icon: { 
      icon: UserRound, 
      strokeWidth: 1.5,
      color: 'var(--color-icon)', 
      size: 21
    },
    text: 'Profile', 
    route: '/dashboard/administration/home' ,
  },
  { 
    icon: { 
      icon: Search, 
      strokeWidth: 1.5,
      color: 'var(--color-icon)', 
      size: 21
    },
    text: 'Search', 
    route: '/dashboard/administration/home' ,
  },
  { 
    icon: { 
      icon: Expand, 
      strokeWidth: 1.5,
      color: 'var(--color-icon)', 
      size: 21
    },
    text: 'Fullscreen', 
    route: '/dashboard/administration/home' ,
  },
  { 
    icon: { 
      icon: Languages, 
      strokeWidth: 1.5,
      color: 'var(--color-icon)', 
      size: 21
    },
    text: 'Language', 
    route: '/dashboard/administration/home' ,
  },
  { 
    icon: { 
      icon: Moon, 
      strokeWidth: 1.5,
      color: 'var(--color-icon)', 
      size: 21
    },
    text: 'Theme', 
    route: '/dashboard/administration/home' ,
  },
]
