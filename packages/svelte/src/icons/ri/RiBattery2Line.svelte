<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 6H7V20H17V6H13V4H11V6ZM9 4V3C9 2.45 9.45 2 10 2H14C14.55 2 15 2.45 15 3V4H18C18.55 4 19 4.45 19 5V21C19 21.55 18.55 22 18 22H6C5.45 22 5 21.55 5 21V5C5 4.45 5.45 4 6 4H9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
