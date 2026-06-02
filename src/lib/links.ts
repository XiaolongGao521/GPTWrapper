export function externalLinkProps(href: string) {
  if (!href.startsWith("http://") && !href.startsWith("https://")) {
    return {};
  }

  return {
    target: "_blank",
    rel: "noopener noreferrer",
  };
}
