<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 3C9 4.66 10.34 6 12 6C13.65 6 15 4.66 15 3H21C21.55 3 22 3.45 22 4V11C22 11.55 21.55 12 21 12H19L19 20C19 20.55 18.55 21 18 21H6C5.45 21 5 20.55 5 20L5 12L3 12C2.45 12 2 11.55 2 11V4C2 3.45 2.45 3 3 3H9ZM20 5H16.58L16.56 5.04C15.81 6.72 14.16 7.91 12.21 8L12 8C9.96 8 8.21 6.78 7.43 5.04L7.41 5H4V10L7 10L7 19H17L17 10L20 10V5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
