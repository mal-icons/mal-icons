<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 18V20H19V22H13C11.9 22 11 21.1 11 20V18H8C5.79 18 4 16.21 4 14V10H20V14C20 16.21 18.21 18 16 18H13ZM17 6H19C19.55 6 20 6.45 20 7V9H4V7C4 6.45 4.45 6 5 6H7V2H9V6H15V2H17V6ZM12 14.5C12.55 14.5 13 14.05 13 13.5C13 12.95 12.55 12.5 12 12.5C11.45 12.5 11 12.95 11 13.5C11 14.05 11.45 14.5 12 14.5ZM11 2H13V5H11V2Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
