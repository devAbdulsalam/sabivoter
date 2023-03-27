const page = () => {
	return (
		<div class="items-center w-full px-4 py-8 mx-auto my-2 text-green-500 bg-white rounded-lg shadow-md sm:w-11/12">
			<div class="container mx-auto">
				<div class="flex justify-between w-full px-4 py-2 items-center">
					<div class="text-xl font-bold">List of Candidates</div>
					<button class="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none">
						Print results
					</button>
				</div>
				<div class="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:justify-between w-full px-4 mb-2 mt-4 items-center">
					<div class="flex bg-gray-100 w-full sm:w-2/5 items-center rounded-lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 mx-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
						<input
							class="w-full bg-gray-100 outline-none py-2 border-transparent focus:border-transparent focus:ring-0 rounded-lg text-sm"
							type="text"
							placeholder="Search a candidate..."
						/>
					</div>
					<div class="flex-row space-x-2 items-center ">
						<select
							class="border border-gray-300 rounded-md text-gray-600 px-2 py-2 pl-2 pr-8 bg-white hover:border-gray-400 focus:outline-none text-xs
               focus:ring-0"
						>
							<option>Filter by</option>
							<option>Name</option>
							<option>Party</option>
							<option>Vote</option>
						</select>
						<select
							class="border border-gray-300 rounded-md text-gray-600 px-2 pl-2 py-2 pr-8 bg-white hover:border-gray-400 focus:outline-none text-xs
              focus:ring-0"
						>
							<option>Short by</option>
							<option>Name</option>
							<option>Party</option>
							<option>Vote</option>
						</select>
						<button
							class="border border-gray-300 rounded-md text-gray-600 px-3 py-[9px] bg-white hover:border-gray-400 focus:outline-none text-xs
            focus:ring-0"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-3 w-3"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div class="mt-6 overflow-x-auto">
					<table class="w-full table-auto">
						<thead class="">
							<tr class="text-xs md:text-sm font-semibold  text-center border-b-2 border-blue-500 uppercase">
								<th class="px-4 py-3">S/N</th>
								<th class="px-4 py-3 whitespace-nowrap">Full Name</th>
								<th class="px-4 py-3">Party</th>
								<th class="px-4 py-3 whitespace-nowrap ">Candidates Votes</th>
								<th class="px-4 py-3">Total Votes</th>
								<th class="px-4 py-3">Percentage</th>
							</tr>
						</thead>
						<tbody class="text-xs md:text-sm font-normal text-gray-700 text-center">
							<tr class="py-10 even:bg-amber-100 odd:bg-blue-100 hover:bg-gray-200 font-medium">
								<td class="px-2 py-2 md:px-4 md:py-4">1</td>
								<td class="px-2 py-2 md:px-4 md:py-4 whitespace-nowrap">
									Monstera Angelonis Monstera
								</td>
								<td class="px-2 py-2 md:px-4 md:py-4">ABC</td>
								<td class="px-2 py-2 md:px-4 md:py-4">250,000</td>
								<td class="px-2 py-2 md:px-4 md:py-4">1,000,000</td>
								<td class="px-2 py-2 md:px-4 md:py-4">25%</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="flex flex-col items-center w-full px-4 py-4 text-sm text-gray-500 justify-center mx-auto">
					<div class="flex items-center justify-between space-x-2">
						<a href="#" class="hover:text-gray-600">
							Previous
						</a>
						<div class="flex flex-row space-x-1">
							<div class="flex px-2 py-px text-white bg-blue-400 border border-blue-400">
								1
							</div>
							<div class="flex px-2 py-px border border-blue-400 hover:bg-blue-400 hover:text-white">
								2
							</div>
						</div>
						<a href="#" class="hover:text-gray-600">
							Next
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
