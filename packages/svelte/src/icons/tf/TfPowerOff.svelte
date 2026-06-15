<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 9.5c0 4.14-3.36 7.5-7.5 7.5s-7.5-3.36-7.5-7.5c0-3.5 2.48-6.58 5.89-7.33l0.21 0.98c-2.96 0.65-5.1 3.32-5.1 6.35 0 3.58 2.92 6.5 6.5 6.5s6.5-2.92 6.5-6.5c0-3.03-2.14-5.7-5.1-6.35l0.22-0.98c3.41 0.75 5.88 3.83 5.88 7.33zM9 0h-1v10h1v-10z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
