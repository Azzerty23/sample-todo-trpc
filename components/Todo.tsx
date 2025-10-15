import type { TodoModel, UserModel } from "@generated/zenstack/models";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useTRPC } from "@lib/trpc";
import type { ChangeEvent } from "react";
import Avatar from "./Avatar";
import TimeInfo from "./TimeInfo";

import { useMutation } from "@tanstack/react-query";

type Props = {
	value: TodoModel & { owner: UserModel };
	updated?: (value: TodoModel) => any;
	deleted?: (value: TodoModel) => any;
};

export default function TodoComponent({ value, updated, deleted }: Props) {
    const trpc = useTRPC();
    const { mutateAsync: update } = useMutation(trpc.todo.update.mutationOptions());
    const { mutateAsync: del } = useMutation(trpc.todo.delete.mutationOptions());

    const deleteTodo = async () => {
		await del({ where: { id: value.id } });
		if (deleted) {
			deleted(value);
		}
	};

    const toggleCompleted = async (completed: boolean) => {
		if (completed === !!value.completedAt) {
			return;
		}
		const newValue = await update({
			where: { id: value.id },
			data: { completedAt: completed ? new Date() : null },
		});
		if (updated && newValue) {
			updated(newValue);
		}
	};

    return (
		<div className="border rounded-lg px-8 py-4 shadow-lg flex flex-col items-center w-full lg:w-[480px]">
			<div className="flex justify-between w-full mb-4">
				<h3
					className={`text-xl line-clamp-1 ${
						value.completedAt
							? "line-through text-gray-400 italic"
							: "text-gray-700"
					}`}
				>
					{value.title}
				</h3>
				<div className="flex">
					<input
						type="checkbox"
						className="checkbox mr-2"
						checked={!!value.completedAt}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							toggleCompleted(e.currentTarget.checked)
						}
					/>
					<TrashIcon
						className="w-6 h-6 text-gray-500 cursor-pointer"
						onClick={() => {
							deleteTodo();
						}}
					/>
				</div>
			</div>
			<div className="flex justify-end w-full space-x-2">
				<TimeInfo value={value} />
				<Avatar user={value.owner} size={18} />
			</div>
		</div>
	);
}
