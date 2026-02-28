import { SettingsIcon, UserIcon } from "lucide-react";
import Languages from "./Languages";

export default function Top() {
  return (
    <div id="top">
      <div>
        <Languages />
        <SettingsIcon className="nav-item" />
        <UserIcon className="nav-item" />
      </div>
    </div>
  )
}
