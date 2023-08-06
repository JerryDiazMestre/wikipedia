'use client'
import { usePathname, useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

export default function Search() {
    const pathname = usePathname();
    const router = useRouter()
    const [search, setSearch] = useState("")

    const searchWikipedia = (e: FormEvent) => {
        e.preventDefault();
        router.push(`${pathname + 'search'}/${'?q=' + search}`);
    }
    return (
        <form onSubmit={searchWikipedia}>
            <div className='py-1'>
                <label>Search: </label>
                <input className='py-half px-1' onChange={e => setSearch(e.target.value)}></input>
                <button className='py-half px-1 ml-1' type="submit">Search</button>
            </div>
        </form>
    )
}
