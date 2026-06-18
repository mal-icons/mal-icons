<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 20C20 20.55 19.55 21 19 21H5C4.45 21 4 20.55 4 20V11L1 11L11.33 1.61C11.71 1.26 12.29 1.26 12.67 1.61L23 11L20 11V20ZM9 10V16H15V10H9ZM11 12H13V14H11V12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
