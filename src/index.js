import "./styles.css";
import { serveAbout } from "./modules/about";
import { serveMenu } from "./modules/menu";
import { serveCredits } from "./modules/credits";
import { serveHome } from "./modules/home";

serveHome();
serveMenu();
serveAbout();
serveCredits();
