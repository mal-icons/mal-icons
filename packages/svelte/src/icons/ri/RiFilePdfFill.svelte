<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 2L21 7V21.01C21 21.56 20.56 22 20.01 22H3.99C3.44 22 3 21.54 3 21.01V2.99C3 2.44 3.44 2 3.99 2H16ZM12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8H8V16H12ZM10 10H12C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14H10V10Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
