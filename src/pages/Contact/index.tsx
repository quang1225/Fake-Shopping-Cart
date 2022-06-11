import { FaGithub, FaFacebookF } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { ContactWrapper, SocialMedia, SocialLink, ContactInfo } from './styles';

const SOCIAL_LINKS = [
  {
    Icon: FaGithub,
    href: 'https://github.com/quang1225',
  },
  {
    Icon: FaFacebookF,
    href: 'https://facebook.com/quang1225',
  },
  {
    Icon: ImProfile,
    href: 'https://quang.work',
  },
];

const Contact = () => {
  return (
    <ContactWrapper>
      <SocialMedia>
        {SOCIAL_LINKS.map(x => (
          <SocialLink key={x.href} href={x.href} target="_blank" rel="noopener">
            <x.Icon />
          </SocialLink>
        ))}
      </SocialMedia>
      <ContactInfo>
        <p>FakeStore</p>
        <p>Ho Chi Minh City, Vietnam</p>
      </ContactInfo>
    </ContactWrapper>
  );
};

export default Contact;
