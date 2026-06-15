<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.82 1.18C7.64 1.01 7.36 1.01 7.18 1.18L4.18 4.18C4.01 4.36 4.01 4.64 4.18 4.82C4.36 4.99 4.64 4.99 4.82 4.82L7.05 2.59V9.5C7.05 9.75 7.25 9.95 7.5 9.95C7.75 9.95 7.95 9.75 7.95 9.5V2.59L10.18 4.82C10.36 4.99 10.64 4.99 10.82 4.82C10.99 4.64 10.99 4.36 10.82 4.18L7.82 1.18ZM2.5 10C2.78 10 3 10.22 3 10.5V12C3 12.55 3.45 13 4 13H11C11.55 13 12 12.55 12 12V10.5C12 10.22 12.22 10 12.5 10C12.78 10 13 10.22 13 10.5V12C13 13.1 12.11 14 11 14H4C2.89 14 2 13.1 2 12V10.5C2 10.22 2.22 10 2.5 10Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
