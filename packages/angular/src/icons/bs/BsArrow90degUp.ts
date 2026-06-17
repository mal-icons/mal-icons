import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-arrow-90deg-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsArrow90degUp {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M4.85 1.15a0.50.5 0 0 0-0.71 0l-4 4a0.50.5 0 1 0 0.710.71L4 2.71V12.5A2.5 2.5 0 0 0 6.5 15h8a0.50.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.71l3.15 3.15a0.50.5 0 1 0 0.71-0.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsArrow90degUp;
