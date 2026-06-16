import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-golf-course",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtGolfCourse {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"19.5","cy":"19.5","r":"1.5","opacity":".3"}],["path",{"d":"M17 5.92 9 2v18H7v-1.73c-1.790.35-3 0.99-3 1.73 0 1.1 2.69 2 6 2s6-0.9 6-2c0-0.99-2.16-1.81-5-1.97V8.98l6-3.06z","opacity":".3"}],["circle",{"cx":"19.5","cy":"19.5","r":"1.5"}],["path",{"d":"M17 5.92 9 2v18H7v-1.73c-1.790.35-3 0.99-3 1.73 0 1.1 2.69 2 6 2s6-0.9 6-2c0-0.99-2.16-1.81-5-1.97V8.98l6-3.06z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtGolfCourse;
