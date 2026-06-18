<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.71 24 0.6 14.82l7.68-2.99 11.24 7.87L13.71 24ZM10.29 0 23.4 9.18l-7.68 3L4.49 4.31 10.29 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
