import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-do-disturb-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsDoDisturbOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 11v2h-0.88l4.33 4.33A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10a9.9 9.9 0 0 0-5.33 1.55L14.12 11H17zM2.41 2.13 1 3.54l2.78 2.78A9.92 9.92 0 0 0 2 12c0 5.52 4.48 10 10 10 2.11 0 4.07-0.66 5.68-1.78L20.46 23l1.41-1.41L2.41 2.13zM7 13v-2h1.46l2 2H7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsDoDisturbOff;
