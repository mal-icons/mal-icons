<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 10V14H10V10H14ZM16 10H21V14H16V10ZM14 21H10V16H14V21ZM16 21V16H21V20C21 20.55 20.55 21 20 21H16ZM14 3V8H10V3H14ZM16 3H20C20.55 3 21 3.45 21 4V8H16V3ZM8 10V14H3V10H8ZM8 21H4C3.45 21 3 20.55 3 20V16H8V21ZM8 3V8H3V4C3 3.45 3.45 3 4 3H8Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
