/******************************************************************************
 * TanStack React Query type overrides for Account model
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
        queryOptions: <T extends Prisma.AccountFindManyArgs>(
            input?: Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.AccountGetPayload<T>[], TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.AccountGetPayload<T>[], TRPCClientErrorLike<AppRouter>>;
    };

    findFirst: {
        queryOptions: <T extends Prisma.AccountFindFirstArgs>(
            input?: Prisma.SelectSubset<T, Prisma.AccountFindFirstArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.AccountGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.AccountGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    findUnique: {
        queryOptions: <T extends Prisma.AccountFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.AccountFindUniqueArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.AccountGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.AccountGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    create: {
        mutationOptions: <T extends Prisma.AccountCreateArgs>(
            opts?: Omit<UseMutationOptions<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountCreateArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountCreateArgs>, Context>;
    };

    update: {
        mutationOptions: <T extends Prisma.AccountUpdateArgs>(
            opts?: Omit<UseMutationOptions<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>, Context>;
    };

    delete: {
        mutationOptions: <T extends Prisma.AccountDeleteArgs>(
            opts?: Omit<UseMutationOptions<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.AccountDeleteArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.AccountDeleteArgs, Context>;
    };
}
