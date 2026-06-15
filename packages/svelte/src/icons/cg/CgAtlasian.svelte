<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"opacity":"0.8","d":"M8.51 11.56C8.19 11.1 7.78 11.16 7.6 11.68L5 18.91H10.18C10.7 16.85 10.25 14.04 9.08 12.38L8.51 11.56Z","fill":"currentColor"}],["path",{"d":"M12.87 7.13C11.61 8.94 11.2 12.08 11.96 14.16L13.71 18.91H18.96L14.37 6.43C14.18 5.91 13.76 5.85 13.45 6.31L12.87 7.13Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
