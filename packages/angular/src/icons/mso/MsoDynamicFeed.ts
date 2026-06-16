import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-dynamic-feed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDynamicFeed {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-120q-24 0-42-18t-18-42v-371h60v371h452v60H140Zm121-120q-24 0-42.5-18T200-300v-371h60v371h453v60H261Zm119-120q-24 0-42-18t-18-42v-360q0-24 18-42t42-18h440q24 0 42 18t18 42v360q0 24-18 42t-42 18H380Zm0-60h440v-298H380v298Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDynamicFeed;
