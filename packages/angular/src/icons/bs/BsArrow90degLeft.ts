import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-arrow-90deg-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsArrow90degLeft {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M1.15 4.85a0.50.5 0 0 1 0-0.71l4-4a0.50.5 0 1 1 0.710.71L2.71 4H12.5A2.5 2.5 0 0 1 15 6.5v8a0.50.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.71l3.15 3.15a0.50.5 0 1 1-0.710.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsArrow90degLeft;
