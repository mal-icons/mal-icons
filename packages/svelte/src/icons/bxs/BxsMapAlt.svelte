<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m9 6.88-7-3.5v13.24l7 3.5 6-3 7 3.5V7.38l-7-3.5-6 3zM15 15l-6 3V9l6-3v9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
