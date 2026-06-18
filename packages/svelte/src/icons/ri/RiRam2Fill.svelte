<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 5H22C22.55 5 23 5.45 23 6V15C23 15.55 22.55 16 22 16V18C22 18.55 21.55 19 21 19H13.59L12.59 18H11.41L10.41 19H3C2.45 19 2 18.55 2 18L2 16C1.45 16 1 15.55 1 15V6C1 5.45 1.45 5 2 5ZM4 16V17H9.59L10.59 16H4ZM13.41 16L14.41 17H20V16H13.41ZM7 9H5V12H7V9ZM9 9V12H11V9H9ZM15 9H13V12H15V9ZM17 9V12H19V9H17Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
