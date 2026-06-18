import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-groupme",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGroupme {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.16 6.57H12.84V8.17H11.16V6.57ZM18.2 0H5.8C3.15 0 1 2.04 1 4.56V16.32C1 18.84 3.15 20.88 5.8 20.88H9.93L11.98 24L14.03 20.88H18.2C20.85 20.88 23 18.84 23 16.32V4.56C23 2.04 20.85 0 18.2 0ZM7.57 8.17H9.35V6.57H7.57V4.85H9.35V3.17H11.16V4.85H12.84V3.17H14.65V4.85H16.43V6.57H14.65V8.17H16.43V9.89H14.65V11.58H12.84V9.89H11.16V11.58H9.35V9.89H7.57V8.17ZM20.31 13.43C20.31 13.43 17.92 17.71 12.24 17.71C12.16 17.71 12.08 17.71 12.01 17.71C11.93 17.71 11.85 17.71 11.77 17.71C6.09 17.71 3.7 13.43 3.7 13.43C3.7 13.43 3.55 13.15 3.55 12.85C3.54 12.64 3.65 12.33 3.94 12.14C4.11 12.04 4.26 11.99 4.4 11.98C5.09 11.91 5.48 12.33 5.81 12.81C6.17 13.34 8.24 15.68 12.01 15.77C15.77 15.68 17.85 13.34 18.21 12.81C18.53 12.33 18.94 11.91 19.61 11.98C19.76 11.99 19.91 12.04 20.07 12.14C20.37 12.33 20.48 12.58 20.47 12.85C20.45 13.25 20.31 13.43 20.31 13.43Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGroupme;
