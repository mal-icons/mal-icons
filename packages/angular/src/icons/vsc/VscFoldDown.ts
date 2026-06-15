import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-fold-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscFoldDown {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.15 7.15C12.34 6.95 12.66 6.95 12.85 7.15C13.05 7.34 13.05 7.66 12.85 7.85L8.35 12.35C8.16 12.55 7.84 12.55 7.65 12.35L3.15 7.85C2.95 7.66 2.95 7.34 3.15 7.15C3.34 6.95 3.66 6.95 3.85 7.15L8 11.29L12.15 7.15ZM12.15 3.15C12.34 2.95 12.66 2.95 12.85 3.15C13.05 3.34 13.05 3.66 12.85 3.85L8.35 8.35C8.16 8.55 7.84 8.55 7.65 8.35L3.15 3.85C2.95 3.66 2.95 3.34 3.15 3.15C3.34 2.95 3.66 2.95 3.85 3.15L8 7.29L12.15 3.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscFoldDown;
