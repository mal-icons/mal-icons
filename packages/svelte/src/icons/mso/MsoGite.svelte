<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-200v-366l154-154h60v-80h60v80h372l154 154v366H80Zm560-60h180v-281l-90-90-90 90v281Zm-500 0h440v-240H140v240Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
