<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 16H13L18 22L23 16H19V11C19 6.58 15.42 3 11 3C6.58 3 3 6.58 3 11V20H5V11C5 7.69 7.69 5 11 5C14.31 5 17 7.69 17 11V16Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
