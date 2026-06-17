import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-hurricane",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsHurricane {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 2.6A5.5 5.5 0 0 1 15 7.5a0.50.5 0 0 0 1 0 6.5 6.5 0 1 0-13 0 5 5 0 0 0 6 4.9A5.5 5.5 0 0 1 1 7.5a0.50.5 0 0 0-1 0 6.5 6.5 0 1 0 13 0 5 5 0 0 0-6-4.9M10 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsHurricane;
