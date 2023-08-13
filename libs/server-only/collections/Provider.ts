import { PrismaClient } from '@prisma/client'
namespace Provider {
	/** @todo - Liam: Add more providers here to align with yt-dlp */
	export enum Options {
		Pier = 'Pier',
		YouTube = 'YouTube',
		SoundCloud = 'SoundCloud',
		Spotify = 'Spotify',
	}

	const Details = {
		[Options.Pier]: {
			name: 'Pier',
			domain: 'pier.local',
		},
		[Options.YouTube]: {
			name: 'YouTube',
			domain: 'youtube.com',
		},
		[Options.SoundCloud]: {
			name: 'SoundCloud',
			domain: 'soundcloud.com',
		},
		[Options.Spotify]: {
			name: 'Spotify',
			domain: 'spotify.com',
		},
	} as const

	export const get = async (provider: Options, prisma: PrismaClient) => {
		let providerDetails = await prisma.provider.findFirst({
			where: {
				domain: Details[provider].domain,
			},
		})
		if (!providerDetails) {
			providerDetails = await prisma.provider.create({
				data: {
					name: Details[provider].name,
					domain: Details[provider].domain,
				},
			})
		}
		return providerDetails
	}
	export const toProviderOption = (domain: string) => {
		if (!domain) return Options.Pier
		const validProviders = Object.entries(Details).find(([_, details]) => details.domain === domain)
		if (!validProviders) return Options.Pier
		return validProviders[0] as Options
	}

	export type Type = Awaited<ReturnType<typeof get>>
}

export default Provider
