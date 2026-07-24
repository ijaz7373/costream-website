import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import PlaceholderNotice from "../../components/blocks/PlaceholderNotice";

export default function News() {
  return (
    <>
      <Seo title="News" description="News page — content pending." />
      <PageHero eyebrow="About Us" headline="News" />
      <PlaceholderNotice>
        The source content document lists this page by title only, with no
        headline or body copy provided yet. Real news items should be added
        here once they're available.
      </PlaceholderNotice>
    </>
  );
}
