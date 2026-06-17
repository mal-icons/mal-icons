import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-suit-diamond",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSuitDiamond {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.38 1.23a0.460.46 0 0 0-0.77 0l-4.56 6.47a0.540.54 0 0 0 0 0.61l4.56 6.47a0.460.46 0 0 0 0.77 0l4.56-6.47a0.540.54 0 0 0 0-0.61zM6.850.61a1.39 1.39 0 0 1 2.3 0l4.56 6.47a1.61 1.61 0 0 1 0 1.84l-4.56 6.47a1.39 1.39 0 0 1-2.3 0L2.29 8.92a1.61 1.61 0 0 1 0-1.84z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSuitDiamond;
