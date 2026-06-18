<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.9 2.1L20.8 3.51L22.22 13.41L13.03 22.61C12.64 23 12 23 11.61 22.61L1.71 12.71C1.32 12.32 1.32 11.68 1.71 11.29L10.9 2.1ZM13.73 10.59C14.51 11.37 15.78 11.37 16.56 10.59C17.34 9.8 17.34 8.54 16.56 7.76C15.78 6.98 14.51 6.98 13.73 7.76C12.95 8.54 12.95 9.8 13.73 10.59Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
