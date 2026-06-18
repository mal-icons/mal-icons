import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-castorama",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCastorama {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.91 16.11c-2.13 0-3.66-1.79-3.66-4.27 0-2.15 1.47-4.09 3.49-4.09 2.28 0 3.55 1.86 3.55 1.86l2.94-3.3c-0.91-1.06-2.6-2.88-6.5-2.88-4.39 0-8.21 3.49-8.21 8.46 0 4.77 3.48 8.53 8.27 8.53 3.86 0 5.57-2.02 6.54-3.13l-2.83-2.97c0 0-1.41 1.79-3.58 1.79zM18.28 0v9.99h-2.06a1.92 1.92 0 1 0 0 3.84h2.06V24h5.21V0h-5.2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCastorama;
