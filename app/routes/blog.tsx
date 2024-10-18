import {getWixClient} from '~/components/wix/useWixClientServer'
import type { LoaderFunction, MetaFunction } from "react-router";
import { json, useLoaderData, Link } from 'react-router';
import { media } from '@wix/sdk'
import RichContentViewer from '~/components/wix/RichContentViewer'
import {toDraft} from 'ricos-content/libs/toDraft'

export const meta: MetaFunction = () => {
  return [
    { title: 'Blog | Luis Amaador Web Developer' },
    { name: "description", content: 'Luis Amador blog to showcase his skills and services he offers to businesses' },
  ];
};

export const loader: LoaderFunction = async ({params}) => {
  const queryWixProjects: any = await getWixClient()
  const {items: blog} = await queryWixProjects.items
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
    .eq('slug', params.slug)
    .find()

    const post = blog[0]

   
  return json({post})
}

export default function Blog() {
  const {post} = useLoaderData<typeof loader>()
  // console.log(post.data!.content);

  
  
  return (
    <article className="py-16">
      <Link className="mx-2 mb-4 xl:mx-6 xl:mb-6 inline-block" to="/blogs">
        Back to Blogs
      </Link>
      <h1 className="text-center text-4xl xl:mb-12">{post.data.title}</h1>

      <div className="px-5 pt-14 xl:py-16 mx-auto max-w-4xl xl:shadow xl:shadow-black xl:rounded bg-white">
        <img
          src={media.getImageUrl(post.data.image).url}
          width="896"
          height="800"
          alt={`media.getImageUrl(post.data.image).altText`}
          className="pb-16"
        />
        {/* <RichContentViewer content={toDraft(post.data.content)} /> */}
      </div>
    </article>
  );
}