import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-backspace-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBackspaceFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.68 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.520.7L0.24 7.35a1 1 0 0 0 0 1.3l4.84 5.65A2 2 0 0 0 6.6 15h7.08a2 2 0 0 0 2-2zM5.83 5.85a0.50.5 0 1 1 0.71-0.71l2.15 2.15 2.15-2.15a0.50.5 0 1 1 0.710.71L9.39 8l2.15 2.15a0.50.5 0 0 1-0.710.71L8.68 8.71l-2.15 2.15a0.50.5 0 0 1-0.71-0.71L7.98 8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBackspaceFill;
