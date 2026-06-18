<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 2V4H5L5 14H19L19 4H15V2H20C20.55 2 21 2.45 21 3V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V3C3 2.45 3.45 2 4 2H9ZM19 16H5L5 20H19L19 16ZM17 17V19H15V17H17ZM13 2V7H16L12 11L8 7H11V2H13Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
