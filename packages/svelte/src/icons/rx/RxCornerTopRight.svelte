<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5.12 3H5.1H3.5C3.22 3 3 3.22 3 3.5C3 3.78 3.22 4 3.5 4H5.1C6.23 4 7.04 4 7.69 4.05C8.32 4.1 8.74 4.21 9.09 4.38C9.75 4.72 10.28 5.25 10.62 5.91C10.79 6.26 10.9 6.68 10.95 7.31C11 7.96 11 8.77 11 9.9V11.5C11 11.78 11.22 12 11.5 12C11.78 12 12 11.78 12 11.5V9.9V9.88C12 8.78 12 7.92 11.94 7.23C11.89 6.53 11.77 5.97 11.51 5.46C11.08 4.61 10.39 3.92 9.54 3.49C9.03 3.23 8.47 3.11 7.77 3.06C7.08 3 6.22 3 5.12 3Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
