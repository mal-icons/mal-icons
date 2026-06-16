<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M90-120v-720h720v120h60v60h-60v150h60v60h-60v150h60v60h-60v120H90Zm60-60h600v-600H150v600Zm60-60h253v-200H210v200Zm283-336h197v-144H493v144ZM210-470h253v-250H210v250Zm283 230h197v-306H493v306Zm-343 60v-600 600Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
