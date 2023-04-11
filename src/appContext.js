/*This context calls getStatic method from 'useContentful' hook.
getStatic method fetch 'static' field from contentful
 */
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { STATIC_QUERY, PROJECTS, PUBLICATIONS } from "./appConstants";
import useContentful from "./hooks/useContenful";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const { getCmsResponse } = useContentful();

  // loading state
  const [isLoading, setIsLoading] = useState(false);

  // ** response state updates everytime user clicks on navbar links **
  const [response, setResponse] = useState([]);

  // ** query state updates everytime user clicks on navbar links **
  const [query, setQuery] = useState("");

  // ** banner populate during initial app loads ONLY , only once **
  const [bannerContent, setBannerContent] = useState({});

  // side bar menu state
  const [openMenu, setOpenMenu] = useState(false);

  // tablet view will turn to true, when app goes below or equal to 835px
  const [tabletView, setTabletView] = useState(false);

  // mobile view will turn to true, when app goes below or equal to 375px
  const [mobileView, setMobileView] = useState(false);

  // author slug
  const [authorSlug, setAuthorSlug] = useState("");

  //projects by author
  const [authorProjects, setAuthorProjects] = useState([]);

  //publications by author
  const [authorPublications, setAuthorPublications] = useState([]);

  // home page data
  const [homepageData, setHomepageData] = useState([]);

  // project data for project carousel
  const [projectsData, setProjectsData] = useState([]);

  const cmsQuery = useCallback(
    async (queryName) => {
      setIsLoading(true);
      try {
        const response = await getCmsResponse(queryName);
        setResponse(response);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(true);
      }
      setIsLoading(false);
    },
    [query]
  );

  const handleResize = () => {
    setTabletView(false);
    setMobileView(false);
    if (window.innerWidth < 837) {
      setTabletView(true);
    }
    if (window.innerWidth < 375) {
      setMobileView(true);
    }
  };

  const getProjectsByAuthSlug = (authSlug) => {
    // quering projects: get All projects
    getCmsResponse(PROJECTS).then((response) => {
      // STEP 1: filter the array that has author slugs
      const arrayWithAuthSlugs = response.filter(
        (resp) => resp?.team?.[0]?.fields.slug
      );

      //STEP 2: filter the authors slug wrt user's request
      const dataArray = arrayWithAuthSlugs.filter(
        (response) => response.team[0].fields.slug === authSlug
      );

      setAuthorProjects(dataArray);
    });
  };

  const getPublicationsByAuthSlug = (authSlug) => {
    getCmsResponse(PUBLICATIONS).then((response) => {
      // STEP1: filter the publications that has any authors
      const arrayWithAuthors = response.filter((resp) => resp?.authors);

      //STEP 2: filter the publication  wrt user's author slug
      arrayWithAuthors.map((response) => {
        const publicationsResponse = response.authors.map((author) => {
          if (author.fields.slug === authSlug) {
            return response;
          } else {
            return null;
          }
        });
        setAuthorPublications(publicationsResponse);

        return publicationsResponse;
      });
    });
  };

  const getBannerContent = (response) => {
    const targetObj = response[0];

    //(2) filter the response, and return new object
    const filterItems = [
      "projectsTitle",
      "projectsBody",
      "programsTitle",
      "programsBody",
      "publicationsTitle",
      "publicationsBody",
      "peopleTitle",
      "peopleBody",
    ];
    const filteredObject = Object.keys(targetObj)
      .filter((key) => filterItems.includes(key))
      .reduce((cur, key) => {
        return Object.assign(cur, { [key]: targetObj[key] });
      }, {});

    //(3) set the banner state
    setBannerContent(filteredObject);
  };

  const getHomeData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getCmsResponse(STATIC_QUERY);

      setHomepageData(response);
      getBannerContent(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
    }
    setIsLoading(false);
  }, []);

  const getProjectsData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getCmsResponse(PROJECTS);
      setProjectsData(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getProjectsData();
  }, [getProjectsData]);

  useEffect(() => {
    cmsQuery(query);
    getProjectsByAuthSlug(authorSlug);
    getPublicationsByAuthSlug(authorSlug);
  }, [authorSlug, query]);

  useEffect(() => {
    getHomeData();
  }, [getHomeData]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <AppContext.Provider
      value={{
        isLoading,
        response,
        setQuery,
        tabletView,
        mobileView,
        setAuthorSlug,
        authorProjects,
        authorPublications,
        openMenu,
        setOpenMenu,
        homepageData,
        projectsData,
        ...bannerContent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
