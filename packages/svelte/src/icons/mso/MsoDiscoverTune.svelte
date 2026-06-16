<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M520-590v-60h130v-190h60v190h130v60H520Zm130 470v-410h60v410h-60Zm-400 0v-180H120v-60h320v60H310v180h-60Zm0-300v-420h60v420h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
