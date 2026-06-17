import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-check2-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCheck2Circle {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.5 8a5.5 5.5 0 0 1 8.25-4.760.50.5 0 0 0 0.5-0.87A6.5 6.5 0 1 0 14.5 8a0.50.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"}],["path",{"d":"M15.35 3.35a0.50.5 0 0 0-0.71-0.71L8 9.29 5.35 6.65a0.50.5 0 1 0-0.710.71l3 3a0.50.5 0 0 0 0.71 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCheck2Circle;
