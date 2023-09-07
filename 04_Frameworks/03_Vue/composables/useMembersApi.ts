import { membersService } from "~/services/members";
import { Member } from "~/types";

export default async function useMembersApi() {
    const members: Member[] = await membersService.get()
    const totalMembers = computed(() =>  members.length)

    return {
        members,
        totalMembers
    }
}