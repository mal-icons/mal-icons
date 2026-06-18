import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-ifttt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiIfttt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 8.82h2.02v6.36H0zm11.57 0h-3.47v2.02h1.45v4.34h2.02v-4.34h1.45V8.82zm5.49 0h-3.47v2.02h1.45v4.34h2.02v-4.34h1.45V8.82zm5.49 0h-3.47v2.02h1.45v4.34h2.02v-4.34H24V8.82zM7.52 10.84V8.82H2.89v6.36h2.02v-1.73H6.65v-2.02H4.92v-0.58z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiIfttt;
