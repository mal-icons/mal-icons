<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 18.5a2 2 0 1 1 0 4A2 2 0 0 1 12 18.5ZM12 2a1.5 1.5 0 0 1 1.5 1.5V15a1.5 1.5 0 0 1-3 0V3.5A1.5 1.5 0 0 1 12 2Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
