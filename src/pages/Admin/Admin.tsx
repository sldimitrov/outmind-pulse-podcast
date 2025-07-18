import {Link} from "react-router-dom";

export default function Admin() {
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
            <section className="flex flex-col items-center justify-center full mt-10">
                <h2>Manage Clips</h2>
                <div>
                    <p className="text-muted-foreground">
                        This section is under development. Please check back later.
                    </p>
                </div>
            </section>
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
