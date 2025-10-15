import type {
	ListModel,
	SpaceModel,
	TodoModel,
	UserModel,
} from "@generated/zenstack/models";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useTRPC } from "@lib/trpc";
import { useMutation, useQuery } from "@tanstack/react-query";
import BreadCrumb from "components/BreadCrumb";
import TodoComponent from "components/Todo";
import WithNavBar from "components/WithNavBar";
import type { GetServerSideProps } from "next";
import { type ChangeEvent, type KeyboardEvent, useState } from "react";
import { toast } from "react-toastify";
import { getEnhancedPrismaFromCtx } from "server/db/enhanced";

type Props = {
	space: SpaceModel;
	list: ListModel;
	todos: (TodoModel & { owner: UserModel })[];
};

export default function TodoList(props: Props) {
	const trpc = useTRPC();
	const [title, setTitle] = useState("");

	const { data: todos, refetch } = useQuery(
		trpc.todo.findMany.queryOptions(
			{
				where: { listId: props.list.id },
				include: {
					owner: true,
				},
				orderBy: {
					updatedAt: "desc",
				},
			},
			{ initialData: props.todos, enabled: !!props.list },
		),
	);

	const { data } = useQuery(trpc.todo.findMany.queryOptions({}));

	const { mutateAsync: createTodo } = useMutation(
		trpc.todo.create.mutationOptions(),
	);

	const _createTodo = async () => {
		try {
			const todo = await createTodo({
				data: {
					title,
					list: { connect: { id: props.list.id } },
				},
			});
			console.log(`Todo created: ${todo}`);
			setTitle("");
			refetch();
		} catch (err: any) {
			toast.error(`Failed to create todo: ${err.info?.message || err.message}`);
		}
	};

	if (!props.space || !props.list) {
		return <></>;
	}

	return (
		<WithNavBar>
			<div className="px-8 py-2">
				<BreadCrumb space={props.space} list={props.list} />
			</div>
			<div className="container w-full flex flex-col items-center pt-12 mx-auto">
				<h1 className="text-2xl font-semibold mb-4">{props.list?.title}</h1>
				<div className="flex space-x-2">
					<input
						type="text"
						placeholder="Type a title and press enter"
						className="input input-bordered w-72 max-w-xs mt-2"
						value={title}
						onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
							if (e.key === "Enter") {
								_createTodo();
							}
						}}
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setTitle(e.currentTarget.value);
						}}
					/>
					<button type="button" onClick={() => _createTodo()}>
						<PlusIcon className="w-6 h-6 text-gray-500" />
					</button>
				</div>
				<ul className="flex flex-col space-y-4 py-8 w-11/12 md:w-auto">
					{todos?.map((todo) => (
						<TodoComponent
							key={todo.id}
							value={todo}
							updated={() => {
								refetch();
							}}
							deleted={() => {
								refetch();
							}}
						/>
					))}
				</ul>
			</div>
		</WithNavBar>
	);
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
	req,
	res,
	params,
}) => {
	const db = await getEnhancedPrismaFromCtx({ req, res });
	const space = await db.space.findUnique({
		where: { slug: params!.slug as string },
	});
	if (!space) {
		return {
			notFound: true,
		};
	}

	const list = await db.list.findUnique({
		where: { id: params!.listId as string },
	});
	if (!list) {
		return {
			notFound: true,
		};
	}

	const todos = await db.todo.findMany({
		where: { listId: params?.listId as string },
		include: {
			owner: true,
		},
		orderBy: {
			updatedAt: "desc",
		},
	});

	return {
		props: { space, list, todos },
	};
};
