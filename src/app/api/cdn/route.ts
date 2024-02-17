/**
 * While I figure out a better workaround,
 * this file simply serves from the local filesystem
 * with no security.
 */

import { constants } from 'node:fs'
import { readFile } from 'node:fs/promises'

import { NextRequest, NextResponse } from 'next/server'

import System from '@/libs/server-only/System'

/**
 * Handles getting all files
 * from the local storage of this computer.
 *
 * @note p = path
 */

export const GET = async (request: NextRequest) => {
	const url = new URL(request.url)
	const path = url.searchParams.get('p') // p = path

	if (typeof path !== 'string') {
		throw new Error('No path provided.')
	}
	if (!System.isAccessible(path, { mode: constants.R_OK })) {
		throw new Error(`Path '${path}' is not accessible.`)
	}

	const file = await readFile(path)
	const response = new NextResponse(file)

	const range = request.headers.get('range')
	if (range) {
		/** @todo - Anyone: Perhaps there are some improvements we could make here with performance. There are lots of requests from this. */
		response.headers.set('Content-Range', range)
	}

	/** @todo - Anyone: Should we put the proper headers here? */
	response.headers.set('Accept-Ranges', 'bytes')
	response.headers.set('Content-Type', 'application/octet-stream')
	response.headers.set('Content-Length', file.length.toString())

	return response
}
