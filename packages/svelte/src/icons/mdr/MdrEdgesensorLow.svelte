<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 7c0.55 0 1 0.45 1 1v5c0 0.55-0.45 1-1 1s-1-0.45-1-1V8c0-0.550.45-1 1-1zm18 3c0.55 0 1 0.45 1 1v5c0 0.55-0.45 1-1 1s-1-0.45-1-1v-5c0-0.550.45-1 1-1zm-5-7.99L8 2c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2V4c0-1.1-0.9-1.99-2-1.99zM16 17H8V7h8v10z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
