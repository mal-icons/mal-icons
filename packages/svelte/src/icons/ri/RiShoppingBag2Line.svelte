<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 22H4C3.45 22 3 21.55 3 21V3C3 2.45 3.45 2 4 2H20C20.56 2 21 2.45 21 3V21C21 21.55 20.56 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 9.66 10.35 11 12 11C13.66 11 15 9.66 15 8V6H17V8C17 10.76 14.77 13 12 13C9.24 13 7 10.76 7 8V6H9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
