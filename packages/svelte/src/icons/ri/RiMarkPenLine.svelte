<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.24 4.51L8.51 11.25L7.8 13.37L6.76 14.41L9.59 17.24L10.63 16.2L12.75 15.49L19.49 8.75L15.24 4.51ZM21.61 8.05C22 8.44 22 9.07 21.61 9.46L13.83 17.24L11.71 17.95L10.29 19.36C9.9 19.75 9.27 19.75 8.88 19.36L4.64 15.12C4.25 14.73 4.25 14.09 4.64 13.7L6.05 12.29L6.76 10.17L14.54 2.39C14.93 2 15.56 2 15.95 2.39L21.61 8.05ZM15.24 7.34L16.66 8.75L11.71 13.7L10.29 12.29L15.24 7.34ZM4.28 16.89L7.11 19.71L5.7 21.13L1.45 19.71L4.28 16.89Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
