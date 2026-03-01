import { SettingsIcon, UserIcon } from "lucide-react";
import Languages from "./Languages";
import { motion } from "motion/react";

export default function Top() {
  return (
    <div id="top">
      <div>
        <motion.div
          whileHover={{rotate: -5}}
          >
        <img 
          src="fc_logo_black.svg" 
          alt="logo" 
          style={{ height: "36px" }} 
          />
          </motion.div>
      </div>
      <div>
        <Languages />
        <SettingsIcon className="nav-item" />
        <UserIcon className="nav-item" />
      </div>
    </div>
  )
}
