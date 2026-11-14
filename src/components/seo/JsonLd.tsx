export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  // Escape '<' so supplied text can never terminate the script element.
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
