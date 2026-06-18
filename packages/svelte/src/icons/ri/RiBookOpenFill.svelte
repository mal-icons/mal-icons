<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 21H13V6C13 4.34 14.34 3 16 3H21C21.55 3 22 3.45 22 4V20C22 20.55 21.55 21 21 21ZM11 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H8C9.66 3 11 4.34 11 6V21ZM11 21H13V23H11V21Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
