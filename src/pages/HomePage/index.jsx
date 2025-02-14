import React from "react";
import Hero from "./Hero";
import CategoryHighlights from "./CategoryHighlights";
import ProductsTopRated from "./ProductsTopRated";
import Banners from "./Banners";
import ProductsFeatured from "./ProductsFeatured";
import Console from "./Console";
import ProductsTrending from "./ProductsTrending";
import Clients from "./Clients";
import ProductBanners from "./ProductBanners";
import ProductsRecently from "./ProductsRecently";

export default function Index() {
    return (
        <>
            <main className="main">
                <Hero />
                <CategoryHighlights />
                <ProductsTopRated />
                <Banners />
                <ProductsFeatured />
                <Console />
                <ProductsTrending />
                <Clients />
                <ProductBanners/>
                <ProductsRecently/>
            </main>
        </>
    );
}
