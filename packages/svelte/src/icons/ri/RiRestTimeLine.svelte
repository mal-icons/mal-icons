<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 6V8C7.69 8 5 10.69 5 14C5 17.31 7.69 20 11 20C14.24 20 16.88 17.43 17 14.22L17 14H19C19 18.42 15.42 22 11 22C6.58 22 3 18.42 3 14C3 9.67 6.58 6 11 6ZM21 2V4L15.67 10H21V12H13V10L18.33 4H13V2H21Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
