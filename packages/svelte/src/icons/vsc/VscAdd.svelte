<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 1.5C8 1.22 7.78 1 7.5 1C7.22 1 7 1.22 7 1.5V7H1.5C1.22 7 1 7.22 1 7.5C1 7.78 1.22 8 1.5 8H7V13.5C7 13.78 7.22 14 7.5 14C7.78 14 8 13.78 8 13.5V8H13.5C13.78 8 14 7.78 14 7.5C14 7.22 13.78 7 13.5 7H8V1.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
