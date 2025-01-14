import { ArrowRight, CheckIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Pricing() {
  const plansMap = [
    {
      id: "basic",
      name: "Basic",
      description: "Get started with Speaky!",
      price: "10",
      items: ["3 Blog Posts", "3 Transcriptions"],
    },
    {
      id: "pro",
      name: "Pro",
      description: "All Blog Posts, let's go!",
      price: "19.99",
      items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
    },
  ];
  return (
    <section
      className='relative overflow-hidden'
      id='pricing'
    >
      <div className='py-12 lg:py-24 max-w-5xl mx-auto px-12 lg:px-0'>
        <div className='flex items-center justify-center w-full pb-12'>
          <h2 className='font-bold text-xl uppercase mb-8 text-center text-purple-600'>
            Pricing
          </h2>
        </div>
        <div className='relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8'>
          {plansMap.map(({ name, price, description, items, id }, index) => (
            <div key={index} className='relative w-full max-w-lg'>
              <div className={cn('relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 rounded-box border-[1px] border-gray-500/20 rounded-2xl', id==='pro' && 'border-violet-500 gap-5 border-2')}>
                <div className='flex justify-between items-center gap-4'>
                  <div>
                    <p className='lg:text-xl font-bold capitalize'>{name}</p>
                    <p className='text-base-content/80 mt-2'>{description}</p>
                  </div>
                </div>
                <div className='flex gap-2'>
                  <p className='text-5xl tracking-tight font-extrabold'>
                    ${price}
                  </p>
                  <div className='flex flex-col justify-end mb-1'>
                    <p className='text-xs text-base-content/60 font-semibold'>
                      $USD
                    </p>
                    <p className='text-xs text-base-content/60'>/month</p>
                  </div>
                </div>
                <ul className='space-y-2.5 leading-relaxed text-base flex-1'>
                  {items.map((item: any, index: number) => (
                    <li
                      className='flex items-center gap-2'
                      key={index}
                    >
                      <CheckIcon size={18}></CheckIcon>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className='space-y-2'>
                  <Button
                    variant={"link"}
                    className={cn('border-2 rounded-full flex gap-2 bg-black text-gray-100', id=='pro' && 'border-amber-300 px-4')}
                  >
                    <Link
                      href={"/"}
                      className='flex gap-1 items-center hover:no-underline'
                    >
                      Get Speaky <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
