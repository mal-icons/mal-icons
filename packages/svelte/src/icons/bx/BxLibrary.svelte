<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 3h2v18H7zM4 3h2v18H4zm6 0h2v18h-2zm9.06 17.79-6.22-16.89 1.88-0.69 6.22 16.89z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
