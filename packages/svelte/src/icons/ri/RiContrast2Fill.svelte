<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 22C6.48 22 2 17.52 2 12C2 6.47 6.48 2 12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22ZM5.33 16.42C6.76 18.57 9.21 19.98 11.98 19.98C16.4 19.98 19.98 16.4 19.98 11.98C19.98 9.21 18.57 6.76 16.43 5.33C17.27 8.35 16.5 11.74 14.12 14.12C11.74 16.5 8.36 17.27 5.33 16.42Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
