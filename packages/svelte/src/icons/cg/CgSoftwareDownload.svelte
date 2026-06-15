<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 5C11 4.45 11.45 4 12 4C12.55 4 13 4.45 13 5V12.16L16.24 8.92L17.66 10.33L12 15.99L6.34 10.33L7.76 8.92L11 12.16V5Z","fill":"currentColor"}],["path",{"d":"M4 14H6V18H18V14H20V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V14Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
