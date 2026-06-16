import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-weekend",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrWeekend {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 10c-1.1 0-2 0.9-2 2v3H5v-3c0-1.1-0.9-2-2-2s-2 0.9-2 2v5c0 1.10.9 2 2 2h18c1.1 0 2-0.9 2-2v-5c0-1.1-0.9-2-2-2zm-3-5H6c-1.1 0-2 0.9-2 2v2.15c1.160.41 2 1.51 2 2.82V14h12v-2.03c0-1.30.84-2.4 2-2.82V7c0-1.1-0.9-2-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrWeekend;
