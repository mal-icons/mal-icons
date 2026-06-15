import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-target",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfTarget {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.02 8h-2.04c-0.24-3.19-2.81-5.74-6-5.98v-2.06h-1v2.07c-3.17 0.26-5.7 2.8-5.95 5.97h-2.04v1h2.05c0.24 3.18 2.77 5.72 5.95 5.97v2.03h1v-2.02c3.2-0.23 5.76-2.78 6-5.98h2.05v-1zM8.97 13.98v-1.98h-1v1.97c-2.62-0.25-4.71-2.35-4.95-4.97h1.96v-1h-1.95c0.24-2.62 2.33-4.72 4.95-4.97v1.94h1v-1.94c2.65 0.23 4.76 2.33 5 4.98h-1.95v1h1.96c-0.24 2.64-2.36 4.75-5 4.98z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfTarget;
