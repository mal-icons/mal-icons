<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 3H4c-1.1 0-2 0.9-2 2v11c0 1.10.9 2 2 2h6l-2 2v1h8v-1l-2-2h6c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
