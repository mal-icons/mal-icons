<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 22c5.42 0 10-4.58 10-10S17.42 2 12 2 2 6.58 2 12s4.58 10 10 10zm0-18c4.34 0 8 3.66 8 8s-3.66 8-8 8-8-3.66-8-8 3.66-8 8-8z"}],["path",{"d":"M12 17c0.9 0 2.58-0.17 3.71-1.29l-1.41-1.42C13.85 14.74 12.99 15 12 15c-1.63 0-3-1.37-3-3s1.37-3 3-3c0.99 0 1.850.27 2.290.71l1.41-1.41C14.58 7.17 12.9 7 12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
