import { useEffect, useState, useRef } from "react";
import { UsersAPI } from "../../../api/usersAPI";
import Swal from "sweetalert2";
import { Dropdown, DropdownItem, Spinner } from "flowbite-react";
import Arrow_icon from "../../../assets/images/carbon_overflow-menu-vertical (1).svg";
import Phone_icon from "../../../assets/images/Phone_icon.svg";
import Mail_icon from "../../../assets/images/mail_icon.svg";
import Location_icon from "../../../assets/images/Location_icon.svg";
import Eye_Icon from "../../../assets/images/Eye_icon.svg";
interface User {
  id: number;
  name: string;
  email: string;
  utype: string;
  status: number;
  companies: Company[];
  image: string | null;
  title: string;

}

interface Company {
  id: number;
  title: string;
  image: string | null;
  address: string;
  email: string;
  phone: string;
  status: number;
  subscribe_link: string | null;
  web_address: string | null;
}
interface UserListProps {
  search: string;
  refetchFlag: number;
  onEdit: (user: User) => void;
}

const Base_Upload_Url = import.meta.env.VITE_BASE_UPLOAD_URL
const UserList = ({ search, refetchFlag, onEdit }: UserListProps) => {

  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);


  const observerRef = useRef<HTMLDivElement | null>(null);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    isFirstLoad.current = true;
    setUsers([]);
    setPage(1);
    setHasMore(true);
  }, [search, refetchFlag]);

  useEffect(() => {
    if (loading || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !loading &&
          hasMore &&
          !isFirstLoad.current
        ) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = observerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [loading, hasMore]);

  useEffect(() => {
    fetchUsers(page, search);
  }, [page, search, refetchFlag]);

  const fetchUsers = async (pageNumber: number, search: string) => {
    setLoading(true);

    try {
      const response = await UsersAPI.list(pageNumber, search);
      const newUsers = response.data.data;

      setUsers((prev) =>
        pageNumber === 1 ? newUsers : [...prev, ...newUsers]
      );
      if (newUsers.length === 0) {
        setHasMore(false);
      }
      if (pageNumber === 1) {
        isFirstLoad.current = false;
      }

    } catch (error: any) {
      if (error.response?.status === 401) {
        Swal.fire("Session Expired", "Please login again", "warning");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user: User) => {
    onEdit(user);
  };

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This user will be deleted permanently",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      try {
        await UsersAPI.delete(id)
        setUsers((previosUser) => previosUser.filter((user) => user.id !== id))
        Swal.fire("Deleted!", "User has been deleted.", "success");

      } catch (error) {
        Swal.fire("Error", "Failed to delete user", "error");

      }
    }
  }



  return (
    <div className="grid grid-cols-3 gap-6 mt-4">
      {users.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-[0px_10px_32px_0px_rgba(0,0,0,0.08)] border p-4"
        >
          <div className="flex items-center justify-between gap-4">

            <div className="flex gap-5 items-center justify-center">
              <div className="h-full w-16">
                {/* <img
                src={
                  item.User?.[0]?.image
                    ? `upload/user/${item.companies[0].image}`
                    : "/placeholder.png"
                }
                className="rounded-md object-cover"
              /> */}

                <img
                  src={
                    item.image
                      ? `${Base_Upload_Url}/user/${item.image}`
                      : `${Base_Upload_Url}/user/member.jpg`
                  }
                  className="rounded-md object-cover"
                  alt={item.name}
                />

              </div>

              <div className="flex flex-col items-center justify-center space-y-1">
                <h1 className="text-black text-xl font-semibold">
                  {item.name}
                </h1>
                <p className="text-gray-500 text-xs mt-2">
                  {
                    item.utype === "sadmin" ? "Super Admin" : item.utype === "cadmin" ? "Manager" : item.utype
                  }
                </p>
              </div>
            </div>

            <Dropdown
              inline
              renderTrigger={(props) => (
                <img
                  {...props}
                  src={Arrow_icon}
                  alt="Arrow"
                  className="w-8 h-8 cursor-pointer"
                />
              )}
            >
              <DropdownItem onClick={() => handleEdit(item)}>
                Edit
              </DropdownItem>
              <DropdownItem onClick={() => handleDelete(item.id)}>
                Delete
              </DropdownItem>
            </Dropdown>
          </div>

          <div className="mt-8">
            <div className="flex gap-4 mb-4">
              <img src={Phone_icon} className="h-5 w-5" />
              <p>{item.name}</p>
            </div>

            <div className="flex gap-4 mb-4">
              <img src={Mail_icon} className="h-5 w-5" />

              <p>{item.email}</p>

            </div>

            <div className="flex gap-4 mb-4">
              <img src={Location_icon} className="h-5 w-5 self-start mt-1" />

              <div className="flex flex-wrap">
                {
                  item.companies && item.companies.length > 0 ? (
                    item.companies.map((c, i) => (
                      <span key={c.id} className="mr-1">
                        {c.title}{i < item.companies.length - 1 && ","}
                      </span>
                    ))
                  ) : (<span className="text-gray-400 italic">
                    No company
                  </span>)
                }
              </div>
            </div>
            <hr />

            <div
              className="mt-5 flex items-center justify-center gap-3 cursor-pointer"

            >
              <img src={Eye_Icon} />
              <p className="text-blue-700 text-sm font-medium">
                View Bookings
              </p>
            </div>

          </div>
        </div>
      ))}

      <div
        ref={observerRef}
        className="col-span-3 flex justify-center py-6"
      >
        {loading && <Spinner color="info" aria-label="Info spinner example" />
        }
        {!hasMore && <p className="text-gray-400">No more users</p>}
      </div>
    </div>
  );
};

export default UserList;