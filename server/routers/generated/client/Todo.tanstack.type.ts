/******************************************************************************
 * TanStack React Query type overrides for Todo model
 * These types provide enhanced inference for queryOptions() and mutationOptions()
 ******************************************************************************/

/* eslint-disable */

import type { Prisma } from '../../../../generated/zenstack/client';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyTRPCRouter as AnyRouter } from '@trpc/server';
import type {
    DefinedUseQueryResult,
    UndefinedInitialDataOptions,
    UseMutationOptions,
    UseMutationResult,
} from '@tanstack/react-query';

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    findMany: {
        queryOptions: <T extends Prisma.TodoFindManyArgs>(
            input?: Prisma.SelectSubset<T, Prisma.TodoFindManyArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.TodoGetPayload<T>[], TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.TodoGetPayload<T>[], TRPCClientErrorLike<AppRouter>>;
    };

    findFirst: {
        queryOptions: <T extends Prisma.TodoFindFirstArgs>(
            input?: Prisma.SelectSubset<T, Prisma.TodoFindFirstArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.TodoGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.TodoGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    findUnique: {
        queryOptions: <T extends Prisma.TodoFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.TodoFindUniqueArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.TodoGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.TodoGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    create: {
        mutationOptions: <T extends Prisma.TodoCreateArgs>(
            opts?: Omit<UseMutationOptions<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoCreateArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoCreateArgs>, Context>;
    };

    update: {
        mutationOptions: <T extends Prisma.TodoUpdateArgs>(
            opts?: Omit<UseMutationOptions<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoUpdateArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoUpdateArgs>, Context>;
    };

    delete: {
        mutationOptions: <T extends Prisma.TodoDeleteArgs>(
            opts?: Omit<UseMutationOptions<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoDeleteArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoDeleteArgs>, Context>;
    };

    aggregate: {
        queryOptions: <T extends Prisma.TodoAggregateArgs>(
            input: Prisma.Subset<T, Prisma.TodoAggregateArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.GetTodoAggregateType<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.GetTodoAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };

    count: {
        queryOptions: <T extends Prisma.TodoCountArgs>(
            input?: Prisma.Subset<T, Prisma.TodoCountArgs>,
            opts?: Omit<UndefinedInitialDataOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.TodoCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.TodoCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>;
    };
}
