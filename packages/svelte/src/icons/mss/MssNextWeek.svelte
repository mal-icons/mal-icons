<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-120v-600h240v-160h320v160h240v600H80Zm60-60h680v-480H140v480Zm240-540h200v-100H380v100ZM140-180v-480 480Zm286-94 146-146-147-147-28 28 119 119-118 118 28 28Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
