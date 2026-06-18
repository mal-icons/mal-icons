<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 17V22H16V17C16 12.55 18.64 8.71 22.45 6.98L23.28 8.8C20.16 10.22 18 13.36 18 17ZM8 17V22H6V17C6 13.36 3.84 10.22 0.73 8.8L1.55 6.98C5.36 8.71 8 12.55 8 17ZM12 12C9.24 12 7 9.76 7 7C7 4.24 9.24 2 12 2C14.76 2 17 4.24 17 7C17 9.76 14.76 12 12 12ZM12 10C13.66 10 15 8.66 15 7C15 5.34 13.66 4 12 4C10.34 4 9 5.34 9 7C9 8.66 10.34 10 12 10Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
