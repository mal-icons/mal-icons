import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-developer-mode",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDeveloperMode {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M344-296 160-480l184-184 42 44-140 140 140 140-42 44Zm-144 30h60v76h440v-76h60v226H200v-226Zm60-440h-60v-214h560v214h-60v-64H260v64Zm0 576v30h440v-30H260Zm0-700h440v-30H260v30Zm356 534-42-44 140-140-140-140 42-44 184 184-184 184ZM260-830v-30 30Zm0 700v30-30Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDeveloperMode;
