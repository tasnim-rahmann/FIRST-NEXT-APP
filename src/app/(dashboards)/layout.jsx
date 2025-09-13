const DashboardLayout = ({ children }) => {
    return (
        <div className="min-h-screen grid grid-cols-12 bg-gray-50">
            {/* Sidebar */}
            <aside className="col-span-3 lg:col-span-2 bg-gray-800 text-white p-6 space-y-6">
                <h1 className="text-2xl font-bold tracking-wide">MyApp</h1>
                <nav>
                    <ul className="space-y-4">
                        <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
                        <li className="hover:text-gray-300 cursor-pointer">Users</li>
                        <li className="hover:text-gray-300 cursor-pointer">Reports</li>
                        <li className="hover:text-gray-300 cursor-pointer">Settings</li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="col-span-9 lg:col-span-10 p-8">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
