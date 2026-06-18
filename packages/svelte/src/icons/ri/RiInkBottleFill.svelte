<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 9L20.37 10.75C20.75 10.9 21 11.26 21 11.67V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V11.67C3 11.26 3.25 10.9 3.63 10.75L8 9H16ZM20 14H8V19H20V14ZM16 3C16.55 3 17 3.44 17 4V8H7V4C7 3.44 7.45 3 8 3H16Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
