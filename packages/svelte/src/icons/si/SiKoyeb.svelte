<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 12.82V7.04L11.990.12 24 7.04v5.77L11.99 5.89Zm11.99 1.11L1.92 19.76 0 18.65v-3.56l11.99-6.93L24 15.09v3.54l-1.92 1.13Zm-3.03 9.95L3.95 21l8.04-4.66 8.07 4.66-5.01 2.88-3.05-1.76Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
