<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.71 4.41L10.46 14.7H14.05V16.7H7.05V9.7H9.05V13.28L19.29 3L20.71 4.41Z","fill":"currentColor"}],["path",{"d":"M11 4.71V6.71H5V18.71H17V12.71H19V20.71H3V4.71H11Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
