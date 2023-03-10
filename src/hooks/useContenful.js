import * as contentful from "contentful";

const Client = contentful.createClient({
	// space: TBD from contentful
	// accessToken: TBD from contentful 
	host: "cdn.contentful.com",
});
export default Client;
