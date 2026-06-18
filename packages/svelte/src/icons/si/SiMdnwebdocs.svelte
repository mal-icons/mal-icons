<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m21.54 1.1-6.74 21.8h-2.77L18.77 1.1ZM24 1.1v21.8h-2.46V1.1Zm-12 0v21.8H9.54V1.1Zm-2.46 0L2.77 22.9H0L6.75 1.1Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
