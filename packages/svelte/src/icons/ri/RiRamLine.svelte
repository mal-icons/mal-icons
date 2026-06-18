<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 7H21V17H19V15H17V17H15V15H13V17H11V15H9V17H7V15H5V17H3V7ZM2 5C1.45 5 1 5.45 1 6V18C1 18.55 1.45 19 2 19H22C22.55 19 23 18.55 23 18V6C23 5.45 22.55 5 22 5H2ZM11 9H5V12H11V9ZM13 9H19V12H13V9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
