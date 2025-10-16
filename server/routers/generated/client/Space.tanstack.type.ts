/******************************************************************************
 * TanStack React Query type overrides for Space model
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
        queryOptions: <T extends Prisma.SpaceFindManyArgs>(
            input?: Prisma.SelectSubset<T, Prisma.SpaceFindManyArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.SpaceGetPayload<T>[], TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.SpaceGetPayload<T>[], TRPCClientErrorLike<AppRouter>>;
    };

    findFirst: {
        queryOptions: <T extends Prisma.SpaceFindFirstArgs>(
            input?: Prisma.SelectSubset<T, Prisma.SpaceFindFirstArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.SpaceGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.SpaceGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    findUnique: {
        queryOptions: <T extends Prisma.SpaceFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.SpaceFindUniqueArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.SpaceGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.SpaceGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    create: {
        mutationOptions: <T extends Prisma.SpaceCreateArgs>(
            opts?: Omit<UseMutationOptions<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceCreateArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceCreateArgs>, Context>;
    };

    update: {
        mutationOptions: <T extends Prisma.SpaceUpdateArgs>(
            opts?: Omit<UseMutationOptions<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceUpdateArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceUpdateArgs>, Context>;
    };

    delete: {
        mutationOptions: <T extends Prisma.SpaceDeleteArgs>(
            opts?: Omit<UseMutationOptions<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceDeleteArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceDeleteArgs>, Context>;
    };
}
