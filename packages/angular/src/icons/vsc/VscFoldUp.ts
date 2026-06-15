import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-fold-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscFoldUp {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.85 8.35C3.66 8.55 3.34 8.55 3.15 8.35C2.95 8.16 2.95 7.84 3.15 7.65L7.65 3.15C7.84 2.95 8.16 2.95 8.35 3.15L12.85 7.65C13.05 7.84 13.05 8.16 12.85 8.35C12.66 8.55 12.34 8.55 12.15 8.35L8 4.21L3.85 8.35ZM3.85 12.35C3.66 12.55 3.34 12.55 3.15 12.35C2.95 12.16 2.95 11.84 3.15 11.65L7.65 7.15C7.84 6.95 8.16 6.95 8.35 7.15L12.85 11.65C13.05 11.84 13.05 12.16 12.85 12.35C12.66 12.55 12.34 12.55 12.15 12.35L8 8.21L3.85 12.35Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscFoldUp;
