import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-arrow-90deg-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsArrow90degDown {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M4.85 14.85a0.50.5 0 0 1-0.71 0l-4-4a0.50.5 0 0 1 0.71-0.71L4 13.29V3.5A2.5 2.5 0 0 1 6.5 1h8a0.50.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.79l3.15-3.15a0.50.5 0 0 1 0.710.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsArrow90degDown;
