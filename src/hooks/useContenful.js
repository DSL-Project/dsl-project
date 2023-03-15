import * as contentful from "contentful";

const useContentful = () => {
  const client = contentful.createClient({
    space: "",
    accessToken: "",
    host: "preview.contentful.com",
  });

  const getPublications = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "publications",
        select: "fields",
        order: "fields.name",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const avatar = item.fields.avatar.fields;
        return {
          ...item.fields,
          avatar,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching publications: ${error}`);
    }
  };
  return { getPublications };
};
export default useContentful;
