export interface MenuItem {
  id?: number;
  label?: string;
  icon?: string;
  link?: string;
  subMenus?: SubMenus[];
  isMegaMenu?: boolean;
  visible?:boolean;
}

export interface SubMenus {
  subMenuItems?: SubMenuItems[]
  visible?:boolean;
}

export interface SubMenuItems {
  label?: string;
  link?: string;
  isTitle?: boolean;
  badge?: Badge;
  visible?:boolean;
}

export interface Badge {
  variant?: string;
  text?: string
}