<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22ZM16.82 17.08C18.16 15.8 19 14 19 12C19 8.13 15.87 5 12 5C10.94 5 9.93 5.24 9.03 5.66L10.01 7.41C10.62 7.15 11.29 7 12 7C14.76 7 17 9.24 17 12H14L16.82 17.08ZM14.97 18.34L13.99 16.59C13.38 16.85 12.71 17 12 17C9.24 17 7 14.76 7 12H10L7.18 6.92C5.84 8.2 5 10 5 12C5 15.87 8.13 19 12 19C13.06 19 14.07 18.76 14.97 18.34Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
