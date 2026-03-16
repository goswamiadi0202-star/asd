export const homePageQuery = `{
  "hero": *[_type == "heroSection"][0],
  "services": *[_type == "service"] | order(order asc),
  "projects": *[_type == "project"] | order(order asc),
  "processSteps": *[_type == "processStep"] | order(order asc),
  "testimonials": *[_type == "testimonial"] | order(order asc),
  "cta": *[_type == "ctaSection"][0],
  "settings": *[_type == "siteSettings"][0]
}`
