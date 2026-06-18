<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 7h11v2H4zm0 4h11v2H4zm0 4h7v2H4zm15.3-2.71-4.3 4.29-1.29-1.29-1.41 1.42 2.71 2.7 5.71-5.7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
