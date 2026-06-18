<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m3 18 6-6-6-6v12zm12-6 6 6V6l-6 6zm-4-9h2v3h-2zm0 5h2v3h-2zm0 5h2v3h-2zm0 5h2v3h-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
