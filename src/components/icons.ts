import {
  faReact,
  faAngular,
  faNodeJs,
  faPython,
  faDocker
} from "@fortawesome/free-brands-svg-icons";

import {
  faBrain,
  faCloud,
  faCodeBranch,
  faLayerGroup,
  faLeaf,
  faServer
} from "@fortawesome/free-solid-svg-icons";


const iconMap: Record<string, any> = {
  react: faReact,
  angular: faAngular,
  "node-js": faNodeJs,
  cloud: faCloud, 
  python: faPython,
  docker: faDocker,
  brain: faBrain,
  "layer-group": faLayerGroup,
  "code-branch": faCodeBranch,
  leaf: faLeaf,
  server: faServer
};

export default iconMap;