<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 17a5.01 5.01 0 0 0 4.9-4H14v2h2v-2h2v3h2v-3h1v-2h-9.1A5.01 5.01 0 0 0 7 7c-2.76 0-5 2.24-5 5s2.24 5 5 5zm0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
