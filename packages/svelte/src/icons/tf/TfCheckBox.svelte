<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 5.76h1v10.24h-14v-14h8.39v1h-7.39v12h12v-9.24zM4.85 8.15l-0.71 0.71 3.43 3.43 7.59-11.51-0.83-0.55-6.91 10.49-2.57-2.57z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
