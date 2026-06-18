<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 0v4.31c4.24 0 7.69 3.45 7.69 7.69s-3.45 7.69-7.69 7.69V24c6.62 0 12-5.38 12-12s-5.38-12-12-12Zm0 6.01c-3.31 0-6 2.69-6 6a6 6 0 1 0 6-6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
