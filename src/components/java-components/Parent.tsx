'use client';
import { useJavaContext } from './JavaContext';

interface ParentProps {
  parent: string;
  label: string;
  childrenLinks: { label: string; link: string }[];
}

export default function Parent({ parent, label, childrenLinks }: ParentProps) {
  const { openParent, activeLink, toggleParent, setActiveLink } = useJavaContext();

  const buttonClass = (p: string) =>
    `w-full text-left p-3 rounded-md shadow-sm flex justify-between items-center mb-1 ${
      openParent === p ? 'bg-[#4a0080] text-white' : 'bg-white text-black'
    }`;

  const linkClass = (link: string) =>
    `ml-4 mt-2 block hover:text-[#4a0080] ${
      activeLink === link ? 'text-[#4a0080] font-semibold' : 'text-black'
    }`;

  return (
    <div>
      <button className={buttonClass(parent)} onClick={() => toggleParent(parent)}>
        {label}
        <span className={`ml-2 transition-transform duration-200 ${openParent === parent ? 'rotate-90' : 'rotate-0'}`}>
          ›
        </span>
      </button>
      {openParent === parent && (
  <ul className="ml-[41px] list-disc">
    {childrenLinks.map((child) => (
      <li key={child.link}>
        <a
          href={child.link}
          className={linkClass(child.link)}
          onClick={() => setActiveLink(child.link)}
        >
          {child.label}
        </a>
      </li>
    ))}
  </ul>
)}

    </div>
  );
}
