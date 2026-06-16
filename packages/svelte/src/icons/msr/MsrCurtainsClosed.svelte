<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M220-180h145v-600H220v600Zm205 0h110v-600H425v600Zm170 0h145v-600H595v600Zm-375 0v-600 600Zm520 0v-600 600Zm-630 60q-12.75 0-21.37-8.68Q80-137.35 80-150.18 80-163 88.63-171.5T110-180h50v-600q0-24.75 17.63-42.37T220-840h520q24.75 0 42.38 17.63T800-780v600h50q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-120H110Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
