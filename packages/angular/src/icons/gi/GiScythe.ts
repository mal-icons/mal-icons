import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-scythe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiScythe {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M296.63 25.41c-63.790.39-135.81 14.68-206.03 32.84-3.47 34.08 2.23 68.91 14.03 104.25C181.18 75.94 393.65 44.83 486.72 128 456.02 50.47 384.05 24.87 296.62 25.41zM65.66 61.44L27.91 71c5.64 78.02 28.55 132.39 60.44 174.47-16.54 10.35-40.69 19.67-68.78 26.84 5.66 6.6 14.25 16.18 30.53 18.53 24.85-4.33 39.91-14.98 53.75-26.59 76.24 85.15 190.22 118.96 253.13 224.22l49.44-0.13C291 275.32 81.01 364.8 65.66 61.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiScythe;
