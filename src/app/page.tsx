"use client";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function Home() {
  const [products, setProducts] = useState<Product[] | null>(null);

  // ページ表示時にAPIからデータを取得
  useEffect(() => {
    const fetchData = async () => {
      try {
        // APIからのデータを取得する処理
        const res = await fetch(`http://localhost:3000/api/products`);
        const data = await res.json();
        // 取得したデータをstateに設定
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        {products
          ? products.map((product: Product) => (
              <div key={product.id}>
                <div>
                商品：{product.name}
                </div>
                <div>
                  金額：{product.price}
                </div>
                </div>
            ))
          : null}
      </div>
    </main>
  );
}
