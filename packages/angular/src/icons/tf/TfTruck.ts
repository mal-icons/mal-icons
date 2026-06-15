import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-truck",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfTruck {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 3h-11v3h-2.87l-1.19 4h-1.94v4.98h2c0 0.010 0.020 0.02 0 1.1 0.9 2 2 2s2-0.9 2-2c0-0.010-0.010-0.02h5.01c0 0.010 0.020 0.02 0 1.1 0.9 2 2 2s2-0.9 2-2c0-0.010-0.010-0.02h2v-11.98zM3.87 7h2.13v3h-3.02l0.89-3zM4 16c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zM13 16c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zM16 13.98h-1.29c-0.35-0.58-0.98-0.98-1.71-0.98s-1.36 0.4-1.71 0.98h-5.58c-0.35-0.58-0.98-0.98-1.71-0.98s-1.36 0.4-1.71 0.98h-1.29v-2.98h6v-7h9v9.98z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfTruck;
