export default function FooterSection() {
  return (
    <footer className="w-full px-4 mobile:px-8 tablet:px-16 text-center text-xs text-gray-400 pb-6">
      &copy; {new Date().getFullYear()} Thanagorn Portfolio. All rights reserved.
    </footer>
  );
} 