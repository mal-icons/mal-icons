<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M23.02 20.71l135.64 163.62-107.33-32.39 168.79 111.33L82.78 224.11l192.51 111.87-130.52-1.76 282.08 126.12c13.91 7.2 28.18 13.64 42.73 19.25l2.30.89 20.8 9.3-16.89-37.82c-3.67-9.11-7.69-18.09-12.03-26.93L338.31 144.24l1.09 129.36L228.35 82.39l38.48 136.49L155.91 50.67l31.68 106.47L23.02 20.71zm225.15 225.18c94.26 38.75 169.61 116.2 208.15 207.92-91.01-40.83-168.83-115.91-208.15-207.92z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
