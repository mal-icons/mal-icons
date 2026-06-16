<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 2H4c-1 0-2 0.9-2 2v3.01c0 0.720.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c0.9 0 2-0.9 2-2V8.7c0.57-0.35 1-0.97 1-1.69V4c0-1.1-1-2-2-2zm-1 18H5V9h14v11zm1-13H4V4h16v3z"}],["path",{"d":"M9 12h6v2H9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
