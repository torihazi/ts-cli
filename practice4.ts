type MenuItem = {
  id: string;
  name: string;
  price: number;
};

type Order = {
  tableNumber: number;
  items: MenuItem[];
};

const orders: Order[] = [
  {
    tableNumber: 1,
    items: [
      { id: "M1", name: "パスタ", price: 1200 },
      { id: "M2", name: "サラダ", price: 500 },
    ],
  },
  {
    tableNumber: 2,
    items: [
      { id: "M3", name: "ステーキ", price: 2000 },
      { id: "M4", name: "スープ", price: 400 },
      { id: "M2", name: "サラダ", price: 500 },
    ],
  },
];

// 課題: 各テーブルの注文合計金額を計算し、{ tableNumber: number, totalAmount: number }の形式のオブジェクトの配列を返す関数を作成してください。
type CalculateTableTotalsType = { tableNumber: number; totalAmount: number };
const calculateTableTotals = (orders: Order[]): CalculateTableTotalsType[] =>
  orders.map((order) => ({
    tableNumber: order.tableNumber,
    totalAmount: order.items.reduce((arr, item) => arr + item.price, 0),
  }));

console.log(calculateTableTotals(orders));
