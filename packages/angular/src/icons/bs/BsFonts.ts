import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-fonts",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFonts {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.26 3h-8.51l-0.08 2.46h0.48c0.26-1.540.76-1.78 2.69-1.84l0.42-0.01v7.83c0 0.66-0.140.82-1.30.92v0.52h4.08v-0.52c-1.16-0.1-1.31-0.26-1.31-0.92V3.6l0.430.01c1.930.06 2.430.3 2.69 1.85h0.48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFonts;
