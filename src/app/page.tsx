import { auth, signIn, signOut } from "@/utils/auth";

export default async function Home() {
  let userImage: null | string = null;

  const session = await auth();
  userImage = session?.user?.image as string;

  return (
    <div className="container mx-auto">
      <nav className="text-right p-1">
        {session && (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              type="submit"
              className="p-2 rounded bg-gray-400 text-gray-800"
            >
              {userImage && (
                <img
                  src={userImage}
                  className="inline-block rounded-full "
                  width={30}
                  height={30}
                  alt="User Profile"
                />
              )}
              {` `}
              Sign out
            </button>
          </form>
        )}
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          {session ? (
            <h1>Authenticated!</h1>
          ) : (
            <button type="submit" className="border p-2">
              Sign in
            </button>
          )}
        </form>
      </main>
    </div>
  );
}
