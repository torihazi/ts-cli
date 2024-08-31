type Product = {
  id: string;
  name: string;
  category: string;
  stock: number;
};

const inventory: Product[][] = [
  [
    { id: "A1", name: "Tシャツ", category: "衣類", stock: 50 },
    { id: "A2", name: "ジーンズ", category: "衣類", stock: 30 },
  ],
  [
    { id: "B1", name: "スマートフォン", category: "電子機器", stock: 20 },
    { id: "B2", name: "ノートPC", category: "電子機器", stock: 15 },
  ],
];

// 課題: カテゴリごとの在庫数を合計し、{ category: string, totalStock: number }の形式のオブジェクトの配列を返す関数を作成してください。
type CategoryStock = Pick<Product, "category"> & {
  totalStock: number;
};

const getCategoryStock = (inventory: Product[][]): CategoryStock[] => {
  const flatInventory: Product[] = inventory.flat();
  const uniqueCategories = new Set(flatInventory.map((item) => item.category));

  return Array.from(uniqueCategories).map((category) => {
    const totalStock = flatInventory
      .filter((item) => item.category === category)
      .reduce((arr, item) => arr + item.stock, 0);

    return { category, totalStock };
  });
};

console.log(getCategoryStock(inventory));
