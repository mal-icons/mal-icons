import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-loop-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcLoop24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.11 5.6a9 9 0 0 1 12.73 0 0.750.75 0 1 1-1.06 1.06 7.5 7.5 0 0 0-10.61 0 7.5 7.5 0 0 0 0 10.61 7.5 7.5 0 0 0 10.61 0l5.82-5.82H17.3a0.750.75 0 0 1 0-1.5h4.75a1 1 0 0 1 1 1v4.75a0.750.75 0 1 1-1.5 0v-3.08l-5.71 5.71A9 9 0 0 1 3.11 5.6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcLoop24;
