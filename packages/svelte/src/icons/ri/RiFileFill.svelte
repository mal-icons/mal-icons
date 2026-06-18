<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 8L9 2H20C20.55 2 21 2.46 21 2.99V21.01C21 21.56 20.56 22 20.01 22H3.99C3.44 22 3 21.55 3 20.99V8ZM10 3.5L4.5 9H10V3.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
