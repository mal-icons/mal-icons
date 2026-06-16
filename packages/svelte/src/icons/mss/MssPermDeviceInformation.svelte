<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M450-298v-256h60v256h-60Zm30.02-300Q466-598 456.5-607.48q-9.5-9.48-9.5-23.5 0-14.02 9.2-23.52T479-664q14.45 0 24.23 9.48 9.78 9.48 9.78 23.5 0 14.02-9.48 23.52-9.48 9.5-23.5 9.5ZM200-40v-880h560v880H200Zm60-90v30h440v-30H260Zm0-60h440v-580H260v580Zm0-640h440v-30H260v30Zm0 0v-30 30Zm0 700v30-30Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
