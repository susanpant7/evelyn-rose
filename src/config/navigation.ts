import { Home, Baby, Utensils, Users, Plane, Cake, LucideIcon } from 'lucide-react';

export interface NavLink {
    label: string;
    href: string;
    icon: LucideIcon;
}

export const navigationLinks: NavLink[] = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Nwaaran', href: '/nwaaran', icon: Baby },
    { label: 'Paasni', href: '/paasni', icon: Utensils },
    { label: 'Family', href: '/family', icon: Users },
    { label: 'Travel', href: '/travel', icon: Plane },
    { label: 'Birthday', href: '/birthday', icon: Cake },
];
