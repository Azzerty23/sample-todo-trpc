import {
	SpaceContext,
	UserContext,
	useCurrentSpace,
	useCurrentUser,
} from "@lib/context";
import { queryClient, trpcClient, TRPCProvider } from "@lib/trpc";
import { QueryClientProvider } from "@tanstack/react-query";
import AuthGuard from "components/AuthGuard";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

function AppContent(props: { children: JSX.Element | JSX.Element[] }) {
	const user = useCurrentUser();
	const space = useCurrentSpace();

	return (
		<AuthGuard>
			<UserContext.Provider value={user}>
				<SpaceContext.Provider value={space}>
					<div className="h-screen flex flex-col">{props.children}</div>
				</SpaceContext.Provider>
			</UserContext.Provider>
		</AuthGuard>
	);
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
				<SessionProvider session={session}>
					<AppContent>
						<div className="flex-grow h-100">
							<Component {...pageProps} />
							<ToastContainer
								position="top-center"
								autoClose={2000}
								hideProgressBar={true}
							/>
						</div>
					</AppContent>
				</SessionProvider>
			</TRPCProvider>
		</QueryClientProvider>
	);
}

export default MyApp;
