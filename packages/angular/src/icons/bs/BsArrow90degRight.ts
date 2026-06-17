import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-arrow-90deg-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsArrow90degRight {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M14.85 4.85a0.50.5 0 0 0 0-0.71l-4-4a0.50.5 0 0 0-0.710.71L13.29 4H3.5A2.5 2.5 0 0 0 1 6.5v8a0.50.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.79l-3.15 3.15a0.50.5 0 0 0 0.710.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsArrow90degRight;
