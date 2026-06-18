import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-docker",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandDocker {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 12.54c-1.8 -0.34 -2.7 -1.08 -3.52 -2.94c-0.49 0.7 -1.1 1.57 -0.92 2.4c0.03 0.24 -0.32 1 -0.56 1h-14c0 5.21 3.16 7 6.2 7c4.12 0.02 7.83 -1.38 9.85 -5c1.15 -0.1 2.3 -1.5 2.95 -2.46"}],["path",{"d":"M5 10h3v3h-3l0 -3"}],["path",{"d":"M8 10h3v3h-3l0 -3"}],["path",{"d":"M11 10h3v3h-3l0 -3"}],["path",{"d":"M8 7h3v3h-3l0 -3"}],["path",{"d":"M11 7h3v3h-3l0 -3"}],["path",{"d":"M11 4h3v3h-3l0 -3"}],["path",{"d":"M4.57 18c1.5 0 2.05 -0.07 2.96 -0.78"}],["path",{"d":"M10 16l0 0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandDocker;
