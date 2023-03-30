import React from 'react';

const ProjectDetailsLeft = ({ data, projectCardInfo }) => {
    const { title, subtitle, about, tags, team, publications, media } = data;
    // ----------------------------------------------------
    const aboutArray1 =
        about?.content?.filter((item) => {
            return item?.content;
        }) || null;
    const aboutArray2 = aboutArray1.map((item) => item?.content);

    // aboutArray2?.map((item3) =>
    //     item3?.map((item4) => console.log('ITEM 4: ', item4?.value))
    // );

    // team.map((item) => team.map((item2) => console.log(item2.fields)));
    const teamMember = team?.map((item2) => item2?.fields) || null;
    // teamMember.map((item) => console.log(item.titles));
    // item.titles  and item.name

    // PUBLICATIONS
    const xyz = publications.map((pub) => pub?.fields?.title || null);

    // MEDIA
    const mediaArray = media?.map((item) => item?.fields || null);
    //media url
    mediaArray.map((item) => item?.url);
    //media title array
    const mediaArray2 = mediaArray.map(
        (item) => item?.title?.content?.[0]?.content || null
    );

    const mediaArray3 = mediaArray2.map((item) =>
        item.map((content) => content?.value || null)
    );

    console.log('RESPONSE: ', projectCardInfo);
    return <div>ProjectDetailsLeft</div>;
};

export default ProjectDetailsLeft;
