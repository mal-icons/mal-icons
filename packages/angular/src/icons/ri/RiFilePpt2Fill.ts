import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-file-ppt-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFilePpt2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 3H21C21.55 3 22 3.45 22 4V20C22 20.55 21.55 21 21 21H17V3ZM2.86 2.88L15.43 1.08C15.7 1.04 15.96 1.23 16 1.51C16 1.53 16 1.55 16 1.58V22.42C16 22.7 15.78 22.92 15.5 22.92C15.48 22.92 15.45 22.92 15.43 22.92L2.86 21.12C2.37 21.05 2 20.63 2 20.13V3.87C2 3.37 2.37 2.95 2.86 2.88ZM5 8V16H7V14H13V8H5ZM7 10H11V12H7V10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFilePpt2Fill;
