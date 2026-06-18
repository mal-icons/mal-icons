<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.22 5.64l1.41-1.41 3.54 3.54-1.41 1.41zm15.56 12.73-1.41 1.41-3.54-3.54 1.41-1.41zm-12.02-3.54 1.41 1.41-3.54 3.54-1.41-1.41zm7.07-7.07 3.54-3.53 1.41 1.42-3.54 3.54z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
