import {getWixClient} from '~/components/wix/useWixClientServer'
import Shuffle from '~/components/projects/shuffle'
import type { MetaFunction } from "react-router";
import { json, useLoaderData } from 'react-router';

export const meta: MetaFunction = () => {
    return [
        { title: 'Projects | Luis Amaador Web Developer' },
        { name: "description", content: 'Luis Amador website to showcase his skills and services he offers to businesses' },
    ];
};

export const loader = async () => {
  const queryWixProjects: any = await getWixClient()
  const {items: projects} = await queryWixProjects.items
    .queryDataItems({dataCollectionId: 'projectGallery'})
    .ascending('orderId')
    .find()

  return json({projects})
}
 
export default function Projects() {
    const {projects} = useLoaderData<typeof loader>()
    
  return (
    <section id="projects" className="h-full text-white bg-projects-orange py-16">
      <div className="mb-12">
        <h2 className="text-5xl text-center mb-10">Projects</h2>

        <h3 className="text-lg mb-8 text-center">List of Projects.</h3>
      </div>

      <Shuffle initialProjects={projects} />
    </section>
  )
}