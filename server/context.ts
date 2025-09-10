import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getServerAuthSession } from "./auth";
import { getEnhancedPrismaFromCtx } from "./db/enhanced";

export const createContext = async ({ req, res }: CreateNextContextOptions) => {
	const session = await getServerAuthSession({ req, res });
	return {
		session,
		// use auth-enabled db client
		prisma: await getEnhancedPrismaFromCtx({ req, res }),
	};
};

export type Context = inferAsyncReturnType<typeof createContext>;
