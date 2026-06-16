<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 4v5H6V4h12m0-2H6c-1.1 0-2 0.9-2 2v5c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 13v5H6v-5h12m0-2H6c-1.1 0-2 0.9-2 2v5c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2v-5c0-1.1-0.9-2-2-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
