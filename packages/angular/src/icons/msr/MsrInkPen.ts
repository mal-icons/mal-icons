import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-ink-pen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrInkPen {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m480-522 42 42 249-249-42-42-249 249ZM180-180h42l258-258-42-42-258 258v42Zm362-238L418-542l198-198-30-30-213 213q-9 9-21 8.5t-21-9.5q-9-9-9-21.5t9-21.5l206-206q25-25 49.5-25.5T637-807l23 23 45-45q11-11 25-11t25 11l73 73q11 11 11 26t-11 26L542-418ZM150-120q-13 0-21.5-8.5T120-150v-69q0-12 5-23.5t13-19.5l280-280 124 124-280 280q-8 8-19.5 13t-23.5 5h-69Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrInkPen;
