<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M24 12C24 16.42 20.42 20 16 20V18C19.31 18 22 15.31 22 12C22 8.69 19.31 6 16 6V4C20.42 4 24 7.58 24 12Z","fill":"currentColor"}],["path",{"d":"M20 12C20 14.21 18.21 16 16 16V14C17.1 14 18 13.1 18 12C18 10.9 17.1 10 16 10V8C18.21 8 20 9.79 20 12Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M9 16L15 20V4L9 8H5C2.79 8 1 9.79 1 12C1 14.21 2.79 16 5 16H9ZM5 10H9L13 7.5V16.5L9 14H5C3.9 14 3 13.1 3 12C3 10.9 3.9 10 5 10Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
