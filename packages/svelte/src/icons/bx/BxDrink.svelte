<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.83 4.56A1 1 0 0 0 20 3H4a1 1 0 0 0-0.83 1.55L11 16.3V20H8v2h8v-2h-3v-3.7l7.83-11.75zM12 14.2 8.54 9h6.93L12 14.2zM18.13 5l-1.33 2H7.2L5.87 5h12.26z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
