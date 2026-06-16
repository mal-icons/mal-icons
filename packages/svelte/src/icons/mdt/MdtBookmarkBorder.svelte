<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 3H7c-1.1 0-2 0.9-2 2v16l7-3 7 3V5c0-1.1-0.9-2-2-2zm0 15-5-2.18L7 18V5h10v13z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
