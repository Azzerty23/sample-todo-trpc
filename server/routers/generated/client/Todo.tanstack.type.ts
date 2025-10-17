/******************************************************************************
 * TanStack React Query type overrides for Todo model
 * These types provide enhanced inference for queryOptions() and mutationOptions()
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
        queryOptions: <T extends Prisma.TodoFindManyArgs>(
            input?: Prisma.SelectSubset<T, Prisma.TodoFindManyArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.TodoGetPayload<T>[], TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.TodoGetPayload<T>[], TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.TodoFindManyArgs>(
            input?: Prisma.SelectSubset<T, Prisma.TodoFindManyArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.TodoGetPayload<T>[], TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.TodoGetPayload<T>[], TRPCClientErrorLike<AppRouter>>;
    };

    findFirst: {
        queryOptions: <T extends Prisma.TodoFindFirstArgs>(
            input?: Prisma.SelectSubset<T, Prisma.TodoFindFirstArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.TodoGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.TodoGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.TodoFindFirstArgs>(
            input?: Prisma.SelectSubset<T, Prisma.TodoFindFirstArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.TodoGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.TodoGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    findUnique: {
        queryOptions: <T extends Prisma.TodoFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.TodoFindUniqueArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.TodoGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.TodoGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    findFirstOrThrow: {
        queryOptions: <T extends Prisma.TodoFindFirstOrThrowArgs>(
            input?: Prisma.SelectSubset<T, Prisma.TodoFindFirstOrThrowArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.TodoFindFirstOrThrowArgs>(
            input?: Prisma.SelectSubset<T, Prisma.TodoFindFirstOrThrowArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };

    findUniqueOrThrow: {
        queryOptions: <T extends Prisma.TodoFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.TodoFindUniqueOrThrowArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };

    groupBy: {
        queryOptions: <T extends Prisma.TodoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.TodoGroupByArgs['orderBy'] } : { orderBy?: Prisma.TodoGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? { [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : never }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields]>(
            input: Prisma.SubsetIntersection<T, Prisma.TodoGroupByArgs, OrderByArg> & InputErrors,
            opts?: Omit<UndefinedInitialDataOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.TodoGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.TodoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.TodoGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.TodoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.TodoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.TodoGroupByArgs['orderBy'] } : { orderBy?: Prisma.TodoGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? { [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : never }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields]>(
            input: Prisma.SubsetIntersection<T, Prisma.TodoGroupByArgs, OrderByArg> & InputErrors,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.TodoGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.TodoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.TodoGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.TodoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>;
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

    createMany: {
        mutationOptions: <T extends Prisma.TodoCreateManyArgs>(
            opts?: Omit<UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoCreateManyArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoCreateManyArgs>, Context>;
    };

    deleteMany: {
        mutationOptions: <T extends Prisma.TodoDeleteManyArgs>(
            opts?: Omit<UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoDeleteManyArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoDeleteManyArgs>, Context>;
    };

    updateMany: {
        mutationOptions: <T extends Prisma.TodoUpdateManyArgs>(
            opts?: Omit<UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoUpdateManyArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoUpdateManyArgs>, Context>;
    };

    upsert: {
        mutationOptions: <T extends Prisma.TodoUpsertArgs>(
            opts?: Omit<UseMutationOptions<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoUpsertArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.TodoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TodoUpsertArgs>, Context>;
    };

    aggregate: {
        queryOptions: <T extends Prisma.TodoAggregateArgs>(
            input: Prisma.Subset<T, Prisma.TodoAggregateArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.GetTodoAggregateType<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.GetTodoAggregateType<T>, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.TodoAggregateArgs>(
            input: Prisma.Subset<T, Prisma.TodoAggregateArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.GetTodoAggregateType<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.GetTodoAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };

    count: {
        queryOptions: <T extends Prisma.TodoCountArgs>(
            input?: Prisma.Subset<T, Prisma.TodoCountArgs>,
            opts?: Omit<UndefinedInitialDataOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.TodoCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.TodoCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.TodoCountArgs>(
            input?: Prisma.Subset<T, Prisma.TodoCountArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.TodoCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.TodoCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>;
    };
}
