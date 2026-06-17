import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-clouds-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCloudsFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.47 9a4.5 4.5 0 0 0-8.72-0.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-0.03-5"}],["path",{"d":"M14.54 9.77a3.5 3.5 0 0 0-2.22-1.68 5.5 5.5 0 0 0-6.34-4 4 4 0 0 1 7.390.91 2.5 2.5 0 0 1 1.17 4.77z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCloudsFill;
