import MealSearch from "./components/MealSearch";

const MealPage = async ({ searchParams }) => {
    const query = await searchParams;
    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`);
            const data = await res.json();
            // setMeals(data?.meals || []);
            return data.meals;
        } catch (err) {
            console.log(err);
            // setMeals([]);
            return [];
        }
    };

    const meals = await fetchMeals();

    return (
        <div className="max-w-7xl mx-auto my-12">
            <div className="max-w-lg mx-6">
                <MealSearch />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {meals.map((meal) => (
                    <div
                        key={meal.idMeal}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 flex flex-col gap-2">
                            <h2 className="text-lg font-semibold text-gray-800">{meal.strMeal}</h2>
                            <span className="text-sm text-gray-500">{meal.strCategory}</span>
                            <button className="mt-2 inline-block bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                                View Recipe
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MealPage;