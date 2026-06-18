<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.41 5H21C21.55 5 22 5.45 22 6V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H10.41L12.41 5ZM4 5V19H20V7H11.59L9.59 5H4ZM11 9H13V17H11V9ZM15 12H17V17H15V12ZM7 14H9V17H7V14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
