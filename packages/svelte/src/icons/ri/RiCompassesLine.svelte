<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 4.12V2H13V4.12C14.73 4.57 16 6.13 16 8C16 9.11 15.54 10.13 14.8 10.85L20.87 21.35L19.13 22.35L13.07 11.85C12.73 11.95 12.37 12 12 12C11.63 12 11.27 11.95 10.93 11.85L4.87 22.35L3.13 21.35L9.2 10.85C8.46 10.13 8 9.11 8 8C8 6.13 9.27 4.57 11 4.12ZM12 10C13.1 10 14 9.1 14 8C14 6.89 13.1 6 12 6C10.9 6 10 6.89 10 8C10 9.1 10.9 10 12 10Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
