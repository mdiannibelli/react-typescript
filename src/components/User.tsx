import React, { useState } from 'react'

interface Usuario {
    id: string;
    name: string;
}

export default function User() {
    const [user, setUser] = useState<Usuario>()
    const login = () => {
        setUser({
            id: '12345',
            name: 'Jorge'
        })
    }
  return (
    <div>
        <button onClick={login}>Insert User</button>
        <p>{JSON.stringify(user)}</p>
    </div>
  )
}
