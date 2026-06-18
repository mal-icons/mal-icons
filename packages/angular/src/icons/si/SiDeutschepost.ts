import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-deutschepost",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDeutschepost {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.06 18.22 7.84 21.47H4.65l3.22-3.25zm-4.3 0L3.54 21.47H0.35l3.22-3.25zm8.23 0 3.22 3.25h-3.19l-3.22-3.25zm4.3 0 3.22 3.25h-3.19l-3.22-3.25zM10.47 2.53c3.770 6.88 2.74 6.87 6.680.55-1.50.94-3.79 1.02-5.39L24 5.22c-0.45 6.62-5.43 12.42-12.81 12.42C2.83 17.64-0.4 10.390.04 4.9l2.45-0.78c-0.4 3.130.57 5.38 1.24 6.41-0.79-4.42 2.55-8 6.74-8m0.01 2.3a4.52 4.52 0 0 0-4.52 4.51 4.52 4.52 0 0 0 4.52 4.51 4.52 4.52 0 0 0 4.53-4.51 4.52 4.52 0 0 0-4.53-4.51"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDeutschepost;
