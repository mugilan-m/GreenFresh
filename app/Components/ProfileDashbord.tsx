import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User} from "@heroui/react";
import { signOut, useSession } from "next-auth/react";

export default function ProfileDashbord() {
    const {data:session}=useSession(); 
  return (
    <div className="flex items-center gap-4 mb-10">

      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: session?.user?.image || "/images/avatar.png",
              alt: "User Avatar",
            }}
            className="transition-transform"
            name={session?.user?.name || "User"}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">@{session?.user?.email}</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout" color="danger" >
           <button onClick={()=>signOut()}> Log Out</button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
