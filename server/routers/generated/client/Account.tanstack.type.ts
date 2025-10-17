/******************************************************************************
 * TanStack React Query type overrides for Account model
 ******************************************************************************/

/* eslint-disable */

import type { Prisma } from '../../../../generated/zenstack/client';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyTRPCRouter as AnyRouter } from '@trpc/server';
import type {
    UndefinedInitialDataOptions,
    UndefinedInitialDataInfiniteOptions,
    UseMutationOptions,
} from '@tanstack/react-query';

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    findMany: {
        queryOptions: <T extends Prisma.AccountFindManyArgs>(
            input?: Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.AccountGetPayload<T>[], TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.AccountGetPayload<T>[], TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.AccountFindManyArgs>(
            input?: Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.AccountGetPayload<T>[], TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.AccountGetPayload<T>[], TRPCClientErrorLike<AppRouter>>;
    };

    findFirst: {
        queryOptions: <T extends Prisma.AccountFindFirstArgs>(
            input?: Prisma.SelectSubset<T, Prisma.AccountFindFirstArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.AccountGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.AccountGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.AccountFindFirstArgs>(
            input?: Prisma.SelectSubset<T, Prisma.AccountFindFirstArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.AccountGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.AccountGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    findUnique: {
        queryOptions: <T extends Prisma.AccountFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.AccountFindUniqueArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.AccountGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.AccountGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    findFirstOrThrow: {
        queryOptions: <T extends Prisma.AccountFindFirstOrThrowArgs>(
            input?: Prisma.SelectSubset<T, Prisma.AccountFindFirstOrThrowArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.AccountFindFirstOrThrowArgs>(
            input?: Prisma.SelectSubset<T, Prisma.AccountFindFirstOrThrowArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };

    findUniqueOrThrow: {
        queryOptions: <T extends Prisma.AccountFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.AccountFindUniqueOrThrowArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };

    groupBy: {
        queryOptions: <T extends Prisma.AccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.AccountGroupByArgs['orderBy'] } : { orderBy?: Prisma.AccountGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? { [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : never }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields]>(
            input: Prisma.SubsetIntersection<T, Prisma.AccountGroupByArgs, OrderByArg> & InputErrors,
            opts?: Omit<UndefinedInitialDataOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.AccountGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.AccountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.AccountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.AccountGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.AccountGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.AccountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.AccountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.AccountGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.AccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.AccountGroupByArgs['orderBy'] } : { orderBy?: Prisma.AccountGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? { [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : never }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields]>(
            input: Prisma.SubsetIntersection<T, Prisma.AccountGroupByArgs, OrderByArg> & InputErrors,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.AccountGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.AccountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.AccountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.AccountGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.AccountGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.AccountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.AccountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.AccountGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>;
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
            opts?: Omit<UseMutationOptions<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.AccountDeleteArgs, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.AccountDeleteArgs, Context>;
    };

    createMany: {
        mutationOptions: <T extends Prisma.AccountCreateManyArgs>(
            opts?: Omit<UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountCreateManyArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountCreateManyArgs>, Context>;
    };

    deleteMany: {
        mutationOptions: <T extends Prisma.AccountDeleteManyArgs>(
            opts?: Omit<UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountDeleteManyArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountDeleteManyArgs>, Context>;
    };

    updateMany: {
        mutationOptions: <T extends Prisma.AccountUpdateManyArgs>(
            opts?: Omit<UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountUpdateManyArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountUpdateManyArgs>, Context>;
    };

    upsert: {
        mutationOptions: <T extends Prisma.AccountUpsertArgs>(
            opts?: Omit<UseMutationOptions<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountUpsertArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.AccountGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AccountUpsertArgs>, Context>;
    };

    aggregate: {
        queryOptions: <T extends Prisma.AccountAggregateArgs>(
            input: Prisma.Subset<T, Prisma.AccountAggregateArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.GetAccountAggregateType<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.GetAccountAggregateType<T>, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.AccountAggregateArgs>(
            input: Prisma.Subset<T, Prisma.AccountAggregateArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.GetAccountAggregateType<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.GetAccountAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };

    count: {
        queryOptions: <T extends Prisma.AccountCountArgs>(
            input?: Prisma.Subset<T, Prisma.AccountCountArgs>,
            opts?: Omit<UndefinedInitialDataOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.AccountCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.AccountCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.AccountCountArgs>(
            input?: Prisma.Subset<T, Prisma.AccountCountArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.AccountCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.AccountCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>;
    };
}
