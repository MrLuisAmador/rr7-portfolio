import type { RouteConfig } from "@react-router/dev/routes";
import { index, route, prefix } from "@react-router/dev/routes";

export const routes: RouteConfig = [
    index("routes/home.tsx"),
    route("about","routes/about.tsx"),
    route("services","routes/services.tsx"),
    route("projects","routes/projects.tsx"),
    route("contact","routes/contact.tsx"),
    ...prefix("blogs", [
        index("routes/blogs.tsx"),
        route(":slug", "routes/blog.tsx"),
      ]),
];
