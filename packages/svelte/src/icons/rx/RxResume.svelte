<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.05 2.75C3.05 2.45 2.8 2.2 2.5 2.2C2.2 2.2 1.95 2.45 1.95 2.75V12.25C1.95 12.55 2.2 12.8 2.5 12.8C2.8 12.8 3.05 12.55 3.05 12.25V2.75ZM5.73 2.31C5.58 2.23 5.39 2.23 5.24 2.32C5.09 2.41 5 2.57 5 2.75V12.25C5 12.43 5.09 12.59 5.24 12.68C5.39 12.77 5.58 12.77 5.73 12.69L14.73 7.94C14.9 7.86 15 7.69 15 7.5C15 7.31 14.9 7.14 14.73 7.06L5.73 2.31ZM6 11.42V3.58L13.43 7.5L6 11.42Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
