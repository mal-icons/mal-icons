<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M726-451H460v151h-60v-211h326l-82-81 42-42 153 153-153 153-42-42 82-81ZM200-40v-880h560v206h-60v-56H260v580h440v-56h60v206H200Zm60-90v30h440v-30H260Zm0-700h440v-30H260v30Zm0 0v-30 30Zm0 700v30-30Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
