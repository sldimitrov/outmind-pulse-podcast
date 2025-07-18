import {Link} from "react-router-dom";
import {useCreateClip} from "../../queries/useClips";

export default function Admin() {
    const mutation = useCreateClip();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const title = formData.get("title") as string;
        const difficulty = formData.get("difficulty") as string;
        const duration = formData.get("duration") as string;

        // Here you would typically send the data to your backend
        mutation.mutate({ title, difficulty, duration });
    }

    return (
        <div className="flex flex-col items-center justify-center max-w-[60%] mx-auto p-4 rounded-lg shadow-lg mt-10">
            <Link to="/" className="absolute top-4 left-4 text-muted-foreground">
                Back to Home
            </Link>
            <header className="text-3xl font-bold mb-4">
                <h1>
                    Admin Dashboard
                </h1>
            </header>
            <hr className="h-0.5 w-full border-white"></hr>
            <form onSubmit={handleSubmit}>
                <section className="flex flex-col items-center justify-center full mt-10">
                    <h2>Manage Clips</h2>
                    <section className="flex flex-col items-center justify-center">
                        <input name="title" type="text" placeholder="Title" className="input input-bordered text-black w-full max-w-xs mb-4" />
                        <input name="difficulty" type="text" placeholder="Difficulty" className="input input-bordered text-black w-full max-w-xs mb-4" />
                        <input name="duration" type="text" placeholder="Duration" className="input input-bordered text-black w-full max-w-xs mb-4" />
                    </section>
                    <button type="submit" className="bg-gray-200 p-2 w-full text-black hover:bg-gray-300">Save Clip</button>
                </section>
            </form>
            <section className="flex flex-col items-center justify-center full mt-10">
                <h2>Manage Users</h2>
                <div>
                    <p className="text-muted-foreground">
                        This section is under development. Please check back later.
                    </p>
                </div>
            </section>
        </div>
    )
}
