import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-golf-course",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrGolfCourse {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"19.5","cy":"19.5","r":"1.5"}],["path",{"d":"M11 18.03V8.98l4.22-2.15c0.73-0.370.73-1.43-0.01-1.79l-4.76-2.33C9.78 2.38 9 2.86 9 3.6V19c0 0.55-0.45 1-1 1s-1-0.45-1-1v-0.73c-1.790.35-3 0.99-3 1.73 0 1.1 2.69 2 6 2s6-0.9 6-2c0-0.99-2.16-1.81-5-1.97z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrGolfCourse;
