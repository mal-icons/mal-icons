<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 1C16.55 1 17 1.45 17 2V5H21C21.55 5 22 5.45 22 6V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V6C2 5.45 2.45 5 3 5H7V2C7 1.45 7.45 1 8 1H16ZM20 7H4V19H20V7ZM13 9V12H16V14H13L13 17H11L11 14H8V12H11V9H13ZM15 3H9V5H15V3Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
