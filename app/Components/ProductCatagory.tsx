"use client"
import { Avatar } from "@heroui/react";
import React from "react";

function ProductCatagory() {
  return (
    <div>
      <div>
      <h1 className="text-3xl font-bold">Shop Popular Categories</h1>
      <div>
      <div className="flex  items-center gap-10 m-5">
      <Avatar
        className="w-20 h-20 text-large"
        src="https://freshcart77.myshopify.com/cdn/shop/collections/dairy-bread-eggs.png?v=1723122334&width=112"
      />
            <Avatar
        className="w-20 h-20 text-large"
        src="https://freshcart77.myshopify.com/cdn/shop/collections/fruits-vegetables.png?v=1723122484&width=112"
      />
            <Avatar
        className="w-20 h-20 text-large"
        src="https://freshcart77.myshopify.com/cdn/shop/collections/snack-munchies.png?v=1723122668&width=112"
      />
            <Avatar
        className="w-20 h-20 text-large"
        src="https://freshcart77.myshopify.com/cdn/shop/collections/bakery-biscuits.png?v=1723122773&width=112"
      />      <Avatar
      className="w-20 h-20 text-large"
      src="https://freshcart77.myshopify.com/cdn/shop/collections/instant-food.png?v=1723122913&width=112"
    />      <Avatar
    className="w-20 h-20 text-large"
    src="https://freshcart77.myshopify.com/cdn/shop/collections/tea-coffee-drinks.png?v=1723123029&width=112"
  />      <Avatar
  className="w-20 h-20 text-large"
  src="https://freshcart77.myshopify.com/cdn/shop/files/product-img-18.jpg?v=1723016079&width=720"
/>      <Avatar
        className="w-20 h-20 text-large"
        src="https://freshcart77.myshopify.com/cdn/shop/files/product-img-15.jpg?v=1723016086&width=720"
      />      <Avatar
      className="w-20 h-20 text-large"
      src="https://freshcart77.myshopify.com/cdn/shop/files/product-img-13.jpg?v=1723016062&width=720"
    />      <Avatar
    className="w-20 h-20 text-large"
    src="https://freshcart77.myshopify.com/cdn/shop/files/product-img-10-1.jpg?v=1723016028&width=720"
  />
    </div>
      </div>
      </div>
      
      <div>
        <h1 className="text-3xl font-bold">New Products</h1>
      </div>
    </div>
  );
}

export default ProductCatagory;
