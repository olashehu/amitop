import {
  Sun,
  Cable,
  Network,
  Layers,
  Wifi,
  PhoneCall,
  Camera,
  Router,
  Server,
  ClipboardList,
  Wrench,
  Building2,
  Factory,
  Landmark,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export const serviceIconMap: Record<string, LucideIcon> = {
  Sun,
  Cable,
  Network,
  Layers,
  Wifi,
  PhoneCall,
  Camera,
  Router,
  Server,
  ClipboardList,
  Wrench,
  Building2,
  Factory,
  Landmark,
  GraduationCap,
};

export function getServiceIcon(name: string): LucideIcon {
  return serviceIconMap[name] ?? Wrench;
}
