<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 3L2 6L3 15.46L12 22.5L21 15.46L22 6L12 3ZM19.84 7.44L12 19.96L4.16 7.44L12 5.09L19.84 7.44Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
