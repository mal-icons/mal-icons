<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 3V5C21 14.63 15.63 19 9 19L5.24 19C5.08 19.91 5 20.91 5 22H3C3 20.64 3.11 19.4 3.34 18.27C3.11 16.97 3 15.22 3 13C3 7.48 7.48 3 13 3C15 3 17 4 21 3ZM13 5C8.58 5 5 8.58 5 13C5 13.36 5 13.71 5.01 14.05C6.26 12.07 8.1 10.5 10.5 9.13L11.49 10.87C8.64 12.5 6.75 14.35 5.77 17L9 17C15.01 17 18.87 13.03 18.99 5.39C17.62 5.52 16.35 5.44 14.78 5.2C13.62 5.03 13.4 5 13 5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
