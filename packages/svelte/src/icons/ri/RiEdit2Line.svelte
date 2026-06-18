<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 18.89H6.41L15.73 9.58L14.31 8.16L5 17.48V18.89ZM21 20.89H3V16.65L16.43 3.21C16.83 2.82 17.46 2.82 17.85 3.21L20.68 6.04C21.07 6.43 21.07 7.06 20.68 7.45L9.24 18.89H21V20.89ZM15.73 6.75L17.14 8.16L18.56 6.75L17.14 5.33L15.73 6.75Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
