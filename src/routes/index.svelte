<script>
	import { onMount } from 'svelte'
	import { goto, stores } from '@sapper/app'
	import { filter, param1, param2, param3, param4, param5} from '../stores/filterStore.js'

	const { page } = stores()
	const { query, path } = $page

	const new_goto = (vals) => {
		let url = Object.keys(vals).length > 0 ? path+'?'+(new URLSearchParams(vals)) : path
		console.log(url)
		goto(url)
	}

	$: new_goto($filter)
	// onMount(() => filter.subscribe(value => new_goto(value)))

</script>

<ul>
	<li><label>	Param 1 <input type="checkbox" bind:checked={$param1}> </label></li>
	<li><label>	Param 2 <input type="checkbox" bind:checked={$param2}> </label></li>
	<li><label>	Param 3 <input type="checkbox" bind:checked={$param3}> </label></li>
	<li><label>	Param 4 <input type="checkbox" bind:checked={$param4}> </label></li>
	<li><label>	Param 5 <input type="checkbox" bind:checked={$param5}> </label></li>
</ul>
