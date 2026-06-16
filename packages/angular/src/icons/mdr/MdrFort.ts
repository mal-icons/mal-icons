import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-fort",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFort {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 4v1h-2V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v1h-2V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v2.17c0 0.530.21 1.040.59 1.41L15 9v1H9V9l1.41-1.41c0.38-0.380.59-0.890.59-1.42V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v1H7V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v1H3V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v2.17c0 0.530.21 1.040.59 1.42L3 9v6l-1.41 1.41c-0.380.38-0.590.89-0.59 1.42V19c0 1.10.9 2 2 2h7v-2.89c0-1 0.68-1.92 1.66-2.08A2 2 0 0 1 14 18v3h7c1.1 0 2-0.9 2-2v-1.17c0-0.53-0.21-1.04-0.59-1.41L21 15V9l1.41-1.41c0.38-0.380.59-0.890.59-1.42V4c0-0.55-0.45-1-1-1s-1 0.45-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFort;
