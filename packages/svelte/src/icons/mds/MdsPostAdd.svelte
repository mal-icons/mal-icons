<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 19.22H5V7h7V5H3v16h16v-9h-2z"}],["path",{"d":"M19 2h-2v3h-3c0.010.01 0 2 0 2h3v2.99c0.010.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
