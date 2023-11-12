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

	export const upsert = async (provider: Options, prisma: PrismaClient) => {
		const providerDetails = await prisma.provider.upsert({
			where: {
				domain: Details[provider].domain,
			},
			update: {
				name: Details[provider].name,
				domain: Details[provider].domain,
			},
			create: {
				name: Details[provider].name,
				domain: Details[provider].domain,
			},
		})
		return providerDetails
	}
	export const toProviderOption = (domain: string) => {
		if (!domain) return Options.Pier
		const validProviders = Object.entries(Details).find(([_, details]) => details.domain === domain)
		if (!validProviders) return Options.Pier
		return validProviders[0] as Options
	}

	export type Type = Awaited<ReturnType<typeof upsert>>
}

export default Provider
