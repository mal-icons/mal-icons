import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-folder-active",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscFolderActive {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11.5 7C13.99 7 16 9.01 16 11.5C16 13.99 13.99 16 11.5 16C9.01 16 7 13.99 7 11.5C7 9.01 9.01 7 11.5 7ZM13.85 10.15C13.66 9.95 13.34 9.95 13.15 10.15L11 12.29L9.85 11.15C9.66 10.95 9.34 10.95 9.15 11.15C8.95 11.34 8.95 11.66 9.15 11.85L10.65 13.35C10.84 13.55 11.16 13.55 11.35 13.35L13.85 10.85C14.05 10.66 14.05 10.34 13.85 10.15Z"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5.59 2C5.98 2 6.37 2.16 6.65 2.44L8.21 4H12.5C13.88 4 15 5.12 15 6.5V7.26C14.69 7 14.36 6.78 14 6.6V6.5C14 5.67 13.33 5 12.5 5H8.21L6.65 6.56C6.37 6.84 5.98 7 5.59 7H2V11.5C2 12.33 2.67 13 3.5 13H6.21C6.31 13.35 6.44 13.68 6.6 14H3.5C2.12 14 1 12.88 1 11.5V4.5C1 3.12 2.12 2 3.5 2H5.59ZM3.5 3C2.67 3 2 3.67 2 4.5V6H5.59C5.72 6 5.85 5.95 5.94 5.85L7.29 4.5L5.94 3.15C5.85 3.05 5.72 3 5.59 3H3.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscFolderActive;
