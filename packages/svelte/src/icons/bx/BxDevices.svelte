<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 3H7c-1.1 0-2 0.9-2 2v2H4c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2h6c1.1 0 2-0.9 2-2h8c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zM10 19H4V9h6l0 10zm10-2H12V9c0-1.1-0.9-2-2-2H7V5h13l0 12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
