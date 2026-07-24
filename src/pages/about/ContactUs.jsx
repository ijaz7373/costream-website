import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import PlaceholderNotice from "../../components/blocks/PlaceholderNotice";

export default function ContactUs() {
  return (
    <>
      <Seo title="Contact Us" description="Contact Us page — content pending." />
      <PageHero eyebrow="About Us" headline="Contact Us" />
      <PlaceholderNotice>
        The source content document lists this page by title only, with no
        headline or body copy provided yet. Real content (address, phone,
        contact form, etc.) should be added here once it's available.
      </PlaceholderNotice>
    </>
  );
}
