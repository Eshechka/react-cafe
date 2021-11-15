export function Footer() {
  return (
    <footer className="page-footer deep-orange darken-4">
      <div className="container">
        <div className="footer-copyright deep-orange darken-4">
          &copy; React cafe {new Date().getFullYear()}
          <a
            target="_blabk"
            rel="noopener noreferrer nofollow"
            className="grey-text text-lighten-4 right"
            href="https://github.com/Eshechka/react-cafe.git"
          >
            Github repository
          </a>
        </div>
      </div>
    </footer>
  );
}
