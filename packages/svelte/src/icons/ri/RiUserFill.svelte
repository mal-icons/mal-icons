<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 22C4 17.58 7.58 14 12 14C16.42 14 20 17.58 20 22H4ZM12 13C8.69 13 6 10.32 6 7C6 3.69 8.69 1 12 1C15.32 1 18 3.69 18 7C18 10.32 15.32 13 12 13Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
