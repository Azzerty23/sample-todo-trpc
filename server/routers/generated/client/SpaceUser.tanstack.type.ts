/******************************************************************************
 * TanStack React Query type overrides for SpaceUser model
 ******************************************************************************/

/* eslint-disable */

import type { Prisma } from '../../../../generated/zenstack/client';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyTRPCRouter as AnyRouter } from '@trpc/server';
import type {
    UndefinedInitialDataOptions,
    UseMutationOptions,
} from '@tanstack/react-query';

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    findMany: {
        queryOptions: <T extends Prisma.SpaceUserFindManyArgs>(
            input?: Prisma.SelectSubset<T, Prisma.SpaceUserFindManyArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.SpaceUserGetPayload<T>[], TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.SpaceUserGetPayload<T>[], TRPCClientErrorLike<AppRouter>>;
    };

    findFirst: {
        queryOptions: <T extends Prisma.SpaceUserFindFirstArgs>(
            input?: Prisma.SelectSubset<T, Prisma.SpaceUserFindFirstArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.SpaceUserGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.SpaceUserGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    findUnique: {
        queryOptions: <T extends Prisma.SpaceUserFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.SpaceUserFindUniqueArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.SpaceUserGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.SpaceUserGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    create: {
        mutationOptions: <T extends Prisma.SpaceUserCreateArgs>(
            opts?: Omit<UseMutationOptions<Prisma.SpaceUserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceUserCreateArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.SpaceUserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceUserCreateArgs>, Context>;
    };

    update: {
        mutationOptions: <T extends Prisma.SpaceUserUpdateArgs>(
            opts?: Omit<UseMutationOptions<Prisma.SpaceUserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceUserUpdateArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.SpaceUserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceUserUpdateArgs>, Context>;
    };

    delete: {
        mutationOptions: <T extends Prisma.SpaceUserDeleteArgs>(
            opts?: Omit<UseMutationOptions<Prisma.SpaceUserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SpaceUserDeleteArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.SpaceUserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SpaceUserDeleteArgs, Context>;
    };
}
