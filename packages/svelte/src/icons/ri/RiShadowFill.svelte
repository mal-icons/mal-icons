<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 3C2 2.45 2.45 2 3 2H17C17.55 2 18 2.45 18 3V6H21C21.55 6 22 6.45 22 7V21C22 21.55 21.55 22 21 22H7C6.45 22 6 21.55 6 21V18H3C2.45 18 2 17.55 2 17V3ZM8 18V20H11.44L9.44 18H8ZM11.56 18L13.56 20H16.44L14.44 18H11.56ZM20 20V18.56L18 16.56V17C18 17.55 17.55 18 17 18H16.56L18.56 20H20ZM20 13.56L18 11.56V14.44L20 16.44V13.56ZM20 11.44V8H18V9.44L20 11.44Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
