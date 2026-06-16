<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M189-331q-63 0-106.5-43.5T39-481q0-63 43.5-106.5T189-631q63 0 106.5 43.5T339-481q0 63-43.5 106.5T189-331Zm492 89q-99.58 0-169.29-69.71Q442-381.42 442-481t69.71-169.29Q581.42-720 681-720t169.29 69.71Q920-580.58 920-481t-69.71 169.29Q780.58-242 681-242Zm0-60q75 0 127-52t52-127q0-75-52-127t-127-52q-75 0-127 52t-52 127q0 75 52 127t127 52Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
