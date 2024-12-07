import { useDispatch, useSelector } from "react-redux";
import { setPath, toggleNav } from "./Slice";
import { useCallback, useEffect } from "react";

const Handlers = () => {
  const dispatch = useDispatch();
  const navlinkdata = useSelector((state) => state.app.navlinkdata);
  const homeposterdata = useSelector((state) => state.app.homeposterdata);
  const isActive = useSelector((state) => state.app.isActive);

  const handleOnClick = useCallback(
    (path) => (e) => {
      e.preventDefault();
      dispatch(setPath(path));
      window.location.pathname = path;
    },
    [dispatch]
  );

  const toggleNavbar = useCallback(() => {
    dispatch(toggleNav());
  }, [dispatch]);

  const useStickyNavbar = () => {
    useEffect(() => {
      const sectionHero = document.querySelector(".section-main");

      const observerCallback = (entries) => {
        const ent = entries[0];
        !ent.isIntersecting
          ? document.body.classList.add("sticky")
          : document.body.classList.remove("sticky");
      };

      const options = {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
      };

      const observer = new IntersectionObserver(observerCallback, options);

      if (sectionHero) {
        observer.observe(sectionHero);
      }

      return () => {
        observer.disconnect();
      };
    }, []);
  };

  return {
    handleOnClick,
    navlinkdata,
    homeposterdata,
    isActive,
    toggleNavbar,
    useStickyNavbar,
  };
};

export default Handlers;
