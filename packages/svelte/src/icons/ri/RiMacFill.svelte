<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 18V20L16 21V22H8L8 21L10 20V18H2.99C2.44 18 2 17.55 2 16.99V4.01C2 3.45 2.46 3 2.99 3H21.01C21.56 3 22 3.45 22 4.01V16.99C22 17.55 21.54 18 21.01 18H14ZM4 14V16H20V14H4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
