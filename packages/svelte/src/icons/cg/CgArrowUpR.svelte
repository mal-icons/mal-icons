<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.85 11.97L16.27 10.56L12.03 6.32L7.78 10.56L9.2 11.97L11.03 10.15V17.68H13.03V10.15L14.85 11.97Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 19C1 21.21 2.79 23 5 23H19C21.21 23 23 21.21 23 19V5C23 2.79 21.21 1 19 1H5C2.79 1 1 2.79 1 5V19ZM5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
