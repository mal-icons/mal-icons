import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-nest-sunblock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssNestSunblock {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-680v-120h60v120H80Zm0 520v-120h60v120H80Zm203-440-43-43 85-85 43 43-85 85Zm42 368-85-85 43-43 85 85-43 43Zm-5-218v-60h270l-88-117 48-36 160 213H320Zm460 250v-560h100v560H780ZM80-330v-60q38 0 64-26.5t26-63.5q0-38-26-64t-64-26v-60q63 0 106.5 43.5T230-480q0 62-43.5 106T80-330Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssNestSunblock;
