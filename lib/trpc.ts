import {
	createTRPCClient,
	httpBatchLink,
	TRPCClientError,
} from "@trpc/client";
import {
	createTRPCContext,
	createTRPCOptionsProxy,
} from "@trpc/tanstack-react-query";
import { QueryClient } from "@tanstack/react-query";
import superjson from "superjson";
import type { AppRouter } from "../server/routers/_app";

function getBaseUrl() {
	if (typeof window !== "undefined") return "";

	if (process.env.VERCEL_URL) {
		return `https://${process.env.VERCEL_URL}`;
	} else {
		return `http://localhost:${process.env.PORT ?? 3000}`;
	}
}

export const queryClient = new QueryClient();

export const trpcClient = createTRPCClient<AppRouter>({
	links: [
		httpBatchLink({
			url: `${getBaseUrl()}/api/trpc`,
			transformer: superjson,
		}),
	],
});

export const trpc = createTRPCOptionsProxy<AppRouter>({
	client: trpcClient,
	queryClient,
});

export const { TRPCProvider, useTRPC, useTRPCClient } =
	createTRPCContext<AppRouter>();

export function isTRPCClientError(
	error: unknown,
): error is TRPCClientError<AppRouter> {
	return error instanceof TRPCClientError;
}
