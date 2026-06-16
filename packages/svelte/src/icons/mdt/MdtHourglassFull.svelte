<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m8 7.5 4 4 4-4V4H8zm0 9V20h8v-3.5l-4-4z","opacity":".3"}],["path",{"d":"M18 2H6v6h0.01L6 8.01 10 12l-4 4 0.010.01H6V22h12v-5.99h-0.01L18 16l-4-4 4-3.99-0.01-0.01H18V2zm-2 14.5V20H8v-3.5l4-4 4 4zm0-9-4 4-4-4V4h8v3.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
