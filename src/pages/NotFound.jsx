import Seo from "../components/blocks/Seo";
import PageHero from "../components/blocks/PageHero";
import CTALink from "../components/blocks/CTALink";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="This page could not be found." />
      <PageHero
        eyebrow="404"
        headline="We couldn't find that page."
        intro="The page you're looking for may have moved or doesn't exist."
        align="center"
      />
      <div className="container" style={{ paddingBlock: "var(--space-7)", textAlign: "center" }}>
        <CTALink href="/">Back to Home</CTALink>
      </div>
    </>
  );
}
