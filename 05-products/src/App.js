import React from 'react';
import { ReactQueryConfigProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import config from './config';
import GlobalFetchingSpinner from './components/partials/GlobalFetchingSpinner';
import Home from './components/Home';
import Navbar from './components/nav/Navbar';
import NotFound from './components/NotFound';
import Products from './components/products/Products';
import ProductDetails from './components/products/ProductDetails';
import ThemeContextProvider from './contexts/ThemeContextProvider';

function App() {
	return (
		<ReactQueryConfigProvider config={config.reactQueryConfig}>
			<ThemeContextProvider>
				<Navbar />

				<div id="App" className="container py-3">
					<GlobalFetchingSpinner />
					<Routes>

						<Route path="/">
							<Home />
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
		</ReactQueryConfigProvider>
	);
}

export default App;
