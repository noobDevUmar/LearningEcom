import React from "react";
import Link from "next/link";

const BreadCrumbs = ({Breadcrumbsitems}) => {
console.log(Breadcrumbsitems);
  return (
    <section className="py-3 sm:py-2 bg-blue-100">
      <div className="container max-w-screen-xl mx-auto px-4">
        <ol className="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
        {Breadcrumbsitems.map((bc,index)=>(
          <li className="inline-flex items-center">
            <Link href={bc.url} key={bc.url} className="text-gray-600 hover:text-blue-600">
              {bc.name}
            </Link>
            {
              Breadcrumbsitems.length -1 !== index &&
              <i className="ml-3 text-gray-400"> / </i>
            }
          </li>
        ))}

        </ol>
      </div>
    </section>
  );
};

export default BreadCrumbs;
