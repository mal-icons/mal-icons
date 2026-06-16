<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m393-165 279-335H492l36-286-253 366h154l-36 255Zm-33-195H217q-17.87 0-26.44-16T193-407l338-488q8-11 20-15t24 1q12 5 19 16.17 7 11.17 5 23.83l-39 309h176q19.36 0 27.18 17Q771-526 759-511L388-66q-8.44 9.9-20.72 12.95Q355-50 344-55.25t-17.5-16.12Q320-82.25 322-95l38-265Zm113-115Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
