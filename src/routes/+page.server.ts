// export async function load() {
// 	const response = await fetch('http://localhost:5136/api/menu-item', {
// 		credentials: 'include',
// 		method: 'GET',
// 		headers: {
// 			Accept: 'application/json',
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*'
// 		}
// 	});
// 	const wea = response.json();
// 	console.log(response);
// 	return {
// 		wea
// 	};
// }

// src/routes/+page.server.ts
import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ url, locals: { safeGetSession } }) => {
  const { session } = await safeGetSession()

  // if the user is already logged in return them to the account page
  if (session) {
    throw redirect(303, '/account')
  }

  return { url: url.origin }
}

