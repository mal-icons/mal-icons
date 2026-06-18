<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.45 7.05L2.5 12L7.45 16.95L8.86 15.53L6.33 13H17.67L15.14 15.54L16.55 16.95L21.5 12L16.55 7.05L15.14 8.46L17.67 11H6.33L8.86 8.46L7.45 7.05Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
