<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M309.83-160Q297-160 288.5-168.62T280-190v-338q0-24.75 17.63-42.37T340-588h386l-69-69q-9-9-9-21t9-21q9-9 21-9t21 9l120 120q5 5 6.5 10.13 1.5 5.13 1.5 11Q827-552 825.5-547q-1.5 5-6.5 10L699-417q-9 9-21 9t-20.5-9q-8.5-9-9-21t8.5-21l69-69H340v338q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
