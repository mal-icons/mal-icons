<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 3H21C21.56 3 22 3.45 22 4V20C22 20.56 21.56 21 21 21H3C2.45 21 2 20.56 2 20V4C2 3.45 2.45 3 3 3ZM9 11V9H7V11H5V13H7V15H9V13H11V11H9ZM13 11V13H19V11H13Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
