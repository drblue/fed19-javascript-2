import React from 'react';
import { ReactQueryConfigProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import config from './config';
import GlobalFetchingSpinner from './components/partials/GlobalFetchingSpinner';
import Home from './components/Home';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Navbar from './components/nav/Navbar';
import NotFound from './components/NotFound';
import Products from './components/products/Products';
import ProductDetails from './components/products/ProductDetails';
import AuthContextProvider from './contexts/AuthContextProvider';
import ThemeContextProvider from './contexts/ThemeContextProvider';

function App() {
	return (
		<ReactQueryConfigProvider config={config.reactQueryConfig}>
			<AuthContextProvider>
				<ThemeContextProvider>
					<Navbar />

					<div id="App" className="container py-3">
						<GlobalFetchingSpinner />
						<Routes>

							<Route path="/">
								<Home />
							</Route>

							<Route path="/login">
								<Login />
							</Route>

							<Route path="/logout">
								<Logout />
							</Route>

							<Route path="/products">
								<Route path="/">
									<Products />
								</Route>

								<Route path="/:productId">
									<ProductDetails />
								</Route>
							</Route>

							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
					<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
				</ThemeContextProvider>
			</AuthContextProvider>
		</ReactQueryConfigProvider>
	);
}

export default App;
