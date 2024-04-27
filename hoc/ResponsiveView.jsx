import useIsMobileStore from "@/stores/isMobileStore";

const ResponsiveView = (Component, MobComponent) =>
  function HOC() {
    const [isMobile] = useIsMobileStore((state) => [state.isMobile]);

    return <section>{isMobile ? <MobComponent /> : <Component />}</section>;
  };

export default ResponsiveView;
