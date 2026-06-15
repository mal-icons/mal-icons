<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M9.88 12H9.9H11.5C11.78 12 12 11.78 12 11.5C12 11.22 11.78 11 11.5 11H9.9C8.77 11 7.96 11 7.31 10.95C6.68 10.9 6.26 10.79 5.91 10.62C5.25 10.28 4.72 9.75 4.38 9.09C4.21 8.74 4.1 8.32 4.05 7.69C4 7.04 4 6.23 4 5.1V3.5C4 3.22 3.78 3 3.5 3C3.22 3 3 3.22 3 3.5V5.1V5.12C3 6.22 3 7.08 3.06 7.77C3.11 8.47 3.23 9.03 3.49 9.54C3.92 10.39 4.61 11.08 5.46 11.51C5.97 11.77 6.53 11.89 7.23 11.94C7.92 12 8.78 12 9.88 12Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
