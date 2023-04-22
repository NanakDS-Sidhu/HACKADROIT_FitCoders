import { useRouter } from 'next/router'

import GroupChat from '@/components/Messages/GroupChat';
import Sidebar from '@/components/Sidebar';

export default function group_id() {
    const router = useRouter()
    const id =router.query.group_id;
    return(
        <div className='flex'>
            <Sidebar/>
        <GroupChat id={id}></GroupChat>
        </div>
    )
}
