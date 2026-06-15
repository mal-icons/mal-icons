<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5.5 2C5.78 2 6 2.22 6 2.5V5.5C6 5.78 5.78 6 5.5 6H2.5C2.22 6 2 5.78 2 5.5C2 5.22 2.22 5 2.5 5H5V2.5C5 2.22 5.22 2 5.5 2ZM9.5 2C9.78 2 10 2.22 10 2.5V5H12.5C12.78 5 13 5.22 13 5.5C13 5.78 12.78 6 12.5 6H9.5C9.22 6 9 5.78 9 5.5V2.5C9 2.22 9.22 2 9.5 2ZM2 9.5C2 9.22 2.22 9 2.5 9H5.5C5.78 9 6 9.22 6 9.5V12.5C6 12.78 5.78 13 5.5 13C5.22 13 5 12.78 5 12.5V10H2.5C2.22 10 2 9.78 2 9.5ZM9 9.5C9 9.22 9.22 9 9.5 9H12.5C12.78 9 13 9.22 13 9.5C13 9.78 12.78 10 12.5 10H10V12.5C10 12.78 9.78 13 9.5 13C9.22 13 9 12.78 9 12.5V9.5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
