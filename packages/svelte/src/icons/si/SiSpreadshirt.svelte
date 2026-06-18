<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 6.31L7.8 2.1 0 9.9l12 12 12-12-7.8-7.8zm0 12L3.59 9.9l4.2-4.2L12 9.9l4.18-4.18 4.2 4.2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
