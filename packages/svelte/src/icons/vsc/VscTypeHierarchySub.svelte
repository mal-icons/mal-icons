<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 10H11.76L8.96 6H9C9.55 6 10 5.55 10 5V2C10 1.45 9.55 1 9 1H6C5.45 1 5 1.45 5 2V5C5 5.55 5.45 6 6 6H6.04L3.24 10H2C1.45 10 1 10.45 1 11V14C1 14.55 1.45 15 2 15H5C5.55 15 6 14.55 6 14V11C6 10.45 5.55 10 5 10H4.46L7.26 6H7.74L10.54 10H10C9.45 10 9 10.45 9 11V14C9 14.55 9.45 15 10 15H13C13.55 15 14 14.55 14 14V11C14 10.45 13.55 10 13 10ZM5 14H2V11H5V14ZM6 2H9V5H6V2ZM13 14H10V11H13V14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
