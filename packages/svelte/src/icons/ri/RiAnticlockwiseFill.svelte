<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 10H9L5 15L1 10H4V8C4 5.24 6.24 3 9 3H13V5H9C7.34 5 6 6.34 6 8V10ZM11 9H21C21.55 9 22 9.45 22 10V20C22 20.55 21.55 21 21 21H11C10.45 21 10 20.55 10 20V10C10 9.45 10.45 9 11 9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
