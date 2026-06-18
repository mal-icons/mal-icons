<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 14H12.66C11.83 16.33 9.61 18 7 18C3.69 18 1 15.31 1 12C1 8.69 3.69 6 7 6C9.61 6 11.83 7.67 12.66 10H23V14H21V18H17V14ZM7 14C8.1 14 9 13.1 9 12C9 10.9 8.1 10 7 10C5.9 10 5 10.9 5 12C5 13.1 5.9 14 7 14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
