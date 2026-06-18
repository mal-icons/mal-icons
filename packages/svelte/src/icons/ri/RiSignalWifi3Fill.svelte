<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 3C16.28 3 20.22 4.5 23.31 7L12 21L0.69 7C3.78 4.5 7.72 3 12 3ZM12 5C8.97 5 6.08 5.84 3.58 7.39L5.48 9.75C7.4 8.64 9.63 8 12 8C14.38 8 16.6 8.64 18.52 9.75L20.42 7.39C17.92 5.84 15.03 5 12 5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
