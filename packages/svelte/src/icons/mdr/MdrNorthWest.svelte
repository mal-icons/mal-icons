<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 15c0.56 0 1-0.45 1-1V8.41L17.89 19.3a11 0 1 0 1.41-1.41L8.41 7H14c0.55 0 1-0.45 1-1s-0.45-1-1-1H6c-0.55 0-1 0.45-1 1v8c0 0.550.45 1 1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
