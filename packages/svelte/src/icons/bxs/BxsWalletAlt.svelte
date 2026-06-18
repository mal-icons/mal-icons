<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 9h8v6h-8z"}],["path",{"d":"M20 3H5C3.35 3 2 4.35 2 6v12c0 1.65 1.35 3 3 3h15c1.1 0 2-0.9 2-2v-2h-8c-1.1 0-2-0.9-2-2V9c0-1.10.9-2 2-2h8V5c0-1.1-0.9-2-2-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
