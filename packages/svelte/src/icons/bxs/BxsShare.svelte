<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 6.91V2.59L6.29 7.29l-3.77 3.77 3.84 3.2L11 18.14V13.9c8.15-0.61 11 4.1 11 4.1 0-2.94-0.24-5.98-2.55-8.29C16.77 7.02 12.88 6.83 11 6.91z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
