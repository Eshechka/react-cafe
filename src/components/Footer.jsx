export function Footer() {
  return (
    <footer className="page-footer deep-orange darken-4">
      <div className="footer-copyright">
        <div className="container">
          &copy; React cafe {new Date().getFullYear()}
        </div>
        <a
          target="_blabk"
          rel="noopener noreferrer nofollow"
          className="grey-text text-lighten-4 right"
          href="https://github.com/Eshechka/react-cafe.git"
        >
          Github repository
        </a>
      </div>
    </footer>
  );
}
