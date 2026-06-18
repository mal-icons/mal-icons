<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 7.07V1H13V7.07C16.67 7.55 19.5 10.7 19.5 14.5C19.5 18.64 16.14 22 12 22C7.86 22 4.5 18.64 4.5 14.5C4.5 10.7 7.33 7.55 11 7.07Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
