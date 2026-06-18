import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-phosphoricons",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPhosphoricons {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.40H3.87a0.620.62 0 0 0-0.620.62v15.17A8.22 8.22 0 0 0 11.45 24a0.620.62 0 0 0 0.62-0.62v-6.97h0.33a8.2 8.2 0 0 0 7.72-5.03 8.22 8.22 0 0 0 0-6.35A8.21 8.21 0 0 0 12.40h0.01Zm-1.58 22.74a6.98 6.98 0 0 1-6.32-6.32h6.32v6.32Zm0-9.56L4.87 1.24h5.97l-0.01 11.94Zm1.58 2h-0.33V1.24h0.33a6.98 6.98 0 0 1 5.02 1.99 6.99 6.99 0 0 1 1.55 2.28 6.99 6.99 0 0 1 0 5.4 6.98 6.98 0 0 1-6.56 4.27Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPhosphoricons;
