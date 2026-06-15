<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 15C5.45 15 5 14.55 5 14V10C5 9.45 5.45 9 6 9H17C17.55 9 18 9.45 18 10V14C18 14.55 17.55 15 17 15H6Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M18 6H5C3.34 6 2 7.34 2 9V15C2 16.66 3.34 18 5 18H18C19.66 18 21 16.66 21 15C21.55 15 22 14.55 22 14V10C22 9.45 21.55 9 21 9C21 7.34 19.66 6 18 6ZM18 8H5C4.45 8 4 8.45 4 9V15C4 15.55 4.45 16 5 16H18C18.55 16 19 15.55 19 15V9C19 8.45 18.55 8 18 8Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
