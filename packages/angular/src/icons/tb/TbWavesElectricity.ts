import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-waves-electricity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbWavesElectricity {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 12c0.58 -0.64 1.51 -1.02 2.5 -1c0.99 -0.02 1.92 0.36 2.5 1c0.58 0.64 1.51 1.02 2.5 1c0.99 0.02 1.92 -0.36 2.5 -1"}],["path",{"d":"M3 16c0.58 -0.64 1.51 -1.02 2.5 -1c0.99 -0.02 1.92 0.36 2.5 1c0.58 0.64 1.51 1.02 2.5 1c0.99 0.02 1.92 -0.36 2.5 -1"}],["path",{"d":"M3 8c0.58 -0.64 1.51 -1.02 2.5 -1c0.99 -0.02 1.92 0.36 2.5 1c0.58 0.64 1.51 1.02 2.5 1c0.99 0.02 1.92 -0.36 2.5 -1"}],["path",{"d":"M20 7l-3 5h4l-3 5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbWavesElectricity;
