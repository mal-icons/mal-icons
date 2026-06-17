import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-envelope-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEnvelopeFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.05 3.56A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.56L8 8.41zM0 4.7v7.1l5.8-3.56zM6.76 8.83l-6.57 4.03A2 2 0 0 0 2 14h12a2 2 0 0 0 1.81-1.14l-6.57-4.03L8 9.59zm3.44-0.59L16 11.8V4.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEnvelopeFill;
