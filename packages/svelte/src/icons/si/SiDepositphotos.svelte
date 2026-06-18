<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 24c5.12 0 9.06-3.94 9.06-9.06S17.12 5.88 12 5.88c-5.12 0-9.06 3.94-9.06 9.06S6.88 24 12 24Zm0-5.6c-1.95 0-3.46-1.51-3.46-3.46 0-1.95 1.51-3.46 3.46-3.46 1.96 0 3.46 1.51 3.46 3.46 0 1.95-1.51 3.46-3.46 3.46Zm2.63-12.24h6.16V0h-6.16v6.16Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
