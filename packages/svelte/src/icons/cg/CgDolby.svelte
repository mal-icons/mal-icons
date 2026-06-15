<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M0 4V20H24V4H0ZM10 12C10 9.79 8.21 8 6 8H4V16H6C8.21 16 10 14.21 10 12ZM18 16H20V8H18C15.79 8 14 9.79 14 12C14 14.21 15.79 16 18 16Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
