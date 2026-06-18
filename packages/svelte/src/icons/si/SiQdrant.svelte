<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m12 16.5 3.9-2.25v-4.5L12 7.5 8.1 9.75v4.5zM1.61 18 12 24l3.9-2.25v-4.5L12 19.5l-6.49-3.75v-7.5L12 4.5l6.5 3.75v15L22.39 21V6L12 0 1.61 6Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
