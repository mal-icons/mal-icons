<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1 11C6.52 11 11 6.52 11 1H13C13 6.52 17.48 11 23 11V13C17.48 13 13 17.48 13 23H11C11 17.48 6.52 13 1 13V11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
