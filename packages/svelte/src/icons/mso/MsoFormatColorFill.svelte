<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m255-917 43-43 347.69 347.69Q669-589 669-555.37q0 33.63-23 56.37L468-321q-23 23-54 23t-54-23L182-499q-23-22.77-23-56.44 0-33.67 23-56.44L371-801 255-917Zm159 159L215-559h398L414-758Zm337.79 477Q722-281 701-302.15 680-323.3 680-353q0-17.35 8-37.17T710-431q8-13 19.5-28t22.5-28q11 13 22.5 28t19.5 28q14 21 22 40.83T824-353q0 29.7-21.21 50.85-21.21 21.15-51 21.15ZM80 1v-121h800V1H80Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
