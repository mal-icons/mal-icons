import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-vueuse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiVueuse {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.880v12.87C0.88 19.02 5.86 24 12 24s11.12-4.98 11.12-11.13V0h-9.22v12.87c0 2.54-3.81 2.54-3.81 0V0Zm4.61 1h3.61v11.87C9.09 14.56 10.35 15.79 12 15.79s2.91-1.24 2.91-2.92V1h3.61v11.87a6.52 6.52 0 0 1-13.03 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiVueuse;
