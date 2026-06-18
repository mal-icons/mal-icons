import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-autoprefixer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAutoprefixer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.87 21.05h2.92l0.96-3.07h4.5l0.95 3.07h2.92L11.94 2.96l-6.07 18.09zm6.16-10.12 1.54 4.92h-3.15l1.55-4.92h0.06zM24 17.62l-0.38-1.18-6.27-0.590.73 2.13 5.91-0.35zM6.64 15.84l-6.270.59L0 17.62l5.910.360.73-2.13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAutoprefixer;
