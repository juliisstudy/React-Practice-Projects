import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

import db from "../db/db";
import { formatNumber, formatCurrency } from "@/lib/formatter";

async function getSalesData() {
  const data = await db.order.aggregate({
    _sum: { pricePaidInCents: true },
    _count: true,
  });
  return {
    amount: (data._sum.pricePaidInCents || 0) / 100,
    numberOfSales: data._count,
  };
}
// async function getUserData() {
//   const userCount = await db.user.count();
//   const orderData = await db.order.aggregate({
//     _sum: { pricePaidInCents: true },
//   });
// }

async function getUserData() {
  const [userCount, orderData] = await Promise.all([
    db.user.count(),
    db.order.aggregate({
      _sum: { pricePaidInCents: true },
    }),
  ]);
}

export default async function AdminDashboard() {
  const salesData = await getSalesData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title="Sales"
        subtitle={`${formatNumber(salesData.numberOfSales)}Orders`}
        body={formatCurrency(salesData.amount)}
      />
      <DashboardCard
        title=""
        subtitle={`${formatNumber(salesData.numberOfSales)}Orders`}
        body={formatCurrency(salesData.amount)}
      />
      <DashboardCard
        title="Active Products"
        subtitle={`${formatNumber(salesData.amount)}Inactive`}
        body={formatNumber(salesData.amount)}
      />
    </div>
  );
}

type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string;
};

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}
