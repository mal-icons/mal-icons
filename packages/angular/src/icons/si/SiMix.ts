import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-mix",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMix {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0v21.61c0 1.32 1.07 2.39 2.4 2.39a2.4 2.4 0 0 0 2.4-2.39V8.54c0 0.0100.03-0.010.04V6.36a2.4 2.4 0 0 1 2.4-2.39 2.4 2.4 0 0 1 2.4 2.39v9.36a2.39 2.39 0 0 0 2.4 2.39 2.39 2.39 0 0 0 2.4-2.39v-3.69a2.4 2.4 0 0 1 2.38-2.08 2.4 2.4 0 0 1 2.41 2.39v1.21a2.4 2.4 0 0 0 2.41 2.39 2.4 2.4 0 0 0 2.41-2.39V0.01a4.61 4.61 0 0 0-0.140c-1.31 0-2.560.26-3.690.74A9.45 9.45 0 0 1 23.84 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMix;
