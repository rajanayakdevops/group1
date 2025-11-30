'use client';

import React from 'react';
import Link from 'next/link';


// Icon Components


const CodeIcon = () => <span className="text-xl">&#128161;</span>; // 💡
const CoreIcon = () => <span className="text-xl">&#9881;&#65039;</span>; // ⚙️
const OopIcon = () => <span className="text-xl">&#129521;</span>; // 🧩
const CollectionIcon = () => <span className="text-xl">&#128230;</span>; // 📦
const ErrorIcon = () => <span className="text-xl">&#9888;&#65039;</span>; // ⚠️
const MoreIcon = () => <span className="text-xl">&#128640;</span>; // 🚀


// Type Definition


interface TopicCard {
  title: string;
  description: string;
  link: string;
  icon: React.FC;
  level: 'Beginner' | 'Core' | 'Advanced';
}


// Data


const topics: TopicCard[] = [
  {
    title: 'Java Basics',
    description: 'Introduction and fundamentals for absolute beginners.',
    link: '/docs/java/topics/Java-Introduction/Get-Started-With-Java',
    icon: CodeIcon,
    level: 'Beginner',
  },
  {
    title: 'Core Java',
    description: 'Flow control, arrays, and core language features.',
    link: '/docs/java/topics/flow/Java-If-Else',
    icon: CoreIcon,
    level: 'Core',
  },
  {
    title: 'Object-Oriented Java',
    description: 'Classes, objects, inheritance, and polymorphism.',
    link: '/docs/java/topics/oop1/classes',
    icon: OopIcon,
    level: 'Core',
  },
  {
    title: 'Collections &amp; Data Structures',
    description: 'Lists, queues, maps, and more.',
    link: '/docs/java/topics/List/collection-framework',
    icon: CollectionIcon,
    level: 'Advanced',
  },
  {
    title: 'Exceptions &amp; Error Handling',
    description: 'Learn try-catch, throws, and best practices.',
    link: '/docs/java/topics/Exception/exceptions',
    icon: ErrorIcon,
    level: 'Advanced',
  },
  {
    title: 'More Topics',
    description: 'Advanced topics and utility libraries.',
    link: '/docs/java/topics/Map/map',
    icon: MoreIcon,
    level: 'Advanced',
  },
];


// Card Component


const LearningPathCard: React.FC<TopicCard> = ({ title, description, link, icon: Icon, level }) => {
  return (
    <Link
      href={link}
      className="group relative flex flex-col p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      aria-label={`Start learning ${title}`}
    >
      <div className="flex items-start mb-4">
        <div className="p-3 mr-4 rounded-full bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-100">
          <Icon />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>

          <span
            className={
              'text-xs font-semibold px-2 py-0.5 rounded-full ' +
              (level === 'Beginner'
                ? 'bg-green-100 text-green-700'
                : level === 'Core'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-red-100 text-red-700')
            }
          >
            {level}
          </span>
        </div>
      </div>

      <p className="text-gray-600 mb-4 flex-1">{description}</p>

      <div className="flex justify-end">
        <span className="inline-flex items-center text-indigo-600 font-semibold group-hover:text-indigo-800 transition-colors">
          Start
          <svg
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </span>
      </div>
    </Link>
  );
};


// Main Page Component


export default function JavaStartPage() {
  return (
    <div className="flex flex-col items-center w-full">

      {/* Hero Section */}
      <section className="text-center py-12 md:py-16 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">Start learning Java</h1>

        <p className="text-xl text-gray-600 mb-2">Choose a topic to begin your Java journey.</p>

        <p className="text-sm text-gray-500 italic">Pick a track based on your level.</p>
      </section>

      {/* Learning Path Grid */}
      <section className="w-full max-w-4xl px-4 md:px-0 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">

          {/* Decorative Vertical Lines */}
          <div className="hidden md:block absolute left-1/2 -ml-0.5 top-0 bottom-0 bg-indigo-200 w-px"></div>
          <div className="hidden lg:block absolute left-1/3 -ml-0.5 top-0 bottom-0 bg-indigo-200 w-px"></div>
          <div className="hidden lg:block absolute right-1/3 -mr-0.5 top-0 bottom-0 bg-indigo-200 w-px"></div>

          {topics.map((topic, index) => (
            <LearningPathCard key={topic.title} {...topic} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="text-center py-8">
        <p className="text-lg text-gray-700 mb-4">Already know what you&apos;re looking for?</p>

        <Link
          href="/docs/java/topics/Java-Introduction/Get-Started-With-Java"
          className="inline-flex items-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 transition-colors shadow-md"
        >
          Go to full Java docs
        </Link>
      </section>
    </div>
  );
}
