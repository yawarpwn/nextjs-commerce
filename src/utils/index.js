import slugify from "slugify";

export const nameToSlug = name => slugify(name, { lower: true}) 
