import { motion } from "framer-motion";

const Layout = ({ children }: { children: any }) => (
  <motion.div
    initial={{ y: 300, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 300, opacity: 0 }}
    transition={{
      type: "inertia",

    }}
  >
    {children}
  </motion.div>
);
export default Layout;
