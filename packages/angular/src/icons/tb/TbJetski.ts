import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-jetski",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbJetski {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 5h1.4a1 1 0 0 1 0.88 0.53l1.72 3.22"}],["path",{"d":"M3.49 16.94l0.14 0.55a2 2 0 0 0 1.94 1.52h7.44a10 10 0 0 0 8 -4c0 -6 -5 -8 -5 -8c-1.89 2.52 -5.85 4 -9 4h-2a2 2 0 0 0 -2 2c0 1.33 0.16 2.65 0.49 3.94"}],["path",{"d":"M3.25 15h17.75"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbJetski;
