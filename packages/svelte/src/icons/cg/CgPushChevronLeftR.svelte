<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.67 9.17L15.26 7.76L11.02 12L15.26 16.24L16.67 14.83L13.85 12L16.67 9.17Z","fill":"currentColor"}],["path",{"d":"M9.96 8V16H7.96V8H9.96Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 5C1 2.79 2.79 1 5 1H19C21.21 1 23 2.79 23 5V19C23 21.21 21.21 23 19 23H5C2.79 23 1 21.21 1 19V5ZM5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
