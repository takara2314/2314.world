import Copyright from './Copyright';
import Hero from './Hero';
import PageSelector from './PageSelector';
import SocialIcons from './SocialIcons';

export default function Menu() {
  return (
    <menu className="w-[20rem] h-full text-center bg-white rounded-r-2xl fixed top-0 left-0">
      <Hero />
      <PageSelector />

      <div className="pt-5 w-full border-t-2 border-gray-300 absolute bottom-4">
        <SocialIcons />
        <Copyright />
      </div>
    </menu>
  );
}
