<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2c-4 0-8 0.5-8 4v9.5c0 0.950.38 1.81 1 2.44V21h3v-2h8v2h3v-3.06c0.62-0.63 1-1.49 1-2.44V6c0-3.5-3.58-4-8-4zM8.5 16c-0.83 0-1.5-0.67-1.5-1.5S7.67 13 8.5 13s1.50.67 1.5 1.5S9.33 16 8.5 16zm7 0c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.50.67 1.5 1.5-0.67 1.5-1.5 1.5zm2.5-6H6V7h12v3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
