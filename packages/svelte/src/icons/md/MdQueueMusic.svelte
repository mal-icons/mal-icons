<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 6h-5v8.18c-0.31-0.11-0.65-0.18-1-0.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6zm-7 0H3v2h12V6zm0 4H3v2h12v-2zm-4 4H3v2h8v-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
