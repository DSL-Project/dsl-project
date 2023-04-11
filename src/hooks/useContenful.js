// this hook is meant to query the contentful fields.
import * as contentful from "contentful";

const useContentful = () => {
  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENT_DELIVERY_TOKEN,
    host: process.env.REACT_APP_HOST_DELIVERY,
  });

  /*This method fetch "static" field from contentful */
  const getCmsResponse = async (contentType) => {
    try {
      const entries = await client.getEntries({
        content_type: contentType,
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item) => {
        return { ...item.fields };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`error fetching ${contentType} , ${error}`);
    }
  };

  return { getCmsResponse };
};

export default useContentful;
