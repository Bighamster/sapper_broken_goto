import { writable, derived } from 'svelte/store'

export const param1 = writable()
export const param2 = writable()
export const param3 = writable()
export const param4 = writable()
export const param5 = writable()

export const filter = derived([ param1,
                                param2,
                                param3,
                                param4,
                                param5],
                              ([$param1,
                                $param2,
                                $param3,
                                $param4,
                                $param5]) => {
  let h = {}
	if( $param1 ) h = {...h, param1: $param1}
	if( $param2 ) h = {...h, param2: $param2}
	if( $param3 ) h = {...h, param3: $param3}
	if( $param4 ) h = {...h, param4: $param4}
	if( $param5 ) h = {...h, param5: $param5}
  return h
})
