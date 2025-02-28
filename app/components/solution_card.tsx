import { Leaf, Package, Recycle, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Reusable solution card component
import { FC } from 'react';

interface SolutionCardProps {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
  link: string;
}

const SolutionCard: FC<SolutionCardProps> = ({ icon: Icon, title, description, link }) => (
  <div className="flex flex-col items-center space-y-4 rounded-xl border border-green-100 p-8 transition-all duration-200 hover:shadow-lg hover:border-green-200 bg-white">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
      <Icon className="h-8 w-8 text-green-600" />
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-center text-gray-600 text-sm">{description}</p>
    <Link href={link} className="group flex items-center text-green-600 text-sm">
      Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  </div>
);

// Solutions data
const solutionsData = [
  {
    icon: Leaf,
    title: "Agricultural Films",
    description: "Biodegradable films for plant nursery bags, mulch for water retention, weed suppression, and pest control that naturally decompose after use.",
    link: "/products/agricultural"
  },
  {
    icon: Package,
    title: "Packaging Solutions",
    description: "Eco-friendly packaging materials that reduce environmental impact while maintaining product protection and extending shelf life.",
    link: "/products/packaging"
  },
  {
    icon: Recycle,
    title: "Biodegradable Pellets",
    description: "Raw materials for various plastic-dependent industries, enabling sustainable manufacturing processes and circular economy principles.",
    link: "/products/pellets"
  }
];

// Main component
const SolutionsSection = () => {
  return (
    <section className="w-full py-20 md:py-28 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-2">
            Our Approach
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Innovative Solutions</h2>
            <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed mx-auto">
              Promoting sustainability and environmental responsibility through cutting-edge biodegradable products
              designed for real-world applications.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-8 md:grid-cols-3 md:gap-10">
          {solutionsData.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;