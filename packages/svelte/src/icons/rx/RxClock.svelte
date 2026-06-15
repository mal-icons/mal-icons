<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.5 0.88C3.84 0.88 0.88 3.84 0.88 7.5C0.88 11.16 3.84 14.12 7.5 14.12C11.16 14.12 14.12 11.16 14.12 7.5C14.12 3.84 11.16 0.88 7.5 0.88ZM1.83 7.5C1.83 4.37 4.37 1.83 7.5 1.83C10.63 1.83 13.17 4.37 13.17 7.5C13.17 10.63 10.63 13.17 7.5 13.17C4.37 13.17 1.83 10.63 1.83 7.5ZM8 4.5C8 4.22 7.78 4 7.5 4C7.22 4 7 4.22 7 4.5V7.5C7 7.63 7.05 7.76 7.15 7.85L9.15 9.85C9.34 10.05 9.66 10.05 9.85 9.85C10.05 9.66 10.05 9.34 9.85 9.15L8 7.29V4.5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
