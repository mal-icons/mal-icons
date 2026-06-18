<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.36 10.98C19.93 12.54 19.93 15.07 18.36 16.64L12.71 22.29C12.32 22.68 11.68 22.68 11.29 22.29L5.64 16.64C4.07 15.07 4.07 12.54 5.64 10.98C7.2 9.42 9.73 9.42 11.29 10.98L12 11.69L12.71 10.98C14.27 9.42 16.8 9.42 18.36 10.98ZM12 1C14.21 1 16 2.79 16 5C16 7.21 14.21 9 12 9C9.79 9 8 7.21 8 5C8 2.79 9.79 1 12 1Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
