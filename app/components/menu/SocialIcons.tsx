import {
  Discord,
  Facebook,
  GitHub,
  Wantedly,
  X,
} from '../logos';
import SocialIconsItem from './SocialIconsItem';

const links = {
  x: 'https://x.com/takara2314',
  wantedly: 'https://www.wantedly.com/id/HamaguchiTakara',
  facebook: 'https://www.facebook.com/HamaguchiTakara/',
  github: 'https://github.com/takara2314',
  discord: '/#',
};

export default function SocialIcons() {
  return (
    <ul className="px-10 w-full flex flex-row justify-between">
      <SocialIconsItem
        href={links.x}
        className="mt-[0.25rem] w-[1.5rem]"
      >
        <X />
      </SocialIconsItem>

      <SocialIconsItem
        href={links.wantedly}
        className="mt-[-0.2rem] mr-[-0.7rem] w-[3rem]"
      >
        <Wantedly />
      </SocialIconsItem>

      <SocialIconsItem
        href={links.facebook}
        className="mt-[0.05rem] w-[1.8rem]"
      >
        <Facebook />
      </SocialIconsItem>

      <SocialIconsItem
        href={links.github}
        className="mt-[0.05rem] w-[1.8rem]"
      >
        <GitHub />
      </SocialIconsItem>

      <SocialIconsItem
        href={links.discord}
        className="mt-[0.3rem] w-[1.8rem]"
      >
        <Discord />
      </SocialIconsItem>
    </ul>
  );
}
