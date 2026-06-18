<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m2.3 12.71 8.98 9c0.390.39 1.020.39 1.410l9.02-9a1 1 0 0 0 0-1.42l-9.02-9a11 0 0 0-1.410l-8.98 9a11 0 0 0 0 1.41zm6.71-2.71h5v-2l3 3-3 3v-2h-3v4h-2v-6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
