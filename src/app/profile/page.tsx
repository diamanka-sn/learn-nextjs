"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function Profile() {
    const router = useRouter()

    console.log(router)
    return <div>My profile
        <div>
            <ul>
                <li onClick={() => router.push('/profile/1')}>1</li>
                <li onClick={() => router.push('/profile/2')}>2</li>
                <li onClick={() => router.push('/profile/3')}>3</li>
            </ul>

            <div>

                <Link
                    prefetch={true}
                    href={{
                        pathname: '/profile/7',
                        query: {
                            username: "diamanka",
                            userId: 12,
                            person: JSON.stringify({
                                age: 18
                            })
                        }
                    }}> <div>est un profile</div>
                </Link>
                <Link href="/profile/4">Profile 4</Link>
                <Link href="/profile/5">Profile 5</Link>
            </div>
        </div>
    </div>
}