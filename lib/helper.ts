/******************************************************************************
 * Enhance useTRPC with improved type inference
 ******************************************************************************/

import type { AnyTRPCRouter as AnyRouter } from '@trpc/server';
import type { TRPCOptionsProxy } from '@trpc/tanstack-react-query';
import type { DeepOverrideAtPath } from '../server/routers/generated/client/utils';
import type { ClientType as SpaceClientType } from "../server/routers/generated/client/Space.tanstack.type";
import type { ClientType as SpaceUserClientType } from "../server/routers/generated/client/SpaceUser.tanstack.type";
import type { ClientType as UserClientType } from "../server/routers/generated/client/User.tanstack.type";
import type { ClientType as ListClientType } from "../server/routers/generated/client/List.tanstack.type";
import type { ClientType as TodoClientType } from "../server/routers/generated/client/Todo.tanstack.type";
import type { ClientType as AccountClientType } from "../server/routers/generated/client/Account.tanstack.type";

export interface ClientType<AppRouter extends AnyRouter> {
    space: SpaceClientType<AppRouter>;
    spaceUser: SpaceUserClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    list: ListClientType<AppRouter>;
    todo: TodoClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
}

/**
 * Enhanced useTRPC hook with improved type inference
 *
 * This override fixes tRPC's type inference limitations by using the
 * generated client types from ZenStack. This preserves dynamic type
 * information that would otherwise be lost through the router.
 *
 * @see https://dev.to/zenstack/limitation-of-trpcs-type-inference-and-how-we-improved-it-47fl
 */
export function createUseTRPC<
    TRouter extends AnyRouter,
    TPath extends string | undefined = undefined
>(
    originalUseTRPC: () => TRPCOptionsProxy<TRouter>
): () => DeepOverrideAtPath<TRPCOptionsProxy<TRouter>, ClientType<TRouter>, TPath> {
    return () => {
        const useTRPC = originalUseTRPC();
        return useTRPC as DeepOverrideAtPath<TRPCOptionsProxy<TRouter>, ClientType<TRouter>, TPath>;
    };
}
