/******************************************************************************
 * TanStack React Query type overrides for SpaceUser model
 ******************************************************************************/

/* eslint-disable */

import type {
	UndefinedInitialDataInfiniteOptions,
	UndefinedInitialDataOptions,
	UseMutationOptions,
} from "@tanstack/react-query";
import type { TRPCClientErrorLike } from "@trpc/client";
import type { AnyTRPCRouter as AnyRouter } from "@trpc/server";
import type { Prisma } from "../../../../generated/zenstack/client";

export interface ClientType<
	AppRouter extends AnyRouter,
	Context = AppRouter["_def"]["_config"]["$types"]["ctx"],
> {
	findMany: {
		queryOptions: <T extends Prisma.SpaceUserFindManyArgs>(
			input?: Prisma.SelectSubset<T, Prisma.SpaceUserFindManyArgs>,
			opts?: Omit<
				UndefinedInitialDataOptions<
					Prisma.SpaceUserGetPayload<T>[],
					TRPCClientErrorLike<AppRouter>
				>,
				"queryKey" | "queryFn"
			>,
		) => UndefinedInitialDataOptions<
			Prisma.SpaceUserGetPayload<T>[],
			TRPCClientErrorLike<AppRouter>
		>;

		infiniteQueryOptions: <T extends Prisma.SpaceUserFindManyArgs>(
			input?: Omit<
				Prisma.SelectSubset<T, Prisma.SpaceUserFindManyArgs>,
				"cursor"
			>,
			opts?: Omit<
				UndefinedInitialDataInfiniteOptions<
					Prisma.SpaceUserGetPayload<T>[],
					TRPCClientErrorLike<AppRouter>
				>,
				"queryKey" | "queryFn" | "initialPageParam"
			>,
		) => UndefinedInitialDataInfiniteOptions<
			Prisma.SpaceUserGetPayload<T>[],
			TRPCClientErrorLike<AppRouter>
		>;
	};

	findFirst: {
		queryOptions: <T extends Prisma.SpaceUserFindFirstArgs>(
			input?: Prisma.SelectSubset<T, Prisma.SpaceUserFindFirstArgs>,
			opts?: Omit<
				UndefinedInitialDataOptions<
					Prisma.SpaceUserGetPayload<T> | null,
					TRPCClientErrorLike<AppRouter>
				>,
				"queryKey" | "queryFn"
			>,
		) => UndefinedInitialDataOptions<
			Prisma.SpaceUserGetPayload<T> | null,
			TRPCClientErrorLike<AppRouter>
		>;

		infiniteQueryOptions: <T extends Prisma.SpaceUserFindFirstArgs>(
			input?: Prisma.SelectSubset<T, Prisma.SpaceUserFindFirstArgs>,
			opts?: Omit<
				UndefinedInitialDataInfiniteOptions<
					Prisma.SpaceUserGetPayload<T> | null,
					TRPCClientErrorLike<AppRouter>
				>,
				"queryKey" | "queryFn" | "initialPageParam"
			>,
		) => UndefinedInitialDataInfiniteOptions<
			Prisma.SpaceUserGetPayload<T> | null,
			TRPCClientErrorLike<AppRouter>
		>;
	};

	findUnique: {
		queryOptions: <T extends Prisma.SpaceUserFindUniqueArgs>(
			input: Prisma.SelectSubset<T, Prisma.SpaceUserFindUniqueArgs>,
			opts?: Omit<
				UndefinedInitialDataOptions<
					Prisma.SpaceUserGetPayload<T> | null,
					TRPCClientErrorLike<AppRouter>
				>,
				"queryKey" | "queryFn"
			>,
		) => UndefinedInitialDataOptions<
			Prisma.SpaceUserGetPayload<T> | null,
			TRPCClientErrorLike<AppRouter>
		>;
	};

	findFirstOrThrow: {
		queryOptions: <T extends Prisma.SpaceUserFindFirstOrThrowArgs>(
			input?: Prisma.SelectSubset<T, Prisma.SpaceUserFindFirstOrThrowArgs>,
			opts?: Omit<
				UndefinedInitialDataOptions<
					Prisma.SpaceUserGetPayload<T>,
					TRPCClientErrorLike<AppRouter>
				>,
				"queryKey" | "queryFn"
			>,
		) => UndefinedInitialDataOptions<
			Prisma.SpaceUserGetPayload<T>,
			TRPCClientErrorLike<AppRouter>
		>;

		infiniteQueryOptions: <T extends Prisma.SpaceUserFindFirstOrThrowArgs>(
			input?: Prisma.SelectSubset<T, Prisma.SpaceUserFindFirstOrThrowArgs>,
			opts?: Omit<
				UndefinedInitialDataInfiniteOptions<
					Prisma.SpaceUserGetPayload<T>,
					TRPCClientErrorLike<AppRouter>
				>,
				"queryKey" | "queryFn" | "initialPageParam"
			>,
		) => UndefinedInitialDataInfiniteOptions<
			Prisma.SpaceUserGetPayload<T>,
			TRPCClientErrorLike<AppRouter>
		>;
	};

	findUniqueOrThrow: {
		queryOptions: <T extends Prisma.SpaceUserFindUniqueOrThrowArgs>(
			input: Prisma.SelectSubset<T, Prisma.SpaceUserFindUniqueOrThrowArgs>,
			opts?: Omit<
				UndefinedInitialDataOptions<
					Prisma.SpaceUserGetPayload<T>,
					TRPCClientErrorLike<AppRouter>
				>,
				"queryKey" | "queryFn"
			>,
		) => UndefinedInitialDataOptions<
			Prisma.SpaceUserGetPayload<T>,
			TRPCClientErrorLike<AppRouter>
		>;
	};

	groupBy: {
		queryOptions: <
			T extends Prisma.SpaceUserGroupByArgs,
			HasSelectOrTake extends Prisma.Or<
				Prisma.Extends<"skip", Prisma.Keys<T>>,
				Prisma.Extends<"take", Prisma.Keys<T>>
			>,
			OrderByArg extends Prisma.True extends HasSelectOrTake
				? { orderBy: Prisma.SpaceUserGroupByArgs["orderBy"] }
				: { orderBy?: Prisma.SpaceUserGroupByArgs["orderBy"] },
			OrderFields extends Prisma.ExcludeUnderscoreKeys<
				Prisma.Keys<Prisma.MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends Prisma.MaybeTupleToUnion<T["by"]>,
			ByValid extends Prisma.Has<ByFields, OrderFields>,
			HavingFields extends Prisma.GetHavingFields<T["having"]>,
			HavingValid extends Prisma.Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? Prisma.True : Prisma.False,
			InputErrors extends ByEmpty extends Prisma.True
				? `Error: "by" must not be empty.`
				: HavingValid extends Prisma.False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: never;
						}[HavingFields]
					: "take" extends Prisma.Keys<T>
						? "orderBy" extends Prisma.Keys<T>
							? ByValid extends Prisma.True
								? Record<string, never>
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Prisma.Keys<T>
							? "orderBy" extends Prisma.Keys<T>
								? ByValid extends Prisma.True
									? Record<string, never>
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends Prisma.True
								? Record<string, never>
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			input: Prisma.SubsetIntersection<
				T,
				Prisma.SpaceUserGroupByArgs,
				OrderByArg
			> &
				InputErrors,
			opts?: Omit<
				UndefinedInitialDataOptions<
					Record<string, never> extends InputErrors
						? Array<
								Prisma.PickEnumerable<
									Prisma.SpaceUserGroupByOutputType,
									T["by"]
								> & {
									[P in keyof T &
										keyof Prisma.SpaceUserGroupByOutputType]: P extends "_count"
										? T[P] extends boolean
											? number
											: Prisma.GetScalarType<
													T[P],
													Prisma.SpaceUserGroupByOutputType[P]
												>
										: Prisma.GetScalarType<
												T[P],
												Prisma.SpaceUserGroupByOutputType[P]
											>;
								}
							>
						: InputErrors,
					TRPCClientErrorLike<AppRouter>
				>,
				"queryKey" | "queryFn"
			>,
		) => UndefinedInitialDataOptions<
			Record<string, never> extends InputErrors
				? Array<
						Prisma.PickEnumerable<
							Prisma.SpaceUserGroupByOutputType,
							T["by"]
						> & {
							[P in keyof T &
								keyof Prisma.SpaceUserGroupByOutputType]: P extends "_count"
								? T[P] extends boolean
									? number
									: Prisma.GetScalarType<
											T[P],
											Prisma.SpaceUserGroupByOutputType[P]
										>
								: Prisma.GetScalarType<
										T[P],
										Prisma.SpaceUserGroupByOutputType[P]
									>;
						}
					>
				: InputErrors,
			TRPCClientErrorLike<AppRouter>
		>;

		infiniteQueryOptions: <
			T extends Prisma.SpaceUserGroupByArgs,
			HasSelectOrTake extends Prisma.Or<
				Prisma.Extends<"skip", Prisma.Keys<T>>,
				Prisma.Extends<"take", Prisma.Keys<T>>
			>,
			OrderByArg extends Prisma.True extends HasSelectOrTake
				? { orderBy: Prisma.SpaceUserGroupByArgs["orderBy"] }
				: { orderBy?: Prisma.SpaceUserGroupByArgs["orderBy"] },
			OrderFields extends Prisma.ExcludeUnderscoreKeys<
				Prisma.Keys<Prisma.MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends Prisma.MaybeTupleToUnion<T["by"]>,
			ByValid extends Prisma.Has<ByFields, OrderFields>,
			HavingFields extends Prisma.GetHavingFields<T["having"]>,
			HavingValid extends Prisma.Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? Prisma.True : Prisma.False,
			InputErrors extends ByEmpty extends Prisma.True
				? `Error: "by" must not be empty.`
				: HavingValid extends Prisma.False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: never;
						}[HavingFields]
					: "take" extends Prisma.Keys<T>
						? "orderBy" extends Prisma.Keys<T>
							? ByValid extends Prisma.True
								? Record<string, never>
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Prisma.Keys<T>
							? "orderBy" extends Prisma.Keys<T>
								? ByValid extends Prisma.True
									? Record<string, never>
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends Prisma.True
								? Record<string, never>
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			input: Prisma.SubsetIntersection<
				T,
				Prisma.SpaceUserGroupByArgs,
				OrderByArg
			> &
				InputErrors,
			opts?: Omit<
				UndefinedInitialDataInfiniteOptions<
					Record<string, never> extends InputErrors
						? Array<
								Prisma.PickEnumerable<
									Prisma.SpaceUserGroupByOutputType,
									T["by"]
								> & {
									[P in keyof T &
										keyof Prisma.SpaceUserGroupByOutputType]: P extends "_count"
										? T[P] extends boolean
											? number
											: Prisma.GetScalarType<
													T[P],
													Prisma.SpaceUserGroupByOutputType[P]
												>
										: Prisma.GetScalarType<
												T[P],
												Prisma.SpaceUserGroupByOutputType[P]
											>;
								}
							>
						: InputErrors,
					TRPCClientErrorLike<AppRouter>
				>,
				"queryKey" | "queryFn" | "initialPageParam"
			>,
		) => UndefinedInitialDataInfiniteOptions<
			Record<string, never> extends InputErrors
				? Array<
						Prisma.PickEnumerable<
							Prisma.SpaceUserGroupByOutputType,
							T["by"]
						> & {
							[P in keyof T &
								keyof Prisma.SpaceUserGroupByOutputType]: P extends "_count"
								? T[P] extends boolean
									? number
									: Prisma.GetScalarType<
											T[P],
											Prisma.SpaceUserGroupByOutputType[P]
										>
								: Prisma.GetScalarType<
										T[P],
										Prisma.SpaceUserGroupByOutputType[P]
									>;
						}
					>
				: InputErrors,
			TRPCClientErrorLike<AppRouter>
		>;
	};

	create: {
		mutationOptions: <T extends Prisma.SpaceUserCreateArgs>(
			opts?: Omit<
				UseMutationOptions<
					Prisma.SpaceUserGetPayload<T>,
					TRPCClientErrorLike<AppRouter>,
					Prisma.SelectSubset<T, Prisma.SpaceUserCreateArgs>,
					Context
				>,
				"mutationFn"
			>,
		) => UseMutationOptions<
			Prisma.SpaceUserGetPayload<T>,
			TRPCClientErrorLike<AppRouter>,
			Prisma.SelectSubset<T, Prisma.SpaceUserCreateArgs>,
			Context
		>;
	};

	update: {
		mutationOptions: <T extends Prisma.SpaceUserUpdateArgs>(
			opts?: Omit<
				UseMutationOptions<
					Prisma.SpaceUserGetPayload<T>,
					TRPCClientErrorLike<AppRouter>,
					Prisma.SelectSubset<T, Prisma.SpaceUserUpdateArgs>,
					Context
				>,
				"mutationFn"
			>,
		) => UseMutationOptions<
			Prisma.SpaceUserGetPayload<T>,
			TRPCClientErrorLike<AppRouter>,
			Prisma.SelectSubset<T, Prisma.SpaceUserUpdateArgs>,
			Context
		>;
	};

	delete: {
		mutationOptions: <T extends Prisma.SpaceUserDeleteArgs>(
			opts?: Omit<
				UseMutationOptions<
					Prisma.SpaceUserGetPayload<T>,
					TRPCClientErrorLike<AppRouter>,
					Prisma.SpaceUserDeleteArgs,
					Context
				>,
				"mutationFn"
			>,
		) => UseMutationOptions<
			Prisma.SpaceUserGetPayload<T>,
			TRPCClientErrorLike<AppRouter>,
			Prisma.SpaceUserDeleteArgs,
			Context
		>;
	};

	createMany: {
		mutationOptions: <T extends Prisma.SpaceUserCreateManyArgs>(
			opts?: Omit<
				UseMutationOptions<
					Prisma.BatchPayload,
					TRPCClientErrorLike<AppRouter>,
					Prisma.SelectSubset<T, Prisma.SpaceUserCreateManyArgs>,
					Context
				>,
				"mutationFn"
			>,
		) => UseMutationOptions<
			Prisma.BatchPayload,
			TRPCClientErrorLike<AppRouter>,
			Prisma.SelectSubset<T, Prisma.SpaceUserCreateManyArgs>,
			Context
		>;
	};

	deleteMany: {
		mutationOptions: <T extends Prisma.SpaceUserDeleteManyArgs>(
			opts?: Omit<
				UseMutationOptions<
					Prisma.BatchPayload,
					TRPCClientErrorLike<AppRouter>,
					Prisma.SelectSubset<T, Prisma.SpaceUserDeleteManyArgs>,
					Context
				>,
				"mutationFn"
			>,
		) => UseMutationOptions<
			Prisma.BatchPayload,
			TRPCClientErrorLike<AppRouter>,
			Prisma.SelectSubset<T, Prisma.SpaceUserDeleteManyArgs>,
			Context
		>;
	};

	updateMany: {
		mutationOptions: <T extends Prisma.SpaceUserUpdateManyArgs>(
			opts?: Omit<
				UseMutationOptions<
					Prisma.BatchPayload,
					TRPCClientErrorLike<AppRouter>,
					Prisma.SelectSubset<T, Prisma.SpaceUserUpdateManyArgs>,
					Context
				>,
				"mutationFn"
			>,
		) => UseMutationOptions<
			Prisma.BatchPayload,
			TRPCClientErrorLike<AppRouter>,
			Prisma.SelectSubset<T, Prisma.SpaceUserUpdateManyArgs>,
			Context
		>;
	};

	upsert: {
		mutationOptions: <T extends Prisma.SpaceUserUpsertArgs>(
			opts?: Omit<
				UseMutationOptions<
					Prisma.SpaceUserGetPayload<T>,
					TRPCClientErrorLike<AppRouter>,
					Prisma.SelectSubset<T, Prisma.SpaceUserUpsertArgs>,
					Context
				>,
				"mutationFn"
			>,
		) => UseMutationOptions<
			Prisma.SpaceUserGetPayload<T>,
			TRPCClientErrorLike<AppRouter>,
			Prisma.SelectSubset<T, Prisma.SpaceUserUpsertArgs>,
			Context
		>;
	};

	aggregate: {
		queryOptions: <T extends Prisma.SpaceUserAggregateArgs>(
			input: Prisma.Subset<T, Prisma.SpaceUserAggregateArgs>,
			opts?: Omit<
				UndefinedInitialDataOptions<
					Prisma.GetSpaceUserAggregateType<T>,
					TRPCClientErrorLike<AppRouter>
				>,
				"queryKey" | "queryFn"
			>,
		) => UndefinedInitialDataOptions<
			Prisma.GetSpaceUserAggregateType<T>,
			TRPCClientErrorLike<AppRouter>
		>;

		infiniteQueryOptions: <T extends Prisma.SpaceUserAggregateArgs>(
			input: Prisma.Subset<T, Prisma.SpaceUserAggregateArgs>,
			opts?: Omit<
				UndefinedInitialDataInfiniteOptions<
					Prisma.GetSpaceUserAggregateType<T>,
					TRPCClientErrorLike<AppRouter>
				>,
				"queryKey" | "queryFn" | "initialPageParam"
			>,
		) => UndefinedInitialDataInfiniteOptions<
			Prisma.GetSpaceUserAggregateType<T>,
			TRPCClientErrorLike<AppRouter>
		>;
	};

	count: {
		queryOptions: <T extends Prisma.SpaceUserCountArgs>(
			input?: Prisma.Subset<T, Prisma.SpaceUserCountArgs>,
			opts?: Omit<
				UndefinedInitialDataOptions<
					T extends { select: any }
						? T["select"] extends true
							? number
							: Prisma.GetScalarType<
									T["select"],
									Prisma.SpaceUserCountAggregateOutputType
								>
						: number,
					TRPCClientErrorLike<AppRouter>
				>,
				"queryKey" | "queryFn"
			>,
		) => UndefinedInitialDataOptions<
			T extends { select: any }
				? T["select"] extends true
					? number
					: Prisma.GetScalarType<
							T["select"],
							Prisma.SpaceUserCountAggregateOutputType
						>
				: number,
			TRPCClientErrorLike<AppRouter>
		>;

		infiniteQueryOptions: <T extends Prisma.SpaceUserCountArgs>(
			input?: Prisma.Subset<T, Prisma.SpaceUserCountArgs>,
			opts?: Omit<
				UndefinedInitialDataInfiniteOptions<
					T extends { select: any }
						? T["select"] extends true
							? number
							: Prisma.GetScalarType<
									T["select"],
									Prisma.SpaceUserCountAggregateOutputType
								>
						: number,
					TRPCClientErrorLike<AppRouter>
				>,
				"queryKey" | "queryFn" | "initialPageParam"
			>,
		) => UndefinedInitialDataInfiniteOptions<
			T extends { select: any }
				? T["select"] extends true
					? number
					: Prisma.GetScalarType<
							T["select"],
							Prisma.SpaceUserCountAggregateOutputType
						>
				: number,
			TRPCClientErrorLike<AppRouter>
		>;
	};
}
