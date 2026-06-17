import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-diamond-half",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsDiamondHalf {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.050.44c-0.58-0.58-1.52-0.58-2.1 0L0.44 6.95c-0.580.58-0.58 1.52 0 2.1l6.52 6.52c0.580.58 1.520.58 2.1 0l6.52-6.52c0.58-0.580.58-1.52 0-2.1zM8 0.99c0.13 0 0.250.050.350.14l6.52 6.52a0.50.5 0 0 1 0 0.7L8.35 14.87a0.50.5 0 0 1-0.350.14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsDiamondHalf;
