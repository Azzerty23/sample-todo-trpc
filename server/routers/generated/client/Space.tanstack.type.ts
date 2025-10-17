/******************************************************************************
 * TanStack React Query type overrides for Space model
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
        queryOptions: <T extends Prisma.SpaceFindManyArgs>(
            input?: Prisma.SelectSubset<T, Prisma.SpaceFindManyArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.SpaceGetPayload<T>[], TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.SpaceGetPayload<T>[], TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.SpaceFindManyArgs>(
            input?: Prisma.SelectSubset<T, Prisma.SpaceFindManyArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.SpaceGetPayload<T>[], TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.SpaceGetPayload<T>[], TRPCClientErrorLike<AppRouter>>;
    };

    findFirst: {
        queryOptions: <T extends Prisma.SpaceFindFirstArgs>(
            input?: Prisma.SelectSubset<T, Prisma.SpaceFindFirstArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.SpaceGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.SpaceGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.SpaceFindFirstArgs>(
            input?: Prisma.SelectSubset<T, Prisma.SpaceFindFirstArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.SpaceGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.SpaceGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    findUnique: {
        queryOptions: <T extends Prisma.SpaceFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.SpaceFindUniqueArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.SpaceGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.SpaceGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    findFirstOrThrow: {
        queryOptions: <T extends Prisma.SpaceFindFirstOrThrowArgs>(
            input?: Prisma.SelectSubset<T, Prisma.SpaceFindFirstOrThrowArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.SpaceFindFirstOrThrowArgs>(
            input?: Prisma.SelectSubset<T, Prisma.SpaceFindFirstOrThrowArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };

    findUniqueOrThrow: {
        queryOptions: <T extends Prisma.SpaceFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.SpaceFindUniqueOrThrowArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };

    groupBy: {
        queryOptions: <T extends Prisma.SpaceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.SpaceGroupByArgs['orderBy'] } : { orderBy?: Prisma.SpaceGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? { [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : never }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields]>(
            input: Prisma.SubsetIntersection<T, Prisma.SpaceGroupByArgs, OrderByArg> & InputErrors,
            opts?: Omit<UndefinedInitialDataOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.SpaceGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.SpaceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.SpaceGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.SpaceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.SpaceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.SpaceGroupByArgs['orderBy'] } : { orderBy?: Prisma.SpaceGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? { [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : never }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields]>(
            input: Prisma.SubsetIntersection<T, Prisma.SpaceGroupByArgs, OrderByArg> & InputErrors,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.SpaceGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.SpaceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.SpaceGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.SpaceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>;
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

    createMany: {
        mutationOptions: <T extends Prisma.SpaceCreateManyArgs>(
            opts?: Omit<UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceCreateManyArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceCreateManyArgs>, Context>;
    };

    deleteMany: {
        mutationOptions: <T extends Prisma.SpaceDeleteManyArgs>(
            opts?: Omit<UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceDeleteManyArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceDeleteManyArgs>, Context>;
    };

    updateMany: {
        mutationOptions: <T extends Prisma.SpaceUpdateManyArgs>(
            opts?: Omit<UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceUpdateManyArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceUpdateManyArgs>, Context>;
    };

    upsert: {
        mutationOptions: <T extends Prisma.SpaceUpsertArgs>(
            opts?: Omit<UseMutationOptions<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceUpsertArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceUpsertArgs>, Context>;
    };

    aggregate: {
        queryOptions: <T extends Prisma.SpaceAggregateArgs>(
            input: Prisma.Subset<T, Prisma.SpaceAggregateArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.GetSpaceAggregateType<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.GetSpaceAggregateType<T>, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.SpaceAggregateArgs>(
            input: Prisma.Subset<T, Prisma.SpaceAggregateArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.GetSpaceAggregateType<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.GetSpaceAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };

    count: {
        queryOptions: <T extends Prisma.SpaceCountArgs>(
            input?: Prisma.Subset<T, Prisma.SpaceCountArgs>,
            opts?: Omit<UndefinedInitialDataOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.SpaceCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.SpaceCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.SpaceCountArgs>(
            input?: Prisma.Subset<T, Prisma.SpaceCountArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.SpaceCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.SpaceCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>;
    };
}
