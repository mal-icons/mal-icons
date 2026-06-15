<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.75 7.78L16.16 6.37L20.41 10.61L16.16 14.85L14.75 13.44L17.58 10.61L14.75 7.78Z","fill":"currentColor"}],["path",{"d":"M10.51 13.44L11.92 14.85L16.16 10.61L11.92 6.37L10.51 7.78L12.35 9.63L7.59 9.63C5.38 9.63 3.59 11.42 3.59 13.63L3.59 17.63L5.59 17.63L5.59 13.63C5.59 12.53 6.49 11.63 7.59 11.63L12.32 11.63L10.51 13.44Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
