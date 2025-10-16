/******************************************************************************
 * TanStack React Query type overrides for List model
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
        queryOptions: <T extends Prisma.ListFindManyArgs>(
            input?: Prisma.SelectSubset<T, Prisma.ListFindManyArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.ListGetPayload<T>[], TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.ListGetPayload<T>[], TRPCClientErrorLike<AppRouter>>;
    };

    findFirst: {
        queryOptions: <T extends Prisma.ListFindFirstArgs>(
            input?: Prisma.SelectSubset<T, Prisma.ListFindFirstArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.ListGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.ListGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    findUnique: {
        queryOptions: <T extends Prisma.ListFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.ListFindUniqueArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.ListGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.ListGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    create: {
        mutationOptions: <T extends Prisma.ListCreateArgs>(
            opts?: Omit<UseMutationOptions<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ListCreateArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ListCreateArgs>, Context>;
    };

    update: {
        mutationOptions: <T extends Prisma.ListUpdateArgs>(
            opts?: Omit<UseMutationOptions<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ListUpdateArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ListUpdateArgs>, Context>;
    };

    delete: {
        mutationOptions: <T extends Prisma.ListDeleteArgs>(
            opts?: Omit<UseMutationOptions<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ListDeleteArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ListDeleteArgs>, Context>;
    };
}
