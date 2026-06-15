import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-layout-sidebar-right-dock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscLayoutSidebarRightDock {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.65 6.15C6.84 5.95 7.16 5.95 7.35 6.15L8.85 7.65L8.86 7.65C9.05 7.84 9.05 8.16 8.86 8.35L7.36 9.85C7.26 9.95 7.13 10 7 10C6.87 10 6.75 9.95 6.65 9.85C6.45 9.66 6.45 9.34 6.65 9.15L7.29 8.5H3.5C3.22 8.5 3 8.28 3 8C3 7.72 3.22 7.5 3.5 7.5H7.29L6.65 6.85C6.45 6.66 6.45 6.34 6.65 6.15Z"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12.5 1C13.88 1 15 2.12 15 3.5L15 12.5C15 13.88 13.88 15 12.5 15H3.5C2.12 15 1 13.88 1 12.5L1 3.5C1 2.12 2.12 1 3.5 1L12.5 1ZM3.5 2C2.67 2 2 2.67 2 3.5L2 12.5C2 13.33 2.67 14 3.5 14H10L10 2H3.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscLayoutSidebarRightDock;
