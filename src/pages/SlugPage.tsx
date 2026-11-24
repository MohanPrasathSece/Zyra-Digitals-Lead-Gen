import { useParams } from "react-router-dom";
import ServiceDetail from "./ServiceDetail";
import LocationDetail from "./LocationDetail";
import NotFound from "./NotFound";
import { getServicePage } from "@/lib/services";
import { getLocationPage } from "@/lib/locations";

/**
 * Resolves flat, root-level landing-page URLs (e.g. /logo-design,
 * /website-design-coimbatore) to the right page type. Unrecognised slugs
 * fall through to the 404 page so unknown URLs are never indexed.
 */
const SlugPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (getServicePage(slug)) return <ServiceDetail />;
  if (getLocationPage(slug)) return <LocationDetail />;

  return <NotFound />;
};

export default SlugPage;
