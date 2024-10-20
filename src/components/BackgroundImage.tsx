import { useTheme } from "../hooks/useTheme";
import LightForest from "../assets/light_forest.png"
import DarkForest from "../assets/dark_forest.png"

export default function BackgroundImage() {
  const { currentMode } = useTheme();
  return (
    <div
      className="absolute -z-10 top-0 left-0 w-full h-full bg-no-repeat bg-fixed bg-cover bg-center"
      style={
        currentMode === 'light'
          ? { backgroundImage: `url(${LightForest})` }
          : { backgroundImage: `url(${DarkForest})` }
      }
    ></div>
  )
}