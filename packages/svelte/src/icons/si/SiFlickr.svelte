<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.33 6.67C2.39 6.67 0 9.06 0 12c0 2.95 2.39 5.33 5.33 5.33 2.95 0 5.33-2.39 5.33-5.33 0-2.94-2.39-5.33-5.33-5.33zm13.33 0c-2.95 0-5.33 2.39-5.33 5.33 0 2.95 2.39 5.33 5.33 5.33C21.61 17.33 24 14.95 24 12c0-2.94-2.39-5.33-5.33-5.33Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
