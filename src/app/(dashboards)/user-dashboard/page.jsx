import DashboardLayout from "../layout";

const DashboardPage = () => {
    // Dummy data
    const stats = [
        { title: "Total Users", value: 1245 },
        { title: "Active Sessions", value: 312 },
        { title: "New Orders", value: 58 },
        { title: "Revenue", value: "$8,420" },
    ];

    const recentOrders = [
        { id: 1, product: "Wireless Mouse", price: "$25" },
        { id: 2, product: "Bluetooth Headphones", price: "$79" },
        { id: 3, product: "Mechanical Keyboard", price: "$120" },
        { id: 4, product: "Gaming Monitor", price: "$299" },
    ];

    return (
        <>
            <header className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>
                <p className="text-gray-500">Welcome back! Here’s what’s happening today.</p>
            </header>

            {/* Stats Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {stats.map((s) => (
                    <div key={s.title} className="bg-white p-6 rounded-2xl shadow">
                        <h3 className="text-sm text-gray-500">{s.title}</h3>
                        <p className="mt-2 text-2xl font-semibold text-gray-900">{s.value}</p>
                    </div>
                ))}
            </section>

            {/* Recent Orders */}
            <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h3>
                <div className="bg-white rounded-2xl shadow p-6">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="pb-3">Order ID</th>
                                <th className="pb-3">Product</th>
                                <th className="pb-3">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((o) => (
                                <tr key={o.id} className="border-b last:border-none">
                                    <td className="py-2">{o.id}</td>
                                    <td>{o.product}</td>
                                    <td>{o.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default DashboardPage;