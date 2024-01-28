function Footer() {
  return (
    <footer className="w-full absolute bottom-2 text-center">
      <p className="text-red-400">
        created by{' '}
        <a
          className="font-bold hover:text-neutral-200"
          href="https://github.com/mojotron/memory-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          @mojotron
        </a>
      </p>
    </footer>
  );
}

export default Footer;
