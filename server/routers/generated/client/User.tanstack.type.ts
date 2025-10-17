/******************************************************************************
 * TanStack React Query type overrides for User model
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
        queryOptions: <T extends Prisma.UserFindManyArgs>(
            input?: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.UserGetPayload<T>[], TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.UserGetPayload<T>[], TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.UserFindManyArgs>(
            input?: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.UserGetPayload<T>[], TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.UserGetPayload<T>[], TRPCClientErrorLike<AppRouter>>;
    };

    findFirst: {
        queryOptions: <T extends Prisma.UserFindFirstArgs>(
            input?: Prisma.SelectSubset<T, Prisma.UserFindFirstArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.UserGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.UserGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.UserFindFirstArgs>(
            input?: Prisma.SelectSubset<T, Prisma.UserFindFirstArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.UserGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.UserGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    findUnique: {
        queryOptions: <T extends Prisma.UserFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.UserGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.UserGetPayload<T> | null, TRPCClientErrorLike<AppRouter>>;
    };

    findFirstOrThrow: {
        queryOptions: <T extends Prisma.UserFindFirstOrThrowArgs>(
            input?: Prisma.SelectSubset<T, Prisma.UserFindFirstOrThrowArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.UserFindFirstOrThrowArgs>(
            input?: Prisma.SelectSubset<T, Prisma.UserFindFirstOrThrowArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };

    findUniqueOrThrow: {
        queryOptions: <T extends Prisma.UserFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.UserFindUniqueOrThrowArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };

    groupBy: {
        queryOptions: <T extends Prisma.UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? { [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : never }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields]>(
            input: Prisma.SubsetIntersection<T, Prisma.UserGroupByArgs, OrderByArg> & InputErrors,
            opts?: Omit<UndefinedInitialDataOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.UserGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.UserGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? { [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : never }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? Record<string, never> : { [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"` }[OrderFields]>(
            input: Prisma.SubsetIntersection<T, Prisma.UserGroupByArgs, OrderByArg> & InputErrors,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.UserGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Record<string, never> extends InputErrors ? Array<Prisma.PickEnumerable<Prisma.UserGroupByOutputType, T['by']> & { [P in ((keyof T) & (keyof Prisma.UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]> }> : InputErrors, TRPCClientErrorLike<AppRouter>>;
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

    createMany: {
        mutationOptions: <T extends Prisma.UserCreateManyArgs>(
            opts?: Omit<UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserCreateManyArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserCreateManyArgs>, Context>;
    };

    deleteMany: {
        mutationOptions: <T extends Prisma.UserDeleteManyArgs>(
            opts?: Omit<UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserDeleteManyArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserDeleteManyArgs>, Context>;
    };

    updateMany: {
        mutationOptions: <T extends Prisma.UserUpdateManyArgs>(
            opts?: Omit<UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserUpdateManyArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserUpdateManyArgs>, Context>;
    };

    upsert: {
        mutationOptions: <T extends Prisma.UserUpsertArgs>(
            opts?: Omit<UseMutationOptions<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserUpsertArgs>, Context>, 'mutationFn'>
        ) => UseMutationOptions<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserUpsertArgs>, Context>;
    };

    aggregate: {
        queryOptions: <T extends Prisma.UserAggregateArgs>(
            input: Prisma.Subset<T, Prisma.UserAggregateArgs>,
            opts?: Omit<UndefinedInitialDataOptions<Prisma.GetUserAggregateType<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<Prisma.GetUserAggregateType<T>, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.UserAggregateArgs>(
            input: Prisma.Subset<T, Prisma.UserAggregateArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<Prisma.GetUserAggregateType<T>, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<Prisma.GetUserAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };

    count: {
        queryOptions: <T extends Prisma.UserCountArgs>(
            input?: Prisma.Subset<T, Prisma.UserCountArgs>,
            opts?: Omit<UndefinedInitialDataOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.UserCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.UserCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>;

        infiniteQueryOptions: <T extends Prisma.UserCountArgs>(
            input?: Prisma.Subset<T, Prisma.UserCountArgs>,
            opts?: Omit<UndefinedInitialDataInfiniteOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.UserCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>, 'queryKey' | 'queryFn'>
        ) => UndefinedInitialDataInfiniteOptions<T extends { select: any } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.UserCountAggregateOutputType> : number, TRPCClientErrorLike<AppRouter>>;
    };
}
