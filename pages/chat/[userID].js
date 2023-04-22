import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import supabase from '@/config/SupabaseConfig';

export default function ChatApp() {
    const router = useRouter()
    const id =router.query.userID;
    return(
        <UserListChat></UserListChat>
    )
}
