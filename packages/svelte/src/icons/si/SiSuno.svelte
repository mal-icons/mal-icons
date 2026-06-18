<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.5 0C20.64 0 24 5.37 24 12h-9c0 6.63-3.36 12-7.5 12C3.36 24 0 18.63 0 12h9c0-6.63 3.36-12 7.5-12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
