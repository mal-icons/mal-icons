<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M422-40v-80H120v-720h302v-80h60v880h-60ZM180-222h242v-277L180-222Zm362 102v-375l238 273v-558H542v-60h298v720H542Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
