import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-cloud-download",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscCloudDownload {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.5 7C9.02 7 7 9.02 7 11.5C7 13.99 9.02 16 11.5 16C13.99 16 16 13.99 16 11.5C16 9.02 13.99 7 11.5 7ZM13.85 11.85L11.85 13.85C11.81 13.9 11.75 13.94 11.69 13.96C11.63 13.99 11.57 14 11.5 14H11.5C11.43 14 11.37 13.99 11.31 13.96C11.25 13.94 11.2 13.9 11.15 13.86L11.15 13.85L9.15 11.85C8.95 11.66 8.95 11.34 9.15 11.15C9.34 10.95 9.66 10.95 9.85 11.15L11 12.29V9C11 8.73 11.22 8.5 11.5 8.5C11.78 8.5 12 8.73 12 9V12.29L13.15 11.15C13.34 10.95 13.66 10.95 13.85 11.15C14.05 11.34 14.05 11.66 13.85 11.85H13.85ZM4.25 12H6V13H4.25C2.46 13 1 11.55 1 9.75C1 8.03 2.34 6.62 4.03 6.51C4.27 4.53 5.96 3 8 3C9.86 3 11.41 4.28 11.86 6H10.81C10.4 4.84 9.3 4 8 4C6.34 4 5 5.34 5 7C5 7.28 4.78 7.5 4.5 7.5H4.25C3.01 7.5 2 8.51 2 9.75C2 10.99 3.01 12 4.25 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscCloudDownload;
