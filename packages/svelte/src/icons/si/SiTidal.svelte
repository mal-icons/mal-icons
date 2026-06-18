<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.01 3.99L8.01 8 4 3.99 0 8 4 12l4-4L12.01 12l-4 4 4 4 4-4L12.01 12l4-4-4-4zM16.04 8l3.98-3.98L24 8l-3.98 3.98z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
