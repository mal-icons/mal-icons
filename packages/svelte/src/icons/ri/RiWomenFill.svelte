<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 15.93C7.33 15.45 4.5 12.3 4.5 8.5C4.5 4.36 7.86 1 12 1C16.14 1 19.5 4.36 19.5 8.5C19.5 12.3 16.67 15.45 13 15.93V18H18V20H13V24H11V20H6V18H11V15.93Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
