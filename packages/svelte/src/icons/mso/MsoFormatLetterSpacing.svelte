<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M307-80 161-226l146-145 42 42-74 73h410l-72-73 42-42 145 145L654-80l-42-42 74-74H276l72 74-41 42ZM200-480v-400h60v400h-60Zm250 0v-400h60v400h-60Zm250 0v-400h60v400h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
