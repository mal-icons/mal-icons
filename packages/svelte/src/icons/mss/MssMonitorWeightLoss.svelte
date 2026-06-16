<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M600-230h320v60H600v-60Zm-420 50v-600 600Zm-60 60v-720h720v421h-60v-361H180v600h361v60H120Zm359.88-369Q529-489 563.5-523.38q34.5-34.38 34.5-83.5Q598-656 563.62-690.5q-34.38-34.5-83.5-34.5Q431-725 396.5-690.62q-34.5 34.38-34.5 83.5Q362-558 396.38-523.5q34.38 34.5 83.5 34.5ZM397-587v-40h40v40h-40Zm63 0v-40h40v40h-40Zm63 0v-40h40v40h-40Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
