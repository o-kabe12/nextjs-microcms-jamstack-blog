import {createClient} from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: "blog-tutoreal-nextjs",
	apiKey:process.env.API_KEY,
});