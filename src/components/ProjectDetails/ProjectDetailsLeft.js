import React from 'react';

const ProjectDetailsLeft = ({ data, projectCardInfo }) => {
    const { title, subtitle, about, tags, team, publications, media } = data;
    // ----------------------------------------------------
    // const aboutArray1 =
    //     about?.content?.filter((item) => {
    //         return item?.content;
    //     }) || null;

    // if (aboutArray1 !== null) {
    //     const aboutArray2 = aboutArray1.map((item) => item?.content);
    //     aboutArray2?.map((item3) =>
    //         item3?.map((item4) => console.log('ITEM 4: ', item4?.value))
    //     );
    // }
    const aboutArray =
        about?.content?.filter((item) => {
            return item?.content;
        }) || null;

    console.log('PROJECT CARD INFO: ', projectCardInfo);
    // if (aboutArray !== null) {
    //     aboutArray.map((item) =>
    //         item?.content?.map((nesteditem1) =>
    //             console.log('asdf', nesteditem1.value)
    //         )
    //     );

    // aboutArray2?.map((item3) =>
    //     item3?.map((item4) => console.log('ITEM 4: ', item4?.value))
    // );
    // }

    // team.map((item) => team.map((item2) => console.log(item2.fields)));
    // const teamMember = team?.map((item2) => item2?.fields) || null;
    // teamMember.map((item) => console.log(item.titles));
    // item.titles  and item.name

    // PUBLICATIONS
    // const xyz = publications.map((pub) => pub?.fields?.title || null);

    // MEDIA
    // const mediaArray = media?.map((item) => item?.fields || null);
    //media url
    // mediaArray.map((item) => item?.url);
    //media title array
    // const mediaArray2 = mediaArray.map(
    //     (item) => item?.title?.content?.[0]?.content || null
    // );

    // const mediaArray3 = mediaArray2.map((item) =>
    //     item.map((content) => content?.value || null)
    // );

    // console.log('RESPONSE: ', projectCardInfo);

    return (
        <section className='pd-left'>
            {/* title and subtitle */}
            <div className='pd-header'>
                <h1 className='pd-title'>{title} </h1>
                <h3 className='pd-subtitle'>{subtitle}</h3>
            </div>

            {/* about section */}
            <div className='pd-about'>
                <p className='regular-16 pd-about-content'>
                    {aboutArray !== null &&
                        aboutArray.map((item) =>
                            item?.content?.map(
                                (nesteditem) => nesteditem?.value
                            )
                        )}
                </p>
            </div>

            {/* tags */}
            {tags !== undefined && (
                <ul className='pd-tags-container'>
                    {tags.map((tag, id) => {
                        return (
                            <li key={id} className='semi-14 pd-tags'>
                                {tag}
                            </li>
                        );
                    })}
                </ul>
            )}

            {/* teams */}
            <div className='pd-team'>
                <h2 className='pd-team-heading'>Team</h2>
                <div className='pd-team-container'>
                    <h4>team member 1</h4>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailsLeft;
