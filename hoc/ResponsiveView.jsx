import useIsMobileStore from "@/stores/isMobileStore";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const ResponsiveView = (Component, MobComponent) =>
  function HOC() {
    const [isMobile] = useIsMobileStore((state) => [state.isMobile]);

    return (
      <section
      // variants={staggerContainer()}
      // initial="hidden"
      // whileInView="show"
      // viewport={{ once: true, amount: 0.25 }}
      >
        {isMobile ? <MobComponent /> : <Component />}
      </section>
    );

    //  {
    //   isMobile ? <MobComponent /> : <Component />;
    // }
    //   <motion.section
    //     variants={staggerContainer()}
    //     initial="hidden"
    //     whileInView="show"
    //     viewport={{ once: true, amount: 0.25 }}
    //   >

    //   </motion.section>
  };

export default ResponsiveView;
