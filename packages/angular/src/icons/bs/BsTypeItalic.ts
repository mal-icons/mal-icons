import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-type-italic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTypeItalic {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.99 11.67 9.53 4.46c0.12-0.590.25-0.71 1.35-0.81l0.11-0.52H7.21l-0.110.52c1.060.1 1.130.21 10.81L6.57 11.67c-0.120.6-0.250.71-1.350.81l-0.110.52h3.77l0.11-0.52c-1.06-0.09-1.13-0.21-1.01-0.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTypeItalic;
