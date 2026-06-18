<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0A12 12 0 1 0 24 12 12.01 12.01 0 0 0 12 0m0 2.46a9.53 9.53 0 0 1 9.51 8.89 9.53 9.53 0 0 1-0.86 4.65H3.35a9.53 9.53 0 0 1 0.62-9.14 9.53 9.53 0 0 1 8.04-4.4"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
