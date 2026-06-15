import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-workspace-untrusted",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscWorkspaceUntrusted {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.86 6.15L8 7.29L9.15 6.15C9.32 5.97 9.59 5.95 9.79 6.09L9.86 6.15C10.03 6.32 10.05 6.59 9.91 6.78L9.86 6.85L8.71 8L9.85 9.15C10.03 9.32 10.05 9.59 9.91 9.78L9.85 9.85C9.68 10.03 9.41 10.05 9.22 9.91L9.15 9.85L8 8.71L6.85 9.85C6.68 10.03 6.41 10.05 6.22 9.91L6.15 9.85C5.97 9.68 5.95 9.41 6.09 9.22L6.15 9.15L7.29 8L6.15 6.85C5.97 6.68 5.96 6.41 6.09 6.22L6.15 6.15C6.32 5.97 6.59 5.95 6.79 6.09L6.86 6.15ZM14 3.6V7.2C14 11.06 12.03 13.69 8.19 14.97C8.13 14.99 8.06 15 8 15C7.94 15 7.87 14.99 7.81 14.97C3.97 13.69 2 11.06 2 7.2V3.6C2 3.27 2.27 3 2.6 3C4.43 3 6.09 2.67 7.58 1.18C7.69 1.06 7.85 1 8 1C8.15 1 8.31 1.06 8.43 1.18C9.91 2.67 11.56 3 13.4 3C13.73 3 14 3.27 14 3.6ZM13 4C11.42 3.96 9.65 3.65 8 2.15C6.35 3.65 4.58 3.96 3 4V7.2C3 10.6 4.64 12.82 8 13.98C11.36 12.82 13 10.6 13 7.2V4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscWorkspaceUntrusted;
