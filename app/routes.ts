import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export const routes: RouteConfig = [
    index("routes/home.tsx"),
    route("about","routes/about.tsx"),
    route("services","routes/services.tsx"),
    route("projects","routes/projects.tsx"),
    route("blogs","routes/blogs.tsx"),
    route("contact","routes/contact.tsx")
];
