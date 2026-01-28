export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-6">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};
