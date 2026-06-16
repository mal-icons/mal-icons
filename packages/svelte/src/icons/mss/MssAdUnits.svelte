<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M316-680v-60h328v60H316ZM200-40v-880h560v880H200Zm60-90v30h440v-30H260Zm0-60h440v-580H260v580Zm0-640h440v-30H260v30Zm0 0v-30 30Zm0 700v30-30Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
