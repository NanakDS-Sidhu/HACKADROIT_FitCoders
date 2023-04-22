import { useRouter } from 'next/router'

import GroupChat from '@/components/Messages/GroupChat';

export default function group_id() {
    const router = useRouter()
    const id =router.query.group_id;
    return(
        <GroupChat id={id}></GroupChat>
    )
}
