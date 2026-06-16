<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M140-80q-24 0-42-18t-18-42v-508q0-24 18-42t42-18h112v-112q0-24 18-42t42-18h508q24 0 42 18t18 42v508q0 24-18 42t-42 18H708v112q0 24-18 42t-42 18H140Zm172-232h508v-508H312v508Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
