export type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>
		}
	: T

export type ItemOf<T> = T extends (infer U)[] ? U : never
