<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.37 6.54l5.09 5.46-5.09 5.46V6.54zM24 0v24H0V0h24zm-5.54 12l1.75-1.87L11.98 1.9l-8.23 8.23 1.75 1.87-1.75 1.87 8.23 8.23 8.23-8.23-1.75-1.87zm-7.87 5.46V6.54l-5.09 5.46 5.09 5.46z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
