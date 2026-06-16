<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M440-200v-60h171l154-220-154-220H180v180h-60v-240h522l198 280-198 280H440Zm33-280ZM200-160v-120H80v-60h120v-120h60v120h120v60H260v120h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
