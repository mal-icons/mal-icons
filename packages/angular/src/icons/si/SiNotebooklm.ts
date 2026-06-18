import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-notebooklm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiNotebooklm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3.2C5.37 3.2 0 8.53 0 15.1V20.8h2.21v-0.57c0-2.67 2.18-4.83 4.87-4.83 2.69 0 4.87 2.16 4.87 4.83v0.57h2.21v-0.57c0-3.88-3.17-7.02-7.08-7.02A7.08 7.08 0 0 0 2.99 14.5a7.36 7.36 0 0 1 6.57-4.02c4.06 0 7.35 3.26 7.35 7.29V20.8h2.21V17.77c0-5.23-4.28-9.48-9.56-9.48a9.56 9.56 0 0 0-6.22 2.28A9.8 9.8 0 0 1 12 5.39c5.41 0 9.79 4.35 9.79 9.71V20.8H24V15.1c0-6.57-5.37-11.9-12-11.9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiNotebooklm;
