<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-google-admob-1-a)"}],["path",{"fill":"currentColor","d":"M286.3 1Q299.2-0.1 312 0a299.4 299.4 0 0 1 288 287.3v235.9c-0.2 42.7-35 77-77.5 76.8a86 86 0 0 1-72.3-76.8v-236a149.7 149.7 0 0 0-160.8-137.4l-2.80.2"}],["path",{"fill":"currentColor","d":"M600 524.9a75 75 0 0 1-149.8 0 75 75 0 0 1 149.8 0"}],["path",{"fill":"currentColor","d":"M290.6 597.4a76.7 76.7 0 0 0 77.8-75.9v-0.5a75 75 0 0 0-77-72.7h-1.7A149.4 149.4 0 0 1 151.9 289v-1.2c6-74 64.8-132.3 138.7-137.8a75 75 0 0 0 77.8-71.8V77A77 77 0 0 0 290.60.7h-5.2A299.3 299.3 0 0 0 0 298.1v1.2c0 187 164 298.3 286 298.3h4.6z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
