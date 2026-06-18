<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 8V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V7H21C21.55 7 22 7.45 22 8ZM12.41 5H2V4C2 3.45 2.45 3 3 3H10.41L12.41 5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
