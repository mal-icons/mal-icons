<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M452-80v-220h60v80h328v60H512v80h-60Zm-332-80v-60h272v60H120Zm144-240h67l45-124h209l45 124h66L512-880h-65L264-400Zm133-179 82-230h2l82 230H397Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
