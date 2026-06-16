<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 8.64v6.72L15.27 12z","opacity":".3"}],["path",{"d":"m8 19 11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
