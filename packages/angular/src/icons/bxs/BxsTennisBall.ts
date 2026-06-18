import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-tennis-ball",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsTennisBall {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.93 19.07a9.95 9.95 0 0 0 6.69 2.91c-0.46-2.770.37-5.72 2.5-7.86 2.14-2.13 5.08-2.96 7.86-2.5-0.09-2.43-1.05-4.84-2.91-6.69s-4.26-2.81-6.69-2.91c0.46 2.77-0.36 5.72-2.5 7.86-2.14 2.13-5.08 2.96-7.86 2.5a9.94 9.94 0 0 0 2.91 6.69z"}],["path",{"d":"M15.54 15.54a7 7 0 0 0-1.91 6.32 9.93 9.93 0 0 0 8.23-8.23 7 7 0 0 0-6.32 1.91zm-7.07-7.07a7 7 0 0 0 1.91-6.32 9.93 9.93 0 0 0-8.23 8.23 7 7 0 0 0 6.32-1.91z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsTennisBall;
