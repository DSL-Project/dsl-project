import * as contentful from 'contentful';

// const Client = contentful.createClient({
// 	// space: TBD from contentful
// 	// accessToken: TBD from contentful
// 	host: "cdn.contentful.com",
// });
// export default Client;

const useContentful = () => {
    const client = contentful.createClient({
        space: 'dlrxol35l8vd',
        accessToken: 'tmPWxpNJYZaKi-wbkbWKBTi0s8cnNv6-2yVs8v6PR_o',
        host: 'preview.contentful.com',
        /*if we are using delivery token, then
        host: cdn.contentful.com
         *  */
    });

    const getCmsResponse = async () => {
        try {
            const entries = await client.getEntries({
                /*if we dont send this object, then it will fetch everything
                means it will fetch all the contents from contentful
                 */
                content_type: 'author',
                // we only want fields to be delivered
                select: 'fields',
                // sort the fields  wrt name
                order: 'fields.name',
            });

            const sanitizedEntries = entries.items.map((item) => {
                // const avatar = item.fields.image.fields;
                const id = item.sys.id;
                const img = item.fields.image.fields.file.url;
                return { ...item.fields, img, id };
            });

            return sanitizedEntries;
            // return entries.items;
        } catch (error) {
            console.log(`error fetching authors: , ${error}`);
        }
    };

    return { getCmsResponse };
};

export default useContentful;
