<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2z"}],["path",{"d":"M13 16h-2v2h2zm0-6h-2v5h2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
