<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 10h15v4H4z","opacity":".3"}],["path",{"d":"M2 18h19v2H2zM20 8H3c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1h17c0.55 0 1-0.45 1-1V9c0-0.55-0.45-1-1-1zm-1 6H4v-4h15v4zM2 4h19v2H2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
