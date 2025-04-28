import { useState, useEffect } from "react";

// This is a simplified version of the HOC
// It's maintained for backward compatibility but is not actively used
// with our new responsive component approach
const ResponsiveView = (Component, MobComponent) =>
  function HOC(props) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Client-side-only code
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 425);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (typeof window === "undefined") {
      // During SSR, default to mobile (smaller) version
      return (
        <section>
          <MobComponent {...props} />
        </section>
      );
    }

    return (
      <section>
        {isMobile ? <MobComponent {...props} /> : <Component {...props} />}
      </section>
    );
  };

export default ResponsiveView;
