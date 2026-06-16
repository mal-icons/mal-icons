<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-280v-400h60v170h180v-170h60v400h-60v-170H180v170h-60Zm620 0v-130H540v-270h60v210h140v-210h60v210h80v60h-80v130h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
