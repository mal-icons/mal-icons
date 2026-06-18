<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2C6.58 2 2 6.58 2 12s4.58 10 10 10 10-4.58 10-10S17.42 2 12 2zm0 13c0.99 0 1.85-0.26 2.29-0.71l1.41 1.42C14.58 16.83 12.9 17 12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5c0.9 0 2.580.17 3.71 1.29l-1.41 1.41C13.85 9.26 12.99 9 12 9c-1.63 0-3 1.37-3 3s1.37 3 3 3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
