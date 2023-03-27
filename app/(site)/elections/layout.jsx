import Link from "next/link"
import { getData } from "../../../utils/AxiosApis";
// import Election
import Elections from "./elections";

const ElectionLayout = async ({ children }) => {
  let data = await getData("https://vote-me.cyclic.app/api/v1/allElection", {
		credentials: "include",
	});
  return (
    <section className='flex h-[100%] w-full mt-10 py-10'>
      <aside className='w-1/3 lg:w-1/4 bg-green-500 p-10 h-[100%]'>
          <div className="my-2 p-10 flex flex-col items-center">
              <Link href={`./elections/countvote`}>Count voting</Link>
              <Link href={`./elections`}>Elections</Link>
          </div>
          <Elections elections={data.msg}></Elections>
      </aside>
      <main className="w-full">{children}</main>
    </section>
  )
}
export default ElectionLayout