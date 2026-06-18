import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-brightness-half",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsBrightnessHalf {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.55 11.65 19 9.1V5.5a0.50.5 0 0 0-0.5-0.5h-3.6l-2.55-2.55a0.50.5 0 0 0-0.71 0L9.1 5H5.5a0.50.5 0 0 0-0.50.5v3.6l-2.55 2.55a0.50.5 0 0 0 0 0.71L5 14.9V18.5a0.50.5 0 0 0 0.50.5h3.6l2.55 2.55a0.50.5 0 0 0 0.71 0L14.9 19H18.5a0.50.5 0 0 0 0.5-0.5v-3.6l2.55-2.55a0.50.5 0 0 0 0-0.71zM12 8a4 4 0 0 1 0 8"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsBrightnessHalf;
