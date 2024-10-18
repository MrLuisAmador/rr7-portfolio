import {getWixClient} from '~/components/wix/useWixClientServer'
import type { MetaFunction } from "react-router";
import { json, useLoaderData } from 'react-router';
import { media } from '@wix/sdk'

export const meta: MetaFunction = () => {
  return [
    { title: 'Blogs | Luis Amaador Web Developer' },
    { name: "description", content: 'Luis Amador Portfolio Website And Blogs' },
  ];
};

export async function loader() {
  const queryWixProjects: any = await getWixClient()
    const {items: blogs} = await queryWixProjects.items
        .queryDataItems({
            dataCollectionId: 'blogPost',
            referencedItemOptions: [
                {
                  fieldName: 'refAuthors',
                },
                {
                  fieldName: 'refCategories',
                },
              ],
            })
            .descending('order')
            .find()
            
    return json({blogs})
}

export default function Blogs() {
  const {blogs} = useLoaderData<typeof loader>();

  return (
    <section className="h-full py-20 px-5">
      <h1 className="text-5xl text-center mb-20">Blogs</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog: any) => (
          <li key={blog.data._id} className="shadow shadow-black rounded bg-white">
            {/* <p>Name {blog.data.refAuthors.title}</p> */}
            {/* <p>Name {blog.data.refCategories.title}</p> */}
            {/* <p className="">{formatDate(new Date(blog.data!._createdDate?.$date))}</p> */}
            {/* <p className="">{formatDate(new Date(blog.data!._updatedDate?.$date))}</p> */}
            <article className="py-5 px-4">
              <div className="">
              <img 
                width="896"
                  height="800"
              src={media.getImageUrl(blog.data.image).url} 
              alt={blog.data.title} />
              </div>
              <h2 className="text-center pb-4 font-bold text-xl">
                <a href={`/blogs/${blog.data.slug}`}>{blog.data.title}</a>
              </h2>
                <p className="pb-4">{blog.data.description}</p>
              <div className="text-center">
                <a
                  className="border border-solid border-black text-black py-2.5 px-4 inline-block rounded text-xl hover:bg-black/[.15] transition-colors"
                  href={`/blogs/${blog.data.slug}`}
                >
                  Read More...
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}