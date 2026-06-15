<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 5V12.73C2.4 12.38 2 11.74 2 11V5C2 2.79 3.79 1 6 1H9C9.74 1 10.38 1.4 10.73 2H6C4.35 2 3 3.35 3 5ZM11 15H6C4.9 15 4 14.1 4 13V5C4 3.9 4.9 3 6 3H11C12.1 3 13 3.9 13 5V13C13 14.1 12.1 15 11 15ZM12 5C12 4.45 11.55 4 11 4H6C5.45 4 5 4.45 5 5V13C5 13.55 5.45 14 6 14H11C11.55 14 12 13.55 12 13V5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
