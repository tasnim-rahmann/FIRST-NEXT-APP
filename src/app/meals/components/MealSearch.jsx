"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MealSearch = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const searchQuery = { search };
        const url = `${pathname}?${new URLSearchParams(searchQuery)}`;
        router.push(url);
    }, [search, pathname, router]);

    return (
        <div>
            <label className="px-1 py-2 font-semibold">
                Search Your Favourite Food
            </label>
            <input
                type="text"
                className="focus:outline-0 w-full bg-gray-100 p-4 rounded-sm text-sm"
                placeholder="Search Here"
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default MealSearch;
