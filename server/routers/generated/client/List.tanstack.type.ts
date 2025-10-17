/******************************************************************************
 * TanStack React Query type overrides for List model
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
        queryOptions: <T extends Prisma.ListFindManyArgs>(
            input?: Prisma.SelectSubset<T, Prisma.ListFindManyArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.ListGetPayload<T>[], TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.ListGetPayload<T>[], TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.ListFindManyArgs>(
            input?: Prisma.SelectSubset<T, Prisma.ListFindManyArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.ListGetPayload<T>[], TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.ListGetPayload<T>[], TRPCClientErrorLike<AppRouter>>;
    };

    findFirst: {
        queryOptions: <T extends Prisma.ListFindFirstArgs>(
            input?: Prisma.SelectSubset<T, Prisma.ListFindFirstArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.ListGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.ListGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.ListFindFirstArgs>(
            input?: Prisma.SelectSubset<T, Prisma.ListFindFirstArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.ListGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.ListGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    findUnique: {
        queryOptions: <T extends Prisma.ListFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.ListFindUniqueArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.ListGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.ListGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    findFirstOrThrow: {
        queryOptions: <T extends Prisma.ListFindFirstOrThrowArgs>(
            input?: Prisma.SelectSubset<T, Prisma.ListFindFirstOrThrowArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.ListFindFirstOrThrowArgs>(
            input?: Prisma.SelectSubset<T, Prisma.ListFindFirstOrThrowArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };

    findUniqueOrThrow: {
        queryOptions: <T extends Prisma.ListFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.ListFindUniqueOrThrowArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };

    groupBy: {
        queryOptions: <T extends Prisma.ListGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ListGroupByArgs['orderBy'] } : { orderBy?: Prisma.ListGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? { [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : never }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields]>(
            input: Prisma.SubsetIntersection<T, Prisma.ListGroupByArgs, OrderByArg> & InputErrors,
            opts?: Omit<UndefinedInitialDataOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.ListGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.ListGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.ListGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.ListGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.ListGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.ListGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.ListGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.ListGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.ListGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ListGroupByArgs['orderBy'] } : { orderBy?: Prisma.ListGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? { [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : never }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields]>(
            input: Prisma.SubsetIntersection<T, Prisma.ListGroupByArgs, OrderByArg> & InputErrors,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.ListGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.ListGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.ListGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.ListGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.ListGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.ListGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.ListGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.ListGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>;
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

    createMany: {
        mutationOptions: <T extends Prisma.ListCreateManyArgs>(
            opts?: Omit<UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ListCreateManyArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ListCreateManyArgs>, Context>;
    };

    deleteMany: {
        mutationOptions: <T extends Prisma.ListDeleteManyArgs>(
            opts?: Omit<UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ListDeleteManyArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ListDeleteManyArgs>, Context>;
    };

    updateMany: {
        mutationOptions: <T extends Prisma.ListUpdateManyArgs>(
            opts?: Omit<UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ListUpdateManyArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ListUpdateManyArgs>, Context>;
    };

    upsert: {
        mutationOptions: <T extends Prisma.ListUpsertArgs>(
            opts?: Omit<UseMutationOptions<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ListUpsertArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ListUpsertArgs>, Context>;
    };

    aggregate: {
        queryOptions: <T extends Prisma.ListAggregateArgs>(
            input: Prisma.Subset<T, Prisma.ListAggregateArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.GetListAggregateType<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.GetListAggregateType<T>, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.ListAggregateArgs>(
            input: Prisma.Subset<T, Prisma.ListAggregateArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.GetListAggregateType<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.GetListAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };

    count: {
        queryOptions: <T extends Prisma.ListCountArgs>(
            input?: Prisma.Subset<T, Prisma.ListCountArgs>,
            opts?: Omit<UndefinedInitialDataOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.ListCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.ListCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.ListCountArgs>(
            input?: Prisma.Subset<T, Prisma.ListCountArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.ListCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.ListCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>;
    };
}
