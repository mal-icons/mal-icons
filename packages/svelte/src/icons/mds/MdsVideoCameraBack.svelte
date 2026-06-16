<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 10.48V4H2v16h16v-6.48l4 3.98v-11l-4 3.98zM5 16l2.38-3.17L9 15l2.62-3.5L15 16H5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
