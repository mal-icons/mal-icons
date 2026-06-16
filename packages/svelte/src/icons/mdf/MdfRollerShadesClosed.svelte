<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 19V3H4v16H2v2h8.25c0 0.970.78 1.75 1.75 1.75s1.75-0.78 1.75-1.75H22v-2h-2zM6 19v-2h5v2H6zm7 0v-2h5v2h-5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
