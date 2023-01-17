import "./App.css";
import { motion } from "framer-motion";
function App() {
  return (
    <div>
      <motion.h1
        initial={{ color: "#000000" }}
        transition={{ duration: 3 }}
        animate={{ y: 50, color: "#FFFF00" }}
      >
        Hello world
      </motion.h1>
    </div>
  );
}

export default App;
