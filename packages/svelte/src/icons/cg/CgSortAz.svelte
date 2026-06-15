<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 8C6 7.45 6.45 7 7 7H17C17.55 7 18 7.45 18 8C18 8.55 17.55 9 17 9H7C6.45 9 6 8.55 6 8Z","fill":"currentColor"}],["path",{"d":"M8 12C8 11.45 8.45 11 9 11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13H9C8.45 13 8 12.55 8 12Z","fill":"currentColor"}],["path",{"d":"M11 15C10.45 15 10 15.45 10 16C10 16.55 10.45 17 11 17H13C13.55 17 14 16.55 14 16C14 15.45 13.55 15 13 15H11Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
