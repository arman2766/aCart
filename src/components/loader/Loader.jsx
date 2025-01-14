import "./loader.scss";
export const Loader = ({ className, children }) => {
  return <div className={`loader ${className}`}>{children}</div>;
};
export default Loader;
