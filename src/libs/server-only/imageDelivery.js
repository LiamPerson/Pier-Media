/**
 * Please be advised this file's location and name matters
 * as the next.config.js references it directly.
 *
 * This file should exclusively be used for the `next.config.js`.
 */

export default function imageLoader({ src }) {
	try {
		new URL(src) // Relative paths will throw an error and so should be handled like default /public nextjs images
	} catch {
		return src
	}
	/** @todo - Anyone: Should we support resizing and file-size quality improvements? */
	return `/api/cdn?p=${src}`
}
