<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 2h-8L4 8v12c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 2v16H6V8.83L10.83 4H18zM7 17h2v2H7zm8 0h2v2h-2zm-8-6h2v4H7zm4 4h2v4h-2zm0-4h2v2h-2zm4 0h2v4h-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
