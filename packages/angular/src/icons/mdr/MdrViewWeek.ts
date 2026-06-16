import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-view-week",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrViewWeek {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.33 20H4c-1.1 0-2-0.9-2-2V6c0-1.10.9-2 2-2h1.33c1.1 0 2 0.9 2 2v12a2 2 0 0 1-2 2zM22 18V6c0-1.1-0.9-2-2-2h-1.33c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2H20a2 2 0 0 0 2-2zm-7.33 0V6c0-1.1-0.9-2-2-2h-1.33c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h1.33c1.1 0 2-0.9 2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrViewWeek;
