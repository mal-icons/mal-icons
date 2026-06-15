<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7 8V13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13V8H7ZM5 4H19V13C19 16.87 15.87 20 12 20C8.13 20 5 16.87 5 13V4Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
