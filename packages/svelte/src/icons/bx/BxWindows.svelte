<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 7H4c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V9c0-1.1-0.9-2-2-2zM4 19v-8h12V9l0 10H4z"}],["path",{"d":"M22 5c0-1.1-0.9-2-2-2H7c-1.1 0-2 0.9-2 2h13c1.1 0 20.9 2 1.99L20 15H20v2c1.1 0 2-0.9 2-2V8.01L22 8V6L22 5.99V5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
