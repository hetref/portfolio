import useIsMobileStore from "@/stores/isMobileStore";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const StarWrapper = (Component, MobComponent) =>
  function HOC() {
    const [isMobile] = useIsMobileStore((state) => [state.isMobile]);

    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {isMobile ? <MobComponent /> : <Component />}
      </motion.section>
    );
  };

export default StarWrapper;
