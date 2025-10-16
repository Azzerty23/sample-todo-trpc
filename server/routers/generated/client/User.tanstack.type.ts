/******************************************************************************
 * TanStack React Query type overrides for User model
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
        queryOptions: <T extends Prisma.UserFindManyArgs>(
            input?: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.UserGetPayload<T>[], TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.UserGetPayload<T>[], TRPCClientErrorLike<AppRouter>>;
    };

    findFirst: {
        queryOptions: <T extends Prisma.UserFindFirstArgs>(
            input?: Prisma.SelectSubset<T, Prisma.UserFindFirstArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.UserGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.UserGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    findUnique: {
        queryOptions: <T extends Prisma.UserFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.UserGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.UserGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    create: {
        mutationOptions: <T extends Prisma.UserCreateArgs>(
            opts?: Omit<UseMutationOptions<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserCreateArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserCreateArgs>, Context>;
    };

    update: {
        mutationOptions: <T extends Prisma.UserUpdateArgs>(
            opts?: Omit<UseMutationOptions<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserUpdateArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserUpdateArgs>, Context>;
    };

    delete: {
        mutationOptions: <T extends Prisma.UserDeleteArgs>(
            opts?: Omit<UseMutationOptions<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserDeleteArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserDeleteArgs>, Context>;
    };
}
