<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
