import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-brightness-half",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxBrightnessHalf {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.71 11.29-2-2L19 8.59V6a1 1 0 0 0-1-1h-2.59l-0.71-0.71-2-2a11 0 0 0-1.41 0l-2 2L8.59 5H6a1 1 0 0 0-1 1v2.59l-0.710.71-2 2a11 0 0 0 0 1.41l2 2 0.710.71V18a1 1 0 0 0 1 1h2.59l0.710.71 2 2a11 0 0 0 1.41 0l2-2 0.71-0.71H18a1 1 0 0 0 1-1v-2.59l0.71-0.71 2-2a11 0 0 0 0-1.41zm-4.41 3-0.290.29V17h-2.41l-0.290.29-1 1L12 19.59l-1.29-1.29-1-1L9.41 17H7v-2.41l-0.29-0.29-1-1L4.41 12l1.29-1.29 1-1L7 9.41V7h2.41l0.29-0.29 1-1L12 4.41l1.29 1.29 1 1 0.290.29H17v2.41l0.290.29 1 1L19.59 12l-1.29 1.29-1 1z"}],["path",{"d":"M12 8v8c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxBrightnessHalf;
