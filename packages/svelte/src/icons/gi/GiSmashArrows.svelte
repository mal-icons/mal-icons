<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M121.07 15.52v339.31H20.54L121.07 497.35h77.39l-47.49-149.36h50.23V15.52h-80.12zm98.81 0v351.15h-43.36l41.55 130.68h80.36l41.55-130.68h-43.36V15.52h-76.73zm95.42 0v332.46h50.22l-47.49 149.36H391.3L491.82 354.83H391.3V15.52h-76z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
